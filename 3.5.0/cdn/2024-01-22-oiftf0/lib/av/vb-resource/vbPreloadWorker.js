!(function() {
  var a,
    o,
    i,
    f,
    r,
    d,
    s = new Object(),
    l = new Object();
  (l.load = function() {
    return s;
  }),
    (l.save = function() {}),
    self.addEventListener('message', function(e) {
      e = e.data;
      if ('DOWNLOAD_JSON_FROM_MAIN_THREAD_OK' === e.command) {
        var t = e.data,
          e = e.type;
        if (!(i && f && r)) {
          if ('json' == e) {
            if (
              ((i = 1),
              (a = JSON.parse(t)),
              (s.modelTopology = a.modelTopology),
              (s.format = a.format),
              (s.generatedBy = a.generatedBy),
              (s.convertedBy = a.convertedBy),
              null != a.weightsManifest)
            )
              for (const n of a.weightsManifest) s.weightSpecs = n.weights;
            null != a.trainingConfig && (s.trainingConfig = a.trainingConfig),
              null != a.userDefinedMetadata &&
                (s.userDefinedMetadata = a.userDefinedMetadata);
          } else
            'bin' == e
              ? ((f = 1), (s.weightData = t))
              : 'js' == e && ((r = 1), (d = t));
          i &&
            f &&
            r &&
            (importScripts(d),
            tf.setBackend('webgl'),
            tf
              .loadGraphModel(l)
              .then(function(e) {
                o = e;
                (e = new Float32Array(110592)),
                  (e = tf.tensor4d(e, [1, 144, 256, 3], 'float32'));
                o.predict(e);
              })
              .catch(function(e) {
                console.log(e);
              }));
        }
      }
    });
})();
