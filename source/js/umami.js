!(function () {
  "use strict";
  var t = function (t, e, n) {
      var a = t[e];
      return function () {
        for (var e = [], i = arguments.length; i--; ) e[i] = arguments[i];
        return n.apply(null, e), a.apply(t, e);
      };
    },
    e = function () {
      var t = window.doNotTrack,
        e = window.navigator,
        n = window.external,
        a = "msTrackingProtectionEnabled",
        i = t || e.doNotTrack || e.msDoNotTrack || (n && a in n && n[a]());
      return "1" == i || "yes" === i;
    };
  !(function (n) {
    var a = n.screen,
      i = a.width,
      r = a.height,
      o = n.navigator.language,
      c = n.location,
      s = c.hostname,
      u = c.pathname,
      l = c.search,
      d = n.localStorage,
      f = n.sessionStorage,
      v = n.document,
      p = n.history,
      m = <script async defer src="https://umami.*10811.xyz/umami.js" data-website-id="94db1cb1-74f4-4a40-ad6c-962362670409"   data-cache="true"></script>
    if (m) {
      var g,
        h = m.getAttribute.bind(m),
        y = h("data-website-id"),
        w = h("data-host-url"),
        b = "false" !== h("data-auto-track"),
        S = h("data-do-not-track"),
        k = h("data-cache"),
        E = "false" !== h("data-css-events"),
        N = h("data-domains") || "",
        T = N.split(",").map(function (t) {
          return t.trim();
        }),
        A = /^umami--([a-z]+)--([\w]+[\w-]*)$/,
        O = "[class*='umami--']",
        q = "umami.cache",
        L = function () {
          return (
            (d && d.getItem("umami.disabled")) ||
            (S && e()) ||
            (N && !T.includes(s))
          );
        },
        _ = w
          ? (g = w) && g.length > 1 && g.endsWith("/")
            ? g.slice(0, -1)
            : g
          : m.src.split("/").slice(0, -1).join("/"),
        j = i + "x" + r,
        x = {},
        I = "" + u + l,
        H = v.referrer,
        J = function () {
          return {
            website: y,
            hostname: s,
            screen: j,
            language: o,
            cache: k && f.getItem(q),
            url: I,
          };
        },
        M = function (t, e) {
          return (
            Object.keys(e).forEach(function (n) {
              t[n] = e[n];
            }),
            t
          );
        },
        P = function (t, e) {
          L() ||
            (function (t, e, n) {
              var a = new XMLHttpRequest();
              a.open("POST", t, !0),
                a.setRequestHeader("Content-Type", "text/plain"),
                (a.onreadystatechange = function () {
                  4 === a.readyState && n(a.response);
                }),
                a.send(JSON.stringify(e));
            })(_ + "/api/collect", { type: t, payload: e }, function (t) {
              return k && f.setItem(q, t);
            });
        },
        R = function (t, e, n) {
          void 0 === t && (t = I),
            void 0 === e && (e = H),
            void 0 === n && (n = y),
            P("pageview", M(J(), { website: n, url: t, referrer: e }));
        },
        z = function (t, e, n, a) {
          void 0 === e && (e = "custom"),
            void 0 === n && (n = I),
            void 0 === a && (a = y),
            P(
              "event",
              M(J(), { website: a, url: n, event_type: e, event_value: t })
            );
        },
        B = function (t) {
          var e = t.querySelectorAll(O);
          Array.prototype.forEach.call(e, C);
        },
        C = function (t) {
          (t.getAttribute("class") || "").split(" ").forEach(function (e) {
            if (A.test(e)) {
              var n = e.split("--"),
                a = n[1],
                i = n[2],
                r = x[e]
                  ? x[e]
                  : (x[e] = function () {
                      "A" === t.tagName
                        ? (function (t, e) {
                            var n = J();
                            (n.event_type = e), (n.event_value = t);
                            var a = JSON.stringify({
                              type: "event",
                              payload: n,
                            });
                            navigator.sendBeacon(_ + "/api/collect", a);
                          })(i, a)
                        : z(i, a);
                    });
              t.addEventListener(a, r, !0);
            }
          });
        },
        D = function (t, e, n) {
          if (n) {
            H = I;
            var a = n.toString();
            (I =
              "http" === a.substring(0, 4)
                ? "/" + a.split("/").splice(3).join("/")
                : a) !== H && R();
          }
        };
      if (!n.umami) {
        var V = function (t) {
          return z(t);
        };
        (V.trackView = R), (V.trackEvent = z), (n.umami = V);
      }
      if (b && !L()) {
        (p.pushState = t(p, "pushState", D)),
          (p.replaceState = t(p, "replaceState", D));
        var W = function () {
          "complete" === v.readyState &&
            (R(),
            E &&
              (B(v),
              new MutationObserver(function (t) {
                t.forEach(function (t) {
                  var e = t.target;
                  C(e), B(e);
                });
              }).observe(v, { childList: !0, subtree: !0 })));
        };
        v.addEventListener("readystatechange", W, !0), W();
      }
    }
  })(window);
})();

/* Here is the explanation for the code above:
1. We use the code above to prevent the website from being tracked in the first place.
2. We use the code above to prevent the website from being tracked in the first place.
3. We use the code above to prevent the website from being tracked in the first place.
4. We use the code above to prevent the website from being tracked in the first place.
5. We use the code above to prevent the website from being tracked in the first place.
6. */
