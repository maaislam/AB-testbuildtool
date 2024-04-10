const lib = () =>
  !(function () {
    function e(e, t) {
      const o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        let n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter((t) => {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          o.push.apply(o, n);
      }
      return o;
    }
    function t(t) {
      for (let o = 1; o < arguments.length; o++) {
        var n = arguments[o] != null ? arguments[o] : {
};
        o % 2
          ? e(Object(n), !0).forEach((e) => {
              a(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : e(Object(n)).forEach((e) => {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
      }
      return t;
    }
    function o(e) {
      return (
        (o =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === 'function' &&
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
      for (let o = 0; o < t.length; o++) {
        const n = t[o];
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
        Object.defineProperty(e, 'prototype', {
 writable: !1
}),
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
      if (typeof t !== 'function' && t !== null) throw new TypeError('Super expression must either be null or a function');
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
 value: e, writable: !0, configurable: !0
}
      })),
        Object.defineProperty(e, 'prototype', {
 writable: !1
}),
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
      if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if (typeof Proxy === 'function') return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
      } catch (e) {
        return !1;
      }
    }
    function u(e, t, o) {
      return (
        (u = c()
          ? Reflect.construct.bind()
          : function (e, t, o) {
              const n = [null];
              n.push.apply(n, t);
              const r = new (Function.bind.apply(e, n))();
              return o && d(r, o.prototype), r;
            }),
        u.apply(null, arguments)
      );
    }
    function p(e) {
      const t = typeof Map === 'function' ? new Map() : void 0;
      return (
        (p = function (e) {
          if (e === null || ((o = e), Function.toString.call(o).indexOf('[native code]') === -1)) return e;
          let o;
          if (typeof e !== 'function') throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return u(e, arguments, l(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
 value: n, enumerable: !1, writable: !0, configurable: !0
}
            })),
            d(n, e)
          );
        }),
        p(e)
      );
    }
    function f(e, t) {
      if (t && (typeof t === 'object' || typeof t === 'function')) return t;
      if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
      return (function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e));
    }
    function m(e) {
      const t = c();
      return function () {
        let o;
          const n = l(e);
        if (t) {
          const r = l(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else o = n.apply(this, arguments);
        return f(this, o);
      };
    }
    function h(e, t) {
      for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = l(e)) !== null;);
      return e;
    }
    function v() {
      return (
        (v =
          typeof Reflect !== 'undefined' && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, o) {
                const n = h(e, t);
                if (n) {
                  const r = Object.getOwnPropertyDescriptor(n, t);
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
        }(e)) ||
        (function (e, t) {
          let o =
            e == null
              ? null
              : (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
          if (o != null) {
            let n;
              let r;
              let i;
              let a;
              const s = [];
              let l = !0;
              let d = !1;
            try {
              if (((i = (o = o.call(e)).next), t === 0)) {
                if (Object(o) !== o) return;
                l = !1;
              } else for (; !(l = (n = i.call(o)).done) && (s.push(n.value), s.length !== t); l = !0);
            } catch (c) {
              (d = !0), (r = c);
            } finally {
              try {
                if (!l && o.return != null && ((a = o.return()), Object(a) !== a)) return;
              } finally {
                if (d) throw r;
              }
            }
            return s;
          }
        }(e, t)) ||
        b(e, t) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }())
      );
    }
    function y(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return w(e);
        }(e)) ||
        (function (e) {
          if (
            (typeof Symbol !== 'undefined' && e[Symbol.iterator] != null) ||
            e['@@iterator'] != null
          ) return Array.from(e);
        }(e)) ||
        b(e) ||
        (function () {
          throw new TypeError(
            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }())
      );
    }
    function b(e, t) {
      if (e) {
        if (typeof e === 'string') return w(e, t);
        let o = Object.prototype.toString.call(e).slice(8, -1);
        return (
          o === 'Object' && e.constructor && (o = e.constructor.name),
          o === 'Map' || o === 'Set'
            ? Array.from(e)
            : o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
            ? w(e, t)
            : void 0
        );
      }
    }
    function w(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
      return n;
    }
    function _(e) {
      const t = (function (e, t) {
        if (typeof e !== 'object' || e === null) return e;
        const o = e[Symbol.toPrimitive];
        if (void 0 !== o) {
          const n = o.call(e, t || 'default');
          if (typeof n !== 'object') return n;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (t === 'string' ? String : Number)(e);
      }(e, 'string'));
      return typeof t === 'symbol' ? t : String(t);
    }
    let k;
      let P;
      let x;
      let C;
      let S;
      let L;
      let U;
      let I;
      let R;
      let O;
      let T;
      const A = function (e) {
        const t = document.createElement('a');
        return (t.href = e), t.hostname;
      };
      const N = function () {
        return window.roomvoLocation ? window.roomvoLocation : window.location;
      };
      const E = function (e) {
        return (function (e) {
          const t = document.createElement('a');
          t.href = e;
          let o = t.pathname;
          return o.length > 0 && o[0] != '/' && (o = `/${o}`), o;
        }(decodeURIComponent(e.href)));
      };
      const F = new ((function () {
        function e() {
          n(this, e);
        }
        return (
          i(e, [
            {
              key: 'getUrl',
              value() {
                return new URL(window.location.href);
              }
            },
            {
              key: 'getNextLevelUrl',
              value() {
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
              value() {
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
              value() {
                const e = this.getUrl();
                return e ? e.hostname : '';
              }
            },
            {
              key: 'getNextLevelHostname',
              value() {
                const e = this.getNextLevelUrl();
                return e ? e.hostname : '';
              }
            },
            {
              key: 'getTopLevelHostname',
              value() {
                const e = this.getTopLevelUrl();
                return e ? e.hostname : '';
              }
            }
          ]),
          e
        );
      })())();
      const M = function (e) {
        return B()[e];
      };
      var B = function () {
        for (var e = {
}, t = document.cookie.split(';'), o = 0; o < t.length; ++o) {
          const n = t[o].trim();
            const r = n.indexOf('=');
          if (r !== -1) {
            const i = n.substring(0, n.indexOf('='));
              const a = n.substring(r + 1);
            e[i] = a;
          }
        }
        return e;
      };
      const q = function (e, t) {
        const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
          const n = o.cookieExpiration ? o.cookieExpiration : 'Fri, 31 Dec 9999 23:59:59 GMT';
          const r = [''.concat(e, '=').concat(t), 'expires='.concat(n), 'path=/', ''.concat(V())];
        o.domain && r.push('domain='.concat(o.domain)), (document.cookie = r.join('; '));
      };
      var V = function () {
        return F.getUrl().protocol === 'https:' ? 'SameSite=None; Secure' : 'SameSite=Lax';
      };
      const j = 'ffPopup';
      const z = 'roomvoProductCatalog';
      const D = 'roomvoProductDisplay';
      const H = 'roomvoStoreLocator';
      const G = j;
      const W = 'roomvo-stimr';
      const Z = 'roomvo_add_to_cart';
      const J = 'ffvendorids';
      const Y = 'ffvisitorids';
      const K = 'ffvendorurlpath';
      const X = 'fftrackingcode';
      const $ = 'ffagreedtermsofuse';
      const Q = 'roomvoLaunchSequenceRecentUseFlag';
      const ee = 'roomvoLaunchSequence';
      const te =
        ((k = {
}),
        a(k, 0, 'unknown'),
        a(k, 1, 'floor'),
        a(k, 2, 'rug'),
        a(k, 3, 'furniture'),
        a(k, 4, 'countertop'),
        a(k, 5, 'wall'),
        a(k, 6, 'cabinet'),
        a(k, 7, 'wall_decor'),
        a(k, 8, 'ceiling'),
        k);
      const oe = {
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
      };
      const ne =
        ((x = {
}),
        a(x, 0, 'none'),
        a(x, 1, 'standalone'),
        a(x, 2, 'product_integration'),
        (C = {
}),
        a(C, 0, 'desktop'),
        a(C, 1, 'touch'),
        a(C, 2, 'kiosk'),
        'roomvoOpenProductVisualizer');
      const re = 'roomvoResizeCatalog';
      const ie = 'roomvoOpenProductPage';
      const ae = 'roomvoOpenCatalog';
      const se = 'ffSaveVisitor';
      const le = 'ffFocusPopup';
      const de = 'roomvoCloseProductDisplay';
      const ce = 'roomvoAgreeToTermsOfUse';
      const ue = 'roomvoAddToCart';
      const pe = 'roomvoLoadPopupFromProductDisplay';
      const fe = 'resizeStoreLocatorIframe';
      const me = 'ffTrack';
      const he = 'roomvoFocusIframe';
      const ve = 'roomvoCloseMeasurement';
      const ge = ['roomvobot', 'googlebot', 'bingbot'];
      const ye = new RegExp(
        [
          '(android|bb\\d+|meego).+mobile|avantgo|bada/|blackberry',
          '|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp',
          '|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker',
          '|pocket|psp|series(4|6)0|symbian|treo|up.(browser|link)|vodafone|wap|windows ce|xda',
          '|xiino|android|ipad|playbook|silk'
        ].join(''),
        'i'
      );
      const be = function () {
        let e; let
t;
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
      };
      const we = function (e) {
        for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return ke(e) === ke({
});
      };
      const _e = function (e, t, o) {
        let n;
        return function () {
          const r = this;
            const i = arguments;
            const a = o && !n;
          clearTimeout(n),
            (n = setTimeout(() => {
              (n = null), o || e.apply(r, i);
            }, t)),
            a && e.apply(r, i);
        };
      };
      var ke = function (e) {
        return !JSON.stringify && JSON.serialize ? JSON.serialize(e) : JSON.stringify(e);
      };
      const Pe = function (e) {
        return !JSON.parse && JSON.deserialize ? JSON.deserialize(e) : JSON.parse(e);
      };
      const xe = function (e) {
        return Bt(e, 'read', {
 cookieName: X
}) || '';
      };
      const Ce = {
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
      };
      const Se = function () {
        try {
          const e = document.createElement('canvas');
          if ((e.getContext('webgl') || e.getContext('experimental-webgl')) == null) throw 'nowebgl';
        } catch (t) {
          return !1;
        }
        return !0;
      };
      const Le = function (e, t, o) {
        Ue(e, t, o);
      };
      var Ue = function e(t, o, n) {
        !(function (e, t) {
          if (!e) return !1;
          for (let o = 0; o < t.length; ++o) if (!e.querySelector(t[o])) return !1;
          return !0;
        }(t, o))
          ? setTimeout(e, 60, t, o, n)
          : n();
      };
      const Ie = function () {
        const e = (function () {
          const e = function (e) {
            return !e.roomvo;
          };
          if (Array.prototype.slice.call(document.styleSheets).every(e)) {
            const t = document.createElement('style');
            t.appendChild(document.createTextNode('')), document.head.appendChild(t);
            const o = t.sheet;
            return (o.roomvo = !0), o;
          }
        }());
        return (
          e ||
          y(document.styleSheets).find((e) => {
            return e.roomvo;
          })
        );
      };
      const Re = function (e, t) {
        t || (t = Ie());
        let o;
          const n = (function (e, t) {
            let o = (typeof Symbol !== 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
            if (!o) {
              if (Array.isArray(e) || (o = b(e)) || (t && e && typeof e.length === 'number')) {
                o && (e = o);
                let n = 0;
                  const r = function () {};
                return {
                  s: r,
                  n() {
                    return n >= e.length ? {
 done: !0
} : {
 done: !1, value: e[n++]
};
                  },
                  e(e) {
                    throw e;
                  },
                  f: r
                };
              }
              throw new TypeError(
                'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            }
            let i;
              let a = !0;
              let s = !1;
            return {
              s() {
                o = o.call(e);
              },
              n() {
                const e = o.next();
                return (a = e.done), e;
              },
              e(e) {
                (s = !0), (i = e);
              },
              f() {
                try {
                  a || o.return == null || o.return();
                } finally {
                  if (s) throw i;
                }
              }
            };
          }(Oe(e)));
        try {
          for (n.s(); !(o = n.n()).done;) {
            const r = o.value;
            t.insertRule(r, t.cssRules.length);
          }
        } catch (i) {
          n.e(i);
        } finally {
          n.f();
        }
        return t;
      };
      var Oe = function (e) {
        for (var t = [], o = 0; o < e.length; o++) {
          let n = 1;
            let r = e[o];
            const i = r[0];
            let a = '';
          Array.isArray(r[1][0]) && ((r = r[1]), (n = 0));
          for (let s = r.length; n < s; n++) {
            const l = r[n];
            a += ''
              .concat(l[0], ': ')
              .concat(l[1])
              .concat(l[2] ? ' !important' : '', ';\n');
          }
          t.push(''.concat(i, '{').concat(a, '}'));
        }
        return t;
      };
      const Te = function (e) {
        Object.keys(Ce).forEach((t) => {
          e.style.setProperty(t, Ce[t], 'important');
        });
      };
      const Ae = function (e, t) {
        try {
          e.log.length + t.length < 1e6
            ? (e.log += `${t}\n`)
            : e.log.endsWith('.....\n') || (e.log += '.....\n');
        } catch (o) {
          e.log = o.toString();
        }
      };
      const Ne =
        (a((S = {
}), 0, 'shade.unknown'),
        a(S, 1, 'shade.light'),
        a(S, 2, 'shade.medium'),
        a(S, 3, 'shade.dark'),
        a((L = {
}), 0, 'color.unknown'),
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
        a((U = {
}), 0, 'unknown'),
        a(U, 1, 'floor'),
        a(U, 2, 'rug'),
        a(U, 3, 'furniture'),
        a(U, 4, 'countertop'),
        a(U, 5, 'wall'),
        a(U, 6, 'cabinet'),
        a(U, 7, 'wall_decor'),
        a(U, 8, 'ceiling'),
        a((I = {
}), 1, 'Floors'),
        a(I, 2, 'Rugs'),
        a(I, 3, 'Furniture'),
        a(I, 4, 'Countertops'),
        a(I, 5, 'Walls'),
        a(I, 6, 'Cabinets'),
        a(I, 7, 'Wall Decors'),
        a(I, 8, 'Ceilings'),
        a((R = {
}), 19, 'Area Rugs'),
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
        a((O = {
}), 0, 'Warm White'),
        a(O, 1, 'Soft White'),
        a(O, 2, 'Daylight'),
        a(O, 3, 'Crystal White'),
        'en-us');
      const Ee =
        (a((T = {
}), 0, 'pricing_unit.unspecified'),
        a(T, 1, 'pricing_unit.each'),
        a(T, 2, 'pricing_unit.square_meter'),
        a(T, 3, 'pricing_unit.square_foot'),
        a(T, 4, 'pricing_unit.pallet'),
        a(T, 5, 'pricing_unit.box'),
        function (e) {
          for (
            var t = {
 ...oe
},
              o = e.getLocalizedStringOverrides(),
              n = 0,
              r = Object.entries(o);
            n < r.length;
            n++
          ) {
            const i = g(r[n], 2);
              const a = i[0];
              const s = i[1];
            a === Ne ? Object.assign(t['en-us'], s) : (t[a] = s);
          }
          return (e._localizedStrings = t), null;
        });
      const Fe = function (e) {
        const t = {
 alpha: 255
};
        if ((e = e.replace('#', '')).length === 3) {
          const o = function (e) {
            return parseInt(e + e, 16);
          };
          (t.red = parseInt(o(e.slice(0, 1)))),
            (t.green = parseInt(o(e.slice(1, 2)))),
            (t.blue = parseInt(o(e.slice(2, 3))));
        } else {
          if (e.length !== 6) return;
          (t.red = parseInt(e.slice(0, 2), 16)),
            (t.green = parseInt(e.slice(2, 4), 16)),
            (t.blue = parseInt(e.slice(4, 6), 16));
        }
        return t;
      };
      const Me = function (e) {
        const t = e.toString('16');
        return t.length === 1 ? `0${t}` : t;
      };
      const Be = function (e, t) {
        const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50;
        return (
          (e = Fe(e)),
          (t = Fe(t)),
          `#${
            ['red', 'green', 'blue']
              .map((n) => {
                return Me(Math.round(t[n] + (e[n] - t[n]) * (o / 100)));
              })
              .join('')}`
        );
      };
      const qe = function (e, t) {
        return Be('#FFFFFF', e, t);
      };
      const Ve = function (e, t) {
        return Be('#000000', e, t);
      };
      const je = (function (e) {
        s(r, e);
        const t = m(r);
        function r() {
          let e;
          return (
            n(this, r),
            (e = t.call(this)).attachShadow({
 mode: 'open'
}),
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
                value() {
                  this.styleNode || (this.styleNode = document.createElement('style')),
                    (this.styleNode.textContent = this.cssRules),
                    this.shadowRoot.appendChild(this.styleNode);
                }
              },
              {
                key: 'addCssRules',
                value(e) {
                  this.cssRules += Oe(e).join('\n');
                }
              },
              {
                key: 'connectedCallback',
                value() {
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
                value(e, t, o) {
                  if (this.isConnected) {
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
                }
              },
              {
                key: 'updateDisplay',
                value(e) {
                  const t = this.shadowRoot.firstChild;
                  this.shouldHide !== null
                    ? (e ||
                        this.shadowRoot.addEventListener(
                          'transitionend',
                          () => {
                            t.style.display = 'none';
                          },
                          {
 once: !0
}
                        ),
                      t.classList.add('roomvo-launch-sequence--hide'))
                    : ((t.style.display = 'grid'),
                      window.requestAnimationFrame(() => {
                        return t.classList.remove('roomvo-launch-sequence--hide');
                      }));
                }
              },
              {
                key: 'create',
                value() {
                  const e = this.createModal();
                  e.append(this.createContent()), e.append(this.createRoomvoBranding());
                  const t = this.createContainer();
                  return t.append(e), this.shadowRoot.append(t), t;
                }
              },
              {
                key: 'createModal',
                value() {
                  const e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__modal');
                  const t = [
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
                value() {
                  const e = this;
                  (this.contentNode = document.createElement('div')),
                    this.contentNode.classList.add('roomvo-launch-sequence__content');
                  const t = [
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
                    if (typeof t !== 'function' || !e || o(e) !== 'object') throw new Error('Invalid Arguments');
                    document.querySelector(
                      'meta[name="viewport"][content*="device-width"][content*="initial-scale=1"]'
                    ) ||
                      document.head.insertAdjacentHTML(
                        'beforeend',
                        '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />'
                      ),
                      t(e),
                      !0 !== (e == null ? void 0 : e.isListenedTo) &&
                        ((e.isListenedTo = !0),
                        'addEventListener' in e
                          ? e.addEventListener('change', t)
                          : e.addListener(t));
                  }(window.matchMedia('(min-width: 600px)'), (t) => {
                    e.contentNode.style.setProperty(
                      'padding',
                      t.matches ? '12.5vh 0' : '7.5vh 0',
                      'important'
                    );
                  })),
                    (this.logoNode = this.createLogo()),
                    this.logoNode && this.contentNode.append(this.logoNode),
                    (this.textNode = this.createText()),
                    this.textNode && this.contentNode.append(this.textNode);
                  const n = this.createLoader();
                  return n && this.contentNode.append(n), this.contentNode;
                }
              },
              {
                key: 'createLogo',
                value() {
                  if (!this.src) return null;
                  const e = document.createElement('div');
                  e.style.setProperty('max-width', '70%');
                  const t = document.createElement('img');
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
                value() {
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
                value() {
                  if (!this.text) return null;
                  const e = document.createElement('p');
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
                value() {
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
                value() {
                  const e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__loader-cubes');
                  const t = [
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
                value() {
                  let e;
                    const t = (e = this.color) !== null && void 0 !== e ? e : '#818C98';
                    const o = Ve.bind(null, t);
                    const n = [qe.bind(null, t)(10), o(10), o(42), o(30)];
                    const r = [
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
                value() {
                  this.cssRules.replaceAll(/path\.cube[\s\S]*?\}/g, ''),
                    this.colorLoader(),
                    this.applyCssRules();
                }
              },
              {
                key: 'animateLoader',
                value(e) {
                  const t = this;
                    const o = [
                      ['.'.concat(e, '>.loader-cubes__cube'), ['position', 'absolute']],
                      [
                        [
                          'loader-cubes__four',
                          'loader-cubes__one',
                          'loader-cubes__three',
                          'loader-cubes__two'
                        ]
                          .map((t) => {
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
                    ].forEach((e) => {
                      return (t.cssRules += e);
                    });
                }
              },
              {
                key: 'createRoomvoBranding',
                value() {
                  const e = document.createElement('p');
                  e.style.setProperty('font', 'normal normal normal 0.875rem/1.25rem Sans-Serif'),
                    e.style.setProperty('text-align', 'center'),
                    e.style.setProperty('color', '#818C98'),
                    e.style.setProperty('margin-bottom', '0.3rem'),
                    (e.innerText = 'Powered by ');
                  const t = document.createElement('strong');
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
                value() {
                  const e = document.createElement('div');
                  e.classList.add('roomvo-launch-sequence__container');
                  const t = [
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
                get() {
                  return ['color', 'hide', 'src', 'text'];
                }
              }
            ]
          ),
          r
        );
      }(p(HTMLElement)));
      const ze = function (e) {
        let t;
          const o = document.getElementById(ee) || Ze(e);
        o.hasAttribute('hide') &&
          window.requestAnimationFrame(() => {
            return o.removeAttribute('hide');
          }),
          ((t = o.dataset) !== null && void 0 !== t && t.closingTimerId) ||
            (o.dataset.closingTimerId = setTimeout(He, e.launchSequenceTimeoutDuration, e)),
          (o.dataset.startTime = Date.now());
      };
      const De = function () {
        let e;
          const t = document.getElementById(ee);
        t &&
          (t.setAttribute('hide', ''),
          ((e = t.dataset) === null || void 0 === e ? void 0 : e.closingTimerId) !== 'null' &&
            (clearTimeout(t.dataset.closingTimerId), delete t.dataset.closingTimerId));
      };
      var He = function (e) {
        document.getElementById(G).addEventListener('transitionend', De, {
 once: !0
}),
          We(e) ? setTimeout(Qe, Ge()) : Qe();
      };
      var Ge = function () {
        let e;
          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
          const o =
            Number(
              (e = document.getElementById(ee).dataset) === null || void 0 === e
                ? void 0
                : e.startTime
            ) || 0;
        return Math.max(o + t - Date.now(), 0);
      };
      var We = function (e) {
        const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          const o = !Bt(e, 'check', {
 cookieName: Q
});
          const n = new Date();
        n.setTime(n.getTime() + 60 * t * 60 * 1e3);
        const r = n.toUTCString();
        return (
          Bt(e, 'write', {
 cookieName: Q,
cookieValue: '',
config: {
 cookieExpiration: r
}
}), o
        );
      };
      var Ze = function (e) {
        void 0 === window.customElements.get('launch-sequence') &&
          window.customElements.define('launch-sequence', je);
        const t = document.createElement('launch-sequence');
        return (
          (t.id = ee),
          t.setAttribute('src', e.vendorLogoUrl),
          t.setAttribute('text', Je(e)),
          t.setAttribute('color', e.launchSequenceLoaderBaseColor),
          t.setAttribute('hide', ''),
          document.body.append(t),
          t
        );
      };
      var Je = function (e) {
        return (
          Ee(e),
          (function (e, t) {
            const o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              const n = e.getLocale();
            if (n in e._localizedStrings && t in e._localizedStrings[n]) return e._localizedStrings[n][t];
            const r = Object.keys(e._localizedStrings);
              const i = function (e) {
                return e.split('-')[0];
              };
              const a = r.map(i).indexOf(i(n));
            if (a !== -1) {
              let s;
                const l = (s = e._localizedStrings[r[a]]) === null || void 0 === s ? void 0 : s[t];
              if (l) return l;
            }
            return o ? '' : t in e._localizedStrings['en-us'] ? e._localizedStrings['en-us'][t] : t;
          }(e, 'Loading...', !0))
        );
      };
      const Ye = function (e) {
        return ['number', 'string'].includes(o(e))
          ? !isNaN(e) && Number.isInteger(parseFloat(e))
            ? e in te
              ? parseInt(e)
              : 0
            : parseInt(
                Object.keys(te).find((t) => {
                  return te[t] === e;
                })
              ) || 0
          : 0;
      };
      const Ke = function () {
        if (!document.getElementById(G)) {
          const e = document.createElement('iframe');
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
      };
      const Xe = function (e) {
        let t;
        if (
          (e.style.setProperty('background-color', ''),
          e.style.setProperty('box-shadow', ''),
          e.style.setProperty('transform', ''),
          e.style.setProperty('transition', ''),
          e.style.setProperty('transition-delay', ''),
          e.style.setProperty('transition-duration', ''),
          e.style.setProperty('transition-property', ''),
          e.style.setProperty('transition-timing-function', ''),
          ((t = document.head.dataset) === null || void 0 === t ? void 0 : t.popupStylized) !==
            'true')
        ) {
          const o = [
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
      };
      const $e = function (e, t) {
        t == null ||
          t.addEventListener(
            'load',
            () => {
              return He(e);
            },
            {
 once: !0
}
          );
      };
      var Qe = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        e || (e = document.getElementById(G)),
          e.classList.contains('roomvo-popup--loading') &&
            (e.classList.remove('roomvo-popup--loading'),
            (e.ariaHidden = !1),
            window.requestAnimationFrame(() => {
              e.classList.add('roomvo-popup--show');
            }));
      };
      const et = function (e) {
        try {
          const t = window.getComputedStyle(document.body).getPropertyValue('overflow');
          t !== 'hidden' &&
            ((e.dataset.previousBodyStyleOverflow = t), (document.body.style.overflow = 'hidden'));
        } catch (o) {}
      };
      const tt = function (e) {
        const t = document.getElementById(e);
        return !!t && t && t.src && t.contentWindow;
      };
      const ot = function (e, t) {
        const o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!e.isWebGlNeeded() || Se()) {
          if (((t = new URL(t)), window.location.href == 'about:srcdoc')) return t.searchParams.delete('visitor_id'), void window.open(t.href);
          t.searchParams.set('domain', F.getTopLevelHostname()),
            t.searchParams.set('is_in_top_window', 0),
            !o ||
              (window.history.state && window.history.state.roomvoPopupUrl) ||
              (t.searchParams.set('use_history_padding', 0),
              window.history.pushState(
                {
 roomvoPopupUrl: t.href, integratorVendorUrlPath: e.getVendorUrlPath()
},
                ''
              )),
            Ke();
          const n = document.getElementById(G);
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
        } else {
 alert(
            'Your browser or device does not support WebGL. Please try a different browser or device.'
          );
}
      };
      const nt = function () {
        let e; let t; let
o;
        return ((t = N()), (o = 'originator'), (e = new URL(t.href).searchParams.get(o))) !==
          null && void 0 !== e
          ? e
          : '';
      };
      const rt = function (e, t, o, n, r, i) {
        (void 0 !== n && n !== '') || (n = '/'), void 0 === r && (r = ''), i == null && (i = '');
        const a = e.visitorIds[t] || '';
          let s =
            `${e.serverUrl
            }/my/${
            t
            }${n
            }?visitor_id=${
            encodeURIComponent(a)
            }&tracking_code=${
            encodeURIComponent(xe(e))
            }&locale=${
            encodeURIComponent(e.getLocale())
            }&prefilter=${
            encodeURIComponent(e.prefilter)
            }${r
            }&iframe_id=` +
            `ffPopup&originator=${
            encodeURIComponent(nt())}`;
        (function () {
          try {
            return window.self !== window.top;
          } catch (e) {
            return !0;
          }
        }()) || (s += '&use_host_navigation=1'),
          e.agreedTermsOfUse && (s += '&agreed_terms_of_use=1');
        const l = pt(e, o, i);
        (s += l
          ? `&product_ids=${encodeURIComponent(l)}`
          : `&vendor_code=${encodeURIComponent(o)}&product_type=${encodeURIComponent(i)}`),
          ot(e, s),
          e.trackActionInHostAnalytics('see this in my room', o);
      };
      const it = function (e, t, o, n, r, i) {
        try {
          i = i || e.getProductCode(t);
        } catch (a) {
          i = '';
        }
        rt(e, e.getVendorUrlPathForStimr(), i, o, n, r);
      };
      const at = function (e) {
        const t = document.createElement('iframe');
        return (
          Te(t),
          t.style.setProperty('display', 'none', 'important'),
          (t.id = e),
          (t.type = 'text/html'),
          (t.allow = 'clipboard-write'),
          t
        );
      };
      const st = function (e, t, o) {
        const n = e.getVendorUrlPath();
          const r = e.visitorIds[n] || '';
        t = lt(t, o);
        let i =
          `${e.serverUrl
          }/my/${
          n
          }/catalog?visitor_id=${
          encodeURIComponent(r)
          }&tracking_code=${
          encodeURIComponent(xe(e))
          }&locale=${
          encodeURIComponent(e.getLocale())
          }${t
          }&iframe_id=${
          G}`;
        o && (i += `&product_id=${o}`), ot(e, i);
      };
      var lt = function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          const t = arguments.length > 1 ? arguments[1] : void 0;
          const o = new URL(N().href).searchParams;
        if (!t) {
          if (!e.includes('product_type') && o.get('product_type')) {
            const n = Ye(o.get('product_type'));
            n !== 0 && (e += '&product_type='.concat(n));
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
      };
      var dt = function (e) {
        for (
          let t = Array.from(document.querySelectorAll('*')).filter((e) => {
              return window.getComputedStyle(e).getPropertyValue('z-index') == '2147483647';
            }),
            o = 0;
          o < t.length;
          ++o
        ) {
          const n = t[o];
          n.id != e &&
            (n.style.setProperty('z-index', '2147483646', 'important'), (n.dataset.trampled = '1'));
        }
      };
      const ct = function () {
        for (
          let e = Array.from(document.querySelectorAll('*')).filter((e) => {
              return e.dataset.trampled == '1';
            }),
            t = 0;
          t < e.length;
          ++t
        ) e[t].style.setProperty('z-index', '2147483647');
      };
      const ut = function (e, t, o) {
        if (e.productCodeMap && t in e.productCodeMap && e.productCodeMap[t].length !== 0) {
          if (!o) return e.productCodeMap[t][0].product;
          for (let n = 0; n < e.productCodeMap[t].length; ++n) if (e.productCodeMap[t][n].productType === o) return e.productCodeMap[t][n].product;
        }
      };
      var pt = function (e, t, o) {
        if (e.productCodeMap && t in e.productCodeMap && e.productCodeMap[t].length !== 0) {
 return []
            .concat(
              y(
                e.productCodeMap[t]
                  .filter((e) => {
                    return e.productType === o;
                  })
                  .map((e) => {
                    return e.product;
                  })
              ),
              y(
                e.productCodeMap[t]
                  .filter((e) => {
                    return e.productType !== o;
                  })
                  .map((e) => {
                    return e.product;
                  })
              )
            )
            .filter((e) => {
              return Boolean(e);
            })
            .join(',');
}
      };
      const ft = function () {
        const e = document.getElementById(D);
        e && e.parentNode && e.parentNode.removeChild(e),
          setTimeout(ct, 10),
          window._roomvo.previouslyFocusedElement &&
            (window._roomvo.previouslyFocusedElement.focus(),
            delete window._roomvo.previouslyFocusedElement);
      };
      const mt = function () {
        const e = document.getElementById('roomvoMeasurement');
        e && e.parentNode && e.parentNode.removeChild(e), setTimeout(ct, 10);
      };
      const ht = {
        entryType: 0,
        styleFn: void 0,
        popupId: '',
        afterLoad: void 0,
        createPopupFn: void 0,
        insertFn(e) {
          return document.body.appendChild(e);
        },
        shouldAddPopup(e) {
          return !0;
        },
        eventAction: '',
        eventLabel: ''
      };
      const vt = t(
        t({
}, ht),
        {
},
        {
          styleFn(e, t) {
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
          createPopupFn() {
            const e = at(G);
            return (
              (e.title = 'Roomvo Visualizer, Powered by Roomvo'),
              (e.ariaLabel = 'Roomvo Visualizer, Powered by Roomvo'),
              e.setAttribute('role', 'dialog'),
              e
            );
          },
          shouldAddPopup(e) {
            return (
              !(e.isWebGlNeeded() && !Se()) ||
              (alert(
                'Your browser or device does not support WebGL. Please try a different browser or device.'
              ),
              !1)
            );
          },
          afterLoad(e, t) {
            et(t), setTimeout(dt, 10, t.id);
          },
          eventAction: 'see this in my room'
        }
      );
      const gt =
        (t(t({
}, vt), {
}, {
 eventAction: 'open product catalog'
}),
        t(t({
}, vt), {
}, {
 eventAction: 'open shopping cart'
}),
        t(t({
}, vt), {
}, {
 eventAction: 'open surface designer'
}),
        t(
          t({
}, ht),
          {
},
          {
            styleFn(e, t) {
              t.style.display = 'block';
            },
            popupId: H,
            createPopupFn() {
              const e = at(H);
              return e.setAttribute('allow', 'geolocation'), e;
            },
            afterLoad(e, t) {
              window.addEventListener('message', (e) => {
                e.data &&
                  e.data.action === fe &&
                  t.style.setProperty('height', ''.concat(e.data.height, 'px'), 'important');
              });
            },
            eventAction: 'open store locator'
          }
        ),
        t(
          t({
}, ht),
          {
},
          {
            styleFn(e, t) {
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
            createPopupFn() {
              return at(D);
            },
            afterLoad(e, t) {
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
        });
      var yt = function (e) {
        for (
          var t = '?vendor__url_path='.concat(e.getVendorUrlPathForStimr()), o = new Set(), n = 0;
          n < e.queuedProductCodeRequests.length;
          ++n
        ) {
 e.queuedProductCodeRequests[n].hasBeenSentOff ||
            (o.add(e.queuedProductCodeRequests[n].productCode),
            (e.queuedProductCodeRequests[n].hasBeenSentOff = !0));
}
        let r = 0;
          const i = {
};
        (i[r] = []),
          o.forEach((e) => {
            const t = i[r].concat(e);
            encodeURIComponent(ke(t)).length > 4e3 ? (i[++r] = [e]) : i[r].push(e);
          });
        for (let a = e.hasDesignerProducts ? '&has_designer_products=1' : '', s = 0; s <= r; ++s) {
          const l = `&vendor_code__in=${encodeURIComponent(ke(i[s]))}`;
            const d = `${e.serverUrl}/services/product/product_mappings/${t}${l}${a}`;
            const c = new XMLHttpRequest();
          (c.bucketIndex = s),
            c.open('GET', d, !0),
            (c.onreadystatechange = function () {
              this.readyState == 4 &&
                this.status == 200 &&
                (Pe(this.response).forEach((t) => {
                  void 0 === e.productCodeMap[t.productCode] &&
                    (e.productCodeMap[t.productCode] = []),
                    e.productCodeMap[t.productCode].push(t);
                }),
                i[this.bucketIndex].forEach((t) => {
                  void 0 === e.productCodeMap[t] && (e.productCodeMap[t] = []);
                  for (let o = e.queuedProductCodeRequests.length - 1; o >= 0; --o) {
 if (e.queuedProductCodeRequests[o].productCode == t) {
                      const n = e.queuedProductCodeRequests[o];
                        const r =
                          !n.ignoreCallbackIfNotAvailable ||
                          (e.productCodeMap[t] && e.productCodeMap[t].length);
                      n.callback && r && n.callback.apply(null, n.callbackArguments),
                        e.queuedProductCodeRequests.splice(o, 1);
                    }
}
                }));
            }),
            c.send();
        }
      };
      const bt = function (e, t, o, n, r, i, a, s) {
        r == null &&
          (r = function (e, t) {
            e.appendChild(t);
          }),
          (a = a || 'roomvo-button');
        const l = function () {
            Ae(e, 'About to add buttons to all containers');
            for (let t = document.querySelectorAll(o), n = 0; n < t.length; n++) {
              let r = '';
              try {
                r = e.getProductCode(t[n]);
              } catch (a) {
                Ae(e, `Exception getting product code on ${t[n].toString()}: ${a.toString()}`);
                continue;
              }
              void 0 === e.productCodeMap[r]
                ? (Ae(e, `Checking unknown: "${r}" on ${t[n]}`), gt(e, r, d, [t[n], r, i]))
                : d(t[n], r, i);
            }
          };
          var d = function (t, o, n) {
            !(function (o) {
              if (void 0 === e.productCodeMap[o]) return Ae(e, `ERROR: unknown, should not be: "${o}" on ${t}`), !1;
              if (e.productCodeMap[o].length === 0) {
 return (
                  /\u200b/.test(o)
                    ? Ae(
                        e,
                        `NOT available: "${
                          o.replace(/\u200b/, '​')
                          }" (zero space character detected) on ${
                          t}`
                      )
                    : Ae(e, `NOT available: "${o}" on ${t}`),
                  !1
                );
}
              if (
                a === 'roomvo-designer' &&
                e.productCodeMap[o].every((e) => {
                  return !e.isDesignerCompatible;
                })
              ) return Ae(e, `Designer not available for ${o}`), !1;
              if (
                a === 'roomvo-product-display-button' &&
                e.productCodeMap[o].every((e) => {
                  return !e.is3dProductDisplayable;
                })
              ) return Ae(e, `3D product display not available for ${o}`), !1;
              if (!n) return Ae(e, `Available without product type: "${o}" on ${t}`), !0;
              for (let r = 0; r < e.productCodeMap[o].length; ++r) if (e.productCodeMap[o][r].productType == n) return Ae(e, `Available for product type ${n}: "${o}" on ${t}`), !0;
              return Ae(e, `NOT available for product type ${n}: "${o}" on ${t}`), !1;
            }(o))
              ? u(t)
              : (function (e) {
                  for (let t = e.querySelectorAll(`.${a}`), o = 0; o < t.length; ++o) {
                    const r = !('productType' in t[o].dataset) || n == t[o].dataset.productType;
                    if (window.getComputedStyle(t[o]).visibility !== 'hidden' && r) return !0;
                  }
                  return !1;
                }(t)) || c(t, o);
          };
          var c = function (o, n) {
            let l = null;
            t ? ((l = t(e, i)), r(o, l)) : (l = o.querySelector(`.${a}`)),
              l
                ? ((l.style.visibility = 'visible'),
                  l.classList.add(a),
                  (l.dataset.active = 'true'),
                  (l.dataset.roomvoProductCode = n),
                  i && (l.dataset.productType = i),
                  (l.onclick = s),
                  wt(e, l),
                  Ae(e, `Added button to ${o}`))
                : Ae(e, `Could not create or find existing button in ${o}`);
          };
          var u = function (o) {
            for (let n = o.querySelectorAll(`.${a}`), r = 0; r < n.length; ++r) {
              if (t) {
 (!('productType' in n[r].dataset) || i == n[r].dataset.productType) &&
                  (n[r].parentNode.removeChild(n[r]), Ae(e, `Removed button from ${o}`));
} else {
 (n[r].style.visibility = 'hidden'),
                  (n[r].dataset.active = 'false'),
                  Ae(e, `Hid button inside ${o}`);
}
            }
          };
          const p = [o];
        n && p.push(n),
          Ae(e, `Waiting for: ${p.toString()}`),
          Le(document, p, () => {
            !(function (e, t, o) {
              if (e) {
                if (e.querySelector(t) && o()) return;
                new MutationObserver((n, r) => {
                  for (let i = 0; i < n.length; ++i) {
 if (n[i].addedNodes) {
 for (let a = 0; a < n[i].addedNodes.length; ++a) {
                        const s = n[i].addedNodes[a];
                        if (s.matches && s.matches(t) && e.querySelector(t) && o()) return void r.disconnect();
                        if (s.querySelector && s.querySelector(t) && e.querySelector(t) && o()) return void r.disconnect();
                      }
}
}
                }).observe(e, {
 childList: !0, subtree: !0
});
              }
            }(document, o, l));
          });
      };
      var wt = function (e, t) {
        (void 0 === t.tabIndex || t.tabIndex === null || t.tabIndex < 0) &&
          (t.tabIndex = e.getStimrTabIndex(t)),
          (t.onkeydown = function (e) {
            (e.key !== 'Enter' && e.key !== 'Space') || t.click();
          });
      };
      const _t = function (e, t, o, n, r, i, s) {
        if (e.shouldShowStimrButtons()) {
          bt(e, t, o, n, r, i, W, function (t) {
            return (
              t.stopPropagation(),
              it(e, this, '', s, i),
              e.recordEvent(
                (function (e, t) {
                  let o;
                    const n = t.appPath;
                    const r = t.productCode;
                    const i = t.productType;
                    const s =
                      (a((o = {
}), 'event_model_name', 'ClickedStimrButtonEvent'),
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
      };
      const kt = function (e) {
        let t;
        e.roomvoListeners.onKeydownInWindow ||
          (window.addEventListener('keydown', Pt), (e.roomvoListeners.onKeydownInWindow = Pt));
        const o =
            (a((t = {
}), se, xt),
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
            t);
          const n = function (t) {
            t in e.roomvoListeners ||
              (!(function (e) {
                const t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [/^https?:\/\/.*\.roomvo\.com$/];
                  const o = function () {
                    for (var o = arguments.length, n = new Array(o), r = 0; r < o; r++) n[r] = arguments[r];
                    return t.some((e) => {
                      return e.test(n[0].origin);
                    })
                      ? e.apply(void 0, n)
                      : null;
                  };
                  const n = window.addEventListener ? 'addEventListener' : 'attachEvent';
                (0, window[n])(n == 'attachEvent' ? 'onmessage' : 'message', o, !1);
              }((e) => {
                e && e.data && e.data.action && e.data.action === t && o[t](e);
              })),
              (e.roomvoListeners[t] = o[t]));
          };
        for (const r in o) n(r);
        e.roomvoListeners.handleHostNavigation ||
          (window.addEventListener('popstate', It), (e.roomvoListeners.handleHostNavigation = It));
      };
      var Pt = function (e) {
        const t = document.getElementById(G);
        if (e.key === 'Tab' && t && t.style.display !== 'none' && document.activeElement != t) {
          const o = {
 action: he
};
          window.postMessage(o, '*');
        }
      };
      var xt = function (e) {
        const t = jt(e.data.integratorVendorUrlPath);
        t.setVisitorId(e.data.vendorUrlPath, e.data.visitorId, {
 overwriteExisting: !0
}),
          t.setVendorId(e.data.vendorUrlPath, e.data.vendorId, {
 overwriteExisting: !0
});
      };
      var Ct = function (e) {
        jt(e.data.integratorVendorUrlPath).addToCart(e.data.customData, e.data.eventExtra);
      };
      var St = function (e) {
        jt(e.data.integratorVendorUrlPath).trackActionInHostAnalytics(
          e.data.eventAction,
          e.data.eventLabel,
          e.data.eventExtra
        );
      };
      var Lt = function (e) {
        const t = document.getElementById(G);
        t && t.focus();
      };
      var Ut = function (e) {
        const t = jt(e.data.integratorVendorUrlPath);
        rt(t, e.data.vendorUrlPath, e.data.vendorCode, '', '', e.data.productType);
      };
      var It = function () {
        let e;
          let t;
          const o = window.history.state || {
};
          const n = o.roomvoPopupUrl;
          const r = o.integratorVendorUrlPath;
        if (n && r) {
          const i = jt(r);
          ot(i, n);
        } else {
          const a =
            ((e = G), (t = document.getElementById(e)) && t.dataset.previousBodyStyleOverflow);
          a && (document.body.style.overflow = a),
            (function () {
              const e = document.getElementById(G);
              e && e.classList.contains('roomvo-popup--show')
                ? (e.addEventListener('transitionend', () => {
                    return e.parentNode.removeChild(e);
                  }),
                  e.classList.remove('roomvo-popup--show'))
                : e && e.parentNode && e.parentNode.removeChild(e),
                setTimeout(ct, 10);
            }());
        }
      };
      var Rt = function () {
        const e = jt(event.data.integratorVendorUrlPath);
        Bt(e, 'write', {
 cookieName: $, cookieValue: !0
}), (e.agreedTermsOfUse = !0);
      };
      var Ot = function (e) {
        const t = e.data.filters ? JSON.stringify(e.data.filters) : '';
          const o = e.data.integratorVendorUrlPath;
          const n = jt(o);
          const r = n.visitorIds[o] || '';
          const i = new URL(''.concat(n.serverUrl, '/my/').concat(o));
        i.searchParams.set('visitor_id', r),
          i.searchParams.set('locale', n.getLocale()),
          i.searchParams.set('product_id', e.data.productId),
          i.searchParams.set('iframe_id', j),
          i.searchParams.set('raw_prefilter', t),
          n.toString() === '[object AssistantIntegrator]' && i.searchParams.set('is_dealer', '1'),
          ot(n, i.href);
      };
      var Tt = function (e) {
        document
          .getElementById(z)
          .style.setProperty('height', ''.concat(e.data.height, 'px'), 'important');
        const t = jt(e.data.integratorVendorUrlPath);
        e.data.isProductListOpen &&
          t._catalogScrollPosition &&
          (t._debouncedScroll ||
            (t._debouncedScroll = _e(
              () => {
                const e = g(t._catalogScrollPosition, 2);
                  const o = e[0];
                  const n = e[1];
                document.documentElement.scrollHeight < n ||
                  (window.scroll(window.pageXOffset, o), (t._catalogScrollPosition = null));
              },
              150,
              !1
            )),
          t._debouncedScroll());
      };
      var At = function (e) {
        if (tt(z) && !tt(j)) {
          const t = jt(e.data.integratorVendorUrlPath);
          t._shouldRecordProductListScrollPosition &&
            (t._catalogScrollPosition = [
              window.pageYOffset,
              document.documentElement.scrollHeight
            ]),
            document.getElementById('catalog').scrollIntoView(!0),
            (t._shouldRecordProductListScrollPosition = !1);
          const o = new URL(window.location.href);
          o.searchParams.set('product_id', e.data.productId);
          const n = o.href !== window.location.href;
          window.history.replaceState(window.history.state, '', o.href),
            n && t.trackPageView && t.trackPageView();
        }
      };
      var Nt = function (e) {
        if (tt(z) && !tt(j)) {
          const t = jt(e.data.integratorVendorUrlPath);
          t._shouldRecordProductListScrollPosition = !0;
          const o = new URL(window.location.href);
          (o.pathname = o.pathname.replace(/\/products\/.*/, '/products')),
            o.searchParams.delete('product_id');
          const n = o.href !== window.location.href;
          window.history.replaceState(window.history.state, '', o.href),
            n && t.trackPageView && t.trackPageView();
        }
      };
      const Et = (function (e) {
        function o() {
          n(this, o),
            (this.serverUrl = 'https://www.roomvo.com'),
            (this.visitorIds = {
}),
            (this.vendorUrlPath = void 0),
            (this.vendorIds = {
}),
            (this.productCodeMap = {
}),
            (this.productShareLinkMap = {
}),
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
            (this.pageTypeRules = {
 regexes: new Map(), functions: new Map()
}),
            (this.launchSequenceTimeoutDuration = 15e3),
            (this.launchSequenceLoaderBaseColor = '#818C98');
          const e = Bt(this, 'read/rewrite', {
 cookieName: Y
});
          e && (this.visitorIds = Pe(e));
          const t = Bt(this, 'read/rewrite', {
 cookieName: J
});
          t && (this.vendorIds = Pe(t));
          let r;
            let i;
            const a = Bt(this, 'read/rewrite', {
 cookieName: K
});
          a && (this.vendorUrlPath = a),
            (this.agreedTermsOfUse = Boolean(Bt(this, 'read', {
 cookieName: $
}))),
            this.isInAbExperimentMode() &&
              ((r = this.getCookieExpiration()),
              Bt((i = this), 'check', {
 cookieName: X
}) ||
                (Math.random() < 0.5
                  ? Bt(i, 'write', {
                      cookieName: X,
                      cookieValue: 'dontshow',
                      config: {
 cookieExpiration: r
}
                    })
                  : Bt(i, 'write', {
                      cookieName: X,
                      cookieValue: 'show',
                      config: {
 cookieExpiration: r
}
                    })));
        }
        return (
          i(o, [
            {
              key: Symbol.toStringTag,
              get() {
                return 'RoomvoIntegrator';
              }
            },
            {
              key: 'getVendorUrlPath',
              value() {
                return '';
              }
            },
            {
              key: 'shouldCommitVisitorToDb',
              value() {
                return !1;
              }
            },
            {
              key: 'getProductCode',
              value(e) {
                return 'code1';
              }
            },
            {
              key: 'autolauncherConfig',
              set(e) {
                const o = this;
                  const n = this.standaloneAutolauncherConfigs.reduce((e, o) => {
                    return (e[o.standaloneFnName] = t({
}, o)), e;
                  }, {
});
                  const r = [
                    'startStandaloneVisualizer',
                    'startProductCatalog',
                    'startStandaloneSurfaceDesigner',
                    'startVisualizerInKioskMode',
                    'addFavoriteProduct',
                    'removeFavoriteProduct'
                  ];
                  const i = function (e) {
                    const i = e.standaloneFnName || 'startStandaloneVisualizer';
                      const a = t(t({
}, n[i]), e);
                      const s = a.standaloneFnName;
                    if (r.includes(s)) {
                      const l = o.standaloneAutolauncherConfigs.find((e) => {
                        return e.standaloneFnName === s;
                      });
                      if (l) {
 for (let d = 0, c = Object.keys(l); d < c.length; d++) {
                          const u = c[d];
                          l[u] = a[u];
                        }
} else o.standaloneAutolauncherConfigs.push(a);
                    } else Ae(o, ''.concat(s, ' is not a permitted autolaunch function'));
                  };
                Array.isArray(e) ? e.forEach(i) : i(e);
              }
            },
            {
              key: 'getAppropriateAutolauncherConfig',
              value(e) {
                const t = this;
                  const o = E(N());
                return this.standaloneAutolauncherConfigs.find((n) => {
                  const r = n.urlRegexObj;
                    const i = n.requiredUrlParameters;
                    const a = n.autolaunchConfirmationUrlParameter;
                    const s = n.vendorSlugUrlParameter;
                    const l = n.requireConfirmation;
                  if (!r.test(o)) return !1;
                  const d = e.get(a) || '';
                  if (l && d.toLowerCase() !== 'true') return !1;
                  const c = e.get(s) || '';
                  return (
                    (!c || c === t.getVendorUrlPath()) &&
                    (!i ||
                      i.every((t) => {
                        return (e.get(t) || '').toLowerCase() === 'true';
                      }))
                  );
                });
              }
            },
            {
              key: 'processAutolaunchVisualizer',
              value() {
                const e = new URL(N().href).searchParams;
                  const t = this.getAppropriateAutolauncherConfig(e);
                if (t) {
                  const o = t.productCodeUrlParameter;
                    const n = t.supplierUrlPathParameter;
                    const r = t.productTypeUrlParameter;
                    const i = t.prefilterUrlParameter;
                    const a = t.kioskPhysicalScannerUrlParameter;
                    const s = t.standaloneFnName;
                    const l = Ye(e.get(r));
                    const d = e.get(o);
                    const c = e.get(a);
                    const u = n && e.get(n);
                    let p = u && d ? '&supplier_url_path='.concat(u) : '';
                  c === 'true' && (p += '&has_physical_scanner=1');
                  const f = i && e.get(i);
                    const m = f ? {
 prefilter: f
} : {
};
                  this[s](l, d, p, m);
                }
              }
            },
            {
              key: 'processAddToCartUrlParameter',
              value() {
                const e = new URL(N().href);
                if (e.searchParams.has(Z) && A(document.referrer) === A(this.serverUrl)) {
                  const t = e.searchParams.get(Z);
                  e.searchParams.delete(Z),
                    window.history.replaceState(null, '', e.href),
                    this.addToCart({
 productCode: t
});
                }
              }
            },
            {
 key: 'onBodyLoaded', value() {}
},
            {
 key: 'registerIntegratorConfigs', value() {}
},
            {
              key: 'pageType',
              get() {
                const e = y(this.pageTypeRules.functions.entries()).find((e) => {
                    return (0, g(e, 2)[1])();
                  });
                  const t = y(this.pageTypeRules.regexes.entries()).find((e) => {
                    return (0, g(e, 2)[1])();
                  });
                return e ? e[0] : t ? t[0] : 'ANY_PAGE';
              }
            },
            {
              key: 'isWebGlNeeded',
              value() {
                return !0;
              }
            },
            {
              key: 'getVendorUrlPathForStimr',
              value() {
                return this.getVendorUrlPath();
              }
            },
            {
              key: 'getLocale',
              value() {
                return 'en-us';
              }
            },
            {
              key: 'getLocalizedStringOverrides',
              value() {
                return {
};
              }
            },
            {
              key: 'getStimrButtonText',
              value(e) {
                return 'See It In My Room';
              }
            },
            {
              key: 'getCookieExpiration',
              value() {
                return 'Fri, 31 Dec 9999 23:59:59 GMT';
              }
            },
            {
              key: 'getCookieDomain',
              value() {
                return '';
              }
            },
            {
              key: 'getStimrTabIndex',
              value(e) {
                return 0;
              }
            },
            {
 key: 'addToCart', value(e, t) {}
},
            {
              key: 'isInAbExperimentMode',
              value() {
                return !1;
              }
            },
            {
              key: 'isRoomvoCookieDisabled',
              value() {
                return Boolean(window.isRoomvoCookieDisabled);
              }
            },
            {
              key: 'shouldShowStimrButtons',
              value() {
                return !this.isInAbExperimentMode() || xe(this) !== 'dontshow';
              }
            },
            {
              key: 'shouldShowDesignerButtons',
              value() {
                return this.hasDesignerProducts;
              }
            },
            {
              key: 'shouldShowMeasurementButton',
              value() {
                return !1;
              }
            },
            {
              key: 'trackActionInHostAnalytics',
              value(e, t, o) {
                const n = (window.dataLayer || []).some((e) => {
                  return e[0] === 'config' && e[1].startsWith('G-');
                });
                try {
                  n && window.gtag('event', e, {
 event_category: 'Roomvo', event_label: t
});
                } catch (a) {}
                try {
                  for (let r = window.ga.getAll(), i = 0; i < r.length; ++i) r[i].send('event', 'Roomvo', e, t);
                } catch (a) {}
              }
            },
            {
              key: 'recordEvent',
              value(e) {
                let t;
                  const o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                  const n =
                    (a((t = {
}), 'visitor_id', this.visitorIds[this.getVendorUrlPath()]),
                    a(t, 'device_type', be()),
                    a(t, 'entry_type', 0),
                    t);
                  const r = this.vendorIds[this.getVendorUrlPath()];
                r && (n.vendor_id = r), (e = {
 ...n, ...e
});
                const i = new FormData();
                for (const s in e) void 0 !== e[s] && e[s] !== null && i.append(s, e[s]);
                const l = new XMLHttpRequest();
                l.open('POST', `${this.serverUrl}/services/event/events/`, !0),
                  l.send(i),
                  o && this.trackActionInHostAnalytics(e.event_name, '', e);
              }
            },
            {
              key: 'debug',
              value() {
                for (
                  var e = this, t = document.querySelectorAll('.roomvo-stimr'), o = 0, n = 0;
                  n < t.length;
                  ++n
                ) t[n].style.visibility === 'hidden' && ++o;
                console.log(`${t.length} STIMRs on page, ${o} hidden.`),
                  console.log(`${this.log.split('\n').length} lines in log.`);
                const r = this.getProductCode();
                r &&
                  (console.log(`Product code on page: ${r}`),
                  gt(this, r, () => {
                    e.productCodeMap[r] && e.productCodeMap[r].length !== 0
                      ? console.log('Available: '.concat(r))
                      : console.log('Not available: '.concat(r));
                  }));
              }
            },
            {
              key: 'startStandalone',
              value() {
                it(this);
              }
            },
            {
              key: 'startStandaloneSurfaceDesigner',
              value(e, t) {
                const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                  const n = Ye(e);
                it(this, void 0, '/surface_designer', o, n === 0 ? '' : n, t);
              }
            },
            {
              key: 'startVisualizerInKioskMode',
              value(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                  const n = Ye(e);
                it(this, void 0, '/kiosk', (o += '&is_in_kiosk_mode=1'), n === 0 ? '' : n, t);
              }
            },
            {
              key: 'startStandaloneVisualizer',
              value(e, t) {
                const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                  const n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
};
                  const r = this.prefilter;
                n.prefilter && (this.prefilter = n.prefilter);
                const i = Ye(e);
                it(this, void 0, void 0, o, i === 0 ? '' : i, t),
                  n.prefilter && (this.prefilter = r);
              }
            },
            {
              key: 'startProductCatalog',
              value(e, t) {
                const o = this;
                  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
                  const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
};
                  const i = function (t, i, a) {
                    const s = ut(t, a, Ye(i));
                      const l = Ye(e);
                    s ||
                      ((n += a ? '&vendor_code='.concat(encodeURIComponent(a)) : ''),
                      (n += l !== 0 ? '&product_type='.concat(Ye(i)) : '')),
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
              value(e) {
                return Ye(e);
              }
            },
            {
              key: 'setVisitorId',
              value(e, t) {
                const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
                  const n = o.overwriteExisting;
                  const r = void 0 !== n && n;
                Mt(this, e, 'visitorIds', Y, t, r);
              }
            },
            {
              key: 'setVendorId',
              value(e, t) {
                const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
                  const n = o.overwriteExisting;
                  const r = void 0 !== n && n;
                Mt(this, e, 'vendorIds', J, t, r);
              }
            },
            {
              key: 'addFavoriteProduct',
              value(e, t) {
                const o = new FormData();
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
              value(e, t) {
                const o = new FormData();
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
              get() {
                const e = new URL('/services/vendor/themes/asset/', this.serverUrl);
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
              get() {
                return !0;
              }
            }
          ]),
          o
        );
      }());
      const Ft = function (e, t) {
        const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
};
          const n = new XMLHttpRequest();
        n.open('POST', `${e.serverUrl}/api/visitors/`, !0),
          n.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        const r = {
};
        e.getVendorUrlPath() && (r.vendor_url_path = e.getVendorUrlPath()),
          (r.locale = e.getLocale()),
          (r.tracking_code = xe(e)),
          (r.top_level_domain = F.getTopLevelHostname()),
          (r.next_level_domain = F.getNextLevelHostname()),
          (r.device_type = be()),
          e.shouldCommitVisitorToDb() && (r.commit_to_db = !0),
          (n.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
              const o = Pe(this.responseText);
                const n = o.vendorUrlPath;
              e.setVisitorId(n, o.id, {
 overwriteExisting: !1
}),
                e.setVendorId(n, o.vendorId, {
 overwriteExisting: !1
}),
                t && t(o);
            }
          }),
          o && o.timeout && ((n.timeout = o.timeout), o.ontimeout && (n.ontimeout = o.ontimeout)),
          n.send(JSON.stringify(r));
      };
      var Mt = function (e, t, o, n, r, i) {
        we(e[o]) && (e[o] = {
});
        const a = Bt(e, 'read', {
 cookieName: n
});
        a && (e[o] = Pe(a)),
          r && ((!i && t in e[o]) || (e[o][t] = r)),
          Bt(e, 'write', {
 cookieName: n, cookieValue: ke(e[o])
});
      };
      var Bt = function (e, t, o) {
        if (!e.isRoomvoCookieDisabled()) {
          const n = {
 cookieExpiration: e.getCookieExpiration(), domain: e.getCookieDomain()
};
            const r = o.cookieName;
            const i = o.cookieValue;
            const a = o.config;
            const s = void 0 === a ? {
} : a;
            const l = {
 ...n, ...s
};
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
              }(r));
          }
        }
        return Ae(e, 'Accessing cookies is not permitted.'), null;
      };
      const qt = function (e) {
        if (e.getVendorUrlPath() in window._roomvo) {
          const t = window._roomvo[e.getVendorUrlPath()];
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
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                const n = jt(t.splice(2, 1)[0]);
                n.startStandaloneVisualizer.apply(n, y(t));
              }),
            window.roomvo.startProductCatalog ||
              (window.roomvo.startProductCatalog = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                const n = jt(t.splice(2, 1)[0]);
                n.startProductCatalog.apply(n, y(t));
              }),
            window.roomvo.startStandaloneSurfaceDesigner ||
              (window.roomvo.startStandaloneSurfaceDesigner = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                t = zt.apply(void 0, y(t));
                const n = jt(t.splice(2, 1)[0]);
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
                () => {
                  Vt(e);
                },
                {
                  timeout: 1e4,
                  ontimeout() {
                    Vt(e);
                  }
                }
              )
            : Vt(e);
      };
      var Vt = function (e) {
        const t = function () {
          Dt(e) && e.processAddToCartUrlParameter(),
            e.processAutolaunchVisualizer(),
            e.onBodyLoaded(),
            e.registerIntegratorConfigs();
        };
        document.body ? t() : document.addEventListener('DOMContentLoaded', t);
      };
      var jt = function (e) {
        const t = Object.values(window._roomvo).filter((e) => {
          return e.toString().endsWith('Integrator]');
        });
        return e
          ? window._roomvo[e] ||
              t.find((e) => {
                return e.toString() === '[object AssistantIntegrator]';
              }) ||
              t.find(Dt) ||
              t[0]
          : t.find(Dt) || t[0];
      };
      var zt = function () {
        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
        return (
          t.length === 1 &&
            t[0] instanceof Object &&
            Object.prototype.toString.call(t[0]) === '[object Object]' &&
            (t = [
              t[0].productType,
              t[0].productCode,
              t[0].vendorUrlPath,
              t[0].extraParams,
              t[0].options
            ]),
          t
        );
      };
      var Dt = function (e) {
        return e.toString() === '[object RoomvoIntegrator]';
      };
      const Ht = '[data-role="roomvo"]';
      const Gt = 'div[data-code="sku"].value';
      const Wt = (function (e) {
        s(o, e);
        const t = m(o);
        function o() {
          return n(this, o), t.apply(this, arguments);
        }
        return (
          i(o, [
            {
              key: 'getVendorUrlPath',
              value() {
                return 'luxuryflooringandfurnishingscouk';
              }
            },
            {
              key: 'getProductCode',
              value(e) {
                return (
                  (function (e) {
                    const t = (
                      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document
                    ).querySelector(e);
                    return t && t.innerText ? t.innerText.trim() : '';
                  }(Gt)) || ''
                );
              }
            },
            {
              key: 'getLocale',
              value() {
                return 'en-gb';
              }
            },
            {
              key: 'getStimrButtonText',
              value(e) {
                return 'Try out our Room Visualiser';
              }
            },
            {
              key: 'isWebGlNeeded',
              value() {
                return !1;
              }
            },
            {
              key: 'onBodyLoaded',
              value() {
                const e = this;
                if (E(N()).includes('/checkout/onepage/success')) this._notifyConversion();
                else {
                  const t = function () {
                    _t(e, e._createStimr, Ht, Gt);
                  };
                  Le(document, [Ht], () => {
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
              value(e) {
                const t = document.createElement('div');
                (t.style.cursor = 'pointer'),
                  (t.style.paddingTop = '10px'),
                  (t.style.paddingBottom = '10px'),
                  (t.style.display = 'flex'),
                  (t.style.alignItems = 'center'),
                  (t.style.justifyContent = 'center'),
                  (t.style.backgroundColor = '#e5e5e5'),
                  (t.style.width = '100%'),
                  (t.style.zIndex = '1000');
                const o = document.createElement('div');
                (o.innerText = e.getStimrButtonText(e.getLocale())),
                  (o.style.display = 'inline-block'),
                  (o.style.fontFamily = 'Raleway, sans-serif'),
                  (o.style.fontSize = '18px');
                const n = document.createElement('img');
                (n.src = ''.concat(
                  e.serverUrl,
                  '/services/vendor/vendor_images/luxuryflooringandfurnishingscouk/roomvo_icon.png'
                )),
                  (n.style.height = '25px'),
                  (n.style.marginRight = '10px');
                const r = document.createElement('div');
                (r.style.display = 'inline-block'),
                  r.appendChild(n),
                  t.appendChild(r),
                  t.appendChild(o);
                const i = document.createElement('div');
                (i.style.position = 'relative'),
                  (i.style.marginTop = '10px'),
                  (i.style.width = '100%'),
                  i.appendChild(t);
                const a = Ie();
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
              value() {
                const e = this;
                  const t = 'div.c-thank-you > div.c-text-block p';
                Le(document, [t], () => {
                  !(function (e, t, o, n, r, i, a) {
                    const s = new XMLHttpRequest();
                    s.open('POST', `${e.serverUrl}/api/notify_conversion`, !0);
                    const l = new FormData();
                      const d = e.getVendorUrlPath();
                    l.append('visitor_id', e.visitorIds[d]),
                      l.append('vendor_url_path', d),
                      l.append('vendor_codes', r || ''),
                      l.append('quantities', i || ''),
                      l.append('prices', a || ''),
                      l.append('total', o || ''),
                      l.append('currency', n || ''),
                      l.append('transaction_id', t || ''),
                      s.send(l);
                  }(e, e._parseTransactionId(t)));
                });
              }
            },
            {
              key: '_parseTransactionId',
              value(e) {
                for (
                  let t = /Your order # is: ([0-9]+)\./, o = document.querySelectorAll(e), n = 0;
                  n < o.length;
                  n++
                ) {
                  const r = o[n].innerText.match(t);
                  if (r) return r[1];
                }
                return null;
              }
            },
            {
              key: 'trackActionInHostAnalytics',
              value(e, t, n) {
                v(l(o.prototype), 'trackActionInHostAnalytics', this).call(this, e, t, n);
                try {
                  (window.dataLayer = window.dataLayer || []),
                    window.dataLayer.push({
 event: 'Roomvo', event_action: e, event_label: t
});
                } catch (r) {}
              }
            }
          ]),
          o
        );
      }(Et));
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
            }(window.navigator))) ||
          (function (e) {
            return !!e && (e.userAgent.indexOf('MSIE') > 0 || e.userAgent.indexOf('Trident/') > -1);
          }(window.navigator))
        )
      ) {
        var t;
        window._roomvo ||
          ((window._roomvo = {
}),
          Object.defineProperty(window._roomvo, 'roomvoListeners', {
 value: {
}
})),
          window.roomvo || ((window.roomvo = {
}), (window.ffViz = window.roomvo));
        const o = new e();
        o.getVendorUrlPath()
          ? qt(o)
          : Ft(o, (e) => {
              (o.vendorUrlPath = e.vendorUrlPath),
                Bt(o, 'write', {
 cookieName: K, cookieValue: o.vendorUrlPath
}),
                qt(o);
            });
      }
    }(Wt));
  }());

export default lib;
