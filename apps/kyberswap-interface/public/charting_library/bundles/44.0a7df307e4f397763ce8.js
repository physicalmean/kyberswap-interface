;(window.webpackJsonp = window.webpackJsonp || []).push([
  [44],
  {
    '+ByK': function (e, t, n) {
      e.exports = {
        itemWrap: 'itemWrap-3FEBD9eP',
        item: 'item-3FEBD9eP',
        icon: 'icon-3FEBD9eP',
        selected: 'selected-3FEBD9eP',
        label: 'label-3FEBD9eP',
      }
    },
    '0lS6': function (e, t, n) {
      e.exports = { wrapper: 'wrapper-2ESZuAbX', isActive: 'isActive-2ESZuAbX' }
    },
    '3lVo': function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        i = n('PECq'),
        l = n('kJwE')
      const c = [1, 2, 3, 4]
      function s(e) {
        const { id: t, value: n, items: a = c, disabled: s, onChange: d } = e
        return o.a.createElement(i.a, {
          id: t,
          disabled: s,
          hideArrowButton: !0,
          className: l.lineWidthSelect,
          items: ((u = a), u.map(e => ({ value: e, selectedContent: m(e, !0), content: m(e) }))),
          value: n,
          onChange: d,
          'data-name': 'line-width-select',
        })
        var u
        function m(e, t) {
          const a = { borderTopWidth: e }
          return o.a.createElement(
            'div',
            { className: l.item },
            o.a.createElement('div', { className: r(l.bar, { [l.isActive]: e === n && !t }), style: a }, ' '),
          )
        }
      }
      var d = n('++uw')
      function u(e) {
        const { property: t } = e,
          [n, a] = Object(d.a)({ property: t })
        return o.a.createElement(s, { ...e, value: n, onChange: a })
      }
      n.d(t, 'a', function () {
        return u
      })
    },
    '4Fxa': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M12.143 20l1.714-12H12V7h5v1h-2.143l-1.714 12H15v1h-5v-1h2.143z"/></svg>'
    },
    '6w4h': function (e, t, n) {
      e.exports = {
        row: 'row-NcPpqR9x',
        wrap: 'wrap-NcPpqR9x',
        breakpointNormal: 'breakpointNormal-NcPpqR9x',
        breakpointMedium: 'breakpointMedium-NcPpqR9x',
        breakpointSmall: 'breakpointSmall-NcPpqR9x',
      }
    },
    '7EmB': function (e, t, n) {
      e.exports = {
        range: 'range-2PdPYA_J',
        valueInput: 'valueInput-2PdPYA_J',
        rangeSlider: 'rangeSlider-2PdPYA_J',
        input: 'input-2PdPYA_J',
      }
    },
    '7Y2P': function (e, t, n) {
      e.exports = {
        wrapper: 'wrapper-1MlnSDA4',
        focused: 'focused-1MlnSDA4',
        readonly: 'readonly-1MlnSDA4',
        disabled: 'disabled-1MlnSDA4',
        'size-small': 'size-small-1MlnSDA4',
        'size-medium': 'size-medium-1MlnSDA4',
        'size-large': 'size-large-1MlnSDA4',
        'font-size-small': 'font-size-small-1MlnSDA4',
        'font-size-medium': 'font-size-medium-1MlnSDA4',
        'font-size-large': 'font-size-large-1MlnSDA4',
        'border-none': 'border-none-1MlnSDA4',
        shadow: 'shadow-1MlnSDA4',
        'border-thin': 'border-thin-1MlnSDA4',
        'border-thick': 'border-thick-1MlnSDA4',
        'intent-default': 'intent-default-1MlnSDA4',
        'intent-success': 'intent-success-1MlnSDA4',
        'intent-warning': 'intent-warning-1MlnSDA4',
        'intent-danger': 'intent-danger-1MlnSDA4',
        'intent-primary': 'intent-primary-1MlnSDA4',
        'corner-top-left': 'corner-top-left-1MlnSDA4',
        'corner-top-right': 'corner-top-right-1MlnSDA4',
        'corner-bottom-right': 'corner-bottom-right-1MlnSDA4',
        'corner-bottom-left': 'corner-bottom-left-1MlnSDA4',
        childrenContainer: 'childrenContainer-1MlnSDA4',
      }
    },
    '8XTa': function (e, t, n) {
      e.exports = { lineEndSelect: 'lineEndSelect-1x0HNmOc', right: 'right-1x0HNmOc' }
    },
    '9UfQ': function (e, t, n) {
      e.exports = { wrapper: 'wrapper-2F4fv0AC', checkbox: 'checkbox-2F4fv0AC', colorSelect: 'colorSelect-2F4fv0AC' }
    },
    '9gev': function (e, t, n) {
      e.exports = {
        dropdown: 'dropdown-3Z3YBwWw',
        normal: 'normal-3Z3YBwWw',
        big: 'big-3Z3YBwWw',
        dropdownMenu: 'dropdownMenu-3Z3YBwWw',
      }
    },
    '9pqQ': function (e, t, n) {
      e.exports = { wrapper: 'wrapper-3G6q-JGM' }
    },
    A3oJ: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M22.87 6.44c.09-.78-.53-1.4-1.3-1.31-1.43.15-3.43.48-5.42 1.2a11.8 11.8 0 0 0-5.23 3.44L9.86 11.9l6.24 6.24 2.13-1.06a11.8 11.8 0 0 0 3.44-5.23c.72-1.99 1.05-4 1.2-5.41zm-4.93 11.9l-1.72.86-.04.02h-.04l-2.2.67v.01a19.68 19.68 0 0 0-.13 3.33c.01.14.08.22.17.26.08.04.2.05.32-.03a18.83 18.83 0 0 0 2.79-2.26 8.18 8.18 0 0 0 .44-1.1c.16-.51.33-1.12.41-1.76zm-.44 3.16l.35.35-.01.02-.05.05a16.85 16.85 0 0 1-.83.76c-.54.47-1.3 1.08-2.1 1.61a1.3 1.3 0 0 1-2.05-.98 16.46 16.46 0 0 1 .09-3.08l-.16.05a1.5 1.5 0 0 1-1.53-.36l-3.13-3.13c-.4-.4-.54-1-.36-1.53l.05-.16-.36.04c-.7.06-1.62.11-2.54.06a1.3 1.3 0 0 1-1.13-.8c-.18-.42-.13-.94.17-1.35a87.55 87.55 0 0 1 2.15-2.8l.04-.04v-.02l.4.31-.22-.45.03-.01a5.93 5.93 0 0 1 .34-.16c.23-.1.55-.22.94-.35A9.77 9.77 0 0 1 10.26 9a12.9 12.9 0 0 1 5.55-3.61c2.09-.76 4.18-1.1 5.65-1.26 1.41-.15 2.56 1 2.4 2.41a24.04 24.04 0 0 1-1.25 5.65A12.9 12.9 0 0 1 19 17.74a9.77 9.77 0 0 1-.88 3.61 9.18 9.18 0 0 1-.16.34v.03h-.01l-.45-.22zm0 0l.45.22-.04.08-.06.05-.35-.35zm-11-11l-.4-.31.08-.09.1-.05.22.45zm3.16-.44a9.61 9.61 0 0 0-2.84.84l-.13.16a109.83 109.83 0 0 0-1.97 2.58.4.4 0 0 0-.06.38c.04.1.12.17.27.18a16.05 16.05 0 0 0 3.18-.15l.66-2.2.01-.03.02-.04.86-1.72zm5.4 8.45l-5.57-5.56-.51 1.7-.31.92a.5.5 0 0 0 .12.51l3.13 3.13a.5.5 0 0 0 .5.12l.92-.3h.02l1.7-.52zm-10.91.64l2-2 .7.7-2 2-.7-.7zm0 4l4-4 .7.7-4 4-.7-.7zm4 0l2-2 .7.7-2 2-.7-.7zM16 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM17.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>'
    },
    Bbdy: function (e, t, n) {
      e.exports = { wrapper: 'wrapper-30HPnwk9' }
    },
    CHgb: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
      }),
        n.d(t, 'a', function () {
          return u
        }),
        n.d(t, 'b', function () {
          return m
        })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        i = n.n(r),
        l = n('PECq'),
        c = n('Iivm'),
        s = n('+ByK')
      function d(e) {
        const { menuItemClassName: t, ...n } = e
        return o.a.createElement(l.a, { ...n, menuItemClassName: i()(t, s.itemWrap) })
      }
      function u(e) {
        return o.a.createElement(
          'div',
          { className: i()(s.item, s.selected) },
          o.a.createElement(c.a, { className: s.icon, icon: e.icon }),
        )
      }
      function m(e) {
        return o.a.createElement(
          'div',
          { className: s.item },
          o.a.createElement(c.a, { className: i()(s.icon, e.iconClassName), icon: e.icon }),
          o.a.createElement('div', { className: s.label }, e.label),
        )
      }
    },
    CaTF: function (e, t, n) {
      e.exports = {
        colorPicker: 'colorPicker-zLgQJ6Yh',
        fontStyleButton: 'fontStyleButton-zLgQJ6Yh',
        dropdown: 'dropdown-zLgQJ6Yh',
        dropdownMenu: 'dropdownMenu-zLgQJ6Yh',
      }
    },
    EJl2: function (e, t, n) {
      e.exports = {
        input: 'input-1y54fm74',
        control: 'control-1y54fm74',
        item: 'item-1y54fm74',
        cell: 'cell-1y54fm74',
        fragmentCell: 'fragmentCell-1y54fm74',
        withTitle: 'withTitle-1y54fm74',
        title: 'title-1y54fm74',
      }
    },
    FIOl: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8.5 13.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 0H24"/></svg>'
    },
    G7lD: function (e, t, n) {
      e.exports = {
        range: 'range-31GwrUpb',
        disabled: 'disabled-31GwrUpb',
        rangeSlider: 'rangeSlider-31GwrUpb',
        rangeSliderMiddleWrap: 'rangeSliderMiddleWrap-31GwrUpb',
        rangeSliderMiddle: 'rangeSliderMiddle-31GwrUpb',
        dragged: 'dragged-31GwrUpb',
        pointer: 'pointer-31GwrUpb',
        rangePointerWrap: 'rangePointerWrap-31GwrUpb',
      }
    },
    HWhk: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'
    },
    Iksw: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return r
        }),
        n.d(t, 'b', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return s
        })
      var a,
        o,
        r,
        i,
        l = n('Eyy1')
      !(function (e) {
        ;(e[(e.Top = 0)] = 'Top'), (e[(e.Bottom = 1)] = 'Bottom')
      })(a || (a = {})),
        (function (e) {
          ;(e[(e.Left = 0)] = 'Left'), (e[(e.Right = 1)] = 'Right')
        })(o || (o = {})),
        (function (e) {
          ;(e[(e.FromTopToBottom = 0)] = 'FromTopToBottom'), (e[(e.FromBottomToTop = 1)] = 'FromBottomToTop')
        })(r || (r = {})),
        (function (e) {
          ;(e[(e.FromLeftToRight = 0)] = 'FromLeftToRight'), (e[(e.FromRightToLeft = 1)] = 'FromRightToLeft')
        })(i || (i = {}))
      const c = {
        verticalAttachEdge: a.Bottom,
        horizontalAttachEdge: o.Left,
        verticalDropDirection: r.FromTopToBottom,
        horizontalDropDirection: i.FromLeftToRight,
        verticalMargin: 0,
        horizontalMargin: 0,
        matchButtonAndListboxWidths: !1,
      }
      function s(e, t) {
        return (n, s) => {
          const d = Object(l.ensureNotNull)(e).getBoundingClientRect(),
            {
              verticalAttachEdge: u = c.verticalAttachEdge,
              verticalDropDirection: m = c.verticalDropDirection,
              horizontalAttachEdge: p = c.horizontalAttachEdge,
              horizontalDropDirection: h = c.horizontalDropDirection,
              horizontalMargin: f = c.horizontalMargin,
              verticalMargin: b = c.verticalMargin,
              matchButtonAndListboxWidths: v = c.matchButtonAndListboxWidths,
            } = t,
            g = u === a.Top ? -1 * b : b,
            w = p === o.Right ? d.right : d.left,
            E = u === a.Top ? d.top : d.bottom,
            j = { x: w - (h === i.FromRightToLeft ? n : 0) + f, y: E - (m === r.FromBottomToTop ? s : 0) + g }
          return v && (j.overrideWidth = d.width), j
        }
      }
    },
    J4oI: function (e, t, n) {
      e.exports = { lineStyleSelect: 'lineStyleSelect-3KjU7hI0' }
    },
    JoYF: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM14 16V9h1v6h4v1h-5z"/></svg>'
    },
    'K+KL': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('ECWH'),
        i = n('RMU6'),
        l = n('/3z9'),
        c = n('AnDN'),
        s = n('GQPI'),
        d = n('zS+2'),
        u = n('UmON')
      const m = { role: 'listbox' },
        p = o.a.forwardRef((e, t) => {
          const {
              id: n,
              tabIndex: a = 0,
              listboxTabIndex: p = -1,
              disabled: h,
              highlight: f,
              intent: b,
              children: v,
              onClick: g,
              onFocus: w,
              onBlur: E,
              listboxAria: j = m,
              ...y
            } = e,
            {
              isOpened: O,
              isFocused: x,
              highlight: S,
              intent: C,
              onOpen: N,
              close: z,
              toggle: M,
              buttonFocusBindings: k,
              onButtonClick: V,
              buttonRef: A,
              listboxRef: _,
            } = Object(d.a)({ disabled: h, intent: b, highlight: f, onFocus: w, onBlur: E, onClick: g }),
            D = void 0 !== n ? Object(i.a)(n, 'listbox') : void 0,
            T = Object(s.c)(M),
            F = Object(s.a)(O, z)
          return o.a.createElement(
            c.a,
            {
              ...y,
              ...k,
              id: n,
              role: 'button',
              tabIndex: h ? -1 : a,
              disabled: h,
              isOpened: O,
              isFocused: x,
              ref: Object(r.a)([A, t]),
              highlight: S,
              intent: C,
              onClose: z,
              onOpen: N,
              onClick: V,
              onKeyDown: function (e) {
                const t = Object(l.hashFromEvent)(e)
                if (T(t) || F(t)) return void e.preventDefault()
              },
              listboxAria: j,
              listboxId: D,
              listboxTabIndex: O ? 0 : p,
              listboxReference: _,
              onListboxKeyDown: function (e) {
                O && 27 === Object(l.hashFromEvent)(e) && (e.stopPropagation(), z())
              },
            },
            v,
            o.a.createElement('span', {
              className: u.invisibleFocusHandler,
              tabIndex: 0,
              'aria-hidden': !0,
              onFocus: z,
            }),
          )
        })
      p.displayName = 'DisclosureMenu'
    },
    KacW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      n('YFKU')
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        i = n.n(r),
        l = n('8Uy/'),
        c = n('CHgb'),
        s = n('bQEj'),
        d = n('UXdH'),
        u = n('ZSM+'),
        m = n('J4oI')
      const p = [
        { type: l.LINESTYLE_SOLID, icon: s, label: window.t('Line') },
        { type: l.LINESTYLE_DASHED, icon: d, label: window.t('Dashed Line') },
        { type: l.LINESTYLE_DOTTED, icon: u, label: window.t('Dotted Line') },
      ]
      class h extends o.a.PureComponent {
        render() {
          const {
            id: e,
            lineStyle: t,
            className: n,
            lineStyleChange: a,
            disabled: r,
            additionalItems: l,
            allowedLineStyles: s,
          } = this.props
          let d = (function (e) {
            let t = [...p]
            return (
              void 0 !== e && (t = t.filter(t => e.includes(t.type))),
              t.map(e => ({
                value: e.type,
                selectedContent: o.a.createElement(c.a, { icon: e.icon }),
                content: o.a.createElement(c.b, { icon: e.icon, label: e.label }),
              }))
            )
          })(s)
          return (
            l && (d = [{ id: 'additional', readonly: !0, content: l }, ...d]),
            o.a.createElement(c.c, {
              id: e,
              disabled: r,
              className: i()(m.lineStyleSelect, n),
              hideArrowButton: !0,
              items: d,
              value: t,
              onChange: a,
              'data-name': 'line-style-select',
            })
          )
        }
      }
    },
    ORlR: function (e) {
      e.exports = JSON.parse(
        '{"textarea-container":"textarea-container-1vKcpneM","change-highlight":"change-highlight-3ZF5dCHp","focused":"focused-tusi7NC8","resize-vertical":"resize-vertical-1ddEqhTL","resize-horizontal":"resize-horizontal-2_PnoCKN","resize-both":"resize-both-3tZsc84l","textarea":"textarea-387rVPmq"}',
      )
    },
    Px4x: function (e, t, n) {},
    STR1: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M6 14.5C6 9.78 9.78 6 14.5 6c4.72 0 8.5 3.78 8.5 8.5 0 4.72-3.78 8.5-8.5 8.5A8.46 8.46 0 0 1 6 14.5zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5zM12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 4l-.43.26v.01l.03.03a3.55 3.55 0 0 0 .3.4 5.7 5.7 0 0 0 9.22 0 5.42 5.42 0 0 0 .28-.4l.02-.03v-.01L19 17l-.43-.26v.02a2.45 2.45 0 0 1-.24.32c-.17.21-.43.5-.78.79a4.71 4.71 0 0 1-6.88-.8 4.32 4.32 0 0 1-.23-.31l-.01-.02L10 17z"/></svg>'
    },
    Sn4D: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('Eyy1'),
        i = n('TSYQ'),
        l = n('x0D+'),
        c = n('0YpW'),
        s = n('AiMB'),
        d = n('mkWe'),
        u = n('qFKp'),
        m = n('X0gx'),
        p = n('sHQ4')
      function h(e) {
        const { position: t = 'Bottom', onClose: n, children: h, className: f, theme: b = p } = e,
          v = Object(r.ensureNotNull)(Object(a.useContext)(d.a)),
          [g, w] = Object(a.useState)(0),
          E = Object(a.useRef)(null),
          j = Object(a.useContext)(m.a)
        return (
          Object(a.useEffect)(() => {
            const e = Object(r.ensureNotNull)(E.current)
            return (
              e.focus({ preventScroll: !0 }),
              j.subscribe(v, n),
              Object(c.a)(!0),
              u.CheckMobile.iOS() && Object(l.disableBodyScroll)(e),
              w(v.addDrawer()),
              () => {
                j.unsubscribe(v, n)
                const t = v.removeDrawer()
                u.CheckMobile.iOS() && Object(l.enableBodyScroll)(e), 0 === t && Object(c.a)(!1)
              }
            )
          }, []),
          o.a.createElement(
            s.a,
            null,
            o.a.createElement(
              'div',
              { className: i(p.wrap, p['position' + t]) },
              g === v.currentDrawer && o.a.createElement('div', { className: p.backdrop, onClick: n }),
              o.a.createElement(
                'div',
                {
                  className: i(p.drawer, b.drawer, p['position' + t], f),
                  ref: E,
                  tabIndex: -1,
                  'data-name': e['data-name'],
                },
                h,
              ),
            ),
          )
        )
      }
    },
    To8B: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'
    },
    UXdH: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" d="M4 13h5v1H4v-1zM12 13h5v1h-5v-1zM20 13h5v1h-5v-1z"/></svg>'
    },
    UXjO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('q1tI'),
        o = n.n(a),
        r = n('TSYQ'),
        i = n.n(r),
        l = n('PECq'),
        c = n('ijHL'),
        s = n('z1Uu')
      function d(e) {
        const { id: t, fontSize: n, fontSizes: a = [], className: r, disabled: d, fontSizeChange: u } = e
        return o.a.createElement(l.a, {
          id: t,
          disabled: d,
          className: i()(r, s.defaultSelect),
          menuClassName: s.defaultSelect,
          items: ((m = a), m.map(e => ({ value: e.value, content: e.title }))),
          value: n,
          onChange: u,
          ...Object(c.b)(e),
        })
        var m
      }
    },
    YV34: function (e, t, n) {
      e.exports = { desktopSize: 'desktopSize--UxMOnMB', drawer: 'drawer--UxMOnMB', menuBox: 'menuBox--UxMOnMB' }
    },
    ZRxn: function (e, t, n) {
      e.exports = {
        unit: 'unit-3YVf8t1O',
        input: 'input-3YVf8t1O',
        normal: 'normal-3YVf8t1O',
        big: 'big-3YVf8t1O',
        dropdown: 'dropdown-3YVf8t1O',
        dropdownMenu: 'dropdownMenu-3YVf8t1O',
      }
    },
    'ZSM+': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><circle cx="9" cy="14" r="1"/><circle cx="4" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="14" r="1"/><circle cx="24" cy="14" r="1"/></svg>'
    },
    ZcEB: function (e, t, n) {
      e.exports = { dropdown: 'dropdown-T1V4i3sE', menu: 'menu-T1V4i3sE' }
    },
    aSdR: function (e, t, n) {
      e.exports = { coordinates: 'coordinates-28UK1YDt', input: 'input-28UK1YDt' }
    },
    aw5J: function (e, t, n) {
      e.exports = {
        container: 'container-1zlYw2UK',
        active: 'active-1zlYw2UK',
        disabled: 'disabled-1zlYw2UK',
        icon: 'icon-1zlYw2UK',
      }
    },
    bQEj: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path stroke="currentColor" d="M4 13.5h20"/></svg>'
    },
    bvfV: function (e, t, n) {
      'use strict'
      var a = n('q1tI'),
        o = n.n(a),
        r = n('HSjo'),
        i = n('Si6X'),
        l = n('++uw'),
        c = n('EYfA')
      function s(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, disabled: a },
              title: r,
            },
            offset: i,
          } = e,
          [s] = Object(l.a)({ property: a, defaultValue: !1 })
        return o.a.createElement(c.a, { id: t, offset: i, checked: n, title: r, disabled: e.disabled || s })
      }
      var d = n('TSYQ'),
        u = n.n(d),
        m = n('RMU6'),
        p = n('KacW')
      function h(e) {
        const { property: t } = e,
          [n, a] = Object(l.a)({ property: t })
        return o.a.createElement(p.a, { ...e, lineStyle: n, lineStyleChange: a })
      }
      var f = n('3lVo'),
        b = n('nc0P'),
        v = n('Eyy1')
      function g(e, t, n) {
        const [o, r] = Object(a.useState)(e),
          i = Object(a.useRef)(o)
        return (
          Object(a.useEffect)(() => {
            r(e)
          }, [e, n]),
          [
            o,
            function (e) {
              ;(i.current = e), r(e)
            },
            function () {
              t(i.current)
            },
            function () {
              ;(i.current = e), r(e)
            },
          ]
        )
      }
      var w = n('/3z9'),
        E = n('WboT'),
        j = n('Hr11'),
        y = n('zXvd'),
        O = n('qFKp')
      function x(e) {
        const { property: t, ...n } = e,
          [r, i] = Object(a.useState)(performance.now()),
          [c, s] = Object(l.a)({ property: t, handler: () => i(performance.now()) }),
          d = g(c, s, r)
        return o.a.createElement(S, { ...n, valueHash: r, sharedBuffer: d })
      }
      function S(e) {
        const { sharedBuffer: t, min: n, max: r, step: i, ...l } = e,
          [c, s, d, u] = t,
          m = Object(a.useRef)(null),
          p = Object(a.useRef)(null),
          h = { flushed: !1 }
        return o.a.createElement(N, {
          ...l,
          ref: p,
          onValueChange: function (e, t) {
            s(e), 'step' !== t || h.flushed || (d(), (h.flushed = !0))
          },
          onKeyDown: function (e) {
            if (e.defaultPrevented || h.flushed) return
            switch (Object(w.hashFromEvent)(e.nativeEvent)) {
              case 27:
                u(), (h.flushed = !0)
                break
              case 13:
                e.preventDefault()
                const t = Object(v.ensureNotNull)(p.current).getClampedValue()
                null !== t && (s(t), d(), (h.flushed = !0))
            }
          },
          onBlur: function (e) {
            const t = Object(v.ensureNotNull)(m.current)
            if (!t.contains(document.activeElement) && !t.contains(e.relatedTarget)) {
              const e = Object(v.ensureNotNull)(p.current).getClampedValue()
              null === e || h.flushed || (s(e), d(), (h.flushed = !0))
            }
          },
          value: c,
          roundByStep: !1,
          containerReference: function (e) {
            m.current = e
          },
          inputMode: O.CheckMobile.iOS() ? void 0 : 'numeric',
          min: n,
          max: r,
          step: i,
          stretch: !1,
        })
      }
      const C = {
        mode: 'float',
        min: -Number.MAX_VALUE,
        max: Number.MAX_VALUE,
        step: 1,
        precision: 0,
        inheritPrecisionFromStep: !0,
      }
      class N extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._selection = null),
            (this._restoreSelection = !1),
            (this._input = null),
            (this._handleSelectionChange = () => {
              this._restoreSelection ||
                document.activeElement !== Object(v.ensureNotNull)(this._input) ||
                this._saveSelection(Object(v.ensureNotNull)(this._input))
            }),
            (this._handleInputReference = e => {
              ;(this._input = e), this.props.inputReference && this.props.inputReference(e)
            }),
            (this._onFocus = e => {
              this._saveSelection(Object(v.ensureNotNull)(this._input)),
                this.setState({ focused: !0 }),
                this.props.onFocus && this.props.onFocus(e)
            }),
            (this._onBlur = e => {
              ;(this._selection = null),
                this.setState({ displayValue: k(this.props, this.props.value, V(this.props)), focused: !1 }),
                this.props.onBlur && this.props.onBlur(e)
            }),
            (this._onValueChange = e => {
              const t = e.currentTarget,
                n = t.value,
                a = (function (e, t, n) {
                  switch (n) {
                    case 'integer':
                      return z.test(t) ? t : e
                    case 'float':
                      return (t = t.replace(/,/g, '.')), M.test(t) ? t : e
                  }
                })(this.state.displayValue, n, this.props.mode),
                o = _(a),
                r = this._checkValueBoundaries(o)
              var i, l
              this.setState({ displayValue: a }),
                a !== n &&
                ((i = this.state.displayValue),
                (l = (l = a).replace(/,/g, '.')),
                (i = i.replace(/,/g, '.')).includes('.') || !l.includes('.'))
                  ? ((this._restoreSelection = !0), this.forceUpdate())
                  : this._saveSelection(t),
                r.value && k(this.props, o) === a && this.props.onValueChange(o, 'input')
            }),
            (this._onValueByStepChange = e => {
              const { roundByStep: t = !0, step: n = 1 } = this.props,
                a = _(this.state.displayValue)
              if (isNaN(a)) return
              const o = new b.Big(a),
                r = new b.Big(n),
                i = o.mod(r)
              let l = o.plus(e * n)
              !i.eq(0) && t && (l = l.plus((e > 0 ? 0 : 1) * n).minus(i))
              const c = Number(l)
              this._checkValueBoundaries(c).value &&
                (this.setState({ displayValue: k(this.props, c, V(this.props)) }), this.props.onValueChange(c, 'step'))
            })
          const t = D(this.props.value)
          this.state = {
            value: t,
            displayValue: k(this.props, t, V(this.props)),
            focused: !1,
            valueHash: this.props.valueHash,
          }
        }
        componentDidMount() {
          document.addEventListener('selectionchange', this._handleSelectionChange)
        }
        componentWillUnmount() {
          document.removeEventListener('selectionchange', this._handleSelectionChange)
        }
        componentDidUpdate() {
          const e = Object(v.ensureNotNull)(this._input),
            t = this._selection
          if (null !== t && this._restoreSelection && document.activeElement === e) {
            const { start: n, end: a, direction: o } = t
            e.setSelectionRange(n, a, o)
          }
          this._restoreSelection = !1
        }
        render() {
          return o.a.createElement(E.a, {
            type: 'text',
            inputMode: this.props.inputMode,
            name: this.props.name,
            fontSizeStyle: 'medium',
            value: this.state.displayValue,
            className: this.props.className,
            placeholder: this.props.placeholder,
            disabled: this.props.disabled,
            stretch: this.props.stretch,
            onValueChange: this._onValueChange,
            onValueByStepChange: this._onValueByStepChange,
            containerReference: this.props.containerReference,
            inputReference: this._handleInputReference,
            onClick: this.props.onClick,
            onFocus: this._onFocus,
            onBlur: this._onBlur,
            onKeyDown: this.props.onKeyDown,
          })
        }
        getClampedValue() {
          const { min: e, max: t } = this.props,
            n = _(this.state.displayValue)
          return isNaN(n) ? null : Object(j.clamp)(n, e, t)
        }
        static getDerivedStateFromProps(e, t) {
          const { valueHash: n } = e,
            a = D(e.value)
          if (t.value !== a || t.valueHash !== n) {
            return { value: a, valueHash: n, displayValue: k(e, a, t.focused && t.valueHash === n ? void 0 : V(e)) }
          }
          return null
        }
        _saveSelection(e) {
          const { selectionStart: t, selectionEnd: n, selectionDirection: a } = e
          null !== t && null !== n && null !== a && (this._selection = { start: t, end: n, direction: a })
        }
        _checkValueBoundaries(e) {
          const { min: t, max: n } = this.props
          return {
            value: (function (e, t, n) {
              const a = e >= t,
                o = e <= n
              return { passMin: a, passMax: o, pass: a && o, clamped: Object(j.clamp)(e, t, n) }
            })(e, t, n).pass,
          }
        }
      }
      N.defaultProps = C
      const z = /^-?[0-9]*$/,
        M = /^(-?([0-9]+\.?[0-9]*)|(-?[0-9]*))$/
      function k(e, t, n) {
        return (
          null !== (t = D(t)) && void 0 !== n && (n = Math.max(A(t), n)),
          (function (e, t) {
            if (null === e) return ''
            return new y.NumericFormatter(t).format(e)
          })(t, n)
        )
      }
      function V(e) {
        let t = 0
        return e.inheritPrecisionFromStep && e.step <= 1 && (t = A(e.step)), Math.max(e.precision, t) || void 0
      }
      function A(e) {
        const t = Math.trunc(e).toString()
        return Object(j.clamp)(y.NumericFormatter.formatNoE(e).length - t.length - 1, 0, 15)
      }
      function _(e, t) {
        return new y.NumericFormatter(t).parse(e)
      }
      function D(e) {
        return 'number' == typeof e && Number.isFinite(e) ? e : null
      }
      var T = n('eJTA'),
        F = n('7MId'),
        B = n('Tmoa')
      function R(e) {
        const { color: t, thickness: n, thicknessItems: a, noAlpha: r } = e,
          [i, c] = Object(l.a)({ property: t }),
          [s, d] = Object(l.a)(n ? { property: n } : { defaultValue: void 0 })
        return o.a.createElement(F.a, {
          ...e,
          color: (function () {
            if (!i) return null
            return Object(T.rgbToHexString)(Object(T.parseRgb)(i))
          })(),
          onColorChange: function (e) {
            const t = i ? Object(B.alphaToTransparency)(Object(T.parseRgba)(i)[3]) : 0
            c(Object(B.generateColor)(String(e), t, !0))
          },
          thickness: s,
          thicknessItems: a,
          onThicknessChange: d,
          opacity: r ? void 0 : i ? Object(T.parseRgba)(i)[3] : void 0,
          onOpacityChange: r
            ? void 0
            : function (e) {
                c(Object(B.generateColor)(i, Object(B.alphaToTransparency)(e), !0))
              },
        })
      }
      var P = n('YFKU'),
        L = n('a7Ha'),
        I = n('CHgb'),
        U = n('ijHL'),
        H = n('FIOl'),
        Y = n('jAqK'),
        W = n('8XTa')
      const q = [
        { type: L.LineEnd.Normal, icon: H, label: window.t('Normal') },
        { type: L.LineEnd.Arrow, icon: Y, label: window.t('Arrow') },
      ]
      class J extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._items = []),
            (this._items = q.map(t => ({
              value: t.type,
              selectedContent: o.a.createElement(I.a, { icon: t.icon }),
              content: o.a.createElement(I.b, {
                icon: t.icon,
                iconClassName: u()(e.isRight && W.right),
                label: t.label,
              }),
            })))
        }
        render() {
          const { id: e, lineEnd: t, className: n, lineEndChange: a, isRight: r, disabled: i } = this.props
          return o.a.createElement(I.c, {
            id: e,
            disabled: i,
            className: u()(W.lineEndSelect, r && W.right, n),
            items: this._items,
            value: t,
            onChange: a,
            hideArrowButton: !0,
            ...Object(U.b)(this.props),
          })
        }
      }
      function K(e) {
        const { property: t } = e,
          [n, a] = Object(l.a)({ property: t })
        return o.a.createElement(J, { ...e, lineEnd: n, lineEndChange: a })
      }
      var X = n('xpzh'),
        Q = n('6w4h')
      function G(e) {
        const { children: t, className: n, breakPoint: o = 'Normal' } = e
        return a.createElement(
          X.a,
          { className: d(Q.wrap, n, Q['breakpoint' + o]) },
          a.Children.map(t, e =>
            a.isValidElement(e)
              ? a.createElement('span', { key: null === e.key ? void 0 : e.key, className: Q.row }, e)
              : e,
          ),
        )
      }
      const Z = { 1: 'float', 0: 'integer' }
      var $ = n('vqb8'),
        ee = n('eU7S')
      function te(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, disabled: r, leftEnd: i, rightEnd: s, value: u, extendLeft: p, extendRight: b },
              title: v,
              valueMin: g,
              valueMax: w,
              valueStep: E,
              valueUnit: j,
              extendLeftTitle: y,
              extendRightTitle: O,
            },
            offset: S,
          } = e,
          [C] = Object(l.a)({ property: n, defaultValue: !0 }),
          [N] = Object(l.a)({ property: r, defaultValue: !1 }),
          z = Object($.a)({ watchedValue: g, defaultValue: void 0 }),
          M = Object($.a)({ watchedValue: w, defaultValue: void 0 }),
          k = Object($.a)({ watchedValue: E, defaultValue: void 0 }),
          V = Object($.a)({ watchedValue: j, defaultValue: void 0 }),
          A = e.disabled || !C
        return o.a.createElement(
          a.Fragment,
          null,
          o.a.createElement(
            c.a,
            { id: t, offset: S, checked: n, title: v, disabled: e.disabled || N },
            o.a.createElement(
              G,
              { className: ee.line, breakPoint: 'Small' },
              o.a.createElement(
                a.Fragment,
                null,
                (function () {
                  const {
                    definition: {
                      properties: { color: n, width: a },
                      widthValues: r,
                    },
                  } = e
                  if (n)
                    return o.a.createElement(
                      'span',
                      { className: ee.control },
                      o.a.createElement(R, { color: n, thickness: a, disabled: A, thicknessItems: r }),
                    )
                  return (
                    a &&
                    o.a.createElement(
                      'span',
                      { className: ee.control },
                      o.a.createElement(f.a, {
                        id: Object(m.a)(t, 'line-width-select'),
                        items: r,
                        property: a,
                        disabled: A,
                      }),
                    )
                  )
                })(),
                (function () {
                  const {
                    definition: {
                      properties: { style: n },
                    },
                  } = e
                  return (
                    n &&
                    o.a.createElement(
                      'span',
                      { className: ee.control },
                      o.a.createElement(h, { id: Object(m.a)(t, 'line-style-select'), property: n, disabled: A }),
                    )
                  )
                })(),
              ),
              (i || s || u) &&
                o.a.createElement(
                  a.Fragment,
                  null,
                  o.a.createElement(
                    a.Fragment,
                    null,
                    i &&
                      o.a.createElement(K, {
                        id: Object(m.a)(t, 'left-end-select'),
                        'data-name': 'left-end-select',
                        className: ee.control,
                        property: i,
                        disabled: A,
                      }),
                    s &&
                      o.a.createElement(K, {
                        id: Object(m.a)(t, 'right-end-select'),
                        'data-name': 'right-end-select',
                        className: ee.control,
                        property: s,
                        disabled: A,
                        isRight: !0,
                      }),
                  ),
                  (function () {
                    const {
                      definition: { valueType: t },
                    } = e
                    return (
                      u &&
                      o.a.createElement(
                        'span',
                        { className: d(ee.valueInput, ee.control) },
                        o.a.createElement(x, {
                          className: ee.input,
                          property: u,
                          min: z,
                          max: M,
                          step: k,
                          disabled: A,
                          mode: void 0 !== t ? Z[t] : void 0,
                          name: 'line-value-input',
                        }),
                        o.a.createElement('span', { className: ee.valueUnit }, V),
                      )
                    )
                  })(),
                ),
            ),
          ),
          p &&
            o.a.createElement(c.a, {
              id: t + 'ExtendLeft',
              offset: S,
              checked: p,
              title: y,
              disabled: e.disabled || N,
            }),
          b &&
            o.a.createElement(c.a, {
              id: t + 'ExtendRight',
              offset: S,
              checked: b,
              title: O,
              disabled: e.disabled || N,
            }),
        )
      }
      var ne = n('4vW/'),
        ae = n('PECq'),
        oe = n('gla1')
      function re(e) {
        const { property: t, options: n, ...r } = e,
          [i, c] = Object(l.a)({ property: t }),
          s = Object(oe.a)()
        return (
          Object(a.useEffect)(() => {
            const e = () => s()
            return (
              Array.isArray(n) || n.subscribe(e),
              () => {
                Array.isArray(n) || n.unsubscribe(e)
              }
            )
          }, []),
          o.a.createElement(ae.a, {
            ...r,
            onChange: c,
            value: i,
            items: (Array.isArray(n) ? n : n.value()).map(e => ({ content: e.title, value: e.value, id: e.id })),
          })
        )
      }
      var ie = n('ioCK')
      const le = [
        { title: Object(P.t)('Solid'), value: ne.ColorType.Solid },
        { title: Object(P.t)('Gradient'), value: ne.ColorType.Gradient },
      ]
      function ce(e) {
        const { id: t, disabled: n, noAlpha: a, properties: r } = e,
          { color: i, gradientColor1: c, gradientColor2: s, type: d } = r,
          [u] = Object(l.a)({ property: d, defaultValue: ne.ColorType.Solid })
        return o.a.createElement(
          G,
          null,
          o.a.createElement(re, {
            id: Object(m.a)(t, 'background-type-options-dropdown'),
            'data-name': 'background-type-options-dropdown',
            className: ie.dropdown,
            menuClassName: ie.dropdownMenu,
            disabled: n,
            property: d,
            options: le,
          }),
          u === ne.ColorType.Solid
            ? o.a.createElement(R, { color: i, disabled: n, noAlpha: a })
            : o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(R, { className: ie.firstColorPicker, color: c, disabled: n, noAlpha: a }),
                o.a.createElement(R, { color: s, disabled: n, noAlpha: a }),
              ),
        )
      }
      function se(e) {
        const {
            definition: { id: t, properties: n, title: a, noAlpha: r },
            offset: i,
          } = e,
          { color: s, checked: d, disabled: u } = n,
          [m] = Object(l.a)({ property: d, defaultValue: !0 }),
          [p] = Object(l.a)({ property: u, defaultValue: !1 }),
          h = e.disabled || !m
        return o.a.createElement(
          c.a,
          { id: t, offset: i, checked: d, title: a, disabled: e.disabled || p },
          o.a.createElement(
            X.a,
            null,
            n.hasOwnProperty('type')
              ? o.a.createElement(ce, { id: t, properties: n, disabled: h, noAlpha: r })
              : o.a.createElement(R, { color: s, disabled: h, noAlpha: r }),
          ),
        )
      }
      var de = n('U1eG'),
        ue = n('HGP3'),
        me = n('lB1i')
      function pe(e) {
        const { value: t, disabled: n, onChange: a } = e
        return o.a.createElement(
          'div',
          { className: d(me.wrap, { [me.disabled]: n }) },
          o.a.createElement(de.a, {
            hideInput: !0,
            color: ue.colorsPalette['color-tv-blue-500'],
            opacity: 1 - t / 100,
            onChange: function (e) {
              n || a(100 - 100 * e)
            },
          }),
        )
      }
      function he(e) {
        const { property: t, ...n } = e,
          [o, r] = Object(l.a)({ property: t })
        return a.createElement(pe, { ...n, value: o, onChange: r })
      }
      function fe(e) {
        const {
            definition: {
              id: t,
              properties: { transparency: n, checked: a, disabled: r },
              title: i,
            },
            offset: s,
          } = e,
          [d] = Object(l.a)({ property: a, defaultValue: !0 }),
          [u] = Object(l.a)({ property: r, defaultValue: !1 }),
          m = e.disabled || !d
        return o.a.createElement(
          c.a,
          { id: t, offset: s, checked: a, title: i, disabled: e.disabled || u },
          o.a.createElement(X.a, null, o.a.createElement(he, { property: n, disabled: m })),
        )
      }
      var be = n('oWdB')
      function ve(e) {
        const {
            definition: {
              id: t,
              properties: { color1: n, color2: a, checked: r, disabled: i },
              title: s,
              noAlpha1: d,
              noAlpha2: u,
            },
            offset: m,
          } = e,
          [p] = Object(l.a)({ property: r, defaultValue: !0 }),
          [h] = Object(l.a)({ property: i, defaultValue: !1 }),
          f = e.disabled || !p || h
        return o.a.createElement(
          c.a,
          { id: t, offset: m, checked: r, title: s, disabled: e.disabled || h },
          o.a.createElement(X.a, { className: be.twoColors }, b(n, d), b(a, u)),
        )
        function b(e, t) {
          return o.a.createElement(
            'span',
            { className: be.colorPicker },
            o.a.createElement(R, { color: e, disabled: f, noAlpha: t }),
          )
        }
      }
      var ge = n('ybVX'),
        we = n('ZRxn')
      function Ee(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, value: r, unitOptionsValue: i, disabled: s },
              min: u,
              max: p,
              step: h,
              title: f,
              unit: b,
              unitOptions: g,
              type: w,
            },
            offset: E,
          } = e,
          [j] = Object(l.a)({ property: n, defaultValue: !0 }),
          [y] = Object(l.a)({ property: s, defaultValue: !1 }),
          O = Object($.a)({ watchedValue: u, defaultValue: void 0 }),
          S = Object($.a)({ watchedValue: p, defaultValue: void 0 }),
          C = Object($.a)({ watchedValue: h, defaultValue: void 0 }),
          N = Object($.a)({ watchedValue: b, defaultValue: void 0 }),
          z = Object(a.useContext)(ge.b),
          M = e.disabled || !j
        return o.a.createElement(
          c.a,
          { id: t, offset: E, checked: n, title: f, disabled: e.disabled || y },
          o.a.createElement(
            X.a,
            null,
            o.a.createElement(
              G,
              null,
              o.a.createElement(x, {
                className: d(we.input, z[t] && we[z[t]]),
                property: r,
                min: O,
                max: S,
                step: C,
                disabled: M,
                mode: Z[w],
                name: 'number-input',
              }),
              i &&
                o.a.createElement(re, {
                  id: Object(m.a)(t, 'unit-options-dropdown'),
                  'data-name': 'unit-options-dropdown',
                  className: we.dropdown,
                  menuClassName: we.dropdownMenu,
                  disabled: M,
                  property: i,
                  options: Object(v.ensureDefined)(g),
                }),
            ),
            o.a.createElement('span', { className: we.unit }, N),
          ),
        )
      }
      function je(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, disabled: a },
              childrenDefinitions: r,
              title: i,
            },
            offset: s,
          } = e,
          [d] = Object(l.a)({ property: n, defaultValue: !0 }),
          [u] = Object(l.a)({ property: a, defaultValue: !1 }),
          m = e.disabled || !d
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(c.a, { id: t, offset: s, checked: n, title: i, disabled: e.disabled || u }),
          r.map(e => o.a.createElement(dn, { key: e.id, disabled: m, definition: e, offset: !0 })),
        )
      }
      var ye = n('UXjO')
      function Oe(e) {
        const { property: t } = e,
          [n, a] = Object(l.a)({ property: t })
        return o.a.createElement(ye.a, { ...e, fontSize: n, fontSizeChange: a, 'data-name': 'font-size-select' })
      }
      var xe = n('Iivm'),
        Se = n('aw5J')
      function Ce(e) {
        const { className: t, checked: n, icon: a, disabled: r, onClick: i } = e
        return o.a.createElement(
          'div',
          {
            className: u()(t, Se.container, n && !r && Se.active, r && Se.disabled),
            onClick: r ? void 0 : i,
            'data-role': 'button',
            ...Object(U.b)(e),
          },
          o.a.createElement(xe.a, { className: Se.icon, icon: a }),
        )
      }
      function Ne(e) {
        const { icon: t, className: n, property: o, disabled: r } = e,
          [i, c] = Object(l.a)({ property: o })
        return a.createElement(Ce, {
          className: n,
          icon: t,
          checked: i,
          onClick: function () {
            c(!i)
          },
          disabled: r,
          ...Object(U.b)(e),
        })
      }
      var ze,
        Me = n('ldG2'),
        ke = n('Q+1u'),
        Ve = n('ECWH'),
        Ae = n('SpAO'),
        _e = n('Bcy+'),
        De = n('RG4O'),
        Te = n('3F0O'),
        Fe = n('szLm'),
        Be = n('xADF'),
        Re = n('ORlR')
      n('Px4x')
      !(function (e) {
        ;(e.None = 'none'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal'), (e.Both = 'both')
      })(ze || (ze = {}))
      const Pe = o.a.forwardRef((e, t) => {
        const {
            id: n,
            title: a,
            tabIndex: r,
            containerTabIndex: i,
            role: l,
            inputClassName: c,
            autoComplete: s,
            autoFocus: u,
            cols: m,
            disabled: p,
            isFocused: h,
            form: f,
            maxLength: b,
            minLength: v,
            name: g,
            placeholder: w,
            readonly: E,
            required: j,
            rows: y,
            value: O,
            defaultValue: x,
            wrap: S,
            containerReference: C,
            onChange: N,
            onSelect: z,
            onFocus: M,
            onContainerFocus: k,
            onBlur: V,
            ...A
          } = e,
          _ = {
            id: n,
            title: a,
            tabIndex: r,
            role: l,
            autoComplete: s,
            autoFocus: u,
            cols: m,
            disabled: p,
            form: f,
            maxLength: b,
            minLength: v,
            name: g,
            placeholder: w,
            readOnly: E,
            required: j,
            rows: y,
            value: O,
            defaultValue: x,
            wrap: S,
            onChange: N,
            onSelect: z,
            onFocus: M,
            onBlur: V,
          }
        return o.a.createElement(Me.a, {
          ...A,
          tabIndex: i,
          disabled: p,
          readonly: E,
          isFocused: h,
          ref: C,
          onFocus: k,
          middleSlot: o.a.createElement(
            Be.c,
            null,
            o.a.createElement('textarea', { ..._, className: d(Re.textarea, c), ref: t }),
          ),
        })
      })
      Pe.displayName = 'TextareaView'
      const Le = (e, t, n) => (t ? void 0 : e ? -1 : n),
        Ie = (e, t, n) => (t ? void 0 : e ? n : -1),
        Ue = o.a.forwardRef((e, t) => {
          e = Object(_e.a)(e)
          const {
              className: n,
              disabled: r,
              autoSelectOnFocus: i,
              tabIndex: l = 0,
              borderStyle: c,
              highlight: s,
              resize: u,
              containerReference: m = null,
              onFocus: p,
              onBlur: h,
              ...f
            } = e,
            b = Object(a.useRef)(null),
            v = Object(a.useRef)(null),
            { isMouseDown: g, handleMouseDown: w, handleMouseUp: E } = Object(De.a)(),
            [j, y] = Object(Ae.a)(),
            O = Object(Te.a)(
              y.onFocus,
              function (e) {
                i && !g.current && Object(Fe.a)(e.currentTarget)
              },
              p,
            ),
            x = Object(Te.a)(y.onBlur, h),
            S = void 0 !== u && u !== ze.None,
            C = null != c ? c : S ? (s ? 'thick' : 'thin') : void 0,
            N = null != s ? s : !S && void 0
          return o.a.createElement(Pe, {
            ...f,
            className: d(
              Re['textarea-container'],
              S && Re['change-highlight'],
              u && u !== ze.None && Re['resize-' + u],
              j && Re.focused,
              n,
            ),
            disabled: r,
            isFocused: j,
            containerTabIndex: Le(j, r, l),
            tabIndex: Ie(j, r, l),
            borderStyle: C,
            highlight: N,
            onContainerFocus: function (e) {
              v.current === e.target && null !== b.current && b.current.focus()
            },
            onFocus: O,
            onBlur: x,
            onMouseDown: w,
            onMouseUp: E,
            ref: function (e) {
              ;(b.current = e), 'function' == typeof t ? t(e) : t && (t.current = e)
            },
            containerReference: Object(Ve.a)([m, v]),
          })
        })
      function He(e) {
        const { property: t, ...n } = e,
          [r, i] = Object(l.a)({ property: t }),
          c = Object(a.useCallback)(e => i(e.target.value), [i])
        return o.a.createElement(Ue, { ...n, value: r, onChange: c })
      }
      Ue.displayName = 'Textarea'
      var Ye = n('rRJX'),
        We = n('4Fxa'),
        qe = n('CaTF')
      const Je = e => ({ content: e.title, title: e.title, value: e.value, id: e.id }),
        Ke = e => ({ content: e.title, title: e.title, value: e.value, id: e.id })
      function Xe(e) {
        const {
            definition: {
              id: t,
              properties: {
                color: n,
                size: r,
                checked: i,
                disabled: s,
                bold: d,
                italic: u,
                text: p,
                alignmentHorizontal: h,
                alignmentVertical: f,
                orientation: b,
                backgroundVisible: v,
                backgroundColor: g,
                borderVisible: w,
                borderColor: E,
                borderWidth: j,
                wrap: y,
              },
              title: O,
              sizeItems: x,
              alignmentTitle: S,
              alignmentHorizontalItems: C,
              alignmentVerticalItems: N,
              orientationTitle: z,
              orientationItems: M,
              backgroundTitle: k,
              borderTitle: V,
              borderWidthItems: A,
              wrapTitle: _,
            },
            offset: D,
          } = e,
          T = Object(a.useContext)(ge.a),
          [F] = Object(l.a)({ property: i, defaultValue: !0 }),
          [B] = Object(l.a)({ property: s, defaultValue: !1 }),
          [P, L] = Object(l.a)({ property: f, defaultValue: void 0 }),
          [I, U] = Object(l.a)({ property: b, defaultValue: 'horizontal' }),
          [H, Y] = Object(l.a)({ property: h, defaultValue: void 0 }),
          [W] = Object(l.a)({ property: v, defaultValue: !1 }),
          [q] = Object(l.a)({
            property: w,
            defaultValue: !1,
          }),
          J = e.disabled || !F
        return o.a.createElement(
          a.Fragment,
          null,
          (function () {
            if (O)
              return o.a.createElement(
                c.a,
                { id: t, offset: D, checked: i, title: O, disabled: e.disabled || B },
                o.a.createElement(G, { breakPoint: 'Small' }, Z(), $()),
              )
            return o.a.createElement(
              ke.a.Row,
              null,
              o.a.createElement(
                ke.a.Cell,
                { placement: 'first', colSpan: 2, offset: D, 'data-section-name': t },
                Z(),
                $(),
              ),
            )
          })(),
          p &&
            o.a.createElement(
              ke.a.Row,
              null,
              o.a.createElement(
                ke.a.Cell,
                { placement: 'first', colSpan: 2, offset: D, 'data-section-name': t },
                o.a.createElement(He, {
                  className: Me.b.FontSizeMedium,
                  rows: ((K = T[t]), 'big' === K ? 9 : 5),
                  stretch: !0,
                  property: p,
                  disabled: J,
                  onFocus: function (e) {
                    e.target.select()
                  },
                  name: 'text-input',
                }),
              ),
            ),
          (h || f) &&
            o.a.createElement(
              ke.a.Row,
              null,
              o.a.createElement(
                ke.a.Cell,
                { placement: 'first', verticalAlign: 'adaptive', offset: D, 'data-section-name': t },
                o.a.createElement(X.a, null, S),
              ),
              o.a.createElement(
                ke.a.Cell,
                { placement: 'last', verticalAlign: 'adaptive', 'data-section-name': t },
                o.a.createElement(
                  G,
                  { breakPoint: 'Small' },
                  void 0 !== P &&
                    void 0 !== N &&
                    o.a.createElement(ae.a, {
                      id: Object(m.a)(t, 'alignment-vertical-select'),
                      'data-name': 'alignment-vertical-select',
                      className: qe.dropdown,
                      menuClassName: qe.dropdownMenu,
                      disabled: J,
                      value: P,
                      items: N.map(Je),
                      onChange: L,
                    }),
                  void 0 !== H &&
                    void 0 !== C &&
                    o.a.createElement(ae.a, {
                      id: Object(m.a)(t, 'alignment-horizontal-select'),
                      'data-name': 'alignment-horizontal-select',
                      className: qe.dropdown,
                      menuClassName: qe.dropdownMenu,
                      disabled: J,
                      value: H,
                      items: C.map(Je),
                      onChange: Y,
                    }),
                ),
              ),
            ),
          void 0 !== b &&
            void 0 !== M &&
            o.a.createElement(
              ke.a.Row,
              null,
              o.a.createElement(
                ke.a.Cell,
                { placement: 'first', verticalAlign: 'adaptive', offset: D, 'data-section-name': t },
                o.a.createElement(X.a, null, z),
              ),
              o.a.createElement(
                ke.a.Cell,
                { placement: 'last', verticalAlign: 'adaptive', 'data-section-name': t },
                o.a.createElement(
                  G,
                  { breakPoint: 'Small' },
                  o.a.createElement(ae.a, {
                    id: Object(m.a)(t, 'orientation-select'),
                    'data-name': 'orientation-select',
                    className: qe.dropdown,
                    menuClassName: qe.dropdownMenu,
                    disabled: J,
                    value: I,
                    items: M.map(Ke),
                    onChange: U,
                  }),
                ),
              ),
            ),
          ee(k, v, g, !!v && !W),
          ee(V, w, E, !!w && !q, j, A),
          y && o.a.createElement(c.a, { id: t + 'Wrap', offset: D, checked: y, title: _, disabled: e.disabled || B }),
        )
        var K
        function Q(e, t, n) {
          return e
            ? o.a.createElement(Ne, {
                className: qe.fontStyleButton,
                icon: t,
                property: e,
                disabled: J,
                'data-name': n,
              })
            : null
        }
        function Z() {
          return o.a.createElement(
            a.Fragment,
            null,
            n &&
              o.a.createElement('div', { className: qe.colorPicker }, o.a.createElement(R, { color: n, disabled: J })),
            r &&
              x &&
              o.a.createElement(Oe, { id: Object(m.a)(t, 'font-size-select'), property: r, fontSizes: x, disabled: J }),
          )
        }
        function $() {
          return o.a.createElement(a.Fragment, null, Q(d, Ye, 'toggle-bold'), Q(u, We, 'toggle-italic'))
        }
        function ee(n, a, r, i, l, s) {
          return r || a
            ? o.a.createElement(
                c.a,
                { id: t + 'ColorSelect', offset: D, checked: a, title: n, disabled: e.disabled || B },
                r && o.a.createElement(R, { color: r, thickness: l, thicknessItems: s, disabled: J || i }),
              )
            : null
        }
      }
      var Qe = n('aSdR')
      function Ge(e) {
        const {
            definition: {
              properties: { x: t, y: n, disabled: a },
              id: r,
              minX: i,
              maxX: l,
              stepX: c,
              minY: s,
              maxY: d,
              stepY: u,
              title: m,
              typeX: p,
              typeY: h,
            },
            offset: f,
          } = e,
          b = (a && a.value()) || e.disabled,
          v = Object($.a)({ watchedValue: i, defaultValue: void 0 }),
          g = Object($.a)({ watchedValue: l, defaultValue: void 0 }),
          w = Object($.a)({ watchedValue: c, defaultValue: void 0 }),
          E = Object($.a)({ watchedValue: s, defaultValue: void 0 }),
          j = Object($.a)({ watchedValue: d, defaultValue: void 0 }),
          y = Object($.a)({ watchedValue: u, defaultValue: void 0 })
        return o.a.createElement(
          ke.a.Row,
          null,
          o.a.createElement(
            ke.a.Cell,
            { verticalAlign: 'adaptive', placement: 'first', offset: f, 'data-section-name': r },
            o.a.createElement('span', { className: Qe.coordinates }, m),
          ),
          (t || n) &&
            o.a.createElement(
              ke.a.Cell,
              { placement: 'last', offset: f, 'data-section-name': r },
              o.a.createElement(
                G,
                { breakPoint: 'Medium' },
                n &&
                  o.a.createElement(x, {
                    className: Qe.input,
                    property: n,
                    min: E,
                    max: j,
                    step: y,
                    disabled: b,
                    name: 'y-input',
                    mode: void 0 !== h ? Z[h] : 'integer',
                  }),
                t &&
                  o.a.createElement(x, {
                    className: Qe.input,
                    property: t,
                    min: v,
                    max: g,
                    step: w,
                    disabled: b,
                    name: 'x-input',
                    mode: void 0 !== p ? Z[p] : 'integer',
                  }),
              ),
            ),
        )
      }
      var Ze = n('9gev')
      function $e(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, option: r, disabled: i },
              title: s,
              options: d,
            },
            offset: p,
          } = e,
          [h] = Object(l.a)({ property: n, defaultValue: !0 }),
          [f] = Object(l.a)({ property: i, defaultValue: !1 }),
          b = Object(a.useContext)(ge.b),
          v = e.disabled || !h
        return o.a.createElement(
          c.a,
          { id: t, offset: p, checked: n, title: s, disabled: e.disabled || f },
          o.a.createElement(
            X.a,
            null,
            o.a.createElement(re, {
              id: Object(m.a)(t, 'options-dropdown'),
              'data-name': 'options-dropdown',
              className: u()(Ze.dropdown, b[t] && Ze[b[t]]),
              menuClassName: u()(Ze.dropdownMenu, b[t] && Ze[b[t]]),
              disabled: v || f,
              property: r,
              options: d,
            }),
          ),
        )
      }
      var et = n('yqnI')
      var tt = n('Ialn'),
        nt = n('G7lD')
      class at extends a.PureComponent {
        constructor(e) {
          super(e),
            (this._container = null),
            (this._pointer = null),
            (this._rafPosition = null),
            (this._rafDragStop = null),
            (this._refContainer = e => {
              this._container = e
            }),
            (this._refPointer = e => {
              this._pointer = e
            }),
            (this._handlePosition = e => {
              null !== this._rafPosition ||
                this.props.disabled ||
                (this._rafPosition = requestAnimationFrame(() => {
                  const { from: t, to: n, min: a, max: o } = this.props,
                    r = this._getNewPosition(e),
                    i = 1 === this._detectPointerMode(e),
                    l = i ? Object(j.clamp)(r, a, n) : t,
                    c = i ? n : Object(j.clamp)(r, t, o)
                  l <= c && this._handleChange(l, c), (this._rafPosition = null)
                }))
            }),
            (this._handleDragStop = () => {
              null !== this._rafDragStop ||
                this.props.disabled ||
                (this._rafDragStop = requestAnimationFrame(() => {
                  this.setState({ pointerDragMode: 0 }), (this._rafDragStop = null), this.props.onCommit()
                }))
            }),
            (this._onSliderClick = e => {
              O.CheckMobile.any() || (this._handlePosition(e.nativeEvent), this._dragSubscribe())
            }),
            (this._mouseUp = e => {
              this._dragUnsubscribe(), this._handlePosition(e), this._handleDragStop()
            }),
            (this._mouseMove = e => {
              this._handlePosition(e)
            }),
            (this._onTouchStart = e => {
              this._handlePosition(e.nativeEvent.touches[0])
            }),
            (this._handleTouch = e => {
              this._handlePosition(e.nativeEvent.touches[0])
            }),
            (this._handleTouchEnd = () => {
              this._handleDragStop()
            }),
            (this.state = { pointerDragMode: 0 })
        }
        componentWillUnmount() {
          null !== this._rafPosition && (cancelAnimationFrame(this._rafPosition), (this._rafPosition = null)),
            null !== this._rafDragStop && (cancelAnimationFrame(this._rafDragStop), (this._rafDragStop = null)),
            this._dragUnsubscribe()
        }
        render() {
          const { className: e, disabled: t, from: n, to: o, min: r, max: i } = this.props,
            { pointerDragMode: l } = this.state,
            c = 0 !== l,
            s = i - r,
            u = (n - r) / s,
            m = (o - r) / s,
            p = Object(tt.isRtl)() ? 'right' : 'left'
          return a.createElement(
            'div',
            { className: d(e, nt.range, t && nt.disabled) },
            a.createElement(
              'div',
              {
                className: nt.rangeSlider,
                ref: this._refContainer,
                onMouseDown: this._onSliderClick,
                onTouchStart: this._onTouchStart,
                onTouchMove: this._handleTouch,
                onTouchEnd: this._handleTouchEnd,
              },
              a.createElement(
                'div',
                { className: nt.rangeSliderMiddleWrap },
                a.createElement('div', {
                  className: d(nt.rangeSliderMiddle, c && nt.dragged),
                  style: { [p]: 100 * u + '%', width: 100 * (m - u) + '%' },
                }),
              ),
              a.createElement(
                'div',
                { className: nt.rangePointerWrap },
                a.createElement('div', {
                  className: d(nt.pointer, c && nt.dragged),
                  style: { [p]: 100 * u + '%' },
                  ref: this._refPointer,
                }),
              ),
              a.createElement(
                'div',
                { className: nt.rangePointerWrap },
                a.createElement('div', { className: d(nt.pointer, c && nt.dragged), style: { [p]: 100 * m + '%' } }),
              ),
            ),
          )
        }
        _dragSubscribe() {
          const e = Object(v.ensureNotNull)(this._container).ownerDocument
          e && (e.addEventListener('mouseup', this._mouseUp), e.addEventListener('mousemove', this._mouseMove))
        }
        _dragUnsubscribe() {
          const e = Object(v.ensureNotNull)(this._container).ownerDocument
          e && (e.removeEventListener('mousemove', this._mouseMove), e.removeEventListener('mouseup', this._mouseUp))
        }
        _getNewPosition(e) {
          const { min: t, max: n } = this.props,
            a = n - t,
            o = Object(v.ensureNotNull)(this._container),
            r = Object(v.ensureNotNull)(this._pointer),
            i = o.getBoundingClientRect(),
            l = r.offsetWidth
          let c = e.clientX - l / 2 - i.left
          return Object(tt.isRtl)() && (c = i.width - c - l), Object(j.clamp)(c / (i.width - l), 0, 1) * a + t
        }
        _detectPointerMode(e) {
          const { from: t, to: n } = this.props,
            { pointerDragMode: a } = this.state
          if (0 !== a) return a
          const o = this._getNewPosition(e),
            r = Math.abs(t - o),
            i = Math.abs(n - o),
            l = r === i ? (o < t ? 1 : 2) : r < i ? 1 : 2
          return this.setState({ pointerDragMode: l }), l
        }
        _handleChange(e, t) {
          const { from: n, to: a, onChange: o } = this.props
          ;(e === n && t === a) || o(e, t)
        }
      }
      var ot = n('/KDZ'),
        rt = n('7EmB')
      function it(e) {
        const {
            definition: {
              id: t,
              properties: { checked: n, disabled: a, from: r, to: i },
              title: s,
              max: d,
              min: u,
            },
            offset: m,
          } = e,
          [p] = Object(l.a)({ property: n, defaultValue: !0 }),
          [h] = Object(l.a)({ property: a, defaultValue: !1 }),
          f = Object($.a)({ watchedValue: u, defaultValue: void 0 }),
          b = Object($.a)({ watchedValue: d, defaultValue: void 0 }),
          [v, w] = Object(l.a)({ property: r }),
          E = g(v, w),
          [j, y, O] = E,
          [x, C] = Object(l.a)({ property: i }),
          N = g(x, C),
          [z, M, k] = N,
          V = e.disabled || !p,
          A = { flushed: !1 }
        return o.a.createElement(
          c.a,
          { id: t, offset: m, checked: n, title: s, disabled: e.disabled || h },
          o.a.createElement(
            X.a,
            { className: rt.range },
            (function () {
              if (!f || !b) return null
              return o.a.createElement(ot.a, { rule: 'screen and (max-width: 460px)' }, e =>
                o.a.createElement(
                  G,
                  { breakPoint: 'Medium' },
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      'span',
                      { className: rt.valueInput },
                      o.a.createElement(S, {
                        className: rt.input,
                        sharedBuffer: E,
                        min: f,
                        max: z,
                        step: 1,
                        disabled: V,
                        name: 'from-input',
                        mode: 'integer',
                      }),
                      e
                        ? o.a.createElement('span', { className: rt.rangeSlider }, '—')
                        : o.a.createElement(at, {
                            className: rt.rangeSlider,
                            from: j,
                            to: z,
                            min: f,
                            max: b,
                            onChange: _,
                            onCommit: D,
                            disabled: V,
                          }),
                    ),
                  ),
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(
                      'span',
                      {
                        className: rt.valueInput,
                      },
                      o.a.createElement(S, {
                        className: rt.input,
                        sharedBuffer: N,
                        min: j,
                        max: b,
                        step: 1,
                        disabled: V,
                        name: 'to-input',
                        mode: 'integer',
                      }),
                    ),
                  ),
                ),
              )
            })(),
          ),
        )
        function _(e, t) {
          y(Math.round(e)), M(Math.round(t))
        }
        function D() {
          A.flushed || (O(), k(), (A.flushed = !0))
        }
      }
      var lt = n('07LS'),
        ct = n('fktV'),
        st = n('EJl2')
      function dt(e) {
        const { definitions: t, name: n, offset: a } = e
        return o.a.createElement(
          ke.a.Row,
          null,
          o.a.createElement(
            ke.a.Cell,
            {
              className: u()(st.cell, st.fragmentCell),
              offset: a,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              'data-section-name': n,
              checkableTitle: !0,
            },
            t.map(e =>
              o.a.createElement(
                'div',
                { className: st.item, key: e.id, 'data-section-name': e.id },
                o.a.createElement(mt, { definition: e }),
              ),
            ),
          ),
        )
      }
      function ut(e) {
        const { definition: t, offset: n } = e
        return o.a.createElement(
          ke.a.Row,
          null,
          o.a.createElement(
            ke.a.Cell,
            {
              className: st.cell,
              offset: n,
              placement: 'first',
              verticalAlign: 'adaptive',
              colSpan: 2,
              checkableTitle: !0,
            },
            o.a.createElement(mt, { definition: t }),
          ),
        )
      }
      function mt(e) {
        const {
            definition: {
              id: t,
              properties: { disabled: n, checked: a, color: r, level: i, width: c, style: s },
              title: d,
              widthValues: p,
              styleValues: f,
            },
          } = e,
          [b] = Object(l.a)({ property: a, defaultValue: !0 }),
          [v] = Object(l.a)({ property: n, defaultValue: !1 }),
          g = v || !b
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(ct.a, {
            name: 'is-enabled-' + t,
            className: u()(d && st.withTitle),
            title: d && o.a.createElement('span', { className: st.title }, d),
            property: a,
            disabled: v,
          }),
          i && o.a.createElement(x, { className: u()(st.input, st.control), property: i, disabled: g }),
          r && o.a.createElement(R, { className: st.control, disabled: g, color: r, thickness: c, thicknessItems: p }),
          s &&
            o.a.createElement(h, {
              id: Object(m.a)(t, 'leveled-line-style-select'),
              className: st.control,
              property: s,
              disabled: g,
              allowedLineStyles: f,
            }),
        )
      }
      var pt = n('ZcEB')
      function ht(e) {
        const {
            definition: {
              id: t,
              properties: { option1: n, option2: a, checked: r, disabled: i },
              title: s,
              optionsItems1: d,
              optionsItems2: u,
            },
            offset: p,
          } = e,
          [h] = Object(l.a)({ property: r, defaultValue: !0 }),
          [f] = Object(l.a)({ property: i, defaultValue: !1 }),
          b = e.disabled || !h
        return o.a.createElement(
          c.a,
          { id: t, offset: p, checked: r, title: s, disabled: e.disabled || f },
          o.a.createElement(
            G,
            { className: pt.twoOptions },
            o.a.createElement(re, {
              id: Object(m.a)(t, 'two-options-dropdown-1'),
              'data-name': 'two-options-dropdown-1',
              className: pt.dropdown,
              menuClassName: pt.menu,
              property: n,
              disabled: b,
              options: d,
            }),
            o.a.createElement(re, {
              id: Object(m.a)(t, 'two-options-dropdown-2'),
              'data-name': 'two-options-dropdown-2',
              className: pt.dropdown,
              menuClassName: pt.menu,
              property: a,
              disabled: b,
              options: u,
            }),
          ),
        )
      }
      var ft = n('fV0y'),
        bt = n('Vdly'),
        vt = n('MjAr')
      var gt = n('0lS6')
      function wt(e) {
        const { tab: t, icon: n, isActive: a, onTabClick: r } = e
        return o.a.createElement(
          'div',
          {
            className: u()(gt.wrapper, a && gt.isActive),
            onClick: function () {
              r(t)
            },
          },
          o.a.createElement(xe.a, { icon: n }),
        )
      }
      var Et = n('Bbdy')
      function jt(e) {
        const { activeTab: t, emojis: n, onTabClick: a } = e
        return o.a.createElement(
          'div',
          { className: Et.wrapper },
          n.map(({ title: e, icon: n }) =>
            o.a.createElement(wt, { key: e, tab: e, icon: n, isActive: t === e, onTabClick: a }),
          ),
        )
      }
      var yt = n('iR1w'),
        Ot = n('j0Er')
      function xt(e) {
        const { title: t } = e
        return o.a.createElement('div', { className: Ot.wrapper }, t)
      }
      var St = n('+FzY'),
        Ct = n('e/Lx')
      const Nt = 34
      function zt(e) {
        const { className: t, emoji: n, size: a = Nt, onClick: r } = e,
          i = Object(St.a)(n, 'png')
        return o.a.createElement(
          'div',
          {
            className: u()(Ct.wrapper, t),
            style: { width: a, height: a },
            onClick: function () {
              r(n)
            },
          },
          o.a.createElement('img', {
            className: Ct.emoji,
            src: i,
            decoding: 'async',
            width: '24',
            height: '24',
            alt: '',
            draggable: !1,
            onContextMenu: function (e) {
              e.preventDefault()
            },
          }),
        )
      }
      var Mt = n('tQXF')
      const kt = o.a.memo(e => {
        const { emojis: t, itemSize: n, onEmojiClick: a } = e
        return o.a.createElement(
          'div',
          { className: Mt.wrapper },
          t.map(e => o.a.createElement(zt, { key: e, className: Mt.emojiItem, emoji: e, size: n, onClick: a })),
        )
      })
      var Vt = n('OoQL'),
        At = n('iy5y')
      const _t = o.a.createContext(null)
      function Dt(e) {
        const { listRef: t, emojiGroups: n, emojiSize: r, onSelect: i, onContentRendered: l } = e
        Object(a.useEffect)(() => {
          var e
          return null === (e = t.current) || void 0 === e ? void 0 : e.resetAfterIndex(0, !0)
        }, [n])
        const c = Object(a.useCallback)(e => ('title' === n[e].type ? 30 : 38), [n]),
          s = Object(a.useCallback)(
            ({ visibleStartIndex: e }) => {
              const { relatedTitle: t } = n[e]
              l(t)
            },
            [n, l],
          )
        return o.a.createElement(
          _t.Provider,
          { value: Object(a.useMemo)(() => ({ size: r, onSelect: i }), [r, i]) },
          o.a.createElement(yt.b, {
            className: At.list,
            ref: t,
            width: '100%',
            height: Math.min(330, window.innerHeight - 60),
            itemData: n,
            itemCount: n.length,
            children: Tt,
            onItemsRendered: s,
            itemSize: c,
          }),
        )
      }
      const Tt = o.a.memo(e => {
        const { style: t, index: n, data: a } = e,
          r = a[n],
          { size: i, onSelect: l } = Object(Vt.a)(_t)
        return 'title' === r.type
          ? o.a.createElement('div', { style: t }, o.a.createElement(xt, { title: r.relatedTitle }))
          : o.a.createElement(
              'div',
              { style: t },
              o.a.createElement(kt, { emojis: r.content, itemSize: i, onEmojiClick: l }),
            )
      })
      var Ft = n('9pqQ')
      function Bt(e) {
        var t
        const { className: n, emojis: r, onSelect: i } = e,
          l = Object(a.useRef)(null),
          [c, s] = Object(a.useState)(0),
          d = Object(a.useMemo)(
            () =>
              (function (e, t) {
                if (0 === t) return []
                const n = []
                return (
                  e.forEach(({ title: e, emojis: a }) => {
                    n.push({ type: 'title', relatedTitle: e, content: [e] })
                    let o = []
                    for (const r of a)
                      o.length < t ? o.push(r) : (n.push({ type: 'emojiRow', relatedTitle: e, content: o }), (o = [r]))
                    o.length && n.push({ type: 'emojiRow', relatedTitle: e, content: o })
                  }),
                  n
                )
              })(r, c),
            [r, c],
          ),
          m = (function (e, t = []) {
            const n = Object(a.useRef)(null),
              o = Object(a.useRef)(null),
              r = Object(a.useRef)(e)
            r.current = e
            const i = Object(a.useCallback)(
              e => {
                ;(n.current = e), null !== o.current && (o.current.disconnect(), null !== e && o.current.observe(e))
              },
              [n, o],
            )
            return (
              Object(a.useEffect)(
                () => (
                  (o.current = new vt.default((e, t) => r.current(e, t))),
                  n.current && i(n.current),
                  () => {
                    var e
                    null === (e = o.current) || void 0 === e || e.disconnect()
                  }
                ),
                [n, ...t],
              ),
              i
            )
          })(function (e) {
            const [t] = e,
              { width: n } = t.contentRect,
              a = Math.floor((n - 12) / 38)
            s(a)
          }),
          [p, h] = Object(a.useState)((null === (t = d[0]) || void 0 === t ? void 0 : t.relatedTitle) || '')
        return o.a.createElement(
          'div',
          { className: u()(Ft.wrapper, n) },
          o.a.createElement(jt, {
            emojis: r,
            activeTab: p,
            onTabClick: function (e) {
              !(function (e) {
                var t
                null === (t = l.current) || void 0 === t || t.scrollToItem(e, 'start'),
                  requestAnimationFrame(() => {
                    var t
                    return null === (t = l.current) || void 0 === t ? void 0 : t.scrollToItem(e, 'start')
                  })
              })(
                (function (e) {
                  return d.findIndex(({ relatedTitle: t, type: n }) => 'title' === n && t === e)
                })(e),
              )
            },
          }),
          o.a.createElement(
            'div',
            { ref: m },
            o.a.createElement(Dt, { listRef: l, emojiGroups: d, emojiSize: 38, onSelect: i, onContentRendered: h }),
          ),
        )
      }
      var Rt = n('JoYF'),
        Pt = n('STR1'),
        Lt = n('tJif'),
        It = n('gd+L'),
        Ut = n('gX9w'),
        Ht = n('A3oJ'),
        Yt = n('hreg'),
        Wt = n('r6bn'),
        qt = n('mt7N')
      const Jt = [
        { title: Object(P.t)('recently used', { context: 'emoji_group' }), emojis: [], icon: Rt },
        {
          title: Object(P.t)('smiles & people', { context: 'emoji_group' }),
          emojis: [
            '😀',
            '😃',
            '😄',
            '😁',
            '😆',
            '😅',
            '😂',
            '🤣',
            '☺️',
            '😊',
            '😇',
            '🙂',
            '🙃',
            '😉',
            '😌',
            '😍',
            '🥰',
            '😘',
            '😗',
            '😙',
            '😚',
            '😋',
            '😛',
            '😝',
            '😜',
            '🤪',
            '🤨',
            '🧐',
            '🤓',
            '😎',
            '🤩',
            '🥳',
            '😏',
            '😒',
            '😞',
            '😔',
            '😟',
            '😕',
            '🙁',
            '☹️',
            '😣',
            '😖',
            '😫',
            '😩',
            '🥺',
            '😢',
            '😭',
            '😤',
            '😠',
            '😡',
            '🤬',
            '🤯',
            '😳',
            '🥵',
            '🥶',
            '😱',
            '😨',
            '😰',
            '😥',
            '😓',
            '🤗',
            '🤔',
            '🤭',
            '🤫',
            '🤥',
            '😶',
            '😐',
            '😑',
            '😬',
            '🙄',
            '😯',
            '😦',
            '😧',
            '😮',
            '😲',
            '🥱',
            '😴',
            '🤤',
            '😪',
            '😵',
            '🤐',
            '🥴',
            '🤢',
            '🤮',
            '🤧',
            '😷',
            '🤒',
            '🤕',
            '🤑',
            '🤠',
            '😈',
            '👿',
            '👹',
            '👺',
            '🤡',
            '💩',
            '👻',
            '💀',
            '☠️',
            '👽',
            '👾',
            '🤖',
            '🎃',
            '😺',
            '😸',
            '😹',
            '😻',
            '😼',
            '😽',
            '🙀',
            '😿',
            '😾',
            '👋',
            '🤚',
            '🖐',
            '✋',
            '🖖',
            '👌',
            '🤏',
            '✌️',
            '🤞',
            '🤟',
            '🤘',
            '🤙',
            '👈',
            '👉',
            '👆',
            '🖕',
            '👇',
            '☝️',
            '👍',
            '👎',
            '✊',
            '👊',
            '🤛',
            '🤜',
            '👏',
            '🙌',
            '👐',
            '🤲',
            '🤝',
            '🙏',
            '✍️',
            '💅',
            '🤳',
            '💪',
            '🦾',
            '🦵',
            '🦿',
            '🦶',
            '👂',
            '🦻',
            '👃',
            '🧠',
            '🦷',
            '🦴',
            '👀',
            '👁',
            '👅',
            '👄',
            '💋',
            '🩸',
            '👶',
            '🧒',
            '👦',
            '👧',
            '🧑',
            '👱',
            '👨',
            '🧔',
            '👨‍🦰',
            '👨‍🦱',
            '👨‍🦳',
            '👨‍🦲',
            '👩',
            '👩‍🦰',
            '🧑‍🦰',
            '👩‍🦱',
            '🧑‍🦱',
            '👩‍🦳',
            '🧑‍🦳',
            '👩‍🦲',
            '🧑‍🦲',
            '👱‍♀️',
            '👱‍♂️',
            '🧓',
            '👴',
            '👵',
            '🙍',
            '🙍‍♂️',
            '🙍‍♀️',
            '🙎',
            '🙎‍♂️',
            '🙎‍♀️',
            '🙅',
            '🙅‍♂️',
            '🙅‍♀️',
            '🙆',
            '🙆‍♂️',
            '🙆‍♀️',
            '💁',
            '💁‍♂️',
            '💁‍♀️',
            '🙋',
            '🙋‍♂️',
            '🙋‍♀️',
            '🧏',
            '🧏‍♂️',
            '🧏‍♀️',
            '🙇',
            '🙇‍♂️',
            '🙇‍♀️',
            '🤦',
            '🤦‍♂️',
            '🤦‍♀️',
            '🤷',
            '🤷‍♂️',
            '🤷‍♀️',
            '🧑‍⚕️',
            '👨‍⚕️',
            '👩‍⚕️',
            '🧑‍🎓',
            '👨‍🎓',
            '👩‍🎓',
            '🧑‍🏫',
            '👨‍🏫',
            '👩‍🏫',
            '🧑‍⚖️',
            '👨‍⚖️',
            '👩‍⚖️',
            '🧑‍🌾',
            '👨‍🌾',
            '👩‍🌾',
            '🧑‍🍳',
            '👨‍🍳',
            '👩‍🍳',
            '🧑‍🔧',
            '👨‍🔧',
            '👩‍🔧',
            '🧑‍🏭',
            '👨‍🏭',
            '👩‍🏭',
            '🧑‍💼',
            '👨‍💼',
            '👩‍💼',
            '🧑‍🔬',
            '👨‍🔬',
            '👩‍🔬',
            '🧑‍💻',
            '👨‍💻',
            '👩‍💻',
            '🧑‍🎤',
            '👨‍🎤',
            '👩‍🎤',
            '🧑‍🎨',
            '👨‍🎨',
            '👩‍🎨',
            '🧑‍✈️',
            '👨‍✈️',
            '👩‍✈️',
            '🧑‍🚀',
            '👨‍🚀',
            '👩‍🚀',
            '🧑‍🚒',
            '👨‍🚒',
            '👩‍🚒',
            '👮',
            '👮‍♂️',
            '👮‍♀️',
            '🕵',
            '🕵️‍♂️',
            '🕵️‍♀️',
            '💂',
            '💂‍♂️',
            '💂‍♀️',
            '👷',
            '👷‍♂️',
            '👷‍♀️',
            '🤴',
            '👸',
            '👳',
            '👳‍♂️',
            '👳‍♀️',
            '👲',
            '🧕',
            '🤵',
            '👰',
            '🤰',
            '🤱',
            '👼',
            '🎅',
            '🤶',
            '🦸',
            '🦸‍♂️',
            '🦸‍♀️',
            '🦹',
            '🦹‍♂️',
            '🦹‍♀️',
            '🧙',
            '🧙‍♂️',
            '🧙‍♀️',
            '🧚',
            '🧚‍♂️',
            '🧚‍♀️',
            '🧛',
            '🧛‍♂️',
            '🧛‍♀️',
            '🧜',
            '🧜‍♂️',
            '🧜‍♀️',
            '🧝',
            '🧝‍♂️',
            '🧝‍♀️',
            '🧞',
            '🧞‍♂️',
            '🧞‍♀️',
            '🧟',
            '🧟‍♂️',
            '🧟‍♀️',
            '💆',
            '💆‍♂️',
            '💆‍♀️',
            '💇',
            '💇‍♂️',
            '💇‍♀️',
            '🚶',
            '🚶‍♂️',
            '🚶‍♀️',
            '🧍',
            '🧍‍♂️',
            '🧍‍♀️',
            '🧎',
            '🧎‍♂️',
            '🧎‍♀️',
            '🧑‍🦯',
            '👨‍🦯',
            '👩‍🦯',
            '🧑‍🦼',
            '👨‍🦼',
            '👩‍🦼',
            '🧑‍🦽',
            '👨‍🦽',
            '👩‍🦽',
            '🏃',
            '🏃‍♂️',
            '🏃‍♀️',
            '💃',
            '🕺',
            '🕴',
            '👯',
            '👯‍♂️',
            '👯‍♀️',
            '🧖',
            '🧖‍♂️',
            '🧖‍♀️',
            '🧑‍🤝‍🧑',
            '👭',
            '👫',
            '👬',
            '💏',
            '👨‍❤️‍💋‍👨',
            '👩‍❤️‍💋‍👩',
            '💑',
            '👨‍❤️‍👨',
            '👩‍❤️‍👩',
            '👪',
            '👨‍👩‍👦',
            '👨‍👩‍👧',
            '👨‍👩‍👧‍👦',
            '👨‍👩‍👦‍👦',
            '👨‍👩‍👧‍👧',
            '👨‍👨‍👦',
            '👨‍👨‍👧',
            '👨‍👨‍👧‍👦',
            '👨‍👨‍👦‍👦',
            '👨‍👨‍👧‍👧',
            '👩‍👩‍👦',
            '👩‍👩‍👧',
            '👩‍👩‍👧‍👦',
            '👩‍👩‍👦‍👦',
            '👩‍👩‍👧‍👧',
            '👨‍👦',
            '👨‍👦‍👦',
            '👨‍👧',
            '👨‍👧‍👦',
            '👨‍👧‍👧',
            '👩‍👦',
            '👩‍👦‍👦',
            '👩‍👧',
            '👩‍👧‍👦',
            '👩‍👧‍👧',
            '🗣',
            '👤',
            '👥',
            '👣',
          ],
          icon: Pt,
        },
        {
          title: Object(P.t)('animals & nature', { context: 'emoji_group' }),
          emojis: [
            '🐶',
            '🐱',
            '🐭',
            '🐹',
            '🐰',
            '🦊',
            '🐻',
            '🐼',
            '🐨',
            '🐯',
            '🦁',
            '🐮',
            '🐷',
            '🐽',
            '🐸',
            '🐵',
            '🙈',
            '🙉',
            '🙊',
            '🐒',
            '🐔',
            '🐧',
            '🐦',
            '🐤',
            '🐣',
            '🐥',
            '🦆',
            '🦅',
            '🦉',
            '🦇',
            '🐺',
            '🐗',
            '🐴',
            '🦄',
            '🐝',
            '🐛',
            '🦋',
            '🐌',
            '🐞',
            '🐜',
            '🦟',
            '🦗',
            '🕷',
            '🕸',
            '🦂',
            '🐢',
            '🐍',
            '🦎',
            '🦖',
            '🦕',
            '🐙',
            '🦑',
            '🦐',
            '🦞',
            '🦀',
            '🐡',
            '🐠',
            '🐟',
            '🐬',
            '🐳',
            '🐋',
            '🦈',
            '🐊',
            '🐅',
            '🐆',
            '🦓',
            '🦍',
            '🦧',
            '🐘',
            '🦛',
            '🦏',
            '🐪',
            '🐫',
            '🦒',
            '🦘',
            '🐃',
            '🐂',
            '🐄',
            '🐎',
            '🐖',
            '🐏',
            '🐑',
            '🦙',
            '🐐',
            '🦌',
            '🐕',
            '🐩',
            '🦮',
            '🐕‍🦺',
            '🐈',
            '🐓',
            '🦃',
            '🦚',
            '🦜',
            '🦢',
            '🦩',
            '🕊',
            '🐇',
            '🦝',
            '🦨',
            '🦡',
            '🦦',
            '🦥',
            '🐁',
            '🐀',
            '🐿',
            '🦔',
            '🐾',
            '🐉',
            '🐲',
            '🌵',
            '🎄',
            '🌲',
            '🌳',
            '🌴',
            '🌱',
            '🌿',
            '☘️',
            '🍀',
            '🎍',
            '🎋',
            '🍃',
            '🍂',
            '🍁',
            '🍄',
            '🐚',
            '🌾',
            '💐',
            '🌷',
            '🌹',
            '🥀',
            '🌺',
            '🌸',
            '🌼',
            '🌻',
            '🌞',
            '🌝',
            '🌛',
            '🌜',
            '🌚',
            '🌕',
            '🌖',
            '🌗',
            '🌘',
            '🌑',
            '🌒',
            '🌓',
            '🌔',
            '🌙',
            '🌎',
            '🌍',
            '🌏',
            '🪐',
            '💫',
            '⭐️',
            '🌟',
            '✨',
            '⚡️',
            '☄️',
            '💥',
            '🔥',
            '🌪',
            '🌈',
            '☀️',
            '🌤',
            '⛅️',
            '🌥',
            '☁️',
            '🌦',
            '🌧',
            '⛈',
            '🌩',
            '🌨',
            '❄️',
            '☃️',
            '⛄️',
            '🌬',
            '💨',
            '💧',
            '💦',
            '☔️',
            '🌊',
            '🌫',
          ],
          icon: Lt,
        },
        {
          title: Object(P.t)('food & drink', { context: 'emoji_group' }),
          emojis: [
            '🍏',
            '🍎',
            '🍐',
            '🍊',
            '🍋',
            '🍌',
            '🍉',
            '🍇',
            '🍓',
            '🍈',
            '🍒',
            '🍑',
            '🥭',
            '🍍',
            '🥥',
            '🥝',
            '🍅',
            '🍆',
            '🥑',
            '🥦',
            '🥬',
            '🥒',
            '🌶',
            '🌽',
            '🥕',
            '🧄',
            '🧅',
            '🥔',
            '🍠',
            '🥐',
            '🥯',
            '🍞',
            '🥖',
            '🥨',
            '🧀',
            '🥚',
            '🍳',
            '🧈',
            '🥞',
            '🧇',
            '🥓',
            '🥩',
            '🍗',
            '🍖',
            '🌭',
            '🍔',
            '🍟',
            '🍕',
            '🥪',
            '🥙',
            '🧆',
            '🌮',
            '🌯',
            '🥗',
            '🥘',
            '🥫',
            '🍝',
            '🍜',
            '🍲',
            '🍛',
            '🍣',
            '🍱',
            '🥟',
            '🦪',
            '🍤',
            '🍙',
            '🍚',
            '🍘',
            '🍥',
            '🥠',
            '🥮',
            '🍢',
            '🍡',
            '🍧',
            '🍨',
            '🍦',
            '🥧',
            '🧁',
            '🍰',
            '🎂',
            '🍮',
            '🍭',
            '🍬',
            '🍫',
            '🍿',
            '🍩',
            '🍪',
            '🌰',
            '🥜',
            '🍯',
            '🥛',
            '🍼',
            '☕️',
            '🍵',
            '🧃',
            '🥤',
            '🍶',
            '🍺',
            '🍻',
            '🥂',
            '🍷',
            '🥃',
            '🍸',
            '🍹',
            '🧉',
            '🍾',
            '🧊',
            '🥄',
            '🍴',
            '🍽',
            '🥣',
            '🥡',
            '🥢',
            '🧂',
          ],
          icon: It,
        },
        {
          title: Object(P.t)('activity', { context: 'emoji_group' }),
          emojis: [
            '⚽️',
            '🏀',
            '🏈',
            '⚾️',
            '🥎',
            '🎾',
            '🏐',
            '🏉',
            '🥏',
            '🎱',
            '🪀',
            '🏓',
            '🏸',
            '🏒',
            '🏑',
            '🥍',
            '🏏',
            '🥅',
            '⛳️',
            '🪁',
            '🏹',
            '🎣',
            '🤿',
            '🥊',
            '🥋',
            '🎽',
            '🛹',
            '🛷',
            '⛸',
            '🥌',
            '🎿',
            '⛷',
            '🏂',
            '🪂',
            '🏋️',
            '🏋️‍♂️',
            '🏋️‍♀️',
            '🤼',
            '🤼‍♂️',
            '🤼‍♀️',
            '🤸‍♀️',
            '🤸',
            '🤸‍♂️',
            '⛹️',
            '⛹️‍♂️',
            '⛹️‍♀️',
            '🤺',
            '🤾',
            '🤾‍♂️',
            '🤾‍♀️',
            '🏌️',
            '🏌️‍♂️',
            '🏌️‍♀️',
            '🏇',
            '🧘',
            '🧘‍♂️',
            '🧘‍♀️',
            '🏄',
            '🏄‍♂️',
            '🏄‍♀️',
            '🏊',
            '🏊‍♂️',
            '🏊‍♀️',
            '🤽',
            '🤽‍♂️',
            '🤽‍♀️',
            '🚣',
            '🚣‍♂️',
            '🚣‍♀️',
            '🧗',
            '🧗‍♂️',
            '🧗‍♀️',
            '🚵',
            '🚵‍♂️',
            '🚵‍♀️',
            '🚴',
            '🚴‍♂️',
            '🚴‍♀️',
            '🏆',
            '🥇',
            '🥈',
            '🥉',
            '🏅',
            '🎖',
            '🏵',
            '🎗',
            '🎫',
            '🎟',
            '🎪',
            '🤹',
            '🤹‍♂️',
            '🤹‍♀️',
            '🎭',
            '🎨',
            '🎬',
            '🎤',
            '🎧',
            '🎼',
            '🎹',
            '🥁',
            '🎷',
            '🎺',
            '🎸',
            '🪕',
            '🎻',
            '🎲',
            '🎯',
            '🎳',
            '🎮',
            '🎰',
            '🧩',
          ],
          icon: Ut,
        },
        {
          title: Object(P.t)('travel & places', { context: 'emoji_group' }),
          emojis: [
            '🚗',
            '🚕',
            '🚙',
            '🚌',
            '🚎',
            '🏎',
            '🚓',
            '🚑',
            '🚒',
            '🚐',
            '🚚',
            '🚛',
            '🚜',
            '🦯',
            '🦽',
            '🦼',
            '🛴',
            '🚲',
            '🛵',
            '🏍',
            '🛺',
            '🚨',
            '🚔',
            '🚍',
            '🚘',
            '🚖',
            '🚡',
            '🚠',
            '🚟',
            '🚃',
            '🚋',
            '🚞',
            '🚝',
            '🚄',
            '🚅',
            '🚈',
            '🚂',
            '🚆',
            '🚇',
            '🚊',
            '🚉',
            '✈️',
            '🛫',
            '🛬',
            '🛩',
            '💺',
            '🛰',
            '🚀',
            '🛸',
            '🚁',
            '🛶',
            '⛵️',
            '🚤',
            '🛥',
            '🛳',
            '⛴',
            '🚢',
            '⚓️',
            '⛽️',
            '🚧',
            '🚦',
            '🚥',
            '🚏',
            '🗺',
            '🗿',
            '🗽',
            '🗼',
            '🏰',
            '🏯',
            '🏟',
            '🎡',
            '🎢',
            '🎠',
            '⛲️',
            '⛱',
            '🏖',
            '🏝',
            '🏜',
            '🌋',
            '⛰',
            '🏔',
            '🗻',
            '🏕',
            '⛺️',
            '🏠',
            '🏡',
            '🏘',
            '🏚',
            '🏗',
            '🏭',
            '🏢',
            '🏬',
            '🏣',
            '🏤',
            '🏥',
            '🏦',
            '🏨',
            '🏪',
            '🏫',
            '🏩',
            '💒',
            '🏛',
            '⛪️',
            '🕌',
            '🕍',
            '🛕',
            '🕋',
            '⛩',
            '🛤',
            '🛣',
            '🗾',
            '🎑',
            '🏞',
            '🌅',
            '🌄',
            '🌠',
            '🎇',
            '🎆',
            '🌇',
            '🌆',
            '🏙',
            '🌃',
            '🌌',
            '🌉',
            '🌁',
          ],
          icon: Ht,
        },
        {
          title: Object(P.t)('objects', { context: 'emoji_group' }),
          emojis: [
            '⌚️',
            '📱',
            '📲',
            '💻',
            '⌨️',
            '🖥',
            '🖨',
            '🖱',
            '🖲',
            '🕹',
            '🗜',
            '💽',
            '💾',
            '💿',
            '📀',
            '📼',
            '📷',
            '📸',
            '📹',
            '🎥',
            '📽',
            '🎞',
            '📞',
            '☎️',
            '📟',
            '📠',
            '📺',
            '📻',
            '🎙',
            '🎚',
            '🎛',
            '🧭',
            '⏱',
            '⏲',
            '⏰',
            '🕰',
            '⌛️',
            '⏳',
            '📡',
            '🔋',
            '🔌',
            '💡',
            '🔦',
            '🕯',
            '🪔',
            '🧯',
            '🛢',
            '💸',
            '💵',
            '💴',
            '💶',
            '💷',
            '💰',
            '💳',
            '💎',
            '⚖️',
            '🧰',
            '🔧',
            '🔨',
            '⚒',
            '🛠',
            '⛏',
            '🔩',
            '⚙️',
            '🧱',
            '⛓',
            '🧲',
            '🔫',
            '💣',
            '🧨',
            '🪓',
            '🔪',
            '🗡',
            '⚔️',
            '🛡',
            '🚬',
            '⚰️',
            '⚱️',
            '🏺',
            '🔮',
            '📿',
            '🧿',
            '💈',
            '⚗️',
            '🔭',
            '🔬',
            '🕳',
            '🩹',
            '🩺',
            '💊',
            '💉',
            '🧬',
            '🦠',
            '🧫',
            '🧪',
            '🌡',
            '🧹',
            '🧺',
            '🧻',
            '🚽',
            '🚰',
            '🚿',
            '🛁',
            '🛀',
            '🧼',
            '🪒',
            '🧽',
            '🧴',
            '🛎',
            '🔑',
            '🗝',
            '🚪',
            '🪑',
            '🛋',
            '🛏',
            '🛌',
            '🧸',
            '🖼',
            '🛍',
            '🛒',
            '🎁',
            '🎈',
            '🎏',
            '🎀',
            '🎊',
            '🎉',
            '🎎',
            '🏮',
            '🎐',
            '🧧',
            '✉️',
            '📩',
            '📨',
            '📧',
            '💌',
            '📥',
            '📤',
            '📦',
            '🏷',
            '📪',
            '📫',
            '📬',
            '📭',
            '📮',
            '📯',
            '📜',
            '📃',
            '📄',
            '📑',
            '🧾',
            '📊',
            '📈',
            '📉',
            '🗒',
            '🗓',
            '📆',
            '📅',
            '🗑',
            '📇',
            '🗃',
            '🗳',
            '🗄',
            '📋',
            '📁',
            '📂',
            '🗂',
            '🗞',
            '📰',
            '📓',
            '📔',
            '📒',
            '📕',
            '📗',
            '📘',
            '📙',
            '📚',
            '📖',
            '🔖',
            '🧷',
            '🔗',
            '📎',
            '🖇',
            '📐',
            '📏',
            '🧮',
            '📌',
            '📍',
            '✂️',
            '🖊',
            '🖋',
            '✒️',
            '🖌',
            '🖍',
            '📝',
            '✏️',
            '🔍',
            '🔎',
            '🔏',
            '🔐',
            '🔒',
            '🔓',
            '🧳',
            '🌂',
            '☂️',
            '🧵',
            '🧶',
            '👓',
            '🕶',
            '🥽',
            '🥼',
            '🦺',
            '👔',
            '👕',
            '👖',
            '🧣',
            '🧤',
            '🧥',
            '🧦',
            '👗',
            '👘',
            '🥻',
            '🩱',
            '🩲',
            '🩳',
            '👙',
            '👚',
            '👛',
            '👜',
            '👝',
            '🎒',
            '👞',
            '👟',
            '🥾',
            '🥿',
            '👠',
            '👡',
            '🩰',
            '👢',
            '👑',
            '👒',
            '🎩',
            '🎓',
            '🧢',
            '⛑',
            '💄',
            '💍',
            '💼',
          ],
          icon: Yt,
        },
        {
          title: Object(P.t)('symbols', { context: 'emoji_group' }),
          emojis: [
            '❤️',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🖤',
            '🤍',
            '🤎',
            '💔',
            '❣️',
            '💕',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💟',
            '☮️',
            '✝️',
            '☪️',
            '🕉',
            '☸️',
            '✡️',
            '🔯',
            '🕎',
            '☯️',
            '☦️',
            '🛐',
            '⛎',
            '♈️',
            '♉️',
            '♊️',
            '♋️',
            '♌️',
            '♍️',
            '♎️',
            '♏️',
            '♐️',
            '♑️',
            '♒️',
            '♓️',
            '🆔',
            '⚛️',
            '🉑',
            '☢️',
            '☣️',
            '📴',
            '📳',
            '🈶',
            '🈚️',
            '🈸',
            '🈺',
            '🈷️',
            '✴️',
            '🆚',
            '💮',
            '🉐',
            '㊙️',
            '㊗️',
            '🈴',
            '🈵',
            '🈹',
            '🈲',
            '🅰️',
            '🅱️',
            '🆎',
            '🆑',
            '🅾️',
            '🆘',
            '❌',
            '⭕️',
            '🛑',
            '⛔️',
            '📛',
            '🚫',
            '💯',
            '💢',
            '♨️',
            '🚷',
            '🚯',
            '🚳',
            '🚱',
            '🔞',
            '📵',
            '🚭',
            '❗️',
            '❕',
            '❓',
            '❔',
            '‼️',
            '⁉️',
            '🔅',
            '🔆',
            '〽️',
            '⚠️',
            '🚸',
            '🔱',
            '⚜️',
            '🔰',
            '♻️',
            '✅',
            '🈯️',
            '💹',
            '❇️',
            '✳️',
            '❎',
            '🌐',
            '💠',
            'Ⓜ️',
            '🌀',
            '💤',
            '🏧',
            '🚾',
            '♿️',
            '🅿️',
            '🈳',
            '🈂️',
            '🛂',
            '🛃',
            '🛄',
            '🛅',
            '🚹',
            '🚺',
            '🚼',
            '🚻',
            '🚮',
            '🎦',
            '📶',
            '🈁',
            '🔣',
            'ℹ️',
            '🔤',
            '🔡',
            '🔠',
            '🆖',
            '🆗',
            '🆙',
            '🆒',
            '🆕',
            '🆓',
            '0️⃣',
            '1️⃣',
            '2️⃣',
            '3️⃣',
            '4️⃣',
            '5️⃣',
            '6️⃣',
            '7️⃣',
            '8️⃣',
            '9️⃣',
            '🔟',
            '🔢',
            '#️⃣',
            '*️⃣',
            '⏏️',
            '▶️',
            '⏸',
            '⏯',
            '⏹',
            '⏺',
            '⏭',
            '⏮',
            '⏩',
            '⏪',
            '⏫',
            '⏬',
            '◀️',
            '🔼',
            '🔽',
            '➡️',
            '⬅️',
            '⬆️',
            '⬇️',
            '↗️',
            '↘️',
            '↙️',
            '↖️',
            '↕️',
            '↔️',
            '↪️',
            '↩️',
            '⤴️',
            '⤵️',
            '🔀',
            '🔁',
            '🔂',
            '🔄',
            '🔃',
            '🎵',
            '🎶',
            '➕',
            '➖',
            '➗',
            '✖️',
            '♾',
            '💲',
            '💱',
            '™️',
            '©️',
            '®️',
            '〰️',
            '➰',
            '➿',
            '🔚',
            '🔙',
            '🔛',
            '🔝',
            '🔜',
            '✔️',
            '☑️',
            '🔘',
            '🔴',
            '🟠',
            '🟡',
            '🟢',
            '🔵',
            '🟣',
            '⚫️',
            '⚪️',
            '🟤',
            '🔺',
            '🔻',
            '🔸',
            '🔹',
            '🔶',
            '🔷',
            '🔳',
            '🔲',
            '▪️',
            '▫️',
            '◾️',
            '◽️',
            '◼️',
            '◻️',
            '🟥',
            '🟧',
            '🟨',
            '🟩',
            '🟦',
            '🟪',
            '⬛️',
            '⬜️',
            '🟫',
            '🔈',
            '🔇',
            '🔉',
            '🔊',
            '🔔',
            '🔕',
            '📣',
            '📢',
            '👁‍🗨',
            '💬',
            '💭',
            '🗯',
            '♠️',
            '♣️',
            '♥️',
            '♦️',
            '🃏',
            '🎴',
            '🀄️',
            '🕐',
            '🕑',
            '🕒',
            '🕓',
            '🕔',
            '🕕',
            '🕖',
            '🕗',
            '🕘',
            '🕙',
            '🕚',
            '🕛',
            '🕜',
            '🕝',
            '🕞',
            '🕟',
            '🕠',
            '🕡',
            '🕢',
            '🕣',
            '🕤',
            '🕥',
            '🕦',
            '🕧',
          ],
          icon: Wt,
        },
        {
          title: Object(P.t)('flags', { context: 'emoji_group' }),
          emojis: [
            '🏳️',
            '🏴',
            '🏁',
            '🚩',
            '🏳️‍🌈',
            '🏴‍☠️',
            '🇦🇫',
            '🇦🇽',
            '🇦🇱',
            '🇩🇿',
            '🇦🇸',
            '🇦🇩',
            '🇦🇴',
            '🇦🇮',
            '🇦🇶',
            '🇦🇬',
            '🇦🇷',
            '🇦🇲',
            '🇦🇼',
            '🇦🇺',
            '🇦🇹',
            '🇦🇿',
            '🇧🇸',
            '🇧🇭',
            '🇧🇩',
            '🇧🇧',
            '🇧🇾',
            '🇧🇪',
            '🇧🇿',
            '🇧🇯',
            '🇧🇲',
            '🇧🇹',
            '🇧🇴',
            '🇧🇦',
            '🇧🇼',
            '🇧🇷',
            '🇮🇴',
            '🇻🇬',
            '🇧🇳',
            '🇧🇬',
            '🇧🇫',
            '🇧🇮',
            '🇰🇭',
            '🇨🇲',
            '🇨🇦',
            '🇮🇨',
            '🇨🇻',
            '🇧🇶',
            '🇰🇾',
            '🇨🇫',
            '🇹🇩',
            '🇨🇱',
            '🇨🇳',
            '🇨🇽',
            '🇨🇨',
            '🇨🇴',
            '🇰🇲',
            '🇨🇬',
            '🇨🇩',
            '🇨🇰',
            '🇨🇷',
            '🇨🇮',
            '🇭🇷',
            '🇨🇺',
            '🇨🇼',
            '🇨🇾',
            '🇨🇿',
            '🇩🇰',
            '🇩🇯',
            '🇩🇲',
            '🇩🇴',
            '🇪🇨',
            '🇪🇬',
            '🇸🇻',
            '🇬🇶',
            '🇪🇷',
            '🇪🇪',
            '🇪🇹',
            '🇪🇺',
            '🇫🇰',
            '🇫🇴',
            '🇫🇯',
            '🇫🇮',
            '🇫🇷',
            '🇬🇫',
            '🇵🇫',
            '🇹🇫',
            '🇬🇦',
            '🇬🇲',
            '🇬🇪',
            '🇩🇪',
            '🇬🇭',
            '🇬🇮',
            '🇬🇷',
            '🇬🇱',
            '🇬🇩',
            '🇬🇵',
            '🇬🇺',
            '🇬🇹',
            '🇬🇬',
            '🇬🇳',
            '🇬🇼',
            '🇬🇾',
            '🇭🇹',
            '🇭🇳',
            '🇭🇰',
            '🇭🇺',
            '🇮🇸',
            '🇮🇳',
            '🇮🇩',
            '🇮🇷',
            '🇮🇶',
            '🇮🇪',
            '🇮🇲',
            '🇮🇱',
            '🇮🇹',
            '🇯🇲',
            '🇯🇵',
            '🎌',
            '🇯🇪',
            '🇯🇴',
            '🇰🇿',
            '🇰🇪',
            '🇰🇮',
            '🇽🇰',
            '🇰🇼',
            '🇰🇬',
            '🇱🇦',
            '🇱🇻',
            '🇱🇧',
            '🇱🇸',
            '🇱🇷',
            '🇱🇾',
            '🇱🇮',
            '🇱🇹',
            '🇱🇺',
            '🇲🇴',
            '🇲🇰',
            '🇲🇬',
            '🇲🇼',
            '🇲🇾',
            '🇲🇻',
            '🇲🇱',
            '🇲🇹',
            '🇲🇭',
            '🇲🇶',
            '🇲🇷',
            '🇲🇺',
            '🇾🇹',
            '🇲🇽',
            '🇫🇲',
            '🇲🇩',
            '🇲🇨',
            '🇲🇳',
            '🇲🇪',
            '🇲🇸',
            '🇲🇦',
            '🇲🇿',
            '🇲🇲',
            '🇳🇦',
            '🇳🇷',
            '🇳🇵',
            '🇳🇱',
            '🇳🇨',
            '🇳🇿',
            '🇳🇮',
            '🇳🇪',
            '🇳🇬',
            '🇳🇺',
            '🇳🇫',
            '🇰🇵',
            '🇲🇵',
            '🇳🇴',
            '🇴🇲',
            '🇵🇰',
            '🇵🇼',
            '🇵🇸',
            '🇵🇦',
            '🇵🇬',
            '🇵🇾',
            '🇵🇪',
            '🇵🇭',
            '🇵🇳',
            '🇵🇱',
            '🇵🇹',
            '🇵🇷',
            '🇶🇦',
            '🇷🇪',
            '🇷🇴',
            '🇷🇺',
            '🇷🇼',
            '🇼🇸',
            '🇸🇲',
            '🇸🇦',
            '🇸🇳',
            '🇷🇸',
            '🇸🇨',
            '🇸🇱',
            '🇸🇬',
            '🇸🇽',
            '🇸🇰',
            '🇸🇮',
            '🇬🇸',
            '🇸🇧',
            '🇸🇴',
            '🇿🇦',
            '🇰🇷',
            '🇸🇸',
            '🇪🇸',
            '🇱🇰',
            '🇧🇱',
            '🇸🇭',
            '🇰🇳',
            '🇱🇨',
            '🇵🇲',
            '🇻🇨',
            '🇸🇩',
            '🇸🇷',
            '🇸🇿',
            '🇸🇪',
            '🇨🇭',
            '🇸🇾',
            '🇹🇼',
            '🇹🇯',
            '🇹🇿',
            '🇹🇭',
            '🇹🇱',
            '🇹🇬',
            '🇹🇰',
            '🇹🇴',
            '🇹🇹',
            '🇹🇳',
            '🇹🇷',
            '🇹🇲',
            '🇹🇨',
            '🇹🇻',
            '🇻🇮',
            '🇺🇬',
            '🇺🇦',
            '🇦🇪',
            '🇬🇧',
            '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
            '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
            '🇺🇳',
            '🇺🇸',
            '🇺🇾',
            '🇺🇿',
            '🇻🇺',
            '🇻🇦',
            '🇻🇪',
            '🇻🇳',
            '🇼🇫',
            '🇪🇭',
            '🇾🇪',
            '🇿🇲',
            '🇿🇼',
          ],
          icon: qt,
        },
      ]
      var Kt = n('9dlw'),
        Xt = n('mkWe'),
        Qt = n('Sn4D'),
        Gt = n('DTHj'),
        Zt = n('nPPD')
      var $t = n('Iksw'),
        en = n('uhCe'),
        tn = n('7Y2P')
      function nn(e) {
        const { children: t, highlight: n, disabled: a, reference: r } = e,
          i = n ? 'primary' : 'default'
        return o.a.createElement(
          'div',
          {
            ref: r,
            className: u()(
              tn.wrapper,
              tn['intent-' + i],
              tn['border-thin'],
              tn['size-medium'],
              n && tn.highlight,
              n && tn.focused,
              a && tn.disabled,
            ),
            'data-role': 'button',
          },
          o.a.createElement('div', { className: u()(tn.childrenContainer, a && tn.disabled) }, t),
          n && o.a.createElement('span', { className: tn.shadow }),
        )
      }
      var an = n('YV34')
      const on = () => null,
        rn = Object(Zt.a)(Gt.a, { menuBox: an.menuBox })
      function ln(e) {
        const { value: t, disabled: n, onSelect: r } = e,
          i = Object(a.useRef)(null),
          { current: l } = Object(a.useRef)(bt.getJSON('RecentlyUsedEmojis', [t])),
          [c, s] = Object(a.useState)(l),
          [d, u] = Object(a.useState)(!1),
          m = Object(a.useCallback)(() => u(!1), [])
        var p
        ;(p = m),
          Object(a.useEffect)(
            () => (
              document.addEventListener('scroll', p),
              () => {
                document.removeEventListener('scroll', p)
              }
            ),
            [p],
          )
        const h = Object(a.useCallback)(
            e => {
              const t = Array.from(new Set([e, ...c])).slice(0, 18)
              bt.setJSON('RecentlyUsedEmojis', t), s(t), r(e), m()
            },
            [c, r],
          ),
          f = ((b = c), Object(a.useMemo)(() => ((Jt[0].emojis = b), [...Jt]), [b]))
        var b
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            nn,
            { reference: i, highlight: d, disabled: n },
            o.a.createElement(zt, {
              emoji: t,
              onClick: function () {
                n || u(!0)
              },
            }),
          ),
          o.a.createElement(
            ot.a,
            { rule: en.a.TabletSmall },
            e =>
              d &&
              o.a.createElement(
                Xt.b,
                null,
                e
                  ? o.a.createElement(
                      Qt.a,
                      { className: an.drawer, position: 'Bottom', onClose: m },
                      o.a.createElement(Bt, { emojis: f, onSelect: h }),
                    )
                  : o.a.createElement(
                      Kt.a,
                      {
                        theme: rn,
                        isOpened: !0,
                        position: Object($t.e)(i.current, {
                          horizontalDropDirection: $t.b.FromLeftToRight,
                          horizontalAttachEdge: $t.a.Left,
                        }),
                        onClickOutside: m,
                        onClose: on,
                      },
                      o.a.createElement(Bt, { className: an.desktopSize, emojis: f, onSelect: h }),
                    ),
              ),
          ),
        )
      }
      var cn = n('9UfQ')
      function sn(e) {
        const {
            definition: { title: t, properties: n },
          } = e,
          { checked: a, emoji: r, backgroundColor: i } = n,
          [c, s] = Object(l.a)({ property: a, defaultValue: !1 }),
          [d, u] = Object(l.a)({ property: r, defaultValue: '🙂' }),
          [m, p] = Object(l.a)({ property: i, defaultValue: ue.colorsPalette['color-tv-blue-a600'] })
        return o.a.createElement(
          'div',
          { className: cn.wrapper },
          o.a.createElement(ft.a, {
            className: cn.checkbox,
            label: t,
            checked: c,
            onChange: function () {
              s(!c)
            },
          }),
          o.a.createElement(ln, { value: d, disabled: !c, onSelect: u }),
          o.a.createElement(F.a, { className: cn.colorSelect, disabled: !c, color: m, onColorChange: p }),
        )
      }
      function dn(e) {
        const { definition: t } = e
        if (
          ((function (e) {
            Object(a.useEffect)(() => {
              if (void 0 === e) return
              const t = { ...e.properties }
              return (
                Object.entries(t).forEach(([n, a]) => {
                  void 0 !== a &&
                    a.subscribe(t, () =>
                      et.a.logNormal(`Property "${n}" in definition "${e.id}" was updated to value "${a.value()}"`),
                    )
                }),
                () => {
                  Object.entries(t).forEach(([, e]) => {
                    void 0 !== e && e.unsubscribeAll(t)
                  })
                }
              )
            }, [e])
          })(Object(r.A)(t) ? void 0 : t),
          Object(r.A)(t))
        ) {
          const i = t.definitions
          return o.a.createElement(
            a.Fragment,
            null,
            t.title && o.a.createElement(lt.a, { title: t.title, name: t.id }),
            i &&
              ((n = i.value()),
              n.reduce((e, t) => {
                if (Object(r.A)(t) || 'leveledLine' !== t.propType) e.push(t)
                else {
                  const n = e[e.length - 1]
                  Array.isArray(n) ? n.push(t) : e.push([t])
                }
                return e
              }, [])).map(n =>
                Array.isArray(n)
                  ? o.a.createElement(dt, { key: n[0].id, name: t.id, definitions: n })
                  : o.a.createElement(dn, { key: n.id, ...e, definition: n }),
              ),
            'general' === t.groupType && o.a.createElement(ke.a.GroupSeparator, { size: 1 }),
          )
        }
        switch (t.propType) {
          case 'line':
            return o.a.createElement(te, { ...e, definition: t })
          case 'checkable':
            return o.a.createElement(s, { ...e, definition: t })
          case 'color':
            return o.a.createElement(se, { ...e, definition: t })
          case 'transparency':
            return o.a.createElement(fe, { ...e, definition: t })
          case 'twoColors':
            return o.a.createElement(ve, { ...e, definition: t })
          case 'number':
            return o.a.createElement(Ee, { ...e, definition: t })
          case 'symbol':
            return o.a.createElement(i.a, { ...e, definition: t })
          case 'text':
            return o.a.createElement(Xe, { ...e, definition: t })
          case 'checkableSet':
            return o.a.createElement(je, { ...e, definition: t })
          case 'options':
            return o.a.createElement($e, { ...e, definition: t })
          case 'range':
            return o.a.createElement(it, { ...e, definition: t })
          case 'coordinates':
            return o.a.createElement(Ge, { ...e, definition: t })
          case 'twoOptions':
            return o.a.createElement(ht, { ...e, definition: t })
          case 'leveledLine':
            return o.a.createElement(ut, { ...e, definition: t })
          case 'emoji':
            return o.a.createElement(sn, { ...e, definition: t })
          case 'image':
          default:
            return null
        }
        var n
      }
      n.d(t, 'a', function () {
        return dn
      })
    },
    'e/Lx': function (e, t, n) {
      e.exports = { wrapper: 'wrapper-1-S6uQxU', emoji: 'emoji-1-S6uQxU' }
    },
    eU7S: function (e, t, n) {
      e.exports = {
        line: 'line-2EFUN2WR',
        control: 'control-2EFUN2WR',
        valueInput: 'valueInput-2EFUN2WR',
        valueUnit: 'valueUnit-2EFUN2WR',
        input: 'input-2EFUN2WR',
      }
    },
    gX9w: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M13.98 6.02L14.5 6c2.18 0 4.16.8 5.66 2.14l-5.66 5.65-2.31-2.3a8.43 8.43 0 0 0 1.55-3.64 14.01 14.01 0 0 0 .24-1.83zm-1.01.12a8.45 8.45 0 0 0-4.13 2l2.64 2.63a7.59 7.59 0 0 0 1.28-3.12c.12-.59.18-1.12.2-1.51zm-4.83 2.7a8.45 8.45 0 0 0-2 4.13c.39-.03.92-.1 1.51-.21a7.59 7.59 0 0 0 3.12-1.28L8.14 8.84zm-2.12 5.14a8.48 8.48 0 0 0 2.12 6.18l5.65-5.66-2.3-2.31a8.43 8.43 0 0 1-3.64 1.55 14.03 14.03 0 0 1-1.83.24zm2.82 6.88a8.46 8.46 0 0 0 5.13 2.12v-.07A8.95 8.95 0 0 1 16.3 17l-1.8-1.8-5.66 5.65zM14.97 23c2-.1 3.8-.9 5.19-2.13L17 17.72a7.94 7.94 0 0 0-2.04 5.27zm5.9-2.83a8.46 8.46 0 0 0 2.11-5.13h-.02a10.62 10.62 0 0 0-5.2 2l3.1 3.13zm2.12-6.13c-.1-2-.9-3.8-2.13-5.19l-5.65 5.66 1.83 1.83a11.6 11.6 0 0 1 5.95-2.3zM14.5 5A9.46 9.46 0 0 0 5 14.5c0 5.28 4.22 9.5 9.5 9.5s9.5-4.22 9.5-9.5S19.78 5 14.5 5z"/></svg>'
    },
    'gd+L': function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M12.5 8h1.36l-.85-3.38.98-.24.9 3.62h7.64a1.34 1.34 0 0 1 .2.02c.13.02.31.07.5.16.18.09.38.24.53.46.15.24.24.52.24.86 0 .34-.09.62-.24.86a1.38 1.38 0 0 1-.79.56L22 24.54l-.03.46H6.5c-1 0-1.64-.68-1.99-1.23a4.4 4.4 0 0 1-.38-.78l-.01-.04c-.1-.03-.22-.07-.34-.13a1.36 1.36 0 0 1-.54-.46A1.51 1.51 0 0 1 3 21.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46.1-.05.2-.09.28-.11a6.6 6.6 0 0 1 .96-2.34C5.92 16.35 7.56 15 10.5 15c.72 0 1.36.08 1.93.22l-.4-4.3a1.38 1.38 0 0 1-.8-.57A1.51 1.51 0 0 1 11 9.5c0-.34.09-.62.24-.86.15-.22.35-.37.54-.46a1.73 1.73 0 0 1 .7-.18h.02v.5V8zm.96 7.57a5.73 5.73 0 0 1 2.52 2.16 6.86 6.86 0 0 1 .95 2.34 1.38 1.38 0 0 1 .82.58c.16.23.25.51.25.85 0 .34-.09.62-.24.86-.15.22-.35.37-.54.46-.12.06-.24.1-.34.13l-.01.04a4.4 4.4 0 0 1-.54 1.01h4.7l.93-13h-8.91l.41 4.57zM14.5 9h8a.73.73 0 0 1 .28.07c.06.04.11.08.15.13.03.05.07.14.07.3 0 .16-.04.25-.07.3a.38.38 0 0 1-.15.13.73.73 0 0 1-.27.07H12.5a.73.73 0 0 1-.28-.07.38.38 0 0 1-.15-.13.52.52 0 0 1-.07-.3c0-.16.04-.25.07-.3.04-.05.09-.1.15-.13A.73.73 0 0 1 12.5 9h2.01zm1.4 11a5.8 5.8 0 0 0-.76-1.73C14.41 17.15 13.06 16 10.5 16c-2.56 0-3.91 1.15-4.64 2.27A5.86 5.86 0 0 0 5.1 20h10.78zM4.5 21a.72.72 0 0 0-.28.07.38.38 0 0 0-.15.13.52.52 0 0 0-.07.3c0 .16.04.25.07.3.04.05.09.1.15.13a.73.73 0 0 0 .27.07H16.5a.72.72 0 0 0 .28-.07.38.38 0 0 0 .15-.13.52.52 0 0 0 .07-.3.52.52 0 0 0-.07-.3.38.38 0 0 0-.15-.13.73.73 0 0 0-.27-.07H4.5zm.73 2l.13.23c.28.45.65.77 1.14.77h8c.5 0 .86-.32 1.14-.77.05-.07.1-.15.13-.23H5.23zM11 17v1h-1v-1h1zm-3 1h1v1H8v-1zm4 1v-1h1v1h-1z"/></svg>'
    },
    hreg: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M9.5 21H9h.5zm8 0H17h.5zm-6-10H11v1h.5v-1zm4 1h.5v-1h-.5v1zm2 7.5h.5-.5zm.29-1.59A7.97 7.97 0 0 0 21 11.5h-1a6.97 6.97 0 0 1-2.79 5.59l.58.82zM21 11.5A7.5 7.5 0 0 0 13.5 4v1a6.5 6.5 0 0 1 6.5 6.5h1zM13.5 4A7.5 7.5 0 0 0 6 11.5h1A6.5 6.5 0 0 1 13.5 5V4zM6 11.5a7.98 7.98 0 0 0 3.21 6.41l.57-.82A6.98 6.98 0 0 1 7 11.5H6zM9 21a1 1 0 0 0 1 1v-1H9zm8 1a1 1 0 0 0 1-1h-1v1zm-6-.5V23h1v-1.5h-1zm0 1.5a1 1 0 0 0 1 1v-1h-1zm1 1h3v-1h-3v1zm3 0a1 1 0 0 0 1-1h-1v1zm1-1v-1.5h-1V23h1zm-3-11.5v6h1v-6h-1zM9.5 20h8v-1h-8v1zM9 17.5v2h1v-2H9zm0 2V21h1v-1.5H9zm9 1.5v-1.5h-1V21h1zm0-1.5v-2h-1v2h1zM9.5 18h4v-1h-4v1zm4 0h4v-1h-4v1zm-2-6h2v-1h-2v1zm2 0h2v-1h-2v1zM10 22h1.5v-1H10v1zm1.5 0h4v-1h-4v1zm4 0H17v-1h-1.5v1z"/></svg>'
    },
    'i/MG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('YFKU')
      var a = n('q1tI'),
        o = n('TSYQ'),
        r = n('Iivm'),
        i = n('To8B'),
        l = n('kXJy')
      const c = { remove: window.t('Remove') }
      function s(e) {
        const { className: t, isActive: n, onClick: s, title: d, hidden: u, 'data-name': m = 'remove-button', ...p } = e
        return a.createElement(r.a, {
          ...p,
          'data-name': m,
          className: o(l.button, 'apply-common-tooltip', n && l.active, u && l.hidden, t),
          icon: i,
          onClick: s,
          title: d || c.remove,
        })
      }
    },
    ioCK: function (e, t, n) {
      e.exports = {
        dropdown: 'dropdown-Y-VtYUMO',
        dropdownMenu: 'dropdownMenu-Y-VtYUMO',
        firstColorPicker: 'firstColorPicker-Y-VtYUMO',
      }
    },
    iy5y: function (e, t, n) {
      e.exports = { list: 'list-tOao0Vo7' }
    },
    j0Er: function (e, t, n) {
      e.exports = { wrapper: 'wrapper-1ecGiBuB' }
    },
    jAqK: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M4.5 13.5H24m-19.5 0L8 17m-3.5-3.5L8 10"/></svg>'
    },
    kJwE: function (e, t, n) {
      e.exports = {
        lineWidthSelect: 'lineWidthSelect-3VlOWnM8',
        bar: 'bar-3VlOWnM8',
        isActive: 'isActive-3VlOWnM8',
        item: 'item-3VlOWnM8',
      }
    },
    kXJy: function (e, t, n) {
      e.exports = {
        button: 'button-3B9fDLtm',
        disabled: 'disabled-3B9fDLtm',
        active: 'active-3B9fDLtm',
        hidden: 'hidden-3B9fDLtm',
      }
    },
    lB1i: function (e, t, n) {
      e.exports = { wrap: 'wrap-3yqu-5zT', disabled: 'disabled-3yqu-5zT' }
    },
    mkWe: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        })
      var a = n('q1tI'),
        o = n.n(a)
      class r extends o.a.PureComponent {
        constructor(e) {
          super(e),
            (this._addDrawer = () => {
              const e = this.state.currentDrawer + 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this._removeDrawer = () => {
              const e = this.state.currentDrawer - 1
              return this.setState({ currentDrawer: e }), e
            }),
            (this.state = { currentDrawer: 0 })
        }
        render() {
          return o.a.createElement(
            i.Provider,
            {
              value: {
                addDrawer: this._addDrawer,
                removeDrawer: this._removeDrawer,
                currentDrawer: this.state.currentDrawer,
              },
            },
            this.props.children,
          )
        }
      }
      const i = o.a.createContext(null)
    },
    mt7N: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 24v-5.5m0 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v-6m-14 6v-6m0 0v-6s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1v6m-14 0s2.7-1.1 4.5-1c2.1.12 2.9 1.88 5 2 1.8.1 4.5-1 4.5-1"/></svg>'
    },
    nPPD: function (e, t, n) {
      'use strict'
      function a(e, t, n = {}) {
        const a = Object.assign({}, t)
        for (const o of Object.keys(t)) {
          const r = n[o] || o
          r in e && (a[o] = [e[r], t[o]].join(' '))
        }
        return a
      }
      function o(e, t, n = {}) {
        return Object.assign({}, e, a(e, t, n))
      }
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return o
        })
    },
    oWdB: function (e, t, n) {
      e.exports = { twoColors: 'twoColors-1b_W-OHw', colorPicker: 'colorPicker-1b_W-OHw' }
    },
    r6bn: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M5.6 15.43A6.19 6.19 0 0 1 14 6.36a6.19 6.19 0 0 1 8.4 9.08l-.03.02-7.3 7.31a1.5 1.5 0 0 1-2.13 0l-7.3-7.3-.03-.03m.71-.7v-.01a5.19 5.19 0 0 1 7.33-7.34v.01c.2.2.51.19.7 0a5.19 5.19 0 0 1 7.34 7.33l-.03.02-7.3 7.31a.5.5 0 0 1-.71 0l-7.3-7.3-.03-.02z"/></svg>'
    },
    rRJX: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 21h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3c2 0 4 1 4 3 0 1 0 2-1.5 3 1.5.5 2.5 2 2.5 4 0 2.75-2.638 4-5 4zM12 9l.004 3c.39.026.82 0 1.25 0C14.908 12 16 11.743 16 10.5c0-1.1-.996-1.5-2.5-1.5-.397 0-.927-.033-1.5 0zm0 5v5h1.5c1.5 0 3.5-.5 3.5-2.5S15 14 13.5 14c-.5 0-.895-.02-1.5 0z"/></svg>'
    },
    sHQ4: function (e, t, n) {
      e.exports = {
        wrap: 'wrap-164vy-kj',
        positionBottom: 'positionBottom-164vy-kj',
        backdrop: 'backdrop-164vy-kj',
        drawer: 'drawer-164vy-kj',
        positionLeft: 'positionLeft-164vy-kj',
      }
    },
    tJif: function (e, t) {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M4.54 3.2l.78-.59 5.49 4.5 1.43 1.07a5.28 5.28 0 0 1 2.19-2.3 9.19 9.19 0 0 1 1.88-.85h.04l.01-.01.14.48.42-.28v.01l.01.02a3.14 3.14 0 0 1 .16.26l.37.72c.2.45.4 1.02.5 1.64a2.13 2.13 0 0 1 1.89.46l.18.16.03.02.18.16c.22.16.42.27.81.25a5.9 5.9 0 0 0 2.2-.86l.66-.36.09.75a5.98 5.98 0 0 1-1.7 5.1 6.87 6.87 0 0 1-1.7 1.23 19.97 19.97 0 0 1 .48 2.48c.25 1.73.42 4.08.06 6.5A1.46 1.46 0 0 1 19.68 25h-7.71a1.5 1.5 0 0 1-1.4-2.06l1-2.47c-.18.02-.37.03-.58.03a3 3 0 0 1-1.53-.4 6.84 6.84 0 0 1-1.6.64c-1.08.27-2.55.29-3.72-.89a4.06 4.06 0 0 1-.96-3 5.1 5.1 0 0 1 2-3.74 98.5 98.5 0 0 0 2.7-2.24L4.55 3.2zM16.5 5.5l-.14-.48.35-.1.2.3-.41.28zm-7.87 6.06a57.48 57.48 0 0 1-2.19 1.82l.49.26c.65.37 1.48.9 1.97 1.56a5.78 5.78 0 0 1 1.14 4.07l.06.03c.19.1.49.2.9.2.68 0 .95-.11 1.03-.16v-.03l.97.19h-.5.5v.03a.75.75 0 0 1-.01.1.74.74 0 0 1-.09.21l-1.39 3.47a.5.5 0 0 0 .47.69h7.71c.24 0 .43-.17.47-.38a22 22 0 0 0-.06-6.22 24.4 24.4 0 0 0-.56-2.71 11.35 11.35 0 0 0-.94-1.52 7.1 7.1 0 0 0-2.31-2.22l-.62-.31.49-.5A3.03 3.03 0 0 0 17 8.6a1.2 1.2 0 0 0 .01-.1c0-.65-.22-1.33-.46-1.86-.1-.21-.18-.4-.26-.54a8.07 8.07 0 0 0-1.34.64c-.9.54-1.74 1.32-1.95 2.36v.03l-.02.03L12.5 9l.47.16v.02a2.97 2.97 0 0 1-.1.26 5.9 5.9 0 0 1-.31.62c-.27.46-.7 1.07-1.34 1.39-.63.31-1.38.3-1.9.23a5.83 5.83 0 0 1-.7-.12zm3.26-2.39L10.2 7.9l-.02-.01L6.3 4.7l2.57 5.88h.01c.14.04.34.08.57.11.47.06.97.05 1.34-.14.36-.18.68-.57.91-.99.08-.14.15-.27.2-.39zm8.32 4.68a5.47 5.47 0 0 0 1.37-1.02 4.88 4.88 0 0 0 1.46-3.53c-.8.39-1.41.58-1.92.61-.7.05-1.14-.18-1.49-.45a5.6 5.6 0 0 1-.22-.19l-.03-.03-.17-.13a1.4 1.4 0 0 0-.33-.22c-.18-.07-.44-.12-.93 0l-.1.4c-.1.3-.28.69-.58 1.09.87.59 1.6 1.46 2.14 2.2a14.92 14.92 0 0 1 .8 1.27zM9.05 19.19v-.09a4.78 4.78 0 0 0-.96-3.3 5.56 5.56 0 0 0-1.65-1.29c-.3-.17-.6-.3-.8-.4l-.05-.03a4.05 4.05 0 0 0-1.4 2.82 3.1 3.1 0 0 0 .66 2.25c.83.82 1.86.84 2.78.62a5.71 5.71 0 0 0 1.42-.58zm4.26-5.87c-.3.24-.74.54-1.18.66-.37.1-.81.1-1.12.08a6.95 6.95 0 0 1-.54-.06h-.05l.08-.5.08-.5.03.01a5.02 5.02 0 0 0 1.26 0c.24-.06.54-.25.83-.47a6.1 6.1 0 0 0 .42-.37l.02-.02.36.35.35.36h-.01l-.03.04a6.09 6.09 0 0 1-.5.42zM6 17h1v-1H6v1z"/></svg>'
    },
    tQXF: function (e, t, n) {
      e.exports = { wrapper: 'wrapper-2uFJv5Fz', emojiItem: 'emojiItem-2uFJv5Fz' }
    },
    ybVX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return i
        })
      var a = n('q1tI'),
        o = n.n(a)
      const r = o.a.createContext({}),
        i = o.a.createContext({})
    },
    z1Uu: function (e, t, n) {
      e.exports = { defaultSelect: 'defaultSelect-rvczD149' }
    },
  },
])
