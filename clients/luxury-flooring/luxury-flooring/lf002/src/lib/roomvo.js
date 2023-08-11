const lib = () =>
  !(function () {
    'use strict';
    function e(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          o.push.apply(o, n);
      }
      return o;
    }
    function t(t) {
      for (var o = 1; o < arguments.length; o++) {
        var n = null != arguments[o] ? arguments[o] : {};
        o % 2
          ? e(Object(n), !0).forEach(function (e) {
              a(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : e(Object(n)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function o(e) {
      return (
        (o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        o(e)
      );
    }
    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          'value' in n && (n.writable = !0),
          Object.defineProperty(e, _(n.key), n);
      }
    }
    function i(e, t, o) {
      return (
        t && r(e.prototype, t),
        o && r(e, o),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function a(e, t, o) {
      return (
        (t = _(t)) in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = o),
        e
      );
    }
    function s(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function');
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && d(e, t);
    }
    function l(e) {
      return (
        (l = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        l(e)
      );
    }
    function d(e, t) {
      return (
        (d = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        d(e, t)
      );
    }
    function c() {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function u(e, t, o) {
      return (
        (u = c()
          ? Reflect.construct.bind()
          : function (e, t, o) {
              var n = [null];
              n.push.apply(n, t);
              var r = new (Function.bind.apply(e, n))();
              return o && d(r, o.prototype), r;
            }),
        u.apply(null, arguments)
      );
    }
    function p(e) {
      var t = 'function' == typeof Map ? new Map() : void 0;
      return (
        (p = function (e) {
          if (null === e || ((o = e), -1 === Function.toString.call(o).indexOf('[native code]')))
            return e;
          var o;
          if ('function' != typeof e)
            throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return u(e, arguments, l(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
            })),
            d(n, e)
          );
        }),
        p(e)
      );
    }
    function f(e, t) {
      if (t && ('object' == typeof t || 'function' == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError('Derived constructors may only return object or undefined');
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      })(e);
    }
    function m(e) {
      var t = c();
      return function () {
        var o,
          n = l(e);
        if (t) {
          var r = l(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else o = n.apply(this, arguments);
        return f(this, o);
      };
    }
    function h(e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)); );
      return e;
    }
    function v() {
      return (
        (v =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, o) {
                var n = h(e, t);
                if (n) {
                  var r = Object.getOwnPropertyDescriptor(n, t);
                  return r.get ? r.get.call(arguments.length < 3 ? e : o) : r.value;
                }
              }),
        v.apply(this, arguments)
      );
    }
    function g(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var o =
            null == e
              ? null
              : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
          if (null != o) {
            var n,
              r,
              i,
              a,
              s = [],
              l = !0,
              d = !1;
            try {
              if (((i = (o = o.call(e)).next), 0 === t)) {
                if (Object(o) !== o) return;
                l = !1;
              } else
                for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
            } catch (c) {
              (d = !0), (r = c);
            } finally {
              try {
                if (!l && null != o.return && ((a = o.return()), Object(a) !== a)) return;
              } finally {
                if (d) throw r;
              }
            }
            return s;
          }
        })(e, t) ||
        b(e, t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function y(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return w(e);
        })(e) ||
        (function (e) {
          if (
            ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e['@@iterator']
          )
            return Array.from(e);
        })(e) ||
        b(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        })()
      );
    }
    function b(e, t) {
      if (e) {
        if ('string' == typeof e) return w(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === o && e.constructor && (o = e.constructor.name),
          'Map' === o || 'Set' === o
            ? Array.from(e)
            : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            ? w(e, t)
            : void 0
        );
      }
    }
    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
      return n;
    }
    function _(e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e;
        var o = e[Symbol.toPrimitive];
        if (void 0 !== o) {
          var n = o.call(e, t || 'default');
          if ('object' != typeof n) return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      })(e, 'string');
      return 'symbol' == typeof t ? t : String(t);
    }
    var k,
      P,
      x,
      C,
      S,
      L,
      U,
      I,
      R,
      O,
      T,
      A = function (e) {
        var t = document.createElement('a');
        return (t.href = e), t.hostname;
      },
      N = function () {
        return window.roomvoLocation ? window.roomvoLocation : window.location;
      },
      E = function (e) {
        return (function (e) {
          var t = document.createElement('a');
          t.href = e;
          var o = t.pathname;
          return o.length > 0 && '/' != o[0] && (o = '/' + o), o;
        })(decodeURIComponent(e.href));
      },
      F = new ((function () {
        function e() {
          n(this, e);
        }
        return (
          i(e, [
            {
              key: 'getUrl',
              value: function () {
                return new URL(window.location.href);
              }
            },
            {
              key: 'getNextLevelUrl',
              value: function () {
                try {
                  return new URL(window.parent.location.href);
                } catch (e) {}
                return window.location.ancestorOrigins && window.location.ancestorOrigins.item(0)
                  ? new URL(window.location.ancestorOrigins.item(0))
                  : document.referrer
                  ? new URL(document.referrer)
                  : null;
              }
            },
            {
              key: 'getTopLevelUrl',
              value: function () {
                try {
                  return new URL(window.top.location.href);
                } catch (e) {}
                return window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0
                  ? new URL(
                      window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1]
                    )
                  : document.referrer
                  ? new URL(document.referrer)
                  : null;
              }
            },
            {
              key: 'getHostname',
              value: function () {
                var e = this.getUrl();
                return e ? e.hostname : '';
              }
            },
            {
              key: 'getNextLevelHostname',
              value: function () {
                var e = this.getNextLevelUrl();
                return e ? e.hostname : '';
              }
            },
            {
              key: 'getTopLevelHostname',
              value: function () {
                var e = this.getTopLevelUrl();
                return e ? e.hostname : '';
              }
            }
          ]),
          e
        );
      })())(),
      M = function (e) {
        return B()[e];
      },
      B = function () {
        for (var e = {}, t = document.cookie.split(';'), o = 0; o < t.length; ++o) {
          var n = t[o].trim(),
            r = n.indexOf('=');
          if (-1 !== r) {
            var i = n.substring(0, n.indexOf('=')),
              a = n.substring(r + 1);
            e[i] = a;
          }
        }
        return e;
      },
      q = function (e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = o.cookieExpiration ? o.cookieExpiration : 'Fri, 31 Dec 9999 23:59:59 GMT',
          r = [''.concat(e, '=').concat(t), 'expires='.concat(n), 'path=/', ''.concat(V())];
        o.domain && r.push('domain='.concat(o.domain)), (document.cookie = r.join('; '));
      },
      V = function () {
        return 'https:' === F.getUrl().protocol ? 'SameSite=None; Secure' : 'SameSite=Lax';
      },
      j = 'ffPopup',
      z = 'roomvoProductCatalog',
      D = 'roomvoProductDisplay',
      H = 'roomvoStoreLocator',
      G = j,
      W = 'roomvo-stimr',
      Z = 'roomvo_add_to_cart',
      J = 'ffvendorids',
      Y = 'ffvisitorids',
      K = 'ffvendorurlpath',
      X = 'fftrackingcode',
      $ = 'ffagreedtermsofuse',
      Q = 'roomvoLaunchSequenceRecentUseFlag',
      ee = 'roomvoLaunchSequence',
      te =
        ((k = {}),
        a(k, 0, 'unknown'),
        a(k, 1, 'floor'),
        a(k, 2, 'rug'),
        a(k, 3, 'furniture'),
        a(k, 4, 'countertop'),
        a(k, 5, 'wall'),
        a(k, 6, 'cabinet'),
        a(k, 7, 'wall_decor'),
        a(k, 8, 'ceiling'),
        k),
      oe = {
        'en-us':
          ((P = {
            'Embed this Roomvo share link on your website':
              'Embed this Roomvo share link on your website',
            'Share Product': 'Share Product'
          }),
          a(P, 'Copy', 'Copy'),
          a(P, 'Close', 'Close'),
          a(P, 'Loading...', 'Loading...'),
          P)
      },
      ne =
        ((x = {}),
        a(x, 0, 'none'),
        a(x, 1, 'standalone'),
        a(x, 2, 'product_integration'),
        (C = {}),
        a(C, 0, 'desktop'),
        a(C, 1, 'touch'),
        a(C, 2, 'kiosk'),
        'roomvoOpenProductVisualizer'),
      re = 'roomvoResizeCatalog',
      ie = 'roomvoOpenProductPage',
      ae = 'roomvoOpenCatalog',
      se = 'ffSaveVisitor',
      le = 'ffFocusPopup',
      de = 'roomvoCloseProductDisplay',
      ce = 'roomvoAgreeToTermsOfUse',
      ue = 'roomvoAddToCart',
      pe = 'roomvoLoadPopupFromProductDisplay',
      fe = 'resizeStoreLocatorIframe',
      me = 'ffTrack',
      he = 'roomvoFocusIframe',
      ve = 'roomvoCloseMeasurement',
      ge = ['roomvobot', 'googlebot', 'bingbot'],
      ye = new RegExp(
        [
          '(android|bb\\d+|meego).+mobile|avantgo|bada/|blackberry',
          '|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp',
          '|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker',
          '|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda',
          '|xiino|android|ipad|playbook|silk'
        ].join(''),
        'i'
      ),
      be = function () {
        var e, t;
        return (
          (e = navigator.userAgent || navigator.vendor || window.opera),
          (t = new RegExp(
            [
              '1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s',
              '|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu',
              '|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)',
              '|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw',
              '|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)',
              '|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo',
              '|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c',
              '|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea',
              '|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon',
              '|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx',
              '|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef',
              '|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]',
              '|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph',
              '|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire',
              '|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)',
              '|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)',
              '|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3',
              '|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)',
              '|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)',
              '|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61',
              '|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-',
              '|your|zeto|zte-'
            ].join(''),
            'i'
          )),
          !!e && (ye.test(e) || t.test(e.substring(0, 4))) ? 1 : 0
        );
      },
      we = function (e) {
        for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return ke(e) === ke({});
      },
      _e = function (e, t, o) {
        var n;
        return function () {
          var r = this,
            i = arguments,
            a = o && !n;
          clearTimeout(n),
            (n = setTimeout(function () {
              (n = null), o || e.apply(r, i);
            }, t)),
            a && e.apply(r, i);
        };
      },
      ke = function (e) {
        return !JSON.stringify && JSON.serialize ? JSON.serialize(e) : JSON.stringify(e);
      },
      Pe = function (e) {
        return !JSON.parse && JSON.deserialize ? JSON.deserialize(e) : JSON.parse(e);
      },
      xe = function (e) {
        return Bt(e, 'read', { cookieName: X }) || '';
      },
      Ce = {
        animation: 'none',
        'animation-delay': '0',
        'animation-direction': 'normal',
        'animation-duration': '0',
        'animation-fill-mode': 'none',
        'animation-iteration-count': '1',
        'animation-name': 'none',
        'animation-play-state': 'running',
        'animation-timing-function': 'ease',
        'backface-visibility': 'visible',
        background: '0',
        'background-attachment': 'scroll',
        'background-clip': 'border-box',
        'background-color': 'transparent',
        'background-image': 'none',
        'background-origin': 'padding-box',
        'background-position': '0 0',
        'background-position-x': '0',
        'background-position-y': '0',
        'background-repeat': 'repeat',
        'background-size': 'auto auto',
        border: '0',
        'border-style': 'none',
        'border-width': 'medium',
        'border-color': 'inherit',
        'border-bottom': '0',
        'border-bottom-color': 'inherit',
        'border-bottom-left-radius': '0',
        'border-bottom-right-radius': '0',
        'border-bottom-style': 'none',
        'border-bottom-width': 'medium',
        'border-collapse': 'separate',
        'border-image': 'none',
        'border-left': '0',
        'border-left-color': 'inherit',
        'border-left-style': 'none',
        'border-left-width': 'medium',
        'border-radius': '0',
        'border-right': '0',
        'border-right-color': 'inherit',
        'border-right-style': 'none',
        'border-right-width': 'medium',
        'border-spacing': '0',
        'border-top': '0',
        'border-top-color': 'inherit',
        'border-top-left-radius': '0',
        'border-top-right-radius': '0',
        'border-top-style': 'none',
        'border-top-width': 'medium',
        bottom: 'auto',
        'box-shadow': 'none',
        'box-sizing': 'content-box',
        'caption-side': 'top',
        clear: 'none',
        clip: 'auto',
        color: 'inherit',
        columns: 'auto',
        'column-count': 'auto',
        'column-fill': 'balance',
        'column-gap': 'normal',
        'column-rule': 'medium none currentColor',
        'column-rule-color': 'currentColor',
        'column-rule-style': 'none',
        'column-rule-width': 'none',
        'column-span': '1',
        'column-width': 'auto',
        content: 'normal',
        'counter-increment': 'none',
        'counter-reset': 'none',
        cursor: 'auto',
        direction: 'ltr',
        display: 'inline',
        'empty-cells': 'show',
        float: 'none',
        font: 'normal',
        'font-family': 'inherit',
        'font-size': 'medium',
        'font-style': 'normal',
        'font-variant': 'normal',
        'font-weight': 'normal',
        height: 'auto',
        hyphens: 'none',
        left: 'auto',
        'letter-spacing': 'normal',
        'line-height': 'normal',
        'list-style': 'none',
        'list-style-image': 'none',
        'list-style-position': 'outside',
        'list-style-type': 'disc',
        margin: '0',
        'margin-bottom': '0',
        'margin-left': '0',
        'margin-right': '0',
        'margin-top': '0',
        'max-height': 'none',
        'max-width': 'none',
        'min-height': '0',
        'min-width': '0',
        opacity: '1',
        orphans: '0',
        outline: '0',
        'outline-color': 'invert',
        'outline-style': 'none',
        'outline-width': 'medium',
        overflow: 'visible',
        'overflow-x': 'visible',
        'overflow-y': 'visible',
        padding: '0',
        'padding-bottom': '0',
        'padding-left': '0',
        'padding-right': '0',
        'padding-top': '0',
        'page-break-after': 'auto',
        'page-break-before': 'auto',
        'page-break-inside': 'auto',
        perspective: 'none',
        'perspective-origin': '50% 50%',
        position: 'static',
        right: 'auto',
        'tab-size': '8',
        'table-layout': 'auto',
        'text-align': 'inherit',
        'text-align-last': 'auto',
        'text-decoration': 'none',
        'text-decoration-color': 'inherit',
        'text-decoration-line': 'none',
        'text-decoration-style': 'solid',
        'text-indent': '0',
        'text-shadow': 'none',
        'text-transform': 'none',
        top: 'auto',
        transform: 'none',
        'transform-style': 'flat',
        transition: 'none',
        'transition-delay': '0s',
        'transition-duration': '0s',
        'transition-property': 'none',
        'transition-timing-function': 'ease',
        'unicode-bidi': 'normal',
        'vertical-align': 'baseline',
        visibility: 'visible',
        'white-space': 'normal',
        widows: '0',
        width: 'auto',
        'word-spacing': 'normal',
        'z-index': 'auto'
      },
      Se = function () {
        try {
          var e = document.createElement('canvas');
          if (null == (e.getContext('webgl') || e.getContext('experimental-webgl')))
            throw 'nowebgl';
        } catch (t) {
          return !1;
        }
        return !0;
      },
      Le = function (e, t, o) {
        Ue(e, t, o);
      },
      Ue = function e(t, o, n) {
        !(function (e, t) {
          if (!e) return !1;
          for (var o = 0; o < t.length; ++o) if (!e.querySelector(t[o])) return !1;
          return !0;
        })(t, o)
          ? setTimeout(e, 60, t, o, n)
          : n();
      },
      Ie = function () {
        var e = (function () {
          var e = function (e) {
            return !e.roomvo;
          };
          if (Array.prototype.slice.call(document.styleSheets).every(e)) {
            var t = document.createElement('style');
            t.appendChild(document.createTextNode('')), document.head.appendChild(t);
            var o = t.sheet;
            return (o.roomvo = !0), o;
          }
        })();
        return (
          e ||
          y(document.styleSheets).find(function (e) {
            return e.roomvo;
          })
        );
      },
      Re = function (e, t) {
        t || (t = Ie());
        var o,
          n = (function (e, t) {
            var o = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (!o) {
              if (Array.isArray(e) || (o = b(e)) || (t && e && 'number' == typeof e.length)) {
                o && (e = o);
                var n = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: r
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            }
            var i,
              a = !0,
              s = !1;
            return {
              s: function () {
                o = o.call(e);
              },
              n: function () {
                var e = o.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (s = !0), (i = e);
              },
              f: function () {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (s) throw i;
                }
              }
            };
          })(Oe(e));
        try {
          for (n.s(); !(o = n.n()).done; ) {
            var r = o.value;
            t.insertRule(r, t.cssRules.length);
          }
        } catch (i) {
          n.e(i);
        } finally {
          n.f();
        }
        return t;
      },
      Oe = function (e) {
        for (var t = [], o = 0; o < e.length; o++) {
          var n = 1,
            r = e[o],
            i = r[0],
            a = '';
          Array.isArray(r[1][0]) && ((r = r[1]), (n = 0));
          for (var s = r.length; n < s; n++) {
            var l = r[n];
            a += ''
              .concat(l[0], ': ')
              .concat(l[1])
              .concat(l[2] ? ' !important' : '', ';\n');
          }
          t.push(''.concat(i, '{').concat(a, '}'));
        }
        return t;
      },
      Te = function (e) {
        Object.keys(Ce).forEach(function (t) {
          e.style.setProperty(t, Ce[t], 'important');
        });
      },
      Ae = function (e, t) {
        try {
          e.log.length + t.length < 1e6
            ? (e.log += t + '\n')
            : e.log.endsWith('.....\n') || (e.log += '.....\n');
        } catch (o) {
          e.log = o.toString();
        }
      },
      Ne =
        (a((S = {}), 0, 'shade.unknown'),
        a(S, 1, 'shade.light'),
        a(S, 2, 'shade.medium'),
        a(S, 3, 'shade.dark'),
        a((L = {}), 0, 'color.unknown'),
        a(L, 1, 'color.beige'),
        a(L, 2, 'color.black'),
        a(L, 3, 'color.blue'),
        a(L, 4, 'color.brown'),
        a(L, 5, 'color.gray'),
        a(L, 6, 'color.green'),
        a(L, 7, 'color.orange'),
        a(L, 8, 'color.purple'),
        a(L, 9, 'color.red'),
        a(L, 10, 'color.white'),
        a(L, 11, 'color.yellow'),
        a((U = {}), 0, 'unknown'),
        a(U, 1, 'floor'),
        a(U, 2, 'rug'),
        a(U, 3, 'furniture'),
        a(U, 4, 'countertop'),
        a(U, 5, 'wall'),
        a(U, 6, 'cabinet'),
        a(U, 7, 'wall_decor'),
        a(U, 8, 'ceiling'),
        a((I = {}), 1, 'Floors'),
        a(I, 2, 'Rugs'),
        a(I, 3, 'Furniture'),
        a(I, 4, 'Countertops'),
        a(I, 5, 'Walls'),
        a(I, 6, 'Cabinets'),
        a(I, 7, 'Wall Decors'),
        a(I, 8, 'Ceilings'),
        a((R = {}), 19, 'Area Rugs'),
        a(R, 17, 'Boards and Panels'),
        a(R, 18, 'Brick and Stone'),
        a(R, 14, 'Butcher Block'),
        a(R, 7, 'product_subtype.carpet_tile'),
        a(R, 12, 'Concrete'),
        a(R, 9, 'Engineered Stone'),
        a(R, 1, 'product_subtype.hardwood'),
        a(R, 11, 'product_subtype.laminate'),
        a(R, 4, 'product_subtype.luxury_vinyl'),
        a(R, 21, 'Mats'),
        a(R, 8, 'Natural Stone'),
        a(R, 22, 'Other'),
        a(R, 20, 'Outdoor Rugs'),
        a(R, 15, 'Paint'),
        a(R, 6, 'Patterned Broadloom Carpet'),
        a(R, 5, 'Solid Color Broadloom Carpet'),
        a(R, 10, 'product_subtype.solid_surface'),
        a(R, 13, 'Stainless Steel'),
        a(R, 2, 'product_subtype.tile'),
        a(R, 3, 'product_subtype.vinyl'),
        a(R, 16, 'Wallpaper'),
        a(R, 23, 'Flat Panel Cabinet'),
        a(R, 24, 'Shaker Cabinet'),
        a(R, 25, 'Inset Cabinet'),
        a(R, 26, 'Thermofoil Cabinet'),
        a(R, 27, 'Glass Cabinet'),
        a(R, 28, 'Artwork'),
        a((O = {}), 0, 'Warm White'),
        a(O, 1, 'Soft White'),
        a(O, 2, 'Daylight'),
        a(O, 3, 'Crystal White'),
        'en-us'),
      Ee =
        (a((T = {}), 0, 'pricing_unit.unspecified'),
        a(T, 1, 'pricing_unit.each'),
        a(T, 2, 'pricing_unit.square_meter'),
        a(T, 3, 'pricing_unit.square_foot'),
        a(T, 4, 'pricing_unit.pallet'),
        a(T, 5, 'pricing_unit.box'),
        function (e) {
          for (
            var t = Object.assign({}, oe),
              o = e.getLocalizedStringOverrides(),
              n = 0,
              r = Object.entries(o);
            n < r.length;
            n++
          ) {
            var i = g(r[n], 2),
              a = i[0],
              s = i[1];
            a === Ne ? Object.assign(t['en-us'], s) : (t[a] = s);
          }
          return (e._localizedStrings = t), null;
        }),
      Fe = function (e) {
        var t = { alpha: 255 };
        if (3 === (e = e.replace('#', '')).length) {
          var o = function (e) {
            return parseInt(e + e, 16);
          };
          (t.red = parseInt(o(e.slice(0, 1)))),
            (t.green = parseInt(o(e.slice(1, 2)))),
            (t.blue = parseInt(o(e.slice(2, 3))));
        } else {
          if (6 !== e.length) return;
          (t.red = parseInt(e.slice(0, 2), 16)),
            (t.green = parseInt(e.slice(2, 4), 16)),
            (t.blue = parseInt(e.slice(4, 6), 16));
        }
        return t;
      },
      Me = function (e) {
        var t = e.toString('16');
        return 1 === t.length ? '0' + t : t;
      },
      Be = function (e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
        return (
          (e = Fe(e)),
          (t = Fe(t)),
          '#' +
            ['red', 'green', 'blue']
              .map(function (n) {
                return Me(Math.round(t[n] + (e[n] - t[n]) * (o / 100)));
              })
              .join('')
        );
      },
      qe = function (e, t) {
        return Be('#FFFFFF', e, t);
      },
      Ve = function (e, t) {
        return Be('#000000', e, t);
      },
      je = (function (e) {
        s(r, e);
        var t = m(r);
        function r() {
          var e;
          return (
            n(this, r),
            (e = t.call(this)).attachShadow({ mode: 'open' }),
            (e.cssRules =
              '\n/***\n The new CSS reset - version 1.7.3 (last updated 7.8.2022)\n GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n Remove all the styles of the "User-Agent-Stylesheet", except for the \'display\' property\n - The "symbol *" part is to solve Firefox SVG sprite bug\n*/\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n all: unset;\n display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n max-width: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn\'t working */\ninput, textarea {\n -webkit-user-select: auto;\n}\n\n/* revert the \'white-space\' property for textarea elements on Safari */\ntextarea {\n white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n -webkit-appearance: revert;\n appearance: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n color: unset;\n}\n\n/* fix the feature of \'hidden\' attribute.\ndisplay:revert; revert to element instead of attribute */\n:where([hidden]) {\n display: none;\n}\n\n/* revert for bug in Chromium browsers\n- fix for the content editable attribute will work properly.\n- webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable="false"])) {\n -moz-user-modify: read-write;\n -webkit-user-modify: read-write;\n overflow-wrap: break-word;\n -webkit-line-break: after-white-space;\n -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable="true"]) {\n -webkit-user-drag: element;\n}\n'),
            e.shouldHide,
            e.styleNode,
            e.contentNode,
            e.logoNode,
            e.src,
            e.textNode,
            e.text,
            e.color,
            e
          );
        }
        return (
          i(
            r,
            [
              {
                key: 'applyCssRules',
                value: function () {
                  this.styleNode || (this.styleNode = document.createElement('style')),
                    (this.styleNode.textContent = this.cssRules),
                    this.shadowRoot.appendChild(this.styleNode);
                }
              },
              {
                key: 'addCssRules',
                value: function (e) {
                  this.cssRules += Oe(e).join('\n');
                }
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.isConnected &&
                    ((this.color = this.getAttribute('color')),
                    (this.src = this.getAttribute('src')),
                    (this.text = this.getAttribute('text')),
                    (this.shouldHide = this.getAttribute('hide')),
                    this.create(),
                    this.applyCssRules(),
                    this.updateDisplay(!0));
                }
              },
              {
                key: 'attributeChangedCallback',
                value: function (e, t, o) {
                  if (this.isConnected)
                    switch (e) {
                      case 'color':
                        (this.color = o), this.updateLoaderColor();
                        break;
                      case 'hide':
                        (this.shouldHide = o), this.updateDisplay();
                        break;
                      case 'src':
                        (this.src = o), this.updateOrInsertLogo();
                        break;
                      case 'text':
                        (this.text = o), this.updateOrInsertText();
                    }
                }
              },
              {
                key: 'updateDisplay',
                value: function (e) {
                  var t = this.shadowRoot.firstChild;
                  null !== this.shouldHide
                    ? (e ||
                        this.shadowRoot.addEventListener(
                          'transitionend',
                          function () {
                            t.style.display = 'none';
                          },
                          { once: !0 }
                        ),
                      t.classList.add('roomvo-launch-sequence--hide'))
                    : ((t.style.display = 'grid'),
                      window.requestAnimationFrame(function () {
                        return t.classList.remove('roomvo-launch-sequence--hide');
                      }));
                }
              },
              {
                key: 'create',
                value: function () {
                  var e = this.createModal();
                  e.append(this.createContent()), e.append(this.createRoomvoBranding());
                  var t = this.createContainer();
                  return t.append(e), this.shadowRoot.append(t), t;
                }
              },
              {
                key: 'createModal',
                value: function () {
                  var e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__modal');
                  var t = [
                    [
                      '.'.concat(e.className),
                      ['width', '80%'],
                      ['max-width', '40rem'],
                      ['border-radius', '1rem'],
                      ['background-color', 'white'],
                      ['box-shadow', '0px 40px 40px rgba(57, 59, 68, 0.20)'],
                      ['opacity', '1'],
                      ['transform', 'translateY(0%)'],
                      ['transition', 'all 0.25s cubic-bezier(0,0.25,0.29,1) 1s'],
                      ['transition-delay', '0.25s']
                    ],
                    [
                      '.roomvo-launch-sequence--hide .'.concat(e.className),
                      ['transform', 'translateY(5%)'],
                      ['opacity', '0'],
                      ['transition-delay', '0s']
                    ]
                  ];
                  return this.addCssRules(t), e;
                }
              },
              {
                key: 'createContent',
                value: function () {
                  var e = this;
                  (this.contentNode = document.createElement('div')),
                    this.contentNode.classList.add('roomvo-launch-sequence__content');
                  var t = [
                    [
                      '.'.concat(this.contentNode.className),
                      [
                        ['display', 'grid'],
                        ['place-items', 'center'],
                        ['gap', '2rem'],
                        ['grid-gap', '2rem'],
                        ['max-width', '80%'],
                        ['margin-left', 'auto'],
                        ['margin-right', 'auto']
                      ]
                    ]
                  ];
                  this.addCssRules(t);
                  !(function (e, t) {
                    if ('function' != typeof t || !e || 'object' !== o(e))
                      throw new Error('Invalid Arguments');
                    document.querySelector(
                      'meta[name="viewport"][content*="device-width"][content*="initial-scale=1"]'
                    ) ||
                      document.head.insertAdjacentHTML(
                        'beforeend',
                        '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />'
                      ),
                      t(e),
                      !0 !== (null == e ? void 0 : e.isListenedTo) &&
                        ((e.isListenedTo = !0),
                        'addEventListener' in e
                          ? e.addEventListener('change', t)
                          : e.addListener(t));
                  })(window.matchMedia('(min-width: 600px)'), function (t) {
                    e.contentNode.style.setProperty(
                      'padding',
                      t.matches ? '12.5vh 0' : '7.5vh 0',
                      'important'
                    );
                  }),
                    (this.logoNode = this.createLogo()),
                    this.logoNode && this.contentNode.append(this.logoNode),
                    (this.textNode = this.createText()),
                    this.textNode && this.contentNode.append(this.textNode);
                  var n = this.createLoader();
                  return n && this.contentNode.append(n), this.contentNode;
                }
              },
              {
                key: 'createLogo',
                value: function () {
                  if (!this.src) return null;
                  var e = document.createElement('div');
                  e.style.setProperty('max-width', '70%');
                  var t = document.createElement('img');
                  return (
                    (t.src = this.src),
                    (t.alt = ''),
                    t.style.setProperty('opacity', '0'),
                    (t.onload = function () {
                      return (t.style.opacity = '1');
                    }),
                    t.style.setProperty('transition', 'opacity 0.2s ease-in'),
                    t.style.setProperty('object-fit', 'contain'),
                    t.style.setProperty('height', '175px'),
                    t.style.setProperty('width', '100%'),
                    e.append(t),
                    e
                  );
                }
              },
              {
                key: 'updateOrInsertLogo',
                value: function () {
                  this.logoNode && this.src
                    ? (this.logoNode.firstChild.src = this.src)
                    : this.logoNode
                    ? (this.logoNode.remove(), (this.logoNode = null))
                    : this.src &&
                      ((this.logoNode = this.createLogo()),
                      this.contentNode.prepend(this.logoNode));
                }
              },
              {
                key: 'createText',
                value: function () {
                  if (!this.text) return null;
                  var e = document.createElement('p');
                  return (
                    e.append(this.text),
                    e.style.setProperty('font', 'normal normal normal 1rem/1.5rem Sans-Serif'),
                    e.style.setProperty('color', '#373C40'),
                    e.style.setProperty('text-align', 'center'),
                    e.style.setProperty('margin', '0'),
                    e
                  );
                }
              },
              {
                key: 'updateOrInsertText',
                value: function () {
                  this.textNode && this.text
                    ? (this.textNode.innerText = this.text)
                    : this.textNode
                    ? (this.textNode.remove(), (this.textNode = null))
                    : this.text &&
                      ((this.textNode = this.createText()),
                      this.logoNode
                        ? this.logoNode.insertAdjacentElement('afterend', this.textNode)
                        : this.contentNode.prepend(this.textNode));
                }
              },
              {
                key: 'createLoader',
                value: function () {
                  var e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__loader-cubes');
                  var t = [
                    [
                      '.'.concat(e.className),
                      ['position', 'relative'],
                      ['min-width', '6rem'],
                      ['min-height', '3rem'],
                      ['padding-top', '1.5rem']
                    ]
                  ];
                  return (
                    this.addCssRules(t),
                    e.insertAdjacentHTML(
                      'afterbegin',
                      '\n<svg\nclass="loader-cubes__cube loader-cubes__one"\nwidth="82"\nheight="76"\nviewBox="0 0 82 76"\nfill="none"\nxmlns="http://www.w3.org/2000/svg"\n>\n<g opacity="0.6" filter="url(#filter0_f_557_14053)">\n  <path\n    class="cube__shadow"\n    d="M41.0002 32.0018L62.0001 43.9996L41.0002 56.0002L20.0315 43.9994L41.0002 32.0018Z"\n  ></path>\n</g>\n<path\n  class="cube__left-side"\n  d="M41 12.1838L62 12.0002L62 20.9651L41 33L19.9999 20.9652L19.9999 12.0003L41 12.1838Z"\n></path>\n<path\n  class="cube__right-side"\n  d="M41.0002 23.9998L62.0004 12.0054L62.0004 20.9594L40.9998 33L41.0002 23.9998Z"\n></path>\n<path\n  class="cube__top"\n  d="M41.0002 0.00178922L62.0001 11.9996L41.0002 24.0002L20.0315 11.9994L41.0002 0.00178922Z"\n></path>\n<defs>\n  <filter\n    id="filter0_f_557_14053"\n    x="0.03125"\n    y="12.002"\n    width="81.9688"\n    height="63.998"\n    filterUnits="userSpaceOnUse"\n    color-interpolation-filters="sRGB"\n  >\n    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n    <feBlend\n      mode="normal"\n      in="SourceGraphic"\n      in2="BackgroundImageFix"\n      result="shape"\n    ></feBlend>\n    <feGaussianBlur\n      stdDeviation="10"\n      result="effect1_foregroundBlur_557_14053"\n    ></feGaussianBlur>\n  </filter>\n</defs>\n</svg>\n<svg\nclass="loader-cubes__cube loader-cubes__three"\nwidth="82"\nheight="76"\nviewBox="0 0 82 76"\nfill="none"\nxmlns="http://www.w3.org/2000/svg"\n>\n<g opacity="0.6" filter="url(#filter0_f_557_14053)">\n  <path\n    class="cube__shadow"\n    d="M41.0002 32.0018L62.0001 43.9996L41.0002 56.0002L20.0315 43.9994L41.0002 32.0018Z"\n  ></path>\n</g>\n<path\n  class="cube__left-side"\n  d="M41 12.1838L62 12.0002L62 20.9651L41 33L19.9999 20.9652L19.9999 12.0003L41 12.1838Z"\n></path>\n<path\n  class="cube__right-side"\n  d="M41.0002 23.9998L62.0004 12.0054L62.0004 20.9594L40.9998 33L41.0002 23.9998Z"\n></path>\n<path\n  class="cube__top"\n  d="M41.0002 0.00178922L62.0001 11.9996L41.0002 24.0002L20.0315 11.9994L41.0002 0.00178922Z"\n></path>\n<defs>\n  <filter\n    id="filter0_f_557_14053"\n    x="0.03125"\n    y="12.002"\n    width="81.9688"\n    height="63.998"\n    filterUnits="userSpaceOnUse"\n    color-interpolation-filters="sRGB"\n  >\n    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n    <feBlend\n      mode="normal"\n      in="SourceGraphic"\n      in2="BackgroundImageFix"\n      result="shape"\n    ></feBlend>\n    <feGaussianBlur\n      stdDeviation="10"\n      result="effect1_foregroundBlur_557_14053"\n    ></feGaussianBlur>\n  </filter>\n</defs>\n</svg>\n<svg\nclass="loader-cubes__cube loader-cubes__two"\nwidth="82"\nheight="76"\nviewBox="0 0 82 76"\nfill="none"\nxmlns="http://www.w3.org/2000/svg"\n>\n<g opacity="0.6" filter="url(#filter0_f_557_14053)">\n  <path\n    class="cube__shadow"\n    d="M41.0002 32.0018L62.0001 43.9996L41.0002 56.0002L20.0315 43.9994L41.0002 32.0018Z"\n  ></path>\n</g>\n<path\n  class="cube__left-side"\n  d="M41 12.1838L62 12.0002L62 20.9651L41 33L19.9999 20.9652L19.9999 12.0003L41 12.1838Z"\n></path>\n<path\n  class="cube__right-side"\n  d="M41.0002 23.9998L62.0004 12.0054L62.0004 20.9594L40.9998 33L41.0002 23.9998Z"\n></path>\n<path\n  class="cube__top"\n  d="M41.0002 0.00178922L62.0001 11.9996L41.0002 24.0002L20.0315 11.9994L41.0002 0.00178922Z"\n></path>\n<defs>\n  <filter\n    id="filter0_f_557_14053"\n    x="0.03125"\n    y="12.002"\n    width="81.9688"\n    height="63.998"\n    filterUnits="userSpaceOnUse"\n    color-interpolation-filters="sRGB"\n  >\n    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n    <feBlend\n      mode="normal"\n      in="SourceGraphic"\n      in2="BackgroundImageFix"\n      result="shape"\n    ></feBlend>\n    <feGaussianBlur\n      stdDeviation="10"\n      result="effect1_foregroundBlur_557_14053"\n    ></feGaussianBlur>\n  </filter>\n</defs>\n</svg>\n<svg\nclass="loader-cubes__cube loader-cubes__four"\nwidth="82"\nheight="76"\nviewBox="0 0 82 76"\nfill="none"\nxmlns="http://www.w3.org/2000/svg"\n>\n<g opacity="0.6" filter="url(#filter0_f_557_14053)">\n  <path\n    class="cube__shadow"\n    d="M41.0002 32.0018L62.0001 43.9996L41.0002 56.0002L20.0315 43.9994L41.0002 32.0018Z"\n  ></path>\n</g>\n<path\n  class="cube__left-side"\n  d="M41 12.1838L62 12.0002L62 20.9651L41 33L19.9999 20.9652L19.9999 12.0003L41 12.1838Z"\n></path>\n<path\n  class="cube__right-side"\n  d="M41.0002 23.9998L62.0004 12.0054L62.0004 20.9594L40.9998 33L41.0002 23.9998Z"\n  fill="#828BA4"\n></path>\n<path\n  class="cube__top"\n  d="M41.0002 0.00178922L62.0001 11.9996L41.0002 24.0002L20.0315 11.9994L41.0002 0.00178922Z"\n></path>\n<defs>\n  <filter\n    id="filter0_f_557_14053"\n    x="0.03125"\n    y="12.002"\n    width="81.9688"\n    height="63.998"\n    filterUnits="userSpaceOnUse"\n    color-interpolation-filters="sRGB"\n  >\n    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n    <feBlend\n      mode="normal"\n      in="SourceGraphic"\n      in2="BackgroundImageFix"\n      result="shape"\n    ></feBlend>\n    <feGaussianBlur\n      stdDeviation="10"\n      result="effect1_foregroundBlur_557_14053"\n    ></feGaussianBlur>\n  </filter>\n</defs>\n</svg>\n'
                    ),
                    this.colorLoader(),
                    this.animateLoader(e.className),
                    e
                  );
                }
              },
              {
                key: 'colorLoader',
                value: function () {
                  var e,
                    t = null !== (e = this.color) && void 0 !== e ? e : '#818C98',
                    o = Ve.bind(null, t),
                    n = [qe.bind(null, t)(10), o(10), o(42), o(30)],
                    r = [
                      ['path.cube__top', ['fill', n[0]]],
                      ['path.cube__left-side', ['fill', n[1]]],
                      ['path.cube__shadow', ['fill', n[2]]],
                      ['path.cube__right-side', ['fill', n[3]]]
                    ];
                  this.addCssRules(r);
                }
              },
              {
                key: 'updateLoaderColor',
                value: function () {
                  this.cssRules.replaceAll(/path\.cube[\s\S]*?\}/g, ''),
                    this.colorLoader(),
                    this.applyCssRules();
                }
              },
              {
                key: 'animateLoader',
                value: function (e) {
                  var t = this,
                    o = [
                      ['.'.concat(e, '>.loader-cubes__cube'), ['position', 'absolute']],
                      [
                        [
                          'loader-cubes__four',
                          'loader-cubes__one',
                          'loader-cubes__three',
                          'loader-cubes__two'
                        ]
                          .map(function (t) {
                            return '.'.concat(e, '>.').concat(t);
                          })
                          .join(','),
                        ['animation-duration', '.85s'],
                        ['animation-iteration-count', 'infinite'],
                        ['animation-timing-function', 'ease-in-out']
                      ],
                      [
                        '.'.concat(e, '>.loader-cubes__one'),
                        ['transform', 'translate(-36%,-16%)'],
                        ['animation-name', 'loader-cubes__one']
                      ],
                      [
                        '.'.concat(e, '>.loader-cubes__two'),
                        ['transform', 'translate(-10%,0)'],
                        ['animation-name', 'loader-cubes__two']
                      ],
                      [
                        '.'.concat(e, '>.loader-cubes__three'),
                        ['transform', 'translate(16%,-16%)'],
                        ['animation-name', 'loader-cubes__three']
                      ],
                      [
                        '.'.concat(e, '>.loader-cubes__four'),
                        ['transform', 'translate(42%,0)'],
                        ['animation-name', 'loader-cubes__four']
                      ]
                    ];
                  this.addCssRules(o),
                    [
                      '@keyframes loader-cubes__one {\n                0% {\n                  transform: translate(-36%, -16%);\n                }\n                50% {\n                  transform: translate(-10%, -32%);\n                }\n                100% {\n                  transform: translate(16%, -16%);\n                }\n            }\n            ',
                      '@keyframes loader-cubes__two {\n                0%,\n                50% {\n                  transform: translate(-10%, 0);\n                }\n                100% {\n                  transform: translate(-36%, -16%);\n                }\n              }\n              ',
                      '@keyframes loader-cubes__three {\n                0%,\n                50% {\n                  transform: translate(16%, -16%);\n                }\n                100% {\n                  transform: translate(42%, 0);\n                }\n              }\n              ',
                      '@keyframes loader-cubes__four {\n                0% {\n                  transform: translate(42%, 0);\n                }\n                50% {\n                  transform: translate(16%, 16%);\n                }\n                100% {\n                  transform: translate(-10%, 0);\n                }\n              }\n              '
                    ].forEach(function (e) {
                      return (t.cssRules += e);
                    });
                }
              },
              {
                key: 'createRoomvoBranding',
                value: function () {
                  var e = document.createElement('p');
                  e.style.setProperty('font', 'normal normal normal 0.875rem/1.25rem Sans-Serif'),
                    e.style.setProperty('text-align', 'center'),
                    e.style.setProperty('color', '#818C98'),
                    e.style.setProperty('margin-bottom', '0.3rem'),
                    (e.innerText = 'Powered by ');
                  var t = document.createElement('strong');
                  return (
                    t.style.setProperty('font-weight', '500'),
                    t.style.setProperty('color', '#FF3D00'),
                    (t.innerText = 'roomvo'),
                    e.append(t),
                    e
                  );
                }
              },
              {
                key: 'createContainer',
                value: function () {
                  var e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__container');
                  var t = [
                    [
                      '.'.concat(e.className),
                      ['position', 'fixed'],
                      ['top', '0'],
                      ['left', '0'],
                      ['backdrop-filter', 'blur(8px)'],
                      ['height', '100%'],
                      ['width', '100%'],
                      ['background-color', 'rgba(255,255,255,0.7)'],
                      ['z-index', '2147483647'],
                      ['place-items', 'center'],
                      ['display', 'grid'],
                      ['opacity', '1'],
                      ['transition', 'opacity 0.5s'],
                      ['transition-delay', '0s']
                    ],
                    [
                      '.'.concat(e.className, '.roomvo-launch-sequence--hide'),
                      ['opacity', '0'],
                      ['transition-delay', '1s']
                    ]
                  ];
                  return this.addCssRules(t), e;
                }
              }
            ],
            [
              {
                key: 'observedAttributes',
                get: function () {
                  return ['color', 'hide', 'src', 'text'];
                }
              }
            ]
          ),
          r
        );
      })(p(HTMLElement)),
      ze = function (e) {
        var t,
          o = document.getElementById(ee) || Ze(e);
        o.hasAttribute('hide') &&
          window.requestAnimationFrame(function () {
            return o.removeAttribute('hide');
          }),
          (null !== (t = o.dataset) && void 0 !== t && t.closingTimerId) ||
            (o.dataset.closingTimerId = setTimeout(He, e.launchSequenceTimeoutDuration, e)),
          (o.dataset.startTime = Date.now());
      },
      De = function () {
        var e,
          t = document.getElementById(ee);
        t &&
          (t.setAttribute('hide', ''),
          'null' !== (null === (e = t.dataset) || void 0 === e ? void 0 : e.closingTimerId) &&
            (clearTimeout(t.dataset.closingTimerId), delete t.dataset.closingTimerId));
      },
      He = function (e) {
        document.getElementById(G).addEventListener('transitionend', De, { once: !0 }),
          We(e) ? setTimeout(Qe, Ge()) : Qe();
      },
      Ge = function () {
        var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500,
          o =
            Number(
              null === (e = document.getElementById(ee).dataset) || void 0 === e
                ? void 0
                : e.startTime
            ) || 0;
        return Math.max(o + t - Date.now(), 0);
      },
      We = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          o = !Bt(e, 'check', { cookieName: Q }),
          n = new Date();
        n.setTime(n.getTime() + 60 * t * 60 * 1e3);
        var r = n.toUTCString();
        return (
          Bt(e, 'write', { cookieName: Q, cookieValue: '', config: { cookieExpiration: r } }), o
        );
      },
      Ze = function (e) {
        void 0 === window.customElements.get('launch-sequence') &&
          window.customElements.define('launch-sequence', je);
        var t = document.createElement('launch-sequence');
        return (
          (t.id = ee),
          t.setAttribute('src', e.vendorLogoUrl),
          t.setAttribute('text', Je(e)),
          t.setAttribute('color', e.launchSequenceLoaderBaseColor),
          t.setAttribute('hide', ''),
          document.body.append(t),
          t
        );
      },
      Je = function (e) {
        return (
          Ee(e),
          (function (e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              n = e.getLocale();
            if (n in e._localizedStrings && t in e._localizedStrings[n])
              return e._localizedStrings[n][t];
            var r = Object.keys(e._localizedStrings),
              i = function (e) {
                return e.split('-')[0];
              },
              a = r.map(i).indexOf(i(n));
            if (-1 !== a) {
              var s,
                l = null === (s = e._localizedStrings[r[a]]) || void 0 === s ? void 0 : s[t];
              if (l) return l;
            }
            return o ? '' : t in e._localizedStrings['en-us'] ? e._localizedStrings['en-us'][t] : t;
          })(e, 'Loading...', !0)
        );
      },
      Ye = function (e) {
        return ['number', 'string'].includes(o(e))
          ? !isNaN(e) && Number.isInteger(parseFloat(e))
            ? e in te
              ? parseInt(e)
              : 0
            : parseInt(
                Object.keys(te).find(function (t) {
                  return te[t] === e;
                })
              ) || 0
          : 0;
      },
      Ke = function () {
        if (!document.getElementById(G)) {
          var e = document.createElement('iframe');
          Te(e),
            e.style.setProperty('display', 'none', 'important'),
            e.style.setProperty('position', 'fixed', 'important'),
            e.style.setProperty('top', '0', 'important'),
            e.style.setProperty('left', '0', 'important'),
            e.style.setProperty('width', '100%'),
            e.style.setProperty('height', '100%'),
            e.style.setProperty('z-index', '2147483647', 'important'),
            e.style.setProperty('border', 'none', 'important'),
            (e.id = G),
            (e.type = 'text/html'),
            (e.allow = 'clipboard-write'),
            (e.title = 'Roomvo Visualizer, Powered by Roomvo'),
            (e.ariaLabel = 'Roomvo Visualizer, Powered by Roomvo'),
            (e.tabIndex = '-1'),
            document.body.appendChild(e);
        }
      },
      Xe = function (e) {
        var t;
        if (
          (e.style.setProperty('background-color', ''),
          e.style.setProperty('box-shadow', ''),
          e.style.setProperty('transform', ''),
          e.style.setProperty('transition', ''),
          e.style.setProperty('transition-delay', ''),
          e.style.setProperty('transition-duration', ''),
          e.style.setProperty('transition-property', ''),
          e.style.setProperty('transition-timing-function', ''),
          'true' !==
            (null === (t = document.head.dataset) || void 0 === t ? void 0 : t.popupStylized))
        ) {
          var o = [
            [
              '#'.concat(G),
              ['background-color', 'white', !0],
              ['box-shadow', '0px 0px 120px rgba(57, 59, 68, 0.30)', !0],
              ['transition', 'transform .75s cubic-bezier(0.95, 0, 1, 0.94)'],
              ['transform', 'translateY(110%)']
            ],
            [
              '#'.concat(G, '.roomvo-popup--show'),
              ['transform', 'translateY(0%)', !0],
              ['transition-timing-function', 'cubic-bezier(0,.25,.29,1)', !0]
            ],
            ['#'.concat(G, '.roomvo-popup--loading'), ['width', '1px', !0], ['height', '1px', !0]]
          ];
          Re(o), (document.head.dataset.popupStylized = 'true');
        }
        e.classList.add('roomvo-popup--loading'), (e.ariaHidden = !0);
      },
      $e = function (e, t) {
        null == t ||
          t.addEventListener(
            'load',
            function () {
              return He(e);
            },
            { once: !0 }
          );
      },
      Qe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        e || (e = document.getElementById(G)),
          e.classList.contains('roomvo-popup--loading') &&
            (e.classList.remove('roomvo-popup--loading'),
            (e.ariaHidden = !1),
            window.requestAnimationFrame(function () {
              e.classList.add('roomvo-popup--show');
            }));
      },
      et = function (e) {
        try {
          var t = window.getComputedStyle(document.body).getPropertyValue('overflow');
          'hidden' !== t &&
            ((e.dataset.previousBodyStyleOverflow = t), (document.body.style.overflow = 'hidden'));
        } catch (o) {}
      },
      tt = function (e) {
        var t = document.getElementById(e);
        return !!t && t && t.src && t.contentWindow;
      },
      ot = function (e, t) {
        var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!e.isWebGlNeeded() || Se()) {
          if (((t = new URL(t)), 'about:srcdoc' == window.location.href))
            return t.searchParams.delete('visitor_id'), void window.open(t.href);
          t.searchParams.set('domain', F.getTopLevelHostname()),
            t.searchParams.set('is_in_top_window', 0),
            !o ||
              (window.history.state && window.history.state.roomvoPopupUrl) ||
              (t.searchParams.set('use_history_padding', 0),
              window.history.pushState(
                { roomvoPopupUrl: t.href, integratorVendorUrlPath: e.getVendorUrlPath() },
                ''
              )),
            Ke();
          var n = document.getElementById(G);
          n && n.parentNode == document.body && document.body.removeChild(n),
            (n.style.display = 'block'),
            e.shouldShowLaunchSequence
              ? (Xe(n), ze(e), $e(e, n))
              : (n.style.background = 'white url("'.concat(
                  e.serverUrl,
                  '/static/images/loading.gif") no-repeat center'
                )),
            (n.src = t.href),
            (n.dataset.openerVendorUrlPath = e.getVendorUrlPath()),
            document.body.appendChild(n),
            et(n),
            setTimeout(dt, 10, G);
        } else
          alert(
            'Your browser or device does not support WebGL. Please try a different browser or device.'
          );
      },
      nt = function () {
        var e, t, o;
        return null !==
          ((t = N()), (o = 'originator'), (e = new URL(t.href).searchParams.get(o))) && void 0 !== e
          ? e
          : '';
      },
      rt = function (e, t, o, n, r, i) {
        (void 0 !== n && '' !== n) || (n = '/'), void 0 === r && (r = ''), null == i && (i = '');
        var a = e.visitorIds[t] || '',
          s =
            e.serverUrl +
            '/my/' +
            t +
            n +
            '?visitor_id=' +
            encodeURIComponent(a) +
            '&tracking_code=' +
            encodeURIComponent(xe(e)) +
            '&locale=' +
            encodeURIComponent(e.getLocale()) +
            '&prefilter=' +
            encodeURIComponent(e.prefilter) +
            r +
            '&iframe_id=' +
            'ffPopup&originator=' +
            encodeURIComponent(nt());
        (function () {
          try {
            return window.self !== window.top;
          } catch (e) {
            return !0;
          }
        })() || (s += '&use_host_navigation=1'),
          e.agreedTermsOfUse && (s += '&agreed_terms_of_use=1');
        var l = pt(e, o, i);
        (s += l
          ? '&product_ids=' + encodeURIComponent(l)
          : '&vendor_code=' + encodeURIComponent(o) + '&product_type=' + encodeURIComponent(i)),
          ot(e, s),
          e.trackActionInHostAnalytics('see this in my room', o);
      },
      it = function (e, t, o, n, r, i) {
        try {
          i = i || e.getProductCode(t);
        } catch (a) {
          i = '';
        }
        rt(e, e.getVendorUrlPathForStimr(), i, o, n, r);
      },
      at = function (e) {
        var t = document.createElement('iframe');
        return (
          Te(t),
          t.style.setProperty('display', 'none', 'important'),
          (t.id = e),
          (t.type = 'text/html'),
          (t.allow = 'clipboard-write'),
          t
        );
      },
      st = function (e, t, o) {
        var n = e.getVendorUrlPath(),
          r = e.visitorIds[n] || '';
        t = lt(t, o);
        var i =
          e.serverUrl +
          '/my/' +
          n +
          '/catalog?visitor_id=' +
          encodeURIComponent(r) +
          '&tracking_code=' +
          encodeURIComponent(xe(e)) +
          '&locale=' +
          encodeURIComponent(e.getLocale()) +
          t +
          '&iframe_id=' +
          G;
        o && (i += '&product_id=' + o), ot(e, i);
      },
      lt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          t = arguments.length > 1 ? arguments[1] : void 0,
          o = new URL(N().href).searchParams;
        if (!t) {
          if (!e.includes('product_type') && o.get('product_type')) {
            var n = Ye(o.get('product_type'));
            0 !== n && (e += '&product_type='.concat(n));
          }
          !e.includes('vendor_code') &&
            o.get('sku') &&
            (e += '&vendor_code='.concat(encodeURIComponent(o.get('sku')))),
            !e.includes('supplier_url_path') &&
              o.get('supplier') &&
              e.includes('vendor_code') &&
              (e += '&supplier_url_path='.concat(o.get('supplier')));
        }
        return (
          !e.includes('prefilter') &&
            o.get('prefilter') &&
            (e += '&prefilter='.concat(encodeURIComponent(o.get('prefilter')))),
          !e.includes('page') &&
            o.get('page') &&
            (e += '&page='.concat(encodeURIComponent(o.get('page')))),
          e
        );
      },
      dt = function (e) {
        for (
          var t = Array.from(document.querySelectorAll('*')).filter(function (e) {
              return '2147483647' == window.getComputedStyle(e).getPropertyValue('z-index');
            }),
            o = 0;
          o < t.length;
          ++o
        ) {
          var n = t[o];
          n.id != e &&
            (n.style.setProperty('z-index', '2147483646', 'important'), (n.dataset.trampled = '1'));
        }
      },
      ct = function () {
        for (
          var e = Array.from(document.querySelectorAll('*')).filter(function (e) {
              return '1' == e.dataset.trampled;
            }),
            t = 0;
          t < e.length;
          ++t
        )
          e[t].style.setProperty('z-index', '2147483647');
      },
      ut = function (e, t, o) {
        if (e.productCodeMap && t in e.productCodeMap && 0 !== e.productCodeMap[t].length) {
          if (!o) return e.productCodeMap[t][0].product;
          for (var n = 0; n < e.productCodeMap[t].length; ++n)
            if (e.productCodeMap[t][n].productType === o) return e.productCodeMap[t][n].product;
        }
      },
      pt = function (e, t, o) {
        if (e.productCodeMap && t in e.productCodeMap && 0 !== e.productCodeMap[t].length)
          return []
            .concat(
              y(
                e.productCodeMap[t]
                  .filter(function (e) {
                    return e.productType === o;
                  })
                  .map(function (e) {
                    return e.product;
                  })
              ),
              y(
                e.productCodeMap[t]
                  .filter(function (e) {
                    return e.productType !== o;
                  })
                  .map(function (e) {
                    return e.product;
                  })
              )
            )
            .filter(function (e) {
              return Boolean(e);
            })
            .join(',');
      },
      ft = function () {
        var e = document.getElementById(D);
        e && e.parentNode && e.parentNode.removeChild(e),
          setTimeout(ct, 10),
          window._roomvo.previouslyFocusedElement &&
            (window._roomvo.previouslyFocusedElement.focus(),
            delete window._roomvo.previouslyFocusedElement);
      },
      mt = function () {
        var e = document.getElementById('roomvoMeasurement');
        e && e.parentNode && e.parentNode.removeChild(e), setTimeout(ct, 10);
      },
      ht = {
        entryType: 0,
        styleFn: void 0,
        popupId: '',
        afterLoad: void 0,
        createPopupFn: void 0,
        insertFn: function (e) {
          return document.body.appendChild(e);
        },
        shouldAddPopup: function (e) {
          return !0;
        },
        eventAction: '',
        eventLabel: ''
      },
      vt = t(
        t({}, ht),
        {},
        {
          styleFn: function (e, t) {
            t.style.setProperty('position', 'fixed', 'important'),
              t.style.setProperty('top', '0', 'important'),
              t.style.setProperty('left', '0', 'important'),
              t.style.setProperty('width', '100%', 'important'),
              t.style.setProperty('height', '100%', 'important'),
              t.style.setProperty('z-index', '2147483647', 'important'),
              (t.style.display = 'block'),
              (t.style.background = 'white url("'.concat(
                e.serverUrl,
                '/static/images/loading.gif") no-repeat center'
              ));
          },
          popupId: G,
          createPopupFn: function () {
            var e = at(G);
            return (
              (e.title = 'Roomvo Visualizer, Powered by Roomvo'),
              (e.ariaLabel = 'Roomvo Visualizer, Powered by Roomvo'),
              e.setAttribute('role', 'dialog'),
              e
            );
          },
          shouldAddPopup: function (e) {
            return (
              !(e.isWebGlNeeded() && !Se()) ||
              (alert(
                'Your browser or device does not support WebGL. Please try a different browser or device.'
              ),
              !1)
            );
          },
          afterLoad: function (e, t) {
            et(t), setTimeout(dt, 10, t.id);
          },
          eventAction: 'see this in my room'
        }
      ),
      gt =
        (t(t({}, vt), {}, { eventAction: 'open product catalog' }),
        t(t({}, vt), {}, { eventAction: 'open shopping cart' }),
        t(t({}, vt), {}, { eventAction: 'open surface designer' }),
        t(
          t({}, ht),
          {},
          {
            styleFn: function (e, t) {
              t.style.display = 'block';
            },
            popupId: H,
            createPopupFn: function () {
              var e = at(H);
              return e.setAttribute('allow', 'geolocation'), e;
            },
            afterLoad: function (e, t) {
              window.addEventListener('message', function (e) {
                e.data &&
                  e.data.action === fe &&
                  t.style.setProperty('height', ''.concat(e.data.height, 'px'), 'important');
              });
            },
            eventAction: 'open store locator'
          }
        ),
        t(
          t({}, ht),
          {},
          {
            styleFn: function (e, t) {
              (t.style.display = 'block'),
                (t.style.position = 'fixed'),
                (t.style.backgroundColor = '#FFFFFF'),
                (t.style.width = '90%'),
                (t.style.height = '90%'),
                (t.style.margin = 'auto 5%'),
                (t.style.border = 'none'),
                (t.style.top = '0px'),
                (t.style.right = '0px'),
                (t.style.bottom = '0px'),
                (t.style.left = '0px'),
                (t.style.boxShadow = '0px 0px 10px #999999'),
                t.style.setProperty('z-index', '2147483647', 'important');
            },
            popupId: D,
            createPopupFn: function () {
              return at(D);
            },
            afterLoad: function (e, t) {
              setTimeout(dt, 10, t.id);
            },
            eventAction: 'open product display'
          }
        ),
        function (e, t, o, n) {
          t &&
            (e.queuedProductCodeRequests.push({
              productCode: t,
              callback: o,
              callbackArguments: n,
              hasBeenSentOff: !1
            }),
            e.debouncedFetchProductCodeMappings ||
              (e.debouncedFetchProductCodeMappings = _e(yt, 50, !1)),
            e.debouncedFetchProductCodeMappings(e));
        }),
      yt = function (e) {
        for (
          var t = '?vendor__url_path='.concat(e.getVendorUrlPathForStimr()), o = new Set(), n = 0;
          n < e.queuedProductCodeRequests.length;
          ++n
        )
          e.queuedProductCodeRequests[n].hasBeenSentOff ||
            (o.add(e.queuedProductCodeRequests[n].productCode),
            (e.queuedProductCodeRequests[n].hasBeenSentOff = !0));
        var r = 0,
          i = {};
        (i[r] = []),
          o.forEach(function (e) {
            var t = i[r].concat(e);
            encodeURIComponent(ke(t)).length > 4e3 ? (i[++r] = [e]) : i[r].push(e);
          });
        for (var a = e.hasDesignerProducts ? '&has_designer_products=1' : '', s = 0; s <= r; ++s) {
          var l = '&vendor_code__in=' + encodeURIComponent(ke(i[s])),
            d = e.serverUrl + '/services/product/product_mappings/' + t + l + a,
            c = new XMLHttpRequest();
          (c.bucketIndex = s),
            c.open('GET', d, !0),
            (c.onreadystatechange = function () {
              4 == this.readyState &&
                200 == this.status &&
                (Pe(this.response).forEach(function (t) {
                  void 0 === e.productCodeMap[t.productCode] &&
                    (e.productCodeMap[t.productCode] = []),
                    e.productCodeMap[t.productCode].push(t);
                }),
                i[this.bucketIndex].forEach(function (t) {
                  void 0 === e.productCodeMap[t] && (e.productCodeMap[t] = []);
                  for (var o = e.queuedProductCodeRequests.length - 1; o >= 0; --o)
                    if (e.queuedProductCodeRequests[o].productCode == t) {
                      var n = e.queuedProductCodeRequests[o],
                        r =
                          !n.ignoreCallbackIfNotAvailable ||
                          (e.productCodeMap[t] && e.productCodeMap[t].length);
                      n.callback && r && n.callback.apply(null, n.callbackArguments),
                        e.queuedProductCodeRequests.splice(o, 1);
                    }
                }));
            }),
            c.send();
        }
      },
      bt = function (e, t, o, n, r, i, a, s) {
        null == r &&
          (r = function (e, t) {
            e.appendChild(t);
          }),
          (a = a || 'roomvo-button');
        var l = function () {
            Ae(e, 'About to add buttons to all containers');
            for (var t = document.querySelectorAll(o), n = 0; n < t.length; n++) {
              var r = '';
              try {
                r = e.getProductCode(t[n]);
              } catch (a) {
                Ae(e, 'Exception getting product code on ' + t[n].toString() + ': ' + a.toString());
                continue;
              }
              void 0 === e.productCodeMap[r]
                ? (Ae(e, 'Checking unknown: "' + r + '" on ' + t[n]), gt(e, r, d, [t[n], r, i]))
                : d(t[n], r, i);
            }
          },
          d = function (t, o, n) {
            !(function (o) {
              if (void 0 === e.productCodeMap[o])
                return Ae(e, 'ERROR: unknown, should not be: "' + o + '" on ' + t), !1;
              if (0 === e.productCodeMap[o].length)
                return (
                  /\u200b/.test(o)
                    ? Ae(
                        e,
                        'NOT available: "' +
                          o.replace(/\u200b/, '​') +
                          '" (zero space character detected) on ' +
                          t
                      )
                    : Ae(e, 'NOT available: "' + o + '" on ' + t),
                  !1
                );
              if (
                'roomvo-designer' === a &&
                e.productCodeMap[o].every(function (e) {
                  return !e.isDesignerCompatible;
                })
              )
                return Ae(e, 'Designer not available for ' + o), !1;
              if (
                'roomvo-product-display-button' === a &&
                e.productCodeMap[o].every(function (e) {
                  return !e.is3dProductDisplayable;
                })
              )
                return Ae(e, '3D product display not available for ' + o), !1;
              if (!n) return Ae(e, 'Available without product type: "' + o + '" on ' + t), !0;
              for (var r = 0; r < e.productCodeMap[o].length; ++r)
                if (e.productCodeMap[o][r].productType == n)
                  return Ae(e, 'Available for product type ' + n + ': "' + o + '" on ' + t), !0;
              return Ae(e, 'NOT available for product type ' + n + ': "' + o + '" on ' + t), !1;
            })(o)
              ? u(t)
              : (function (e) {
                  for (var t = e.querySelectorAll('.' + a), o = 0; o < t.length; ++o) {
                    var r = !('productType' in t[o].dataset) || n == t[o].dataset.productType;
                    if ('hidden' !== window.getComputedStyle(t[o]).visibility && r) return !0;
                  }
                  return !1;
                })(t) || c(t, o);
          },
          c = function (o, n) {
            var l = null;
            t ? ((l = t(e, i)), r(o, l)) : (l = o.querySelector('.' + a)),
              l
                ? ((l.style.visibility = 'visible'),
                  l.classList.add(a),
                  (l.dataset.active = 'true'),
                  (l.dataset.roomvoProductCode = n),
                  i && (l.dataset.productType = i),
                  (l.onclick = s),
                  wt(e, l),
                  Ae(e, 'Added button to ' + o))
                : Ae(e, 'Could not create or find existing button in ' + o);
          },
          u = function (o) {
            for (var n = o.querySelectorAll('.' + a), r = 0; r < n.length; ++r) {
              if (t)
                (!('productType' in n[r].dataset) || i == n[r].dataset.productType) &&
                  (n[r].parentNode.removeChild(n[r]), Ae(e, 'Removed button from ' + o));
              else
                (n[r].style.visibility = 'hidden'),
                  (n[r].dataset.active = 'false'),
                  Ae(e, 'Hid button inside ' + o);
            }
          },
          p = [o];
        n && p.push(n),
          Ae(e, 'Waiting for: ' + p.toString()),
          Le(document, p, function () {
            !(function (e, t, o) {
              if (e) {
                if (e.querySelector(t) && o()) return;
                new MutationObserver(function (n, r) {
                  for (var i = 0; i < n.length; ++i)
                    if (n[i].addedNodes)
                      for (var a = 0; a < n[i].addedNodes.length; ++a) {
                        var s = n[i].addedNodes[a];
                        if (s.matches && s.matches(t) && e.querySelector(t) && o())
                          return void r.disconnect();
                        if (s.querySelector && s.querySelector(t) && e.querySelector(t) && o())
                          return void r.disconnect();
                      }
                }).observe(e, { childList: !0, subtree: !0 });
              }
            })(document, o, l);
          });
      },
      wt = function (e, t) {
        (void 0 === t.tabIndex || null === t.tabIndex || t.tabIndex < 0) &&
          (t.tabIndex = e.getStimrTabIndex(t)),
          (t.onkeydown = function (e) {
            ('Enter' !== e.key && 'Space' !== e.key) || t.click();
          });
      },
      _t = function (e, t, o, n, r, i, s) {
        if (e.shouldShowStimrButtons()) {
          bt(e, t, o, n, r, i, W, function (t) {
            return (
              t.stopPropagation(),
              it(e, this, '', s, i),
              e.recordEvent(
                (function (e, t) {
                  var o,
                    n = t.appPath,
                    r = t.productCode,
                    i = t.productType,
                    s =
                      (a((o = {}), 'event_model_name', 'ClickedStimrButtonEvent'),
                      a(o, 'event_name', 'Clicked Stimr Button'),
                      a(o, 'app_path', n || ''),
                      a(o, 'locale', e.getLocale()),
                      a(o, 'page_type', e.pageType),
                      o);
                  return (s.product_type = i || 0), r && (s.product_code = r), s;
                })(e, {
                  appPath: '/',
                  productType: t.currentTarget.dataset.productType,
                  productCode: e.getProductCode(this)
                })
              ),
              !1
            );
          });
        }
      },
      kt = function (e) {
        var t;
        e.roomvoListeners.onKeydownInWindow ||
          (window.addEventListener('keydown', Pt), (e.roomvoListeners.onKeydownInWindow = Pt));
        var o =
            (a((t = {}), se, xt),
            a(t, ue, Ct),
            a(t, me, St),
            a(t, le, Lt),
            a(t, he, Lt),
            a(t, de, ft),
            a(t, pe, Ut),
            a(t, ce, Rt),
            a(t, ne, Ot),
            a(t, re, Tt),
            a(t, ie, At),
            a(t, ae, Nt),
            a(t, ve, mt),
            t),
          n = function (t) {
            t in e.roomvoListeners ||
              (!(function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [/^https?:\/\/.*\.roomvo\.com$/],
                  o = function () {
                    for (var o = arguments.length, n = new Array(o), r = 0; r < o; r++)
                      n[r] = arguments[r];
                    return t.some(function (e) {
                      return e.test(n[0].origin);
                    })
                      ? e.apply(void 0, n)
                      : null;
                  },
                  n = window.addEventListener ? 'addEventListener' : 'attachEvent';
                (0, window[n])('attachEvent' == n ? 'onmessage' : 'message', o, !1);
              })(function (e) {
                e && e.data && e.data.action && e.data.action === t && o[t](e);
              }),
              (e.roomvoListeners[t] = o[t]));
          };
        for (var r in o) n(r);
        e.roomvoListeners.handleHostNavigation ||
          (window.addEventListener('popstate', It), (e.roomvoListeners.handleHostNavigation = It));
      },
      Pt = function (e) {
        var t = document.getElementById(G);
        if ('Tab' === e.key && t && 'none' !== t.style.display && document.activeElement != t) {
          var o = { action: he };
          window.postMessage(o, '*');
        }
      },
      xt = function (e) {
        var t = jt(e.data.integratorVendorUrlPath);
        t.setVisitorId(e.data.vendorUrlPath, e.data.visitorId, { overwriteExisting: !0 }),
          t.setVendorId(e.data.vendorUrlPath, e.data.vendorId, { overwriteExisting: !0 });
      },
      Ct = function (e) {
        jt(e.data.integratorVendorUrlPath).addToCart(e.data.customData, e.data.eventExtra);
      },
      St = function (e) {
        jt(e.data.integratorVendorUrlPath).trackActionInHostAnalytics(
          e.data.eventAction,
          e.data.eventLabel,
          e.data.eventExtra
        );
      },
      Lt = function (e) {
        var t = document.getElementById(G);
        t && t.focus();
      },
      Ut = function (e) {
        var t = jt(e.data.integratorVendorUrlPath);
        rt(t, e.data.vendorUrlPath, e.data.vendorCode, '', '', e.data.productType);
      },
      It = function () {
        var e,
          t,
          o = window.history.state || {},
          n = o.roomvoPopupUrl,
          r = o.integratorVendorUrlPath;
        if (n && r) {
          var i = jt(r);
          ot(i, n);
        } else {
          var a =
            ((e = G), (t = document.getElementById(e)) && t.dataset.previousBodyStyleOverflow);
          a && (document.body.style.overflow = a),
            (function () {
              var e = document.getElementById(G);
              e && e.classList.contains('roomvo-popup--show')
                ? (e.addEventListener('transitionend', function () {
                    return e.parentNode.removeChild(e);
                  }),
                  e.classList.remove('roomvo-popup--show'))
                : e && e.parentNode && e.parentNode.removeChild(e),
                setTimeout(ct, 10);
            })();
        }
      },
      Rt = function () {
        var e = jt(event.data.integratorVendorUrlPath);
        Bt(e, 'write', { cookieName: $, cookieValue: !0 }), (e.agreedTermsOfUse = !0);
      },
      Ot = function (e) {
        var t = e.data.filters ? JSON.stringify(e.data.filters) : '',
          o = e.data.integratorVendorUrlPath,
          n = jt(o),
          r = n.visitorIds[o] || '',
          i = new URL(''.concat(n.serverUrl, '/my/').concat(o));
        i.searchParams.set('visitor_id', r),
          i.searchParams.set('locale', n.getLocale()),
          i.searchParams.set('product_id', e.data.productId),
          i.searchParams.set('iframe_id', j),
          i.searchParams.set('raw_prefilter', t),
          '[object AssistantIntegrator]' === n.toString() && i.searchParams.set('is_dealer', '1'),
          ot(n, i.href);
      },
      Tt = function (e) {
        document
          .getElementById(z)
          .style.setProperty('height', ''.concat(e.data.height, 'px'), 'important');
        var t = jt(e.data.integratorVendorUrlPath);
        e.data.isProductListOpen &&
          t._catalogScrollPosition &&
          (t._debouncedScroll ||
            (t._debouncedScroll = _e(
              function () {
                var e = g(t._catalogScrollPosition, 2),
                  o = e[0],
                  n = e[1];
                document.documentElement.scrollHeight < n ||
                  (window.scroll(window.pageXOffset, o), (t._catalogScrollPosition = null));
              },
              150,
              !1
            )),
          t._debouncedScroll());
      },
      At = function (e) {
        if (tt(z) && !tt(j)) {
          var t = jt(e.data.integratorVendorUrlPath);
          t._shouldRecordProductListScrollPosition &&
            (t._catalogScrollPosition = [
              window.pageYOffset,
              document.documentElement.scrollHeight
            ]),
            document.getElementById('catalog').scrollIntoView(!0),
            (t._shouldRecordProductListScrollPosition = !1);
          var o = new URL(window.location.href);
          o.searchParams.set('product_id', e.data.productId);
          var n = o.href !== window.location.href;
          window.history.replaceState(window.history.state, '', o.href),
            n && t.trackPageView && t.trackPageView();
        }
      },
      Nt = function (e) {
        if (tt(z) && !tt(j)) {
          var t = jt(e.data.integratorVendorUrlPath);
          t._shouldRecordProductListScrollPosition = !0;
          var o = new URL(window.location.href);
          (o.pathname = o.pathname.replace(/\/products\/.*/, '/products')),
            o.searchParams.delete('product_id');
          var n = o.href !== window.location.href;
          window.history.replaceState(window.history.state, '', o.href),
            n && t.trackPageView && t.trackPageView();
        }
      },
      Et = (function (e) {
        function o() {
          n(this, o),
            (this.serverUrl = 'https://www.roomvo.com'),
            (this.visitorIds = {}),
            (this.vendorUrlPath = void 0),
            (this.vendorIds = {}),
            (this.productCodeMap = {}),
            (this.productShareLinkMap = {}),
            (this.queuedProductCodeRequests = []),
            (this.queuedProductCodeRequestObjs = []),
            (this.hasDesignerProducts = !1),
            (this.prefilter = ''),
            (this.log = ''),
            (this.standaloneAutolauncherConfigs = [
              {
                urlRegexObj: /\/roomvo\/?$/i,
                autolaunchConfirmationUrlParameter: 'roomvoAutoStart',
                productCodeUrlParameter: 'sku',
                supplierUrlPathParameter: null,
                vendorSlugUrlParameter: 'vendor_slug',
                productTypeUrlParameter: 'product_type',
                prefilterUrlParameter: 'prefilter',
                standaloneFnName: 'startStandaloneVisualizer',
                requireConfirmation: !1
              },
              {
                urlRegexObj: /\/roomvo-catalog\/?$/i,
                autolaunchConfirmationUrlParameter: 'roomvoAutoStart',
                productCodeUrlParameter: 'sku',
                supplierUrlPathParameter: null,
                vendorSlugUrlParameter: 'vendor_slug',
                productTypeUrlParameter: 'product_type',
                prefilterUrlParameter: 'prefilter',
                standaloneFnName: 'startProductCatalog',
                requireConfirmation: !1
              },
              {
                urlRegexObj: /\/roomvo-surface-designer\/?$/i,
                autolaunchConfirmationUrlParameter: 'roomvoAutoStart',
                productCodeUrlParameter: 'sku',
                supplierUrlPathParameter: null,
                vendorSlugUrlParameter: 'vendor_slug',
                productTypeUrlParameter: 'product_type',
                standaloneFnName: 'startStandaloneSurfaceDesigner',
                requireConfirmation: !1
              },
              {
                urlRegexObj: /.*/i,
                requiredUrlParameters: ['roomvoStartKiosk'],
                autolaunchConfirmationUrlParameter: 'roomvoAutoStart',
                kioskPhysicalScannerUrlParameter: 'roomvoHasPhysicalScanner',
                standaloneFnName: 'startVisualizerInKioskMode',
                requireConfirmation: !1
              },
              {
                urlRegexObj: /.*/i,
                requiredUrlParameters: ['roomvoStartVisualizer'],
                autolaunchConfirmationUrlParameter: 'roomvoAutoStart',
                productCodeUrlParameter: 'sku',
                supplierUrlPathParameter: 'supplier',
                productTypeUrlParameter: 'product_type',
                prefilterUrlParameter: 'prefilter',
                vendorSlugUrlParameter: 'vendor_slug',
                standaloneFnName: 'startStandaloneVisualizer',
                requireConfirmation: !1
              }
            ]),
            (this.pageTypeRules = { regexes: new Map(), functions: new Map() }),
            (this.launchSequenceTimeoutDuration = 15e3),
            (this.launchSequenceLoaderBaseColor = '#818C98');
          var e = Bt(this, 'read/rewrite', { cookieName: Y });
          e && (this.visitorIds = Pe(e));
          var t = Bt(this, 'read/rewrite', { cookieName: J });
          t && (this.vendorIds = Pe(t));
          var r,
            i,
            a = Bt(this, 'read/rewrite', { cookieName: K });
          a && (this.vendorUrlPath = a),
            (this.agreedTermsOfUse = Boolean(Bt(this, 'read', { cookieName: $ }))),
            this.isInAbExperimentMode() &&
              ((r = this.getCookieExpiration()),
              Bt((i = this), 'check', { cookieName: X }) ||
                (Math.random() < 0.5
                  ? Bt(i, 'write', {
                      cookieName: X,
                      cookieValue: 'dontshow',
                      config: { cookieExpiration: r }
                    })
                  : Bt(i, 'write', {
                      cookieName: X,
                      cookieValue: 'show',
                      config: { cookieExpiration: r }
                    })));
        }
        return (
          i(o, [
            {
              key: Symbol.toStringTag,
              get: function () {
                return 'RoomvoIntegrator';
              }
            },
            {
              key: 'getVendorUrlPath',
              value: function () {
                return '';
              }
            },
            {
              key: 'shouldCommitVisitorToDb',
              value: function () {
                return !1;
              }
            },
            {
              key: 'getProductCode',
              value: function (e) {
                return 'code1';
              }
            },
            {
              key: 'autolauncherConfig',
              set: function (e) {
                var o = this,
                  n = this.standaloneAutolauncherConfigs.reduce(function (e, o) {
                    return (e[o.standaloneFnName] = t({}, o)), e;
                  }, {}),
                  r = [
                    'startStandaloneVisualizer',
                    'startProductCatalog',
                    'startStandaloneSurfaceDesigner',
                    'startVisualizerInKioskMode',
                    'addFavoriteProduct',
                    'removeFavoriteProduct'
                  ],
                  i = function (e) {
                    var i = e.standaloneFnName || 'startStandaloneVisualizer',
                      a = t(t({}, n[i]), e),
                      s = a.standaloneFnName;
                    if (r.includes(s)) {
                      var l = o.standaloneAutolauncherConfigs.find(function (e) {
                        return e.standaloneFnName === s;
                      });
                      if (l)
                        for (var d = 0, c = Object.keys(l); d < c.length; d++) {
                          var u = c[d];
                          l[u] = a[u];
                        }
                      else o.standaloneAutolauncherConfigs.push(a);
                    } else Ae(o, ''.concat(s, ' is not a permitted autolaunch function'));
                  };
                Array.isArray(e) ? e.forEach(i) : i(e);
              }
            },
            {
              key: 'getAppropriateAutolauncherConfig',
              value: function (e) {
                var t = this,
                  o = E(N());
                return this.standaloneAutolauncherConfigs.find(function (n) {
                  var r = n.urlRegexObj,
                    i = n.requiredUrlParameters,
                    a = n.autolaunchConfirmationUrlParameter,
                    s = n.vendorSlugUrlParameter,
                    l = n.requireConfirmation;
                  if (!r.test(o)) return !1;
                  var d = e.get(a) || '';
                  if (l && 'true' !== d.toLowerCase()) return !1;
                  var c = e.get(s) || '';
                  return (
                    (!c || c === t.getVendorUrlPath()) &&
                    (!i ||
                      i.every(function (t) {
                        return 'true' === (e.get(t) || '').toLowerCase();
                      }))
                  );
                });
              }
            },
            {
              key: 'processAutolaunchVisualizer',
              value: function () {
                var e = new URL(N().href).searchParams,
                  t = this.getAppropriateAutolauncherConfig(e);
                if (t) {
                  var o = t.productCodeUrlParameter,
                    n = t.supplierUrlPathParameter,
                    r = t.productTypeUrlParameter,
                    i = t.prefilterUrlParameter,
                    a = t.kioskPhysicalScannerUrlParameter,
                    s = t.standaloneFnName,
                    l = Ye(e.get(r)),
                    d = e.get(o),
                    c = e.get(a),
                    u = n && e.get(n),
                    p = u && d ? '&supplier_url_path='.concat(u) : '';
                  'true' === c && (p += '&has_physical_scanner=1');
                  var f = i && e.get(i),
                    m = f ? { prefilter: f } : {};
                  this[s](l, d, p, m);
                }
              }
            },
            {
              key: 'processAddToCartUrlParameter',
              value: function () {
                var e = new URL(N().href);
                if (e.searchParams.has(Z) && A(document.referrer) === A(this.serverUrl)) {
                  var t = e.searchParams.get(Z);
                  e.searchParams.delete(Z),
                    window.history.replaceState(null, '', e.href),
                    this.addToCart({ productCode: t });
                }
              }
            },
            { key: 'onBodyLoaded', value: function () {} },
            { key: 'registerIntegratorConfigs', value: function () {} },
            {
              key: 'pageType',
              get: function () {
                var e = y(this.pageTypeRules.functions.entries()).find(function (e) {
                    return (0, g(e, 2)[1])();
                  }),
                  t = y(this.pageTypeRules.regexes.entries()).find(function (e) {
                    return (0, g(e, 2)[1])();
                  });
                return e ? e[0] : t ? t[0] : 'ANY_PAGE';
              }
            },
            {
              key: 'isWebGlNeeded',
              value: function () {
                return !0;
              }
            },
            {
              key: 'getVendorUrlPathForStimr',
              value: function () {
                return this.getVendorUrlPath();
              }
            },
            {
              key: 'getLocale',
              value: function () {
                return 'en-us';
              }
            },
            {
              key: 'getLocalizedStringOverrides',
              value: function () {
                return {};
              }
            },
            {
              key: 'getStimrButtonText',
              value: function (e) {
                return 'See It In My Room';
              }
            },
            {
              key: 'getCookieExpiration',
              value: function () {
                return 'Fri, 31 Dec 9999 23:59:59 GMT';
              }
            },
            {
              key: 'getCookieDomain',
              value: function () {
                return '';
              }
            },
            {
              key: 'getStimrTabIndex',
              value: function (e) {
                return 0;
              }
            },
            { key: 'addToCart', value: function (e, t) {} },
            {
              key: 'isInAbExperimentMode',
              value: function () {
                return !1;
              }
            },
            {
              key: 'isRoomvoCookieDisabled',
              value: function () {
                return Boolean(window.isRoomvoCookieDisabled);
              }
            },
            {
              key: 'shouldShowStimrButtons',
              value: function () {
                return !this.isInAbExperimentMode() || 'dontshow' !== xe(this);
              }
            },
            {
              key: 'shouldShowDesignerButtons',
              value: function () {
                return this.hasDesignerProducts;
              }
            },
            {
              key: 'shouldShowMeasurementButton',
              value: function () {
                return !1;
              }
            },
            {
              key: 'trackActionInHostAnalytics',
              value: function (e, t, o) {
                var n = (window.dataLayer || []).some(function (e) {
                  return 'config' === e[0] && e[1].startsWith('G-');
                });
                try {
                  n && window.gtag('event', e, { event_category: 'Roomvo', event_label: t });
                } catch (a) {}
                try {
                  for (var r = window.ga.getAll(), i = 0; i < r.length; ++i)
                    r[i].send('event', 'Roomvo', e, t);
                } catch (a) {}
              }
            },
            {
              key: 'recordEvent',
              value: function (e) {
                var t,
                  o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  n =
                    (a((t = {}), 'visitor_id', this.visitorIds[this.getVendorUrlPath()]),
                    a(t, 'device_type', be()),
                    a(t, 'entry_type', 0),
                    t),
                  r = this.vendorIds[this.getVendorUrlPath()];
                r && (n.vendor_id = r), (e = Object.assign({}, n, e));
                var i = new FormData();
                for (var s in e) void 0 !== e[s] && null !== e[s] && i.append(s, e[s]);
                var l = new XMLHttpRequest();
                l.open('POST', this.serverUrl + '/services/event/events/', !0),
                  l.send(i),
                  o && this.trackActionInHostAnalytics(e.event_name, '', e);
              }
            },
            {
              key: 'debug',
              value: function () {
                for (
                  var e = this, t = document.querySelectorAll('.roomvo-stimr'), o = 0, n = 0;
                  n < t.length;
                  ++n
                )
                  'hidden' === t[n].style.visibility && ++o;
                console.log(t.length + ' STIMRs on page, ' + o + ' hidden.'),
                  console.log(this.log.split('\n').length + ' lines in log.');
                var r = this.getProductCode();
                r &&
                  (console.log('Product code on page: ' + r),
                  gt(this, r, function () {
                    e.productCodeMap[r] && 0 !== e.productCodeMap[r].length
                      ? console.log('Available: '.concat(r))
                      : console.log('Not available: '.concat(r));
                  }));
              }
            },
            {
              key: 'startStandalone',
              value: function () {
                it(this);
              }
            },
            {
              key: 'startStandaloneSurfaceDesigner',
              value: function (e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                  n = Ye(e);
                it(this, void 0, '/surface_designer', o, 0 === n ? '' : n, t);
              }
            },
            {
              key: 'startVisualizerInKioskMode',
              value: function (e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                  n = Ye(e);
                it(this, void 0, '/kiosk', (o += '&is_in_kiosk_mode=1'), 0 === n ? '' : n, t);
              }
            },
            {
              key: 'startStandaloneVisualizer',
              value: function (e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                  n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  r = this.prefilter;
                n.prefilter && (this.prefilter = n.prefilter);
                var i = Ye(e);
                it(this, void 0, void 0, o, 0 === i ? '' : i, t),
                  n.prefilter && (this.prefilter = r);
              }
            },
            {
              key: 'startProductCatalog',
              value: function (e, t) {
                var o = this,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                  i = function (t, i, a) {
                    var s = ut(t, a, Ye(i)),
                      l = Ye(e);
                    s ||
                      ((n += a ? '&vendor_code='.concat(encodeURIComponent(a)) : ''),
                      (n += 0 !== l ? '&product_type='.concat(Ye(i)) : '')),
                      r.prefilter && (n += '&prefilter='.concat(r.prefilter)),
                      st(o, n, s);
                  };
                !t || (this.productCodeMap && t in this.productCodeMap)
                  ? i(this, e, t)
                  : gt(this, t, i, [this, e, t]);
              }
            },
            {
              key: 'convertProductType',
              value: function (e) {
                return Ye(e);
              }
            },
            {
              key: 'setVisitorId',
              value: function (e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  n = o.overwriteExisting,
                  r = void 0 !== n && n;
                Mt(this, e, 'visitorIds', Y, t, r);
              }
            },
            {
              key: 'setVendorId',
              value: function (e, t) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  n = o.overwriteExisting,
                  r = void 0 !== n && n;
                Mt(this, e, 'vendorIds', J, t, r);
              }
            },
            {
              key: 'addFavoriteProduct',
              value: function (e, t) {
                var o = new FormData();
                o.append('visitor', this.visitorIds[this.getVendorUrlPath()]),
                  o.append('vendor', this.vendorIds[this.getVendorUrlPath()]),
                  o.append('sku', e),
                  o.append('product_type', Ye(t)),
                  fetch(''.concat(this.serverUrl, '/api/visitor_favorites/by_sku/'), {
                    method: 'post',
                    body: o
                  });
              }
            },
            {
              key: 'removeFavoriteProduct',
              value: function (e, t) {
                var o = new FormData();
                o.append('visitor', this.visitorIds[this.getVendorUrlPath()]),
                  o.append('vendor', this.vendorIds[this.getVendorUrlPath()]),
                  o.append('sku', e),
                  o.append('product_type', Ye(t)),
                  fetch(''.concat(this.serverUrl, '/api/visitor_favorites/by_sku/'), {
                    method: 'delete',
                    body: o
                  });
              }
            },
            {
              key: 'vendorLogoUrl',
              get: function () {
                var e = new URL('/services/vendor/themes/asset/', this.serverUrl);
                return (
                  e.searchParams.append('vendor_url_path', this.getVendorUrlPath()),
                  e.searchParams.append('asset_name', 'my_landing_page_logo_background_image'),
                  e.searchParams.append('locale', this.getLocale()),
                  e
                );
              }
            },
            {
              key: 'shouldShowLaunchSequence',
              get: function () {
                return !0;
              }
            }
          ]),
          o
        );
      })(),
      Ft = function (e, t) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = new XMLHttpRequest();
        n.open('POST', e.serverUrl + '/api/visitors/', !0),
          n.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        var r = {};
        e.getVendorUrlPath() && (r.vendor_url_path = e.getVendorUrlPath()),
          (r.locale = e.getLocale()),
          (r.tracking_code = xe(e)),
          (r.top_level_domain = F.getTopLevelHostname()),
          (r.next_level_domain = F.getNextLevelHostname()),
          (r.device_type = be()),
          e.shouldCommitVisitorToDb() && (r.commit_to_db = !0),
          (n.onreadystatechange = function () {
            if (4 === this.readyState && 201 === this.status) {
              var o = Pe(this.responseText),
                n = o.vendorUrlPath;
              e.setVisitorId(n, o.id, { overwriteExisting: !1 }),
                e.setVendorId(n, o.vendorId, { overwriteExisting: !1 }),
                t && t(o);
            }
          }),
          o && o.timeout && ((n.timeout = o.timeout), o.ontimeout && (n.ontimeout = o.ontimeout)),
          n.send(JSON.stringify(r));
      },
      Mt = function (e, t, o, n, r, i) {
        we(e[o]) && (e[o] = {});
        var a = Bt(e, 'read', { cookieName: n });
        a && (e[o] = Pe(a)),
          r && ((!i && t in e[o]) || (e[o][t] = r)),
          Bt(e, 'write', { cookieName: n, cookieValue: ke(e[o]) });
      },
      Bt = function (e, t, o) {
        if (!e.isRoomvoCookieDisabled()) {
          var n = { cookieExpiration: e.getCookieExpiration(), domain: e.getCookieDomain() },
            r = o.cookieName,
            i = o.cookieValue,
            a = o.config,
            s = void 0 === a ? {} : a,
            l = Object.assign({}, n, s);
          switch (t.toLowerCase()) {
            case 'write':
              return q(r, i, l);
            case 'read':
              return M(r);
            case 'read/rewrite':
              var d = M(r);
              return d && q(r, d, l), d;
            case 'check':
              return (function (e) {
                return void 0 !== M(e);
              })(r);
          }
        }
        return Ae(e, 'Accessing cookies is not permitted.'), null;
      },
      qt = function (e) {
        if (e.getVendorUrlPath() in window._roomvo) {
          var t = window._roomvo[e.getVendorUrlPath()];
          if (e.toString() === t.toString()) return;
        }
        (window._roomvo[e.getVendorUrlPath()] = e),
          Ae(e, 'Roomvo log begins...'),
          e.getVendorUrlPath() &&
            (window.roomvo.startStandalone ||
              (window.roomvo.startStandalone = function (e) {
                jt(e).startStandalone();
              }),
            window.roomvo.startStandaloneVisualizer ||
              (window.roomvo.startStandaloneVisualizer = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                  t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                var n = jt(t.splice(2, 1)[0]);
                n.startStandaloneVisualizer.apply(n, y(t));
              }),
            window.roomvo.startProductCatalog ||
              (window.roomvo.startProductCatalog = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                  t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                var n = jt(t.splice(2, 1)[0]);
                n.startProductCatalog.apply(n, y(t));
              }),
            window.roomvo.startStandaloneSurfaceDesigner ||
              (window.roomvo.startStandaloneSurfaceDesigner = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                  t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                var n = jt(t.splice(2, 1)[0]);
                n.startStandaloneSurfaceDesigner.apply(n, y(t));
              }),
            window.roomvo.addFavoriteProduct ||
              (window.roomvo.addFavoriteProduct = function (e, t, o) {
                jt(o).addFavoriteProduct(e, t);
              }),
            window.roomvo.removeFavoriteProduct ||
              (window.roomvo.removeFavoriteProduct = function (e, t, o) {
                jt(o).removeFavoriteProduct(e, t);
              })),
          kt(window._roomvo),
          Ee(e),
          we(e.visitorIds) || !(e.getVendorUrlPath() in e.visitorIds)
            ? Ft(
                e,
                function () {
                  Vt(e);
                },
                {
                  timeout: 1e4,
                  ontimeout: function () {
                    Vt(e);
                  }
                }
              )
            : Vt(e);
      },
      Vt = function (e) {
        var t = function () {
          Dt(e) && e.processAddToCartUrlParameter(),
            e.processAutolaunchVisualizer(),
            e.onBodyLoaded(),
            e.registerIntegratorConfigs();
        };
        document.body ? t() : document.addEventListener('DOMContentLoaded', t);
      },
      jt = function (e) {
        var t = Object.values(window._roomvo).filter(function (e) {
          return e.toString().endsWith('Integrator]');
        });
        return e
          ? window._roomvo[e] ||
              t.find(function (e) {
                return '[object AssistantIntegrator]' === e.toString();
              }) ||
              t.find(Dt) ||
              t[0]
          : t.find(Dt) || t[0];
      },
      zt = function () {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return (
          1 === t.length &&
            t[0] instanceof Object &&
            '[object Object]' === Object.prototype.toString.call(t[0]) &&
            (t = [
              t[0].productType,
              t[0].productCode,
              t[0].vendorUrlPath,
              t[0].extraParams,
              t[0].options
            ]),
          t
        );
      },
      Dt = function (e) {
        return '[object RoomvoIntegrator]' === e.toString();
      },
      Ht = '[data-role="roomvo"]',
      Gt = 'div[data-code="sku"].value',
      Wt = (function (e) {
        s(o, e);
        var t = m(o);
        function o() {
          return n(this, o), t.apply(this, arguments);
        }
        return (
          i(o, [
            {
              key: 'getVendorUrlPath',
              value: function () {
                return 'luxuryflooringandfurnishingscouk';
              }
            },
            {
              key: 'getProductCode',
              value: function (e) {
                return (
                  (function (e) {
                    var t = (
                      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document
                    ).querySelector(e);
                    return t && t.innerText ? t.innerText.trim() : '';
                  })(Gt) || ''
                );
              }
            },
            {
              key: 'getLocale',
              value: function () {
                return 'en-gb';
              }
            },
            {
              key: 'getStimrButtonText',
              value: function (e) {
                return 'Try out our Room Visualiser';
              }
            },
            {
              key: 'isWebGlNeeded',
              value: function () {
                return !1;
              }
            },
            {
              key: 'onBodyLoaded',
              value: function () {
                var e = this;
                if (E(N()).includes('/checkout/onepage/success')) this._notifyConversion();
                else {
                  var t = function () {
                    _t(e, e._createStimr, Ht, Gt);
                  };
                  Le(document, [Ht], function () {
                    new MutationObserver(t).observe(document.querySelector(Ht), {
                      childList: !0,
                      subtree: !0
                    }),
                      t();
                  });
                }
              }
            },
            {
              key: '_createStimr',
              value: function (e) {
                var t = document.createElement('div');
                (t.style.cursor = 'pointer'),
                  (t.style.paddingTop = '10px'),
                  (t.style.paddingBottom = '10px'),
                  (t.style.display = 'flex'),
                  (t.style.alignItems = 'center'),
                  (t.style.justifyContent = 'center'),
                  (t.style.backgroundColor = '#e5e5e5'),
                  (t.style.width = '100%'),
                  (t.style.zIndex = '1000');
                var o = document.createElement('div');
                (o.innerText = e.getStimrButtonText(e.getLocale())),
                  (o.style.display = 'inline-block'),
                  (o.style.fontFamily = 'Raleway, sans-serif'),
                  (o.style.fontSize = '18px');
                var n = document.createElement('img');
                (n.src = ''.concat(
                  e.serverUrl,
                  '/services/vendor/vendor_images/luxuryflooringandfurnishingscouk/roomvo_icon.png'
                )),
                  (n.style.height = '25px'),
                  (n.style.marginRight = '10px');
                var r = document.createElement('div');
                (r.style.display = 'inline-block'),
                  r.appendChild(n),
                  t.appendChild(r),
                  t.appendChild(o);
                var i = document.createElement('div');
                (i.style.position = 'relative'),
                  (i.style.marginTop = '10px'),
                  (i.style.width = '100%'),
                  i.appendChild(t);
                var a = Ie();
                return (
                  a &&
                    a.insertRule(
                      '@media (max-width: 350px) {\n                .roomvo-stimr {\n                    margin-top: 0 !important;\n                } }',
                      0
                    ),
                  i
                );
              }
            },
            {
              key: '_notifyConversion',
              value: function () {
                var e = this,
                  t = 'div.c-thank-you > div.c-text-block p';
                Le(document, [t], function () {
                  !(function (e, t, o, n, r, i, a) {
                    var s = new XMLHttpRequest();
                    s.open('POST', e.serverUrl + '/api/notify_conversion', !0);
                    var l = new FormData(),
                      d = e.getVendorUrlPath();
                    l.append('visitor_id', e.visitorIds[d]),
                      l.append('vendor_url_path', d),
                      l.append('vendor_codes', r || ''),
                      l.append('quantities', i || ''),
                      l.append('prices', a || ''),
                      l.append('total', o || ''),
                      l.append('currency', n || ''),
                      l.append('transaction_id', t || ''),
                      s.send(l);
                  })(e, e._parseTransactionId(t));
                });
              }
            },
            {
              key: '_parseTransactionId',
              value: function (e) {
                for (
                  var t = /Your order # is: ([0-9]+)\./, o = document.querySelectorAll(e), n = 0;
                  n < o.length;
                  n++
                ) {
                  var r = o[n].innerText.match(t);
                  if (r) return r[1];
                }
                return null;
              }
            },
            {
              key: 'trackActionInHostAnalytics',
              value: function (e, t, n) {
                v(l(o.prototype), 'trackActionInHostAnalytics', this).call(this, e, t, n);
                try {
                  (window.dataLayer = window.dataLayer || []),
                    window.dataLayer.push({ event: 'Roomvo', event_action: e, event_label: t });
                } catch (r) {}
              }
            }
          ]),
          o
        );
      })(Et);
    !(function (e) {
      if (
        !(
          ((t = window.navigator) &&
            !RegExp(ge.join('|'), 'i').test(t.userAgent) &&
            new RegExp(
              [
                'bot|googlebot|googleweblight|spider|robot|crawl|baidu|bing|msn',
                '|duckduckgo|teoma|slurp|yandex|lighthouse|sitecrawl|linguee',
                '|schemabot|indeedbot|opendi|optimizer|nssprerendersproxy',
                '|headlesschrome|ghostsinspector|restsharp|woorankreview|screamingfrogseospider'
              ].join(''),
              'i'
            ).test(t.userAgent) &&
            !(function (e) {
              return !!e && e.userAgent.includes('RoomvoBot');
            })(window.navigator)) ||
          (function (e) {
            return !!e && (e.userAgent.indexOf('MSIE') > 0 || e.userAgent.indexOf('Trident/') > -1);
          })(window.navigator)
        )
      ) {
        var t;
        window._roomvo ||
          ((window._roomvo = {}),
          Object.defineProperty(window._roomvo, 'roomvoListeners', { value: {} })),
          window.roomvo || ((window.roomvo = {}), (window.ffViz = window.roomvo));
        var o = new e();
        o.getVendorUrlPath()
          ? qt(o)
          : Ft(o, function (e) {
              (o.vendorUrlPath = e.vendorUrlPath),
                Bt(o, 'write', { cookieName: K, cookieValue: o.vendorUrlPath }),
                qt(o);
            });
      }
    })(Wt);
  })();

export default lib;
