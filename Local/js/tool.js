var testTool = {
  b64EncodeUnicode: function (str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(
        match,
        p1
      ) {
        return String.fromCharCode("0x" + p1);
      })
    );
  },
  b64DecodeUnicode: function (str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  },
  isMobileDevice: function () {
    return (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  },
  getMeetingConfig: function () {
    return {
      mn: parseInt(document.getElementById("meeting_number").value),
      name: testTool.b64EncodeUnicode(
        document.getElementById("display_name").value
      ),
      pwd: document.getElementById("meeting_pwd").value,
      role: parseInt(document.getElementById("meeting_role").value, 10),
      email: testTool.b64EncodeUnicode(
        document.getElementById("meeting_email").value
      ),
      lang: document.getElementById("meeting_lang").value,
      signature: "",
      china: document.getElementById("meeting_china").value,
    };
  },
  createZoomNode: function (id, url) {
    const zoomIframe = document.createElement("iframe");
    zoomIframe.id = id;
    zoomIframe.sandbox =
      "allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    zoomIframe.allow = "microphone; camera; fullscreen;";
    zoomIframe.src = url;
    zoomIframe.style = "";
    if (typeof document.body.append === "function") {
      document.body.append(zoomIframe);
    } else {
      document.body.appendChild(zoomIframe);
    }
  },
  getCurrentDomain: function () {
    return (
      window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port
    );
  },
  parseQuery: function () {
    return (function () {
      var href = window.location.href;
      var queryString = href.substr(href.indexOf("?"));
      var query = {};
      var pairs = (queryString[0] === "?"
        ? queryString.substr(1)
        : queryString
      ).split("&");
      for (var i = 0; i < pairs.length; i += 1) {
        var pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
      }
      return query;
    })();
  },
  serialize: function (obj) {
    // eslint-disable-next-line no-shadow
    var keyOrderArr = ["name", "mn", "email", "pwd", "role", "lang", "signature", "china"];

    Array.intersect = function () {
      var result = new Array();
      var obj = {};
      for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
          var str = arguments[i][j];
          if (!obj[str]) {
            obj[str] = 1;
          } else {
            obj[str]++;
            if (obj[str] == arguments.length) {
              result.push(str);
            }
          }
        }
      }
      return result;
    };

    if (!Array.prototype.includes) {
      Object.defineProperty(Array.prototype, "includes", {
        enumerable: false,
        value: function (obj) {
          var newArr = this.filter(function (el) {
            return el === obj;
          });
          return newArr.length > 0;
        },
      });
    }

    var tmpInterArr = Array.intersect(keyOrderArr, Object.keys(obj));
    var sortedObj = [];
    keyOrderArr.forEach(function (key) {
      if (tmpInterArr.includes(key)) {
        sortedObj.push([key, obj[key]]);
      }
    });
    Object.keys(obj)
      .sort()
      .forEach(function (key) {
        if (!tmpInterArr.includes(key)) {
          sortedObj.push([key, obj[key]]);
        }
      });
    var tmpSortResult = (function (sortedObj) {
      var str = [];
      for (var p in sortedObj) {
        if (typeof sortedObj[p][1] !== "undefined") {
          str.push(
            encodeURIComponent(sortedObj[p][0]) +
              "=" +
              encodeURIComponent(sortedObj[p][1])
          );
        }
      }
      return str.join("&");
    })(sortedObj);
    return tmpSortResult;
  },
  detectOS: function () {
    var sUserAgent = navigator.userAgent;
    var isWin =
      navigator.platform === "Win32" || navigator.platform === "Windows";
    var isMac =
      navigator.platform === "Mac68K" ||
      navigator.platform === "MacPPC" ||
      navigator.platform === "Macintosh" ||
      navigator.platform === "MacIntel";
    if (isMac) return "Mac";
    var isUnix = navigator.platform === "X11" && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = String(navigator.platform).indexOf("Linux") > -1;
    if (isLinux) return "Linux";
    if (isWin) {
      var isWin2K =
        sUserAgent.indexOf("Windows NT 5.0") > -1 ||
        sUserAgent.indexOf("Windows 2000") > -1;
      if (isWin2K) return "Win2000";
      var isWinXP =
        sUserAgent.indexOf("Windows NT 5.1") > -1 ||
        sUserAgent.indexOf("Windows XP") > -1;
      if (isWinXP) return "WinXP";
      var isWin2003 =
        sUserAgent.indexOf("Windows NT 5.2") > -1 ||
        sUserAgent.indexOf("Windows 2003") > -1;
      if (isWin2003) return "Win2003";
      var isWinVista =
        sUserAgent.indexOf("Windows NT 6.0") > -1 ||
        sUserAgent.indexOf("Windows Vista") > -1;
      if (isWinVista) return "WinVista";
      var isWin7 =
        sUserAgent.indexOf("Windows NT 6.1") > -1 ||
        sUserAgent.indexOf("Windows 7") > -1;
      if (isWin7) return "Win7";
      var isWin10 =
        sUserAgent.indexOf("Windows NT 10") > -1 ||
        sUserAgent.indexOf("Windows 10") > -1;
      if (isWin10) return "Win10";
    }
    return "other";
  },
  detectIE: function () {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return "IE" + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return "IE" + parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return (
        "Edge" + parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10)
      );
    }

    // other browser
    return false;
  },
  getBrowserInfo: function () {
    var agent = navigator.userAgent.toLowerCase();
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStrChrome2 = /ipad; cpu os (\d+_\d+)/gi;
    var regStr_saf = /version\/[\d.]+/gi;
    var regStr_saf2 = /safari\/[\d.]+/gi;
    var regStr_edg = /edg\/[\d.]+/gi;

    // firefox
    if (agent.indexOf("firefox") > 0) {
      return agent.match(regStr_ff);
    }

    // Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
      var tmpInfo = "safari/unknow";
      var tmpInfo2;
      tmpInfo = agent.match(regStr_saf);
      tmpInfo2 = agent.match(regStr_saf2);
      if (tmpInfo) {
        tmpInfo = tmpInfo.toString().replace("version", "safari");
      }
      if (tmpInfo2) {
        tmpInfo = tmpInfo2.toString().replace("version", "safari");
      }
      return tmpInfo;
    }

    // IE / Eege
    var tmpIsIE = testTool.detectIE();
    if (tmpIsIE) {
      return tmpIsIE;
    }
    // Chrome
    if (agent.indexOf("chrome") > 0) {
      return agent.match(regStr_chrome);
    }

    return "other";
  },
  getRandomInt: function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  extractHostname: function (url) {
    var hostname;
    if (url.indexOf("//") > -1) {
      hostname = url.split("/")[2];
    } else {
      hostname = url.split("/")[0];
    }
    hostname = hostname.split(":")[0];
    hostname = hostname.split("?")[0];
    return hostname;
  },
  getDomainName: function (hostName) {
    return hostName.substring(
      hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1
    );
  },
  setCookie: function (cname, cvalue) {
    var exdays = 1;
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie: function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i += 1) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  deleteAllCookies: function () {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  },
};

window.testTool = testTool;
