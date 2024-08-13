/* eslint-disable @typescript-eslint/no-require-imports */
import ncp from "ncp";
import path from "path";
import { exec } from "child_process";
import { mkdirp } from "mkdirp";
import { rimrafSync } from "rimraf";
import targz from "targz";

// const { ncp } = require("ncp");
// const path = require("path");
// const { exec } = require("child_process");
// const { mkdirp } = require("mkdirp");
// const rimraf = require("rimraf");
// const targz = require("targz");

function asyncCopyTo(from, to) {
  return asyncMkDirP(path.dirname(to)).then(
    () =>
      new Promise((resolve, reject) => {
        ncp(from, to, (error) => {
          if (error) {
            // Wrap to have a useful stack trace.
            reject(new Error(error));
            return;
          }
          resolve();
        });
      }),
  );
}

function asyncExecuteCommand(command, cwd, options) {
  return new Promise((resolve, reject) => {
    if (cwd) {
      const options1 = options || {};
      exec(command, { cwd, ...options1 }, (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    } else {
      exec(command, (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    }
  });
}

function asyncExtractTar(options) {
  return new Promise((resolve, reject) => {
    targz.decompress(options, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

function asyncMkDirP(filepath) {
  return mkdirp(filepath);
}

function resolvePath(filepath) {
  if (filepath[0] === "~") {
    return path.join(process.env.HOME, filepath.slice(1));
  } else {
    return path.resolve(filepath);
  }
}

await rimrafSync("public/lib/*");

await asyncCopyTo(`node_modules/@zoom/meetingsdk/dist/lib/av`, "public/lib");
