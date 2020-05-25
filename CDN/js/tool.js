var testTool = {
  detectOS: function () {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
    var isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
    if (isMac) return 'Mac';
    var isUnix = (navigator.platform === 'X11') && !isWin && !isMac;
    if (isUnix) return 'Unix';
    var isLinux = (String(navigator.platform).indexOf('Linux') > -1);
    if (isLinux) return 'Linux';
    if (isWin) {
      var isWin2K = sUserAgent.indexOf('Windows NT 5.0') > -1 || sUserAgent.indexOf('Windows 2000') > -1;
      if (isWin2K) return 'Win2000';
      var isWinXP = sUserAgent.indexOf('Windows NT 5.1') > -1 || sUserAgent.indexOf('Windows XP') > -1;
      if (isWinXP) return 'WinXP';
      var isWin2003 = sUserAgent.indexOf('Windows NT 5.2') > -1 || sUserAgent.indexOf('Windows 2003') > -1;
      if (isWin2003) return 'Win2003';
      var isWinVista = sUserAgent.indexOf('Windows NT 6.0') > -1 || sUserAgent.indexOf('Windows Vista') > -1;
      if (isWinVista) return 'WinVista';
      var isWin7 = sUserAgent.indexOf('Windows NT 6.1') > -1 || sUserAgent.indexOf('Windows 7') > -1;
      if (isWin7) return 'Win7';
      var isWin10 = sUserAgent.indexOf('Windows NT 10') > -1 || sUserAgent.indexOf('Windows 10') > -1;
      if (isWin10) return 'Win10';
    }
    return 'other';
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

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return 'IE' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return 'IE' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return 'Edge' + parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
  },
  getBrowserInfo: function () {
    var agent = navigator.userAgent.toLowerCase();
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStrChrome2 = /ipad; cpu os (\d+_\d+)/gi;
    var regStr_saf = /safari\/[\d.]+/gi;
    var regStr_edg = /edg\/[\d.]+/gi;

    // firefox
    if (agent.indexOf('firefox') > 0) {
      return agent.match(regStr_ff);
    }

    // Safari
    if (agent.indexOf('safari') > 0 && agent.indexOf('chrome') < 0) {
      var tmpInfo;
      if (agent.indexOf('ipad') > 0) {
        tmpInfo = agent.match(regStrChrome2).toString().replace('ipad; cpu os ', 'ipados/');
      } else {
        tmpInfo = agent.match(regStr_saf);
        tmpInfo = tmpInfo.toString().replace('version', 'safari');
      }
      return tmpInfo;
    }

    // IE / Eege
    var tmpIsIE = testTool.detectIE();
    if (tmpIsIE) {
      return tmpIsIE;
    }
    // Chrome
    if (agent.indexOf('chrome') > 0) {
      return agent.match(regStr_chrome);
    }

    return 'other';
  },
  getRandomInt: function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  extractHostname: function(url) {
    var hostname;
    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
  },
  getDomainName: function(hostName) {
    return hostName.substring(
      hostName.lastIndexOf('.', hostName.lastIndexOf('.') - 1) + 1
    );
  },
  setCookie: function (cname, cvalue) {
    var exdays = 1;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname
            + '='
            + cvalue
            + ';'
            + expires
            + ';path=/';
  },
  getCookie: function (cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i += 1) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
  deleteAllCookies: function() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}

window.testTool = testTool;