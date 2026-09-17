const fs = require('node:fs');
const path = require('node:path');

const resourceHeaders = { 'Cross-Origin-Resource-Policy': 'cross-origin' };
const isolationHeaders = {
  ...resourceHeaders,
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
};

async function startServers({ https = false, open = true } = {}) {
  const { createServer } = await import('vite');
  const configFile = path.join(__dirname, 'vite.config.mjs');
  const meetingServer = await createServer({
    configFile,
    server: {
      port: 9998,
      strictPort: true,
      host: '0.0.0.0',
      headers: isolationHeaders,
      hmr: false,
    },
  });
  let mainServer;
  try {
    await meetingServer.listen();
    mainServer = await createServer({
      configFile,
      server: {
        port: 9999,
        strictPort: true,
        host: '0.0.0.0',
        open: open ? `${https ? 'https://localhost' : 'http://127.0.0.1'}:9999/` : false,
        https: https ? {
          cert: fs.readFileSync(path.join(__dirname, 'localhost.crt')),
          key: fs.readFileSync(path.join(__dirname, 'localhost.key')),
        } : undefined,
        headers: resourceHeaders,
        proxy: {
          '^/meeting\\.html(?:\\?|$)': { target: 'http://127.0.0.1:9998' },
        },
      },
    });
    await mainServer.listen();
    return [mainServer, meetingServer];
  } catch (error) {
    await Promise.all([meetingServer.close(), mainServer?.close()]);
    throw error;
  }
}

module.exports = { startServers };

if (require.main === module) {
  startServers({ https: process.argv.includes('--https') }).then(servers => {
    servers[0].printUrls();
    for (const signal of ['SIGINT', 'SIGTERM']) {
      process.once(signal, async () => {
        await Promise.all(servers.map(server => server.close()));
        process.exit(0);
      });
    }
  }).catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
