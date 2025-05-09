;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['change-interval-dialog'],
  {
    Gtzb: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return i
        })
      class r {
        constructor() {
          this._storage = new Map()
        }
        setAsOpened(e, t) {
          this._storage.set(e, t)
        }
        setAsClosed(e) {
          this._storage.delete(e)
        }
        isOpened(e) {
          return this._storage.has(e)
        }
        getDialogPayload(e) {
          return this._storage.get(e)
        }
      }
      const i = new r()
    },
    R5JZ: function (e, t, n) {
      'use strict'
      function r(e, t, n, r, i) {
        function o(i) {
          if (e > i.timeStamp) return
          const o = i.target
          void 0 !== n && null !== t && null !== o && o.ownerDocument === r && (t.contains(o) || n(i))
        }
        return (
          i.click && r.addEventListener('click', o, !1),
          i.mouseDown && r.addEventListener('mousedown', o, !1),
          i.touchEnd && r.addEventListener('touchend', o, !1),
          i.touchStart && r.addEventListener('touchstart', o, !1),
          () => {
            r.removeEventListener('click', o, !1),
              r.removeEventListener('mousedown', o, !1),
              r.removeEventListener('touchend', o, !1),
              r.removeEventListener('touchstart', o, !1)
          }
        )
      }
      n.d(t, 'a', function () {
        return r
      })
    },
    iT0o: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n('q1tI'),
        i = n.n(r),
        o = n('i8i4'),
        a = n.n(o),
        l = n('TSYQ'),
        s = n.n(l),
        c = n('YFKU'),
        u = n('wHCJ'),
        d = n('ldG2'),
        f = n('PT1i'),
        m = n('WXjp'),
        p = n('Iivm'),
        v = n('xJ0h')
      const g = Object(c.t)(
          'Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)',
        ),
        h = Object(c.t)(
          "Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
        )
      function b(e) {
        const { className: t, isSecondsEnabled: n } = e
        return i.a.createElement(p.a, { icon: v, className: s()('apply-common-tooltip', t), title: n ? h : g })
      }
      var O = n('h24c'),
        w = n('pPtI')
      var E = n('LxhU'),
        y = n('kXN+')
      function j(e) {
        const { initVal: t, selectOnInit: n, onClose: o } = e,
          a = Object(r.useRef)(null),
          [l, p] = Object(r.useState)(t.toUpperCase()),
          v = Object(r.useMemo)(() => Object(O.d)(l), [l]),
          g = (function (e, t) {
            return Object(r.useMemo)(() => {
              let n = !t.error && Object(O.c)(e)
              if (!n) return !1
              const r = t.unit
              if ('R' === r && t.qty > Object(w.getMaxResolutionValue)('R')) n = !1
              else if (null === r || 'H' === r) {
                t.qty * ('H' === r ? 60 : 1) > Object(w.getMaxResolutionValue)('1') && (n = !1)
              } else
                'S' === r
                  ? t.qty > Object(w.getMaxResolutionValue)('S') && (n = !1)
                  : 'T' === r && 1 !== t.qty && (n = !1)
              return n
            }, [e, t])
          })(l, v),
          h = Object(r.useMemo)(() => {
            if (!g) return null
            const e = v.qty + (v.unit || '')
            return Object(w.getTranslatedResolutionModel)(e).hint
          }, [g, v])
        return (
          Object(r.useLayoutEffect)(() => {
            var e, t
            n
              ? null === (e = a.current) || void 0 === e || e.select()
              : null === (t = a.current) || void 0 === t || t.focus()
          }, [n]),
          i.a.createElement(
            m.a,
            {
              className: y.dialog,
              'data-dialog-name': 'change-interval-dialog',
              isOpened: !0,
              onClickOutside: o,
              onFocus: function () {
                var e
                null === (e = a.current) || void 0 === e || e.focus()
              },
              onKeyDown: function (e) {
                27 === e.keyCode && (null == o || o())
              },
            },
            i.a.createElement(
              'div',
              { className: y.dialogInner },
              i.a.createElement(
                'div',
                { className: y.titleWrapper },
                i.a.createElement(
                  'div',
                  {
                    className: y.title,
                  },
                  Object(c.t)('Change interval'),
                ),
                i.a.createElement(b, { className: y.infoHint, isSecondsEnabled: Object(w.isSecondsEnabled)() }),
              ),
              i.a.createElement(
                'form',
                {
                  className: y.form,
                  onSubmit: function (e) {
                    e.preventDefault()
                    const t = f.linking.interval.value(),
                      n = E.Interval.normalize(l)
                    n && t !== n && g && ((r = n), Object(w.setLastUsedResolution)(r), f.linking.interval.setValue(r))
                    var r
                    null == o || o()
                  },
                },
                i.a.createElement(u.a, {
                  className: s()(y.inputWrapper, d.b.FontSizeLarge),
                  inputClassName: y.input,
                  type: 'text',
                  size: 'large',
                  reference: a,
                  value: l,
                  maxLength: 8,
                  intent: g ? void 0 : 'danger',
                  onChange: function (e) {
                    const { value: t } = e.target
                    p(t.toUpperCase())
                  },
                }),
              ),
              g
                ? i.a.createElement('div', { className: y.hint }, h)
                : i.a.createElement('div', { className: s()(y.hint, y.error) }, Object(c.t)('Not applicable')),
            ),
          )
        )
      }
      var C = n('Gtzb')
      function N(e) {
        if (C.b.isOpened('ChangeIntervalDialog') || C.b.isOpened('SymbolSearch')) return
        const t = document.createElement('div'),
          { initVal: n, selectOnInit: r, onClose: o } = e,
          l = i.a.createElement(j, {
            initVal: n,
            selectOnInit: r,
            onClose: function () {
              a.a.unmountComponentAtNode(t), C.b.setAsClosed('ChangeIntervalDialog'), null == o || o()
            },
          })
        a.a.render(l, t), C.b.setAsOpened('ChangeIntervalDialog')
      }
      n.d(t, 'showChangeIntervalDialog', function () {
        return N
      })
    },
    ijHL: function (e, t, n) {
      'use strict'
      function r(e) {
        return o(e, a)
      }
      function i(e) {
        return o(e, l)
      }
      function o(e, t) {
        const n = Object.entries(e).filter(t),
          r = {}
        for (const [e, t] of n) r[e] = t
        return r
      }
      function a(e) {
        const [t, n] = e
        return 0 === t.indexOf('data-') && 'string' == typeof n
      }
      function l(e) {
        return 0 === e[0].indexOf('aria-')
      }
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'e', function () {
          return a
        }),
        n.d(t, 'd', function () {
          return l
        })
    },
    'kXN+': function (e, t, n) {
      e.exports = {
        dialog: 'dialog-23lGwisF',
        dialogInner: 'dialogInner-23lGwisF',
        titleWrapper: 'titleWrapper-23lGwisF',
        title: 'title-23lGwisF',
        infoHint: 'infoHint-23lGwisF',
        form: 'form-23lGwisF',
        inputWrapper: 'inputWrapper-23lGwisF',
        input: 'input-23lGwisF',
        hint: 'hint-23lGwisF',
        error: 'error-23lGwisF',
      }
    },
    xJ0h: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'
    },
  },
])
