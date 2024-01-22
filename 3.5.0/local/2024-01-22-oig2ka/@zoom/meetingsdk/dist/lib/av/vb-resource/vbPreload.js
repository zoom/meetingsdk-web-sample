!(function(c) {
  var s, e, t, r;
  function n() {
    return (
      (function() {
        try {
          var n = navigator.userAgent.match(/Chrome\/(\d+)\./);
          return !!(n && 91 <= Number(n[1]));
        } catch (n) {
          return;
        }
      })() &&
      !/TESLA/.test(navigator.userAgent) &&
      2 < navigator.hardwareConcurrency &&
      'function' == typeof OffscreenCanvas
    );
  }
  function o(r, o) {
    return new Promise(function(n, e) {
      var t = new XMLHttpRequest();
      (t.responseType = o),
        t.addEventListener(
          'load',
          function() {
            n(this.response);
          },
          t
        ),
        (t.onerror = function(n) {
          e(n);
        }),
        t.open('get', r, !0),
        t.send();
    });
  }
  function a(n) {
    var e,
      t,
      r = new Uint8Array(n, 0, 12),
      o = n.slice(12, 496936),
      a = new Uint8Array(n, 496936, 32),
      n = new Uint8Array(n, 496968, 87253);
    s.postMessage({
      command: 'DOWNLOAD_JSON_FROM_MAIN_THREAD_OK',
      data: o,
      type: 'bin',
    }),
      (e = r),
      (t = n),
      c.crypto.subtle
        .importKey('raw', a, 'AES-GCM', !0, ['encrypt', 'decrypt'])
        .then(n => {
          c.crypto.subtle.decrypt({ name: 'AES-GCM', iv: e }, n, t).then(n => {
            n = new TextDecoder().decode(n);
            s.postMessage({
              command: 'DOWNLOAD_JSON_FROM_MAIN_THREAD_OK',
              data: n,
              type: 'json',
            });
          });
        });
  }
  function i() {
    var n = c.vbPath;
    n &&
      ((t = n + '/dualModel.bin'),
      (r = n + '/tf.min.js'),
      o((e = n + '/vbPreloadWorker.js'))
        .then(function(n) {
          (s = new Worker(
            c.URL.createObjectURL(new Blob(["wasmUrl = '" + e + "';" + n])),
            {}
          )),
            o(t, 'arraybuffer')
              .then(function(n) {
                a(n);
              })
              .catch(function(n) {
                console.log(n);
              }),
            s.postMessage({
              command: 'DOWNLOAD_JSON_FROM_MAIN_THREAD_OK',
              data: r,
              type: 'js',
            }),
            (s.onmessage = function(n) {
              n.data.command;
            });
        })
        .catch(function(n) {
          console.log(n);
        }));
  }
  n() && i();
})(window);
