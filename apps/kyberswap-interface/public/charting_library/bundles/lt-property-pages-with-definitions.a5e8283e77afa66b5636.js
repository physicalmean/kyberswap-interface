;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['lt-property-pages-with-definitions'],
  {
    '/HOw': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PatternWithBackgroundDefinitionViewModel', function () {
          return u
        })
      var o = i('wm7x'),
        n = i('DSp8'),
        s = i('Cn8r'),
        l = i('HSjo'),
        r = i('25b6')
      const c = window.t('Label'),
        d = window.t('Border'),
        a = window.t('Background')
      class u extends s.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(n.a)(
              this._undoModel,
              { textColor: e.textcolor, fontSize: e.fontsize, bold: e.bold, italic: e.italic },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: c } },
            ),
            Object(o.a)(this._undoModel, { lineColor: e.color, lineWidth: e.linewidth }, t, 'Line', { line: d }),
            Object(l.e)(
              {
                checked: Object(l.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(l.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(r.c)(t + 'BackgroundColor'), title: a },
            ),
          ]
        }
      }
    },
    '/a/6': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'HighlighterDefinitionsViewModel', function () {
          return s
        })
      var o = i('wm7x'),
        n = i('Cn8r')
      class s extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [Object(o.a)(this._undoModel, { lineColor: e.linecolor }, t, 'Line')]
        }
      }
    },
    '17v9': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibDrawingsWith24LevelsDefinitionsViewModel', function () {
          return x
        })
      var o = i('Eyy1'),
        n = i('wm7x'),
        s = i('HSjo'),
        l = i('Cn8r'),
        r = i('SMr9'),
        c = i('hY0g'),
        d = i.n(c),
        a = i('25b6'),
        u = i('turx')
      const h = window.t('Trend Line'),
        b = window.t('Levels Line'),
        w = window.t('Extend Right'),
        p = window.t('Extend Left'),
        g = window.t('Extend Lines Right'),
        C = window.t('Extend Lines Left'),
        _ = window.t('Reverse'),
        j = window.t('Prices'),
        O = window.t('Levels'),
        f = window.t('Labels'),
        L = window.t('Use one color'),
        v = window.t('Background'),
        y = window.t('Fib levels based on log scale'),
        M = [
          { id: 'values', value: !1, title: window.t('Values') },
          { id: 'percents', value: !0, title: window.t('Percents') },
        ],
        k = [
          { id: 'bottom', value: 'bottom', title: window.t('Top') },
          { id: 'middle', value: 'middle', title: window.t('Middle') },
          { id: 'top', value: 'top', title: window.t('Bottom') },
        ]
      class x extends l.a {
        constructor(e, t) {
          super(e, t), (this._disabledBasedOnLog = null)
          if ('fibLevelsBasedOnLogScale' in this._source.properties().childs()) {
            const e = this._source.priceScale()
            null !== e &&
              ((this._disabledBasedOnLog = new d.a(Boolean(!e.mode().log))),
              this._createPropertyRages(),
              e.modeChanged().subscribe(this, (e, t) => {
                null !== this._disabledBasedOnLog && this._disabledBasedOnLog.setValue(Boolean(!t.log))
              }))
          }
        }
        destroy() {
          super.destroy()
          const e = this._source.priceScale()
          null !== e && e.modeChanged().unsubscribeAll(this)
        }
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            l = Object(a.c)(i)
          if ('trendline' in t) {
            const o = t.trendline.childs(),
              s = Object(n.a)(
                this._undoModel,
                { showLine: o.visible, lineColor: o.color, lineStyle: o.linestyle, lineWidth: o.linewidth },
                i,
                'TrendLine',
                { line: h },
              )
            e.push(s)
          }
          const c = t.levelsStyle.childs(),
            x = { lineStyle: c.linestyle, lineWidth: c.linewidth },
            $ = { line: b }
          'extendLines' in t && ((x.extendRight = t.extendLines), ($.extendRightTitle = g)),
            'extendLinesLeft' in t && ((x.extendLeft = t.extendLinesLeft), ($.extendLeftTitle = C)),
            'extendRight' in t && ((x.extendRight = t.extendRight), ($.extendRightTitle = w)),
            'extendLeft' in t && ((x.extendLeft = t.extendLeft), ($.extendLeftTitle = p))
          const m = Object(n.a)(this._undoModel, x, i, 'LevelsStyleLine', $)
          e.push(m)
          const S = [],
            B = this._source.levelsCount()
          for (let e = 1; e <= B; e++) {
            const o = t['level' + e].childs(),
              n = Object(s.h)(
                {
                  checked: Object(s.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(s.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  level: Object(s.b)(this._undoModel, o.coeff, `Change ${i} Level ${e} Coeff`),
                },
                { id: `${l}LineLevel${e}` },
              )
            S.push(n)
          }
          const P = Object(s.m)(S, l + 'LeveledLinesGroup')
          e.push(Object(s.l)([P], l + 'Group'))
          const T = Object(s.e)(
            {
              color: Object(s.v)(
                this._undoModel,
                new u.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: l + 'AllLineColor', title: L },
          )
          e.push(T)
          const V = Object(s.r)(
            {
              checked: Object(s.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(s.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: l + 'Background', title: v },
          )
          e.push(V)
          const D = t
          if ('reverse' in D) {
            const t = Object(s.c)(
              { checked: Object(s.b)(this._undoModel, D.reverse, `Change ${i} Reverse`) },
              { id: l + 'Reverse', title: _ },
            )
            e.push(t)
          }
          const A = Object(s.c)(
            { checked: Object(s.b)(this._undoModel, t.showPrices, `Change ${i} Prices Visibility`) },
            { id: l + 'Prices', title: j },
          )
          e.push(A)
          const R = Object(s.k)(
            {
              checked: Object(s.b)(this._undoModel, t.showCoeffs, `Change ${i} Style`),
              option: Object(s.b)(this._undoModel, t.coeffsAsPercents, `Change ${i} Style`),
            },
            { id: i + 'PitchStyle', title: O, options: new d.a(M) },
          )
          e.push(R)
          const E = Object(s.t)(
            {
              option1: Object(s.b)(this._undoModel, t.horzLabelsAlign, `Change ${i} Labels Alignment`),
              option2: Object(s.b)(this._undoModel, t.vertLabelsAlign, `Change ${i} Labels Alignment`),
            },
            {
              id: l + 'Alignment',
              title: f,
              optionsItems1: new d.a(r.availableAlignmentHorizontalItems),
              optionsItems2: new d.a(k),
            },
          )
          if ((e.push(E), 'fibLevelsBasedOnLogScale' in t && null !== this._disabledBasedOnLog)) {
            const o = Object(s.c)(
              {
                disabled: Object(s.a)(
                  this._undoModel,
                  this._disabledBasedOnLog,
                  `Change ${i} Fib levels based on log scale disabled`,
                ),
                checked: Object(s.b)(
                  this._undoModel,
                  t.fibLevelsBasedOnLogScale,
                  `Change ${i} Fib levels based on log scale`,
                ),
              },
              { id: l + 'BasedOnLog', title: y },
            )
            e.push(o)
          }
          return e
        }
      }
    },
    '1yQO': function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return s
      })
      var o = i('hY0g'),
        n = i.n(o)
      function s(e, t, i, o = null) {
        const s = { id: t, title: i, definitions: new n.a(e) }
        return null !== o && (s.icon = o), s
      }
    },
    '2PB4': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibSpeedResistanceFanDefinitionsViewModel', function () {
          return _
        })
      var o = i('Eyy1'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('25b6'),
        r = i('turx')
      const c = window.t('Use one color'),
        d = window.t('Background'),
        a = window.t('Price Levels'),
        u = window.t('Time Levels'),
        h = window.t('Left Labels'),
        b = window.t('Right Labels'),
        w = window.t('Top Labels'),
        p = window.t('Bottom Labels'),
        g = window.t('Grid'),
        C = window.t('Reverse')
      class _ extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(l.c)(i),
            _ = [],
            j = this._source.hLevelsCount()
          for (let e = 1; e <= j; e++) {
            const o = t['hlevel' + e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  level: Object(n.b)(this._undoModel, o.coeff, `Change ${i} Level ${e} Coeff`),
                },
                { id: `${s}HLineLevel${e}` },
              )
            _.push(l)
          }
          const O = Object(n.m)(_, s + 'HLeveledLinesGroup'),
            f = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showLeftLabels, `Change ${i} Left Labels Visibility`) },
              { id: s + 'LeftLabels', title: h },
            ),
            L = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showRightLabels, `Change ${i} Right Labels Visibility`) },
              { id: s + 'RightLabels', title: b },
            ),
            v = Object(n.l)([O, f, L], s + 'HLevelGroup', a)
          e.push(v)
          const y = [],
            M = this._source.vLevelsCount()
          for (let e = 1; e <= M; e++) {
            const o = t['vlevel' + e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  level: Object(n.b)(this._undoModel, o.coeff, `Change ${i} Level ${e} Coeff`),
                },
                { id: `${s}VLineLevel${e}` },
              )
            y.push(l)
          }
          const k = Object(n.m)(y, s + 'VLeveledLinesGroup'),
            x = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showTopLabels, `Change ${i} Top Labels Visibility`) },
              { id: s + 'TopLabels', title: w },
            ),
            $ = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showBottomLabels, `Change ${i} Bottom Labels Visibility`) },
              { id: s + 'BottomLabels', title: p },
            ),
            m = Object(n.l)([k, x, $], s + 'VLevelGroup', u)
          e.push(m)
          const S = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new r.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: s + 'AllLineColor', title: c },
          )
          e.push(S)
          const B = Object(n.r)(
            {
              checked: Object(n.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(n.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: s + 'Background', title: d },
          )
          e.push(B)
          const P = t.grid.childs(),
            T = Object(n.i)(
              {
                checked: Object(n.b)(this._undoModel, P.visible, `Change ${i} Grid Visibility`),
                color: Object(n.v)(this._undoModel, P.color, null, `Change ${i} Grid Line Color`),
                width: Object(n.b)(this._undoModel, P.linewidth, `Change ${i} Grid Line Width`),
                style: Object(n.b)(this._undoModel, P.linestyle, `Change ${i} Grid Line Style`),
              },
              { id: s + 'GridLine', title: g },
            )
          e.push(T)
          const V = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.reverse, `Change ${i} Reverse Mode`) },
            { id: s + 'Reverse', title: C },
          )
          return e.push(V), e
        }
      }
    },
    '2liL': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GannSquareDefinitionsViewModel', function () {
          return _
        })
      var o = i('Eyy1'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('25b6'),
        r = i('turx')
      const c = window.t('Use one color'),
        d = window.t('Background'),
        a = window.t('Price Levels'),
        u = window.t('Time Levels'),
        h = window.t('Left Labels'),
        b = window.t('Right Labels'),
        w = window.t('Top Labels'),
        p = window.t('Bottom Labels'),
        g = window.t('Angles'),
        C = window.t('Reverse')
      class _ extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(l.c)(i),
            _ = [],
            j = this._source.hLevelsCount()
          for (let e = 1; e <= j; e++) {
            const o = t['hlevel' + e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  level: Object(n.b)(this._undoModel, o.coeff, `Change ${i} Level ${e} Coeff`),
                },
                { id: `${s}HLineLevel${e}` },
              )
            _.push(l)
          }
          const O = Object(n.m)(_, s + 'HLeveledLinesGroup'),
            f = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showLeftLabels, `Change ${i} Left Labels Visibility`) },
              { id: s + 'LeftLabels', title: h },
            ),
            L = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showRightLabels, `Change ${i} Right Labels Visibility`) },
              { id: s + 'RightLabels', title: b },
            ),
            v = Object(n.r)(
              {
                checked: Object(n.b)(this._undoModel, t.fillHorzBackground, `Change ${i} Background Visibility`),
                transparency: Object(n.b)(this._undoModel, t.horzTransparency, `Change ${i} Background Transparency`),
              },
              { id: s + 'BackgroundH', title: d },
            ),
            y = Object(n.l)([O, f, L, v], s + 'HLevelGroup', a)
          e.push(y)
          const M = [],
            k = this._source.vLevelsCount()
          for (let e = 1; e <= k; e++) {
            const o = t['vlevel' + e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  level: Object(n.b)(this._undoModel, o.coeff, `Change ${i} Level ${e} Coeff`),
                },
                { id: `${s}VLineLevel${e}` },
              )
            M.push(l)
          }
          const x = Object(n.m)(M, s + 'VLeveledLinesGroup'),
            $ = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showTopLabels, `Change ${i} Top Labels Visibility`) },
              { id: s + 'TopLabels', title: w },
            ),
            m = Object(n.c)(
              { checked: Object(n.b)(this._undoModel, t.showBottomLabels, `Change ${i} Bottom Labels Visibility`) },
              { id: s + 'BottomLabels', title: p },
            ),
            S = Object(n.r)(
              {
                checked: Object(n.b)(this._undoModel, t.fillVertBackground, `Change ${i} Background Visibility`),
                transparency: Object(n.b)(this._undoModel, t.vertTransparency, `Change ${i} Background Transparency`),
              },
              { id: s + 'BackgroundV', title: d },
            ),
            B = Object(n.l)([x, $, m, S], s + 'VLevelGroup', u)
          e.push(B)
          const P = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new r.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: s + 'AllLineColor', title: c },
          )
          e.push(P)
          const T = t.fans.childs(),
            V = Object(n.e)(
              {
                checked: Object(n.b)(this._undoModel, T.visible, `Change ${i} Fans Visibility`),
                color: Object(n.v)(this._undoModel, T.color, null, `Change ${i} Fans Line Color`),
              },
              { id: s + 'FansLines', title: g },
            )
          e.push(V)
          const D = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.reverse, `Change ${i} Reverse`) },
            { id: s + 'Reverse', title: C },
          )
          return e.push(D), e
        }
      }
    },
    '5sLb': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'ArrowMarkDefinitionsViewModel', function () {
          return c
        })
      var o = i('DSp8'),
        n = i('Cn8r'),
        s = i('HSjo')
      const l = window.t('Show text'),
        r = window.t('Arrow')
      class c extends n.a {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              {
                text: e.text,
                showText: e.showLabel,
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: l } },
            ),
          ]
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.arrowColor, null, 'Change Arrow Color') },
              { id: 'ArrowColor', title: r },
            ),
          ]
        }
      }
    },
    '6U6r': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibCirclesDefinitionsViewModel', function () {
          return w
        })
      var o = i('wm7x'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('25b6'),
        r = i('Eyy1'),
        c = i('turx')
      const d = window.t('Trend Line'),
        a = window.t('Use one color'),
        u = window.t('Background'),
        h = window.t('Levels'),
        b = window.t('Coeffs As Percents')
      class w extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(l.c)(i),
            w = t.trendline.childs(),
            p = Object(o.a)(
              this._undoModel,
              { showLine: w.visible, lineColor: w.color, lineStyle: w.linestyle, lineWidth: w.linewidth },
              i,
              'TrendLine',
              { line: d },
            )
          e.push(p)
          const g = this._source.levelsCount()
          for (let o = 1; o <= g; o++) {
            const l = t['level' + o].childs(),
              r = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, l.visible, `Change ${i} Level ${o} Line Visibility`),
                  color: Object(n.v)(this._undoModel, l.color, null, `Change ${i} Level ${o} Line Color`),
                  width: Object(n.b)(this._undoModel, l.linewidth, `Change ${i} Level ${o} Line Width`),
                  level: Object(n.b)(this._undoModel, l.coeff, `Change ${i} Level ${o} Coeff`),
                },
                { id: `${s}LineLevel${o}` },
              )
            e.push(r)
          }
          const C = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new c.b(Object(r.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: s + 'AllLineColor', title: a },
          )
          e.push(C)
          const _ = Object(n.r)(
            {
              checked: Object(n.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(n.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: s + 'Background', title: u },
          )
          e.push(_)
          const j = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.showCoeffs, `Change ${i} Levels Visibility`) },
            { id: s + 'Levels', title: h },
          )
          e.push(j)
          const O = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.coeffsAsPercents, `Change ${i} Coeffs As Percents Visibility`) },
            { id: s + 'Percentage', title: b },
          )
          return e.push(O), e
        }
      }
    },
    '6mGk': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibWedgeDefinitionsViewModel', function () {
          return b
        })
      var o = i('wm7x'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('25b6'),
        r = i('turx'),
        c = i('Eyy1')
      const d = window.t('Trend Line'),
        a = window.t('Use one color'),
        u = window.t('Background'),
        h = window.t('Levels')
      class b extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(l.c)(i),
            b = t.trendline.childs(),
            w = Object(o.a)(
              this._undoModel,
              { showLine: b.visible, lineColor: b.color, lineWidth: b.linewidth },
              i,
              'TrendLine',
              { line: d },
            )
          e.push(w)
          const p = this._source.levelsCount()
          for (let o = 1; o <= p; o++) {
            const l = t['level' + o].childs(),
              r = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, l.visible, `Change ${i} Level ${o} Line Visibility`),
                  color: Object(n.v)(this._undoModel, l.color, null, `Change ${i} Level ${o} Line Color`),
                  width: Object(n.b)(this._undoModel, l.linewidth, `Change ${i} Level ${o} Line Width`),
                  level: Object(n.b)(this._undoModel, l.coeff, `Change ${i} Level ${o} Coeff`),
                },
                { id: `${s}LineLevel${o}` },
              )
            e.push(r)
          }
          const g = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new r.b(Object(c.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: s + 'AllLineColor', title: a },
          )
          e.push(g)
          const C = Object(n.r)(
            {
              checked: Object(n.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(n.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: s + 'Background', title: u },
          )
          e.push(C)
          const _ = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.showCoeffs, `Change ${i} Levels Visibility`) },
            { id: s + 'Levels', title: h },
          )
          return e.push(_), e
        }
      }
    },
    '74nv': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'NoteDefinitionsViewModel', function () {
          return c
        })
      var o = i('DSp8'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Label')
      class c extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.markerColor, null, `Change ${t} background color`) },
              { id: Object(l.c)(t + 'LabelColor'), title: r },
            ),
          ]
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.textColor,
                fontSize: e.fontSize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.backgroundTransparency,
                borderColor: e.borderColor,
              },
              t,
              { isEditable: !0, isMultiLine: !0 },
            ),
          ]
        }
      }
    },
    '78yF': function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return _
      })
      var o = i('wm7x'),
        n = i('HSjo'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('bKFv'),
        c = i('25b6')
      const d = [
          { value: r.StatsPosition.Left, title: window.t('Left') },
          { value: r.StatsPosition.Center, title: window.t('Center') },
          { value: r.StatsPosition.Right, title: window.t('Right') },
        ],
        a = window.t('Show Middle Point'),
        u = window.t('Stats Position'),
        h = window.t('Show Price Range'),
        b = window.t('Show Bars Range'),
        w = window.t('Show Date/Time Range'),
        p = window.t('Show Distance'),
        g = window.t('Show Angle'),
        C = window.t('Always Show Stats')
      function _(e, t, i, s) {
        const r = Object(c.c)(i),
          _ = [],
          j = t,
          O = Object(o.a)(
            e,
            { ...j, lineColor: t.linecolor, lineWidth: t.linewidth, lineStyle: t.linestyle },
            r,
            'Line',
          )
        _.push(O)
        const f = Object(n.c)(
          { checked: Object(n.b)(e, t.showMiddlePoint, `Change ${i} Show Middle Point`) },
          { id: r + 'MiddlePoint', title: (s && s.middlePoint) || a },
        )
        _.push(f)
        const L = Object(n.c)(
          { checked: Object(n.b)(e, t.showPriceRange, `Change ${i} Show Price Range`) },
          { id: r + 'PriceRange', title: (s && s.priceRange) || h },
        )
        _.push(L)
        const v = Object(n.c)(
          { checked: Object(n.b)(e, t.showBarsRange, `Change ${i} Show Bars Range`) },
          {
            id: r + 'BarsRange',
            title: (s && s.barRange) || b,
          },
        )
        if ((_.push(v), 'showDateTimeRange' in t)) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.showDateTimeRange, `Change ${i} Show Date/Time Range`) },
            { id: r + 'DateTimeRange', title: (s && s.dateTimeRange) || w },
          )
          _.push(o)
        }
        if ('showDistance' in t) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.showDistance, `Change ${i} Show Distance`) },
            { id: r + 'Distance', title: (s && s.distance) || p },
          )
          _.push(o)
        }
        if ('showAngle' in t) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.showAngle, `Change ${i} Show Angle`) },
            { id: r + 'Angle', title: (s && s.angle) || g },
          )
          _.push(o)
        }
        const y = Object(n.c)(
          { checked: Object(n.b)(e, t.alwaysShowStats, `Change ${i} Always Show Stats`) },
          { id: r + 'ShowStats', title: (s && s.showStats) || C },
        )
        _.push(y)
        const M = Object(n.k)(
          { option: Object(n.b)(e, t.statsPosition, `Change ${i} Stats Position`) },
          { id: r + 'StatsPosition', title: (s && s.statsPosition) || u, options: new l.a(d) },
        )
        return _.push(M), _
      }
    },
    '8ioM': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'BarsPatternDefinitionsViewModel', function () {
          return p
        })
      var o = i('Cn8r'),
        n = i('HSjo'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('Ye2/'),
        c = i('Z5lT'),
        d = i('25b6')
      const a = window.t('Color'),
        u = window.t('Mode'),
        h = window.t('Mirrored'),
        b = window.t('Flipped'),
        w = [
          { value: r.LineToolBarsPatternMode.Bars, title: window.t('HL Bars') },
          { value: r.LineToolBarsPatternMode.OpenClose, title: window.t('OC Bars') },
          { value: r.LineToolBarsPatternMode.Line, title: window.t('Line - Close') },
          { value: r.LineToolBarsPatternMode.LineOpen, title: window.t('Line - Open') },
          { value: r.LineToolBarsPatternMode.LineHigh, title: window.t('Line - High') },
          { value: r.LineToolBarsPatternMode.LineLow, title: window.t('Line - Low') },
          { value: r.LineToolBarsPatternMode.LineHL2, title: window.t('Line - HL/2') },
        ]
      class p extends o.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(d.c)(t)
          return [
            Object(n.e)(
              { color: Object(n.v)(this._undoModel, e.color, null, `Change ${t} color`) },
              { id: i + 'Color', title: a },
            ),
            Object(n.k)(
              { option: Object(n.b)(this._undoModel, e.mode, `Change ${t} mode`, [c.a]) },
              { id: i + 'Mode', title: u, options: new l.a(w) },
            ),
            Object(n.c)(
              { checked: Object(n.b)(this._undoModel, e.mirrored, `Change ${t} Mirrored`) },
              { id: i + 'Mirrored', title: h },
            ),
            Object(n.c)(
              { checked: Object(n.b)(this._undoModel, e.flipped, `Change ${t} Flipped`) },
              { id: i + 'Flipped', title: b },
            ),
          ]
        }
      }
    },
    '91EF': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PolylinesDefinitionsViewModel', function () {
          return d
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Border'),
        c = window.t('Background')
      class d extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(this._undoModel, { lineColor: e.linecolor, lineWidth: e.linewidth }, t, 'Line', { line: r }),
            Object(s.e)(
              {
                checked: Object(s.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(s.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(l.c)(t + 'BackgroundColor'), title: c },
            ),
          ]
        }
      }
    },
    ASG6: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GannFanDefinitionsViewModel', function () {
          return u
        })
      var o = i('Eyy1'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('25b6'),
        r = i('turx')
      const c = window.t('Use one color'),
        d = window.t('Background'),
        a = window.t('Labels')
      class u extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(l.c)(i),
            u = this._source.levelsCount()
          for (let o = 1; o <= u; o++) {
            const l = t['level' + o].childs(),
              r = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, l.visible, `Change ${i} Level ${o} Line Visibility`),
                  color: Object(n.v)(this._undoModel, l.color, null, `Change ${i} Level ${o} Line Color`),
                  width: Object(n.b)(this._undoModel, l.linewidth, `Change ${i} Level ${o} Line Width`),
                  style: Object(n.b)(this._undoModel, l.linestyle, `Change ${i} Level ${o} Line Style`),
                },
                { id: `${s}LineLevel${o}`, title: `${l.coeff1.value()}/${l.coeff2.value()}` },
              )
            e.push(r)
          }
          const h = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new r.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
              ),
            },
            { id: s + 'AllLineColor', title: c },
          )
          e.push(h)
          const b = Object(n.r)(
            {
              checked: Object(n.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(n.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: s + 'Background', title: d },
          )
          e.push(b)
          const w = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.showLabels, `Change ${i} Labels Visibility`) },
            { id: s + 'Labels', title: a },
          )
          return e.push(w), e
        }
      }
    },
    Ax76: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GeneralDatePriceRangeDefinitionsViewModel', function () {
          return C
        })
      var o = i('wm7x'),
        n = i('DSp8'),
        s = i('Cn8r'),
        l = i('HSjo'),
        r = i('25b6')
      const c = window.t('Line'),
        d = window.t('Border'),
        a = window.t('Background'),
        u = window.t('Extend top'),
        h = window.t('Extend bottom'),
        b = window.t('Extend left'),
        w = window.t('Extend right'),
        p = window.t('Label'),
        g = window.t('Label background')
      class C extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(r.c)(i),
            C = Object(o.a)(this._undoModel, { lineColor: t.linecolor, lineWidth: t.linewidth }, i, 'Line', { line: c })
          if ((e.push(C), t.hasOwnProperty('borderWidth'))) {
            const n = Object(o.a)(
              this._undoModel,
              { showLine: t.drawBorder, lineColor: t.borderColor, lineWidth: t.borderWidth },
              i,
              'Border',
              { line: d },
            )
            e.push(n)
          }
          const _ = Object(l.e)(
            {
              checked: Object(l.b)(this._undoModel, t.fillBackground, `Change ${i} background visibility`),
              color: Object(l.v)(
                this._undoModel,
                t.backgroundColor,
                t.backgroundTransparency,
                `Change ${i} background color`,
              ),
            },
            { id: s + 'BackgroundColor', title: a },
          )
          if (
            (e.push(_),
            (function (e) {
              return e.hasOwnProperty('extendTop')
            })(t))
          ) {
            const o = Object(l.c)(
                { checked: Object(l.b)(this._undoModel, t.extendTop, `Change ${i} Extend top`) },
                { id: s + 'ExtendTop', title: u },
              ),
              n = Object(l.c)(
                { checked: Object(l.b)(this._undoModel, t.extendBottom, `Change ${i} Extend bottom`) },
                { id: s + 'ExtendBottom', title: h },
              )
            e.push(o, n)
          }
          if (
            (function (e) {
              return e.hasOwnProperty('extendLeft')
            })(t)
          ) {
            const o = Object(l.c)(
                { checked: Object(l.b)(this._undoModel, t.extendLeft, `Change ${i} Extend left`) },
                { id: s + 'extendLeft', title: b },
              ),
              n = Object(l.c)(
                {
                  checked: Object(l.b)(this._undoModel, t.extendRight, `Change ${i} Extend bottom`),
                },
                { id: s + 'ExtendBottom', title: w },
              )
            e.push(o, n)
          }
          const j = {
              textColor: t.textcolor,
              backgroundColor: t.labelBackgroundColor,
              backgroundTransparency: t.backgroundTransparency,
            },
            O = Object(n.a)(
              this._undoModel,
              { ...j, fontSize: t.fontsize, backgroundVisible: t.fillLabelBackground },
              i,
              { isEditable: !0, isMultiLine: !0, customTitles: { text: p, backgroundTitle: g } },
            )
          return e.push(O), e
        }
      }
    },
    BABJ: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'TimeCyclesPatternDefinitionsViewModel', function () {
          return d
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Line'),
        c = window.t('Background')
      class d extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              { lineColor: e.linecolor, lineWidth: e.linewidth, lineStyle: e.linestyle },
              t,
              'Line',
              { line: r },
            ),
            Object(s.e)(
              {
                checked: Object(s.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(s.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(l.c)(t + 'BackgroundColor'), title: c },
            ),
          ]
        }
      }
    },
    BDhr: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return d
      })
      var o = i('wm7x'),
        n = i('HSjo'),
        s = i('25b6')
      const l = window.t('Show Price'),
        r = window.t('Show Time'),
        c = window.t('Extend')
      function d(e, t, i) {
        const d = Object(s.c)(i),
          a = [],
          u = Object(o.a)(e, { lineColor: t.linecolor, lineWidth: t.linewidth, lineStyle: t.linestyle }, d, 'Line')
        if ((a.push(u), 'showPrice' in t)) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.showPrice, `Change ${i} Price Label Visibility`) },
            { id: d + 'ShowPrice', title: l },
          )
          a.push(o)
        }
        if ('extendLine' in t) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.extendLine, `Change ${i} Extension`) },
            { id: d + 'ExtendLine', title: c },
          )
          a.push(o)
        }
        if ('showTime' in t) {
          const o = Object(n.c)(
            { checked: Object(n.b)(e, t.showTime, `Change ${i} Time Label Visibility`) },
            { id: d + 'ShowTime', title: r },
          )
          a.push(o)
        }
        return a
      }
    },
    'D+Nk': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PitchBaseDefinitionsViewModel', function () {
          return b
        })
      var o = i('Eyy1'),
        n = i('wm7x'),
        s = i('Cn8r'),
        l = i('HSjo'),
        r = i('25b6'),
        c = i('turx')
      const d = window.t('Median'),
        a = window.t('Use one color'),
        u = window.t('Background'),
        h = window.t('Extend Lines')
      class b extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties(),
            i = t.childs(),
            s = this._source.name(),
            b = Object(r.c)(s)
          t.hasChild('extendLines') &&
            e.push(
              Object(l.c)(
                { checked: Object(l.b)(this._undoModel, i.extendLines, `Toggle ${s} Extend Lines`) },
                { id: b + 'ExtendLines', title: h },
              ),
            )
          const w = i.median.childs(),
            p = Object(n.a)(
              this._undoModel,
              { lineColor: w.color, lineStyle: w.linestyle, lineWidth: w.linewidth },
              s,
              'Median',
              { line: d },
            )
          e.push(p)
          const g = this._source.levelsCount()
          for (let t = 0; t <= g; t++) {
            const o = i['level' + t].childs(),
              n = Object(l.h)(
                {
                  checked: Object(l.b)(this._undoModel, o.visible, `Change ${s} Level ${t + 1} Line Visibility`),
                  color: Object(l.v)(this._undoModel, o.color, null, `Change ${s} Level ${t + 1} Line Color`),
                  width: Object(l.b)(this._undoModel, o.linewidth, `Change ${s} Level ${t + 1} Line Width`),
                  style: Object(l.b)(this._undoModel, o.linestyle, `Change ${s} Level ${t + 1} Line Style`),
                  level: Object(l.b)(this._undoModel, o.coeff, `Change ${s} Level ${t + 1} Line Coeff`),
                },
                { id: `${b}LineLevel${t + 1}` },
              )
            e.push(n)
          }
          const C = Object(l.e)(
            {
              color: Object(l.v)(
                this._undoModel,
                new c.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${s} All Lines Color`,
                !0,
              ),
            },
            { id: b + 'AllLineColor', title: a },
          )
          e.push(C)
          const _ = Object(l.r)(
            {
              checked: Object(l.b)(this._undoModel, i.fillBackground, `Change ${s} Background Visibility`),
              transparency: Object(l.b)(this._undoModel, i.transparency, `Change ${s} Background Transparency`),
            },
            { id: b + 'Background', title: u },
          )
          return e.push(_), e
        }
      }
    },
    DSp8: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return c
      })
      var o = i('HSjo'),
        n = i('25b6')
      const s = window.t('Background'),
        l = window.t('Border'),
        r = window.t('Text Wrap')
      function c(e, t, i, c) {
        const d = {},
          a = { id: Object(n.c)(i) + 'Text', title: (c.customTitles && c.customTitles.text) || '' }
        if (
          (void 0 !== t.showText && (d.checked = Object(o.b)(e, t.showText, `Change ${i} Text Visibility`)),
          void 0 !== t.textColor &&
            (d.color = Object(o.v)(e, t.textColor, t.transparency || null, `Change ${i} Text Color`)),
          void 0 !== t.fontSize && (d.size = Object(o.b)(e, t.fontSize, `Change ${i} Text Font Size`)),
          void 0 !== t.bold && (d.bold = Object(o.b)(e, t.bold, `Change ${i} Text Font Bold`)),
          void 0 !== t.italic && (d.italic = Object(o.b)(e, t.italic, `Change ${i} Text Font Italic`)),
          void 0 !== t.text &&
            ((d.text = Object(o.b)(e, t.text, `Change ${i} Text`)),
            (a.isEditable = Boolean(c.isEditable)),
            (a.isMultiLine = Boolean(c.isMultiLine))),
          void 0 !== t.vertLabelsAlign &&
            ((d.alignmentVertical = Object(o.b)(e, t.vertLabelsAlign, `Change ${i} Labels Alignment Vertical`)),
            (a.alignmentVerticalItems = c.alignmentVerticalItems)),
          void 0 !== t.horzLabelsAlign &&
            ((d.alignmentHorizontal = Object(o.b)(e, t.horzLabelsAlign, `Change ${i} Labels Alignment Horizontal`)),
            (a.alignmentHorizontalItems = c.alignmentHorizontalItems)),
          void 0 !== t.textOrientation &&
            (d.orientation = Object(o.b)(e, t.textOrientation, `Change ${i} Labels Direction`)),
          void 0 !== t.backgroundVisible &&
            (d.backgroundVisible = Object(o.b)(e, t.backgroundVisible, `Change ${i} Text Background Visibility`)),
          void 0 !== t.backgroundColor)
        ) {
          let n = null
          void 0 !== t.backgroundTransparency && (n = t.backgroundTransparency),
            (d.backgroundColor = Object(o.v)(e, t.backgroundColor, n, `Change ${i} Text Background Color`))
        }
        return (
          (void 0 === t.backgroundVisible && void 0 === t.backgroundColor) ||
            (a.backgroundTitle = (c.customTitles && c.customTitles.backgroundTitle) || s),
          void 0 !== t.borderVisible &&
            (d.borderVisible = Object(o.b)(e, t.borderVisible, `Change ${i} Text Border Visibility`)),
          void 0 !== t.borderWidth && (d.borderWidth = Object(o.b)(e, t.borderWidth, `Change ${i} Text Border Width`)),
          void 0 !== t.borderColor &&
            (d.borderColor = Object(o.v)(e, t.borderColor, null, `Change ${i} Text Border Color`)),
          (void 0 === t.borderVisible && void 0 === t.borderColor && void 0 === t.borderWidth) ||
            (a.borderTitle = (c.customTitles && c.customTitles.borderTitle) || l),
          void 0 !== t.wrap &&
            ((d.wrap = Object(o.b)(e, t.wrap, `Change ${i} Text Wrap`)),
            (a.wrapTitle = (c.customTitles && c.customTitles.wrapTitle) || r)),
          Object(o.q)(d, a)
        )
      }
    },
    FkpW: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'VerticalLineDefinitionsViewModel', function () {
          return a
        })
      var o = i('HSjo'),
        n = i('CA9d'),
        s = i('BDhr'),
        l = i('25b6'),
        r = i('Cn8r'),
        c = i('DSp8')
      const d = window.t('Show text')
      class a extends r.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return Object(s.a)(this._undoModel, e, this._source.name())
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = Object(n.a)(this._undoModel, e)
          return [
            Object(o.f)(
              { x: t.property },
              {
                id: Object(l.c)(this._source.name() + 'Point1'),
                title: window.t('#1 (bar)', { context: 'linetool point' }),
                ...t.info,
              },
            ),
          ]
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(c.a)(
              this._undoModel,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                textOrientation: e.textOrientation,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } },
            ),
          ]
        }
      }
    },
    FxV7: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'ArrowMarkerDefinitionsViewModel', function () {
          return d
        })
      var o = i('HSjo'),
        n = i('Cn8r'),
        s = i('25b6'),
        l = i('DSp8')
      const r = window.t('Color'),
        c = window.t('Show text')
      class d extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.e)(
              { color: Object(o.v)(this._undoModel, e.backgroundColor, null, `Change ${t} color`) },
              { id: Object(s.c)(t + 'Color'), title: r },
            ),
          ]
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(l.a)(
              this._undoModel,
              {
                text: e.text,
                showText: e.showLabel,
                textColor: e.textColor,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: c } },
            ),
          ]
        }
      }
    },
    HCdA: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PitchForkDefinitionsViewModel', function () {
          return a
        })
      var o = i('HSjo'),
        n = i('D+Nk'),
        s = i('rCHB'),
        l = i('hY0g'),
        r = i.n(l)
      const c = window.t('Style'),
        d = [
          { value: s.LineToolPitchforkStyle.Original, title: window.t('Original') },
          { value: s.LineToolPitchforkStyle.Schiff2, title: window.t('Schiff') },
          { value: s.LineToolPitchforkStyle.Schiff, title: window.t('Modified Schiff') },
          { value: s.LineToolPitchforkStyle.Inside, title: window.t('Inside') },
        ]
      class a extends n.PitchBaseDefinitionsViewModel {
        _stylePropertyDefinitions() {
          const e = super._stylePropertyDefinitions(),
            t = this._source.properties().childs(),
            i = this._source.name(),
            n = Object(o.k)(
              { option: Object(o.b)(this._undoModel, t.style, `Change ${i} Style`) },
              { id: i + 'PitchStyle', title: c, options: new r.a(d) },
            )
          return e.push(n), e
        }
      }
    },
    K4wI: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'RectangleDefinitionsViewModel', function () {
          return u
        })
      var o = i('YFKU'),
        n = i('HSjo'),
        s = i('Zd1D'),
        l = i('DSp8')
      const r = Object(o.t)('Text'),
        c = window.t('Extend left'),
        d = window.t('Extend right'),
        a = [
          { value: 'bottom', title: window.t('Top') },
          { value: 'middle', title: window.t('Inside') },
          { value: 'top', title: window.t('Bottom') },
        ]
      class u extends s.GeneralFiguresDefinitionsViewModelBase {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = super._stylePropertyDefinitions(),
            o = Object(n.c)(
              {
                checked: Object(n.b)(this._undoModel, e.extendRight, `Change ${t} Extending Right`),
              },
              { id: t + 'ExtendRight', title: d },
            )
          i.push(o)
          const s = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, e.extendLeft, `Change ${t} Extending Left`) },
            { id: t + 'ExtendLeft', title: c },
          )
          return i.push(s), i
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(l.a)(
              this._undoModel,
              {
                textColor: e.textColor,
                text: e.text,
                bold: e.bold,
                italic: e.italic,
                fontSize: e.fontSize,
                horzLabelsAlign: e.horzLabelsAlign,
                vertLabelsAlign: e.vertLabelsAlign,
                showText: e.showLabel,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, alignmentVerticalItems: a, customTitles: { text: r } },
            ),
          ]
        }
      }
    },
    LX4V: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'CyclicAndSineLinesPatternDefinitionsViewModel', function () {
          return l
        })
      var o = i('wm7x'),
        n = i('Cn8r')
      const s = window.t('Lines')
      class l extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              { lineColor: e.linecolor, lineWidth: e.linewidth, lineStyle: e.linestyle },
              this._source.name(),
              'Line',
              { line: s },
            ),
          ]
        }
      }
    },
    LzAw: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'ProjectionDefinitionsViewModel', function () {
          return d
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Border'),
        c = window.t('Background')
      class d extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(s.s)(
              {
                color1: Object(s.v)(this._undoModel, e.color1, e.transparency, `Change ${t} background color 1`),
                color2: Object(s.v)(this._undoModel, e.color2, e.transparency, `Change ${t} background color 2`),
              },
              { id: Object(l.c)(t + 'Background2Color'), title: c },
            ),
            Object(o.a)(this._undoModel, { lineColor: e.trendline.childs().color, lineWidth: e.linewidth }, t, 'Line', {
              line: r,
            }),
          ]
        }
      }
    },
    NEbb: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'HorizontalLineDefinitionsViewModel', function () {
          return a
        })
      var o = i('HSjo'),
        n = i('CA9d'),
        s = i('25b6'),
        l = i('Cn8r'),
        r = i('BDhr'),
        c = i('DSp8')
      const d = window.t('Show text')
      class a extends l.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return Object(r.a)(this._undoModel, e, this._source.name())
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._getYCoordinateStepWV(),
            i = Object(n.b)(this._undoModel, e, t)
          return [
            Object(o.f)(
              { y: i.property },
              {
                id: Object(s.c)(this._source.name() + 'Point'),
                title: window.t('#1 (price)', { context: 'linetool point' }),
                ...i.info,
              },
            ),
          ]
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(c.a)(
              this._undoModel,
              {
                ...e,
                showText: e.showLabel,
                textColor: e.textcolor,
                fontSize: e.fontsize,
                textOrientation: e.textOrientation,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: d } },
            ),
          ]
        }
      }
    },
    Pwwq: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PredictionDefinitionsViewModel', function () {
          return C
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Source text'),
        c = window.t('Source background'),
        d = window.t('Source border'),
        a = window.t('Target text'),
        u = window.t('Target background'),
        h = window.t('Target border'),
        b = window.t('Success text'),
        w = window.t('Success background'),
        p = window.t('Failure text'),
        g = window.t('Failure background')
      class C extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(l.c)(t)
          return [
            Object(o.a)(this._undoModel, { lineColor: e.linecolor, lineWidth: e.linewidth }, t, 'Line'),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.sourceTextColor, null, `Change ${t} source text color`) },
              { id: i + 'SourceTextColor', title: r },
            ),
            Object(s.e)(
              {
                color: Object(s.v)(
                  this._undoModel,
                  e.sourceBackColor,
                  e.transparency,
                  `Change ${t} source background color`,
                ),
              },
              { id: i + 'SourceBackgroundColor', title: c },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.sourceStrokeColor, null, `Change ${t} source border color`) },
              { id: i + 'SourceBorderColor', title: d },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.targetTextColor, null, `Change ${t} target text color`) },
              { id: i + 'TargetTextColor', title: a },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.targetBackColor, null, `Change ${t} target background color`) },
              { id: i + 'TargetBackgroundColor', title: u },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.targetStrokeColor, null, `Change ${t} target border color`) },
              { id: i + 'TargetBorderColor', title: h },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.successTextColor, null, `Change ${t} success text color`) },
              { id: i + 'SuccessTextColor', title: b },
            ),
            Object(s.e)(
              {
                color: Object(s.v)(this._undoModel, e.successBackground, null, `Change ${t} success background color`),
              },
              { id: i + 'SuccessBackgroundColor', title: w },
            ),
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.failureTextColor, null, `Change ${t} failure text color`) },
              { id: i + 'FailureTextColor', title: p },
            ),
            Object(s.e)(
              {
                color: Object(s.v)(this._undoModel, e.failureBackground, null, `Change ${t} failure background color`),
              },
              { id: i + 'FailureBackgroundColor', title: g },
            ),
          ]
        }
      }
    },
    QWxu: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'TextDefinitionsViewModel', function () {
          return s
        })
      var o = i('DSp8'),
        n = i('Cn8r')
      class s extends n.a {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundVisible: e.fillBackground,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.backgroundTransparency,
                borderVisible: e.drawBorder,
                borderColor: e.borderColor,
                wrap: e.wordWrap,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0 },
            ),
          ]
        }
      }
    },
    RYNR: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'RiskRewardDefinitionsViewModel', function () {
          return $
        })
      var o = i('wm7x'),
        n = i('DSp8'),
        s = i('Cn8r'),
        l = i('HSjo'),
        r = i('hY0g'),
        c = i.n(r),
        d = i('25b6')
      const a = window.t('Lines'),
        u = window.t('Stop color'),
        h = window.t('Target color'),
        b = window.t('Text'),
        w = window.t('Compact stats mode'),
        p = window.t('Ticks'),
        g = window.t('Price'),
        C = window.t('Entry price'),
        _ = window.t('Profit level'),
        j = window.t('Stop level'),
        O = window.t('Account size'),
        f = window.t('Lot size'),
        L = window.t('Risk'),
        v = window.t('Always show stats'),
        y = window.t('Show price labels'),
        M = window.t('%'),
        k = window.t('Cash')
      function x(e) {
        return [
          { value: 'percents', title: M },
          { value: 'money', title: e || k },
        ]
      }
      class $ extends s.a {
        constructor(e, t) {
          super(e, t)
          const i = this._source.properties().childs(),
            o = i.riskDisplayMode.value()
          ;(this._riskMaxWV = new c.a(this._getRiskMax(o))),
            (this._riskStepWV = new c.a(this._getRiskStep(o))),
            (this._riskPrecisionWV = new c.a(this._getRiskPrecision(o))),
            (this._riskUnitWV = new c.a(this._getRiskUnit())),
            (this._riskUnitOptionsWV = new c.a(this._getRiskUnitOptions())),
            this._createPropertyRages(),
            i.riskDisplayMode.subscribe(this, e => this._onRiskDisplayChanged(e)),
            i.accountSize.subscribe(this, () => this._onAccountSizeChanged()),
            this._undoModel
              .model()
              .mainSeries()
              .dataEvents()
              .symbolResolved()
              .subscribe(this, this._onSymbolInfoChanged)
        }
        destroy() {
          super.destroy()
          const e = this._source.properties().childs()
          e.riskDisplayMode.unsubscribeAll(this),
            e.accountSize.unsubscribeAll(this),
            this._undoModel.model().mainSeries().dataEvents().symbolResolved().unsubscribeAll(this)
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(d.c)(t)
          return [
            Object(o.a)(this._undoModel, { lineColor: e.linecolor, lineWidth: e.linewidth }, t, 'Line', { line: a }),
            Object(l.e)(
              {
                color: Object(l.v)(
                  this._undoModel,
                  e.stopBackground,
                  e.stopBackgroundTransparency,
                  `Change ${t} stop color`,
                ),
              },
              { id: i + 'StopColor', title: u },
            ),
            Object(l.e)(
              {
                color: Object(l.v)(
                  this._undoModel,
                  e.profitBackground,
                  e.profitBackgroundTransparency,
                  `Change ${t} stop color`,
                ),
              },
              { id: i + 'ProfitColor', title: h },
            ),
            Object(n.a)(this._undoModel, { textColor: e.textcolor, fontSize: e.fontsize }, t, {
              isEditable: !0,
              isMultiLine: !0,
              customTitles: { text: b },
            }),
            Object(l.c)(
              { checked: Object(l.b)(this._undoModel, e.showPriceLabels, `Change ${t} Show price labels`) },
              { id: i + 'ShowPriceLabels', title: y },
            ),
            Object(l.c)(
              { checked: Object(l.b)(this._undoModel, e.compact, `Change ${t} Compact stats mode`) },
              { id: i + 'CompactMode', title: w },
            ),
            Object(l.c)(
              { checked: Object(l.b)(this._undoModel, e.alwaysShowStats, `Change ${t} Always show stats`) },
              { id: i + 'AlwaysShowStats', title: v },
            ),
          ]
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(d.c)(t),
            o = this._getYCoordinateStepWV(),
            n = Object(l.j)(
              { value: Object(l.b)(this._undoModel, e.accountSize, `Change ${t} Account Size`) },
              {
                id: i + 'AccountSize',
                title: O,
                type: 1,
                min: new c.a(1e-9),
                max: new c.a(1e9),
                step: new c.a(1),
                unit: this._riskUnitWV,
              },
            ),
            s = Object(l.j)(
              { value: Object(l.b)(this._undoModel, e.lotSize, `Change ${t} Lot Size`) },
              { id: i + 'LotSize', title: f, type: 1, min: new c.a(1), max: new c.a(1e8), step: new c.a(1) },
            ),
            r = Object(l.j)(
              {
                value: Object(l.b)(this._undoModel, e.risk, `Change ${t} Risk`, [e => parseFloat(e)]),
                unitOptionsValue: Object(l.b)(this._undoModel, e.riskDisplayMode, `Change ${t} Risk Display Mode`),
              },
              {
                id: i + 'Risk',
                title: L,
                type: 1,
                min: new c.a(1e-9),
                max: this._riskMaxWV,
                precision: this._riskPrecisionWV,
                step: this._riskStepWV,
                unitOptions: this._riskUnitOptionsWV,
              },
            ),
            a = Object(l.j)(
              { value: Object(l.b)(this._undoModel, e.entryPrice, `Change ${t} entry price`) },
              { id: i + 'EntryPrice', title: C, type: 1, step: o },
            ),
            u = Object(l.l)([n, s, r, a], i + 'AccountRisk'),
            h = Object(l.j)(
              { value: Object(l.b)(this._undoModel, e.profitLevel, `Change ${t} profit level`) },
              { id: i + 'ProfitLevelTicks', title: p, type: 0, min: new c.a(0), max: new c.a(1e9), step: new c.a(1) },
            ),
            b = Object(l.j)(
              {
                value: Object(l.b)(this._undoModel, e.targetPrice, `Change ${t} profit price`, [
                  e => e,
                  e => this._source.preparseProfitPrice(e),
                ]),
              },
              { id: i + 'ProfitLevelPrice', title: g, type: 1, step: o },
            ),
            w = Object(l.l)([h, b], i + 'ProfitLevel', _),
            v = Object(l.j)(
              { value: Object(l.b)(this._undoModel, e.stopLevel, `Change ${t} stop level`) },
              { id: i + 'StopLevelTicks', title: p, type: 0, min: new c.a(0), max: new c.a(1e9), step: new c.a(1) },
            ),
            y = Object(l.j)(
              {
                value: Object(l.b)(this._undoModel, e.stopPrice, `Change ${t} stop price`, [
                  e => e,
                  e => this._source.preparseStopPrice(e),
                ]),
              },
              { id: i + 'StopLevelPrice', title: g, type: 1, step: o },
            )
          return [u, w, Object(l.l)([v, y], i + 'StopLevel', j)]
        }
        _onRiskDisplayChanged(e) {
          const t = e.value()
          this._riskMaxWV.setValue(this._getRiskMax(t)),
            this._riskStepWV.setValue(this._getRiskStep(t)),
            this._riskPrecisionWV.setValue(this._getRiskPrecision(t))
        }
        _onAccountSizeChanged() {
          this._riskMaxWV.setValue(this._getRiskMax(this._source.properties().childs().riskDisplayMode.value()))
        }
        _onSymbolInfoChanged() {
          this._riskUnitWV.setValue(this._getRiskUnit()), this._riskUnitOptionsWV.setValue(this._getRiskUnitOptions())
        }
        _getRiskMax(e) {
          return 'percents' === e ? 100 : this._source.properties().childs().accountSize.value()
        }
        _getRiskStep(e) {
          return 'percents' === e ? 0.01 : 1
        }
        _getRiskPrecision(e) {
          if ('percents' === e) return 2
        }
        _getRiskUnit() {
          const e = this._undoModel.model().mainSeries().symbolInfo()
          return (null !== e && e.currency_code) || ''
        }
        _getRiskUnitOptions() {
          const e = this._undoModel.model().mainSeries().symbolInfo()
          return null !== e ? x(e.currency_code) : x()
        }
      }
    },
    RhWr: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'BalloonDefinitionsViewModel', function () {
          return l
        })
      var o = i('DSp8'),
        n = i('Cn8r')
      const s = window.t('Text')
      class l extends n.a {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.borderColor,
              },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: s } },
            ),
          ]
        }
      }
    },
    SMr9: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'availableAlignmentVerticalItems', function () {
          return b
        }),
        i.d(t, 'availableAlignmentHorizontalItems', function () {
          return w
        }),
        i.d(t, 'FibTimezoneDefinitionsViewModel', function () {
          return p
        })
      var o = i('HSjo'),
        n = i('Cn8r'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('25b6'),
        c = i('turx'),
        d = i('Eyy1')
      const a = window.t('Use one color'),
        u = window.t('Background'),
        h = window.t('Labels'),
        b = [
          { id: 'top', value: 'top', title: window.t('Top') },
          {
            id: 'middle',
            value: 'middle',
            title: window.t('Middle'),
          },
          { id: 'bottom', value: 'bottom', title: window.t('Bottom') },
        ],
        w = [
          { id: 'left', value: 'left', title: window.t('Left') },
          { id: 'center', value: 'center', title: window.t('Center') },
          { id: 'right', value: 'right', title: window.t('Right') },
        ]
      class p extends n.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            n = Object(r.c)(i),
            s = this._source.levelsCount()
          for (let l = 1; l <= s; l++) {
            const s = t['level' + l].childs(),
              r = Object(o.h)(
                {
                  checked: Object(o.b)(this._undoModel, s.visible, `Change ${i} Level ${l} Line Visibility`),
                  color: Object(o.v)(this._undoModel, s.color, null, `Change ${i} Level ${l} Line Color`),
                  width: Object(o.b)(this._undoModel, s.linewidth, `Change ${i} Level ${l} Line Width`),
                  style: Object(o.b)(this._undoModel, s.linestyle, `Change ${i} Level ${l} Line Style`),
                  level: Object(o.b)(this._undoModel, s.coeff, `Change ${i} Level ${l} Coeff`),
                },
                { id: `${n}LineLevel${l}` },
              )
            e.push(r)
          }
          const p = Object(o.e)(
            {
              color: Object(o.v)(
                this._undoModel,
                new c.b(Object(d.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: n + 'AllLineColor', title: a },
          )
          e.push(p)
          const g = Object(o.r)(
            {
              checked: Object(o.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(o.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: n + 'Background', title: u },
          )
          e.push(g)
          const C = Object(o.t)(
            {
              checked: Object(o.b)(this._undoModel, t.showLabels, `Change ${i} Labels Visibility`),
              option1: Object(o.b)(this._undoModel, t.horzLabelsAlign, `Change ${i} Labels Alignment`),
              option2: Object(o.b)(this._undoModel, t.vertLabelsAlign, `Change ${i} Labels Alignment`),
            },
            { id: n + 'Labels', title: h, optionsItems1: new l.a(w), optionsItems2: new l.a(b) },
          )
          return e.push(C), e
        }
      }
    },
    UHSU: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'ElliottPatternDefinitionsViewModel', function () {
          return h
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('hY0g'),
        r = i.n(l),
        c = i('25b6')
      const d = window.t('Color'),
        a = window.t('Wave'),
        u = window.t('Degree')
      class h extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.color, null, `Change ${t} color`) },
              { id: Object(c.c)(t + 'BackgroundColor'), title: d },
            ),
            Object(o.a)(this._undoModel, { showLine: e.showWave, lineWidth: e.linewidth }, t, 'Line', { line: a }),
            Object(s.k)(
              { option: Object(s.b)(this._undoModel, e.degree, `Change ${t} degree`) },
              { id: t + 'Degree', title: u, options: new r.a(this._source.availableDegreesValues()) },
            ),
          ]
        }
      }
    },
    VkdP: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'ParallelChannelDefinitionsViewModel', function () {
          return h
        })
      var o = i('HSjo'),
        n = i('Cn8r'),
        s = i('wm7x'),
        l = i('25b6')
      const r = window.t('Background'),
        c = window.t('Extend left line'),
        d = window.t('Extend right line'),
        a = window.t('Channel'),
        u = window.t('Middle')
      class h extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(l.c)(t)
          return [
            Object(s.a)(
              this._undoModel,
              { lineColor: e.linecolor, lineStyle: e.linestyle, lineWidth: e.linewidth },
              t,
              'ChannelLine',
              { line: a },
            ),
            Object(s.a)(
              this._undoModel,
              {
                showLine: e.showMidline,
                lineColor: e.midlinecolor,
                lineStyle: e.midlinestyle,
                lineWidth: e.midlinewidth,
              },
              'MiddleLine',
              t,
              { line: u },
            ),
            Object(o.c)(
              { checked: Object(o.b)(this._undoModel, e.extendLeft, `Change ${t} Extending Left`) },
              { id: i + 'ExtendLeft', title: c },
            ),
            Object(o.c)(
              { checked: Object(o.b)(this._undoModel, e.extendRight, `Change ${t} Extending Right`) },
              { id: i + 'ExtendRight', title: d },
            ),
            Object(o.e)(
              {
                checked: Object(o.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(o.v)(
                  this._undoModel,
                  e.backgroundColor,
                  e.transparency,
                  `Change ${t} background visibility color`,
                ),
              },
              { id: i + 'Background', title: r },
            ),
          ]
        }
      }
    },
    'WW+G': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PathDefinitionsViewModel', function () {
          return l
        })
      var o = i('wm7x'),
        n = i('Cn8r')
      const s = window.t('Line')
      class l extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              {
                lineColor: e.lineColor,
                lineWidth: e.lineWidth,
                lineStyle: e.lineStyle,
                leftEnd: e.leftEnd,
                rightEnd: e.rightEnd,
              },
              t,
              'Line',
              { line: s },
            ),
          ]
        }
      }
    },
    WfUZ: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'isGannComplexLineTool', function () {
          return f
        }),
        i.d(t, 'GannComplexAndFixedDefinitionsViewModel', function () {
          return L
        })
      var o = i('DSp8'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('nd9+'),
        r = i('hY0g'),
        c = i.n(r),
        d = i('Z5lT'),
        a = i('25b6'),
        u = i('Eyy1'),
        h = i('turx')
      const b = window.t('Reverse'),
        w = window.t('Use one color'),
        p = window.t('Background'),
        g = window.t('Price/Bar Ratio'),
        C = window.t('Ranges and ratio'),
        _ = window.t('Levels'),
        j = window.t('Fans'),
        O = window.t('Arcs')
      function f(e) {
        return e instanceof l.LineToolGannComplex
      }
      class L extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(a.c)(i),
            l = [],
            r = t.levels.childCount()
          for (let e = 0; e < r; e++) {
            const o = t.levels.childs()[e].childs(),
              r = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Level ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Level ${e} Line Color`),
                  width: Object(n.b)(this._undoModel, o.width, `Change ${i} Level ${e} Line Width`),
                },
                { id: `${s}LineLevel${e}`, title: '' + e },
              )
            l.push(r)
          }
          const L = Object(n.m)(l, s + 'LeveledLinesGroup')
          e.push(Object(n.l)([L], s + 'LevelGroup', _))
          const v = [],
            y = t.fanlines.childCount()
          for (let e = 0; e < y; e++) {
            const o = t.fanlines.childs()[e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Fan ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Fan ${e} Line Color`),
                  width: Object(n.b)(this._undoModel, o.width, `Change ${i} Fan ${e} Line Width`),
                },
                { id: `${s}FanLineLevel${e}`, title: `${o.x.value()}x${o.y.value()}` },
              )
            v.push(l)
          }
          const M = Object(n.m)(v, s + 'FanLeveledLinesGroup')
          e.push(Object(n.l)([M], s + 'FanLinesGroup', j))
          const k = [],
            x = t.arcs.childCount()
          for (let e = 0; e < x; e++) {
            const o = t.arcs.childs()[e].childs(),
              l = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, o.visible, `Change ${i} Arcs ${e} Line Visibility`),
                  color: Object(n.v)(this._undoModel, o.color, null, `Change ${i} Arcs ${e} Line Color`),
                  width: Object(n.b)(this._undoModel, o.width, `Change ${i} Arcs ${e} Line Width`),
                },
                { id: `${s}ArcsLineLevel${e}`, title: `${o.x.value()}x${o.y.value()}` },
              )
            k.push(l)
          }
          const $ = Object(n.m)(k, s + 'ArcsLeveledLinesGroup')
          e.push(Object(n.l)([$], s + 'ArcsLinesGroup', O))
          const m = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new h.b(
                  Object(u.ensureNotNull)(this._source.lineColorsProperty()),
                  this._undoModel,
                  `Change ${i} All Lines Color`,
                ),
                null,
                '',
              ),
            },
            { id: s + 'AllLineColor', title: w },
          )
          e.push(m)
          const S = t.arcsBackground.childs(),
            B = Object(n.r)(
              {
                checked: Object(n.b)(this._undoModel, S.fillBackground, `Change ${i} Background Visibility`),
                transparency: Object(n.b)(this._undoModel, S.transparency, `Change ${i} Background Transparency`),
              },
              { id: s + 'Background', title: p },
            )
          e.push(B)
          const P = Object(n.c)(
            { checked: Object(n.b)(this._undoModel, t.reverse, `Change ${i} Reverse`) },
            { id: s + 'Reverse', title: b },
          )
          if ((e.push(P), f(this._source))) {
            const t = this._source,
              s = t.properties().childs(),
              l = Object(n.j)(
                {
                  value: Object(n.b)(this._undoModel, s.scaleRatio, 'Change Top Margin', [
                    Object(d.c)(7),
                    e => (null !== e ? parseFloat(t.getScaleRatioFormatter().format('' + e)) : null),
                  ]),
                },
                {
                  id: 'scaleRatio',
                  title: g,
                  min: new c.a(1e-7),
                  max: new c.a(1e8),
                  step: new c.a(t.getScaleRatioStep()),
                },
              )
            e.push(l)
            const r = s.labelsStyle.childs(),
              a = Object(o.a)(
                this._undoModel,
                { showText: s.showLabels, fontSize: r.fontSize, bold: r.bold, italic: r.italic },
                i,
                { customTitles: { text: C } },
              )
            e.push(a)
          }
          return e
        }
      }
    },
    XCOO: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'IconsDefinitionsViewModel', function () {
          return r
        })
      var o = i('Cn8r'),
        n = i('HSjo'),
        s = i('25b6')
      const l = window.t('Color')
      class r extends o.a {
        constructor(e, t) {
          super(e, t)
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(n.e)(
              { color: Object(n.v)(this._undoModel, e.color, null, `Change ${t} color`) },
              { id: Object(s.c)(t + 'Color'), title: l },
            ),
          ]
        }
      }
    },
    Z5lT: function (e, t, i) {
      'use strict'
      i.d(t, 'b', function () {
        return n
      }),
        i.d(t, 'a', function () {
          return s
        }),
        i.d(t, 'c', function () {
          return l
        })
      var o = i('T6Of')
      function n(e) {
        return Math.floor(e)
      }
      function s(e) {
        return parseInt(String(e))
      }
      function l(e) {
        const t = new o.LimitedPrecisionNumericFormatter(e)
        return e => {
          if (null === e) return e
          const i = t.parse(t.format(e))
          return i.res ? i.value : null
        }
      }
    },
    ZSes: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'BrushDefinitionsViewModel', function () {
          return c
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Background')
      class c extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              { lineColor: e.linecolor, lineWidth: e.linewidth, leftEnd: e.leftEnd, rightEnd: e.rightEnd },
              t,
              'Line',
            ),
            Object(s.e)(
              {
                checked: Object(s.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(s.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(l.c)(t + 'BackgroundColor'), title: r },
            ),
          ]
        }
      }
    },
    Zd1D: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GeneralFiguresDefinitionsViewModelBase', function () {
          return d
        }),
        i.d(t, 'GeneralFiguresDefinitionsViewModel', function () {
          return a
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Border'),
        c = window.t('Background')
      class d extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(this._undoModel, { lineColor: e.color, lineWidth: e.linewidth }, t, 'Line', { line: r }),
            Object(s.e)(
              {
                checked: Object(s.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(s.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(l.c)(t + 'BackgroundColor'), title: c },
            ),
          ]
        }
      }
      class a extends d {}
    },
    aMeN: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PatternWithoutBackgroundDefinitionsViewModel', function () {
          return c
        })
      var o = i('wm7x'),
        n = i('DSp8'),
        s = i('Cn8r')
      const l = window.t('Label'),
        r = window.t('Border')
      class c extends s.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(n.a)(
              this._undoModel,
              { textColor: e.textcolor, fontSize: e.fontsize, bold: e.bold, italic: e.italic },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: l } },
            ),
            Object(o.a)(this._undoModel, { lineColor: e.color, lineWidth: e.linewidth }, t, 'Line', { line: r }),
          ]
        }
      }
    },
    auWl: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'TrendLineDefinitionsViewModel', function () {
          return r
        })
      var o = i('Cn8r'),
        n = i('78yF'),
        s = i('DSp8')
      const l = window.t('Show text')
      class r extends o.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return Object(n.a)(this._undoModel, e, this._source.name())
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(s.a)(
              this._undoModel,
              { ...e, showText: e.showLabel, textColor: e.textcolor, fontSize: e.fontsize },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: l } },
            ),
          ]
        }
      }
    },
    b4fl: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GeneralBezierDefinitionsViewModel', function () {
          return c
        })
      var o = i('wm7x'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Background')
      class c extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              {
                lineColor: e.linecolor,
                lineWidth: e.linewidth,
                lineStyle: e.linestyle,
                extendLeft: e.extendLeft,
                extendRight: e.extendRight,
                leftEnd: e.leftEnd,
                rightEnd: e.rightEnd,
              },
              t,
              'Line',
            ),
            Object(s.e)(
              {
                checked: Object(s.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(s.v)(this._undoModel, e.backgroundColor, e.transparency, `Change ${t} background color`),
              },
              { id: Object(l.c)(t + 'BackgroundColor'), title: r },
            ),
          ]
        }
      }
    },
    'e0H+': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'HorizontalRayDefinitionsViewModel', function () {
          return s
        })
      var o = i('xrdl'),
        n = i('CA9d')
      class s extends o.CrossLineDefinitionsViewModel {
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = this._source.pointsProperty().childs().points[0].childs(),
            i = this._getYCoordinateStepWV()
          return [
            Object(n.c)(
              this._undoModel,
              t,
              e[0],
              i,
              window.t('#1 (price, bar)', {
                context: 'linetool point',
              }),
              this._source.name(),
            ),
          ]
        }
      }
    },
    ernH: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PriceNoteDefinitionsViewModel', function () {
          return h
        })
      var o = i('DSp8'),
        n = i('Cn8r'),
        s = i('HSjo'),
        l = i('25b6')
      const r = window.t('Label Text'),
        c = window.t('Show text'),
        d = window.t('Line Color'),
        a = window.t('Label Border'),
        u = window.t('Label Background')
      class h extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(l.c)(t),
            n = Object(s.e)(
              { color: Object(s.v)(this._undoModel, e.lineColor, null, `Change ${t} line color`) },
              { id: i + 'LineColor', title: d },
            )
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.priceLabelTextColor,
                fontSize: e.priceLabelFontSize,
                bold: e.priceLabelBold,
                italic: e.priceLabelItalic,
                backgroundColor: e.priceLabelBackgroundColor,
                borderColor: e.priceLabelBorderColor,
              },
              this._source.name(),
              { isEditable: !1, isMultiLine: !1, customTitles: { text: r, borderTitle: a, backgroundTitle: u } },
            ),
            n,
          ]
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              { ...e, showText: e.showLabel, textColor: e.textColor, fontSize: e.fontSize },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0, customTitles: { text: c } },
            ),
          ]
        }
      }
    },
    'fIc+': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GhostFeedDefinitionsViewModel', function () {
          return w
        })
      var o = i('Cn8r'),
        n = i('HSjo'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('25b6')
      const c = window.t('Candles'),
        d = window.t('Borders'),
        a = window.t('Wick'),
        u = window.t('Transparency'),
        h = window.t('Avg HL in minticks'),
        b = window.t('Variance')
      class w extends o.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(r.c)(t),
            o = e.candleStyle.childs()
          return [
            Object(n.s)(
              {
                color1: Object(n.v)(this._undoModel, o.upColor, null, `Change ${t} Candle Up Color`),
                color2: Object(n.v)(this._undoModel, o.downColor, null, `Change ${t} Candle Down Color`),
              },
              { id: i + 'Candle2Colors', title: c },
            ),
            Object(n.s)(
              {
                checked: Object(n.b)(this._undoModel, o.drawBorder, `Change ${t} Candle Border Visibility`),
                color1: Object(n.v)(this._undoModel, o.borderUpColor, null, `Change ${t} Candle Border Up Color`),
                color2: Object(n.v)(this._undoModel, o.borderDownColor, null, `Change ${t} Candle Border Down Color`),
              },
              { id: i + 'CandleBorder2Colors', title: d },
            ),
            Object(n.e)(
              {
                checked: Object(n.b)(this._undoModel, o.drawWick, `Change ${t} Candle Wick Visibility`),
                color: Object(n.v)(this._undoModel, o.wickColor, null, `Change ${t} Candle Wick Color`),
              },
              { id: i + 'CandleWickColor', title: a },
            ),
            Object(n.r)(
              { transparency: Object(n.b)(this._undoModel, e.transparency, `Change ${t} Transparency`) },
              { id: i + 'Transparency', title: u },
            ),
          ]
        }
        _inputsPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(r.c)(t)
          return [
            Object(n.j)(
              { value: Object(n.b)(this._undoModel, e.averageHL, `Change ${t} Average HL value`) },
              { id: i + 'AvgHL', title: h, type: 0, min: new l.a(1), max: new l.a(5e4), step: new l.a(1) },
            ),
            Object(n.j)(
              { value: Object(n.b)(this._undoModel, e.variance, `Change ${t} Variance value`) },
              { id: i + 'Variance', title: b, type: 0, min: new l.a(1), max: new l.a(100), step: new l.a(1) },
            ),
          ]
        }
      }
    },
    hQgR: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'PriceLabelDefinitionsViewModel', function () {
          return l
        })
      var o = i('DSp8'),
        n = i('Cn8r')
      const s = window.t('Text')
      class l extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.borderColor,
              },
              this._source.name(),
              { customTitles: { text: s } },
            ),
          ]
        }
      }
    },
    nBUU: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibSpiralDefinitionsViewModel', function () {
          return c
        })
      var o = i('HSjo'),
        n = i('Cn8r'),
        s = i('25b6')
      const l = window.t('Line'),
        r = window.t('Counterclockwise')
      class c extends n.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name(),
            i = Object(s.c)(t)
          return [
            Object(o.i)(
              {
                color: Object(o.v)(this._undoModel, e.linecolor, null, `Change ${t} Line Color`),
                width: Object(o.b)(this._undoModel, e.linewidth, `Change ${t} Line Width`),
                style: Object(o.b)(this._undoModel, e.linestyle, `Change ${t} Line Style`),
              },
              { id: i + 'Line', title: l },
            ),
            Object(o.c)(
              { checked: Object(o.b)(this._undoModel, e.counterclockwise, `Change ${t} Counterclockwise`) },
              { id: i + 'Counterclockwise', title: r },
            ),
          ]
        }
      }
    },
    o1gc: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'TrendAngleDefinitionsViewModel', function () {
          return u
        })
      var o = i('HSjo'),
        n = i('Cn8r'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('CA9d'),
        c = i('78yF')
      const d = window.t('Angle'),
        a = window.t('Text')
      class u extends n.a {
        _coordinatesPropertyDefinitions() {
          const e = this._source.points(),
            t = [],
            i = this._source.pointsProperty().childs().points[0].childs(),
            n = this._getYCoordinateStepWV()
          t.push(
            Object(r.c)(
              this._undoModel,
              i,
              e[0],
              n,
              window.t('#1 (price, bar)', { context: 'linetool point' }),
              this._source.name(),
            ),
          )
          const s = Object(o.j)(
            { value: Object(o.b)(this._undoModel, this._source.properties().childs().angle, 'Change angle') },
            { id: 'TrendLineAngleCoordinate', title: d, min: new l.a(-360), max: new l.a(360), step: new l.a(1) },
          )
          return t.push(s), t
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return Object(c.a)(this._undoModel, e, this._source.name(), { text: a })
        }
      }
    },
    pdv6: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FibSpeedResistanceArcsDefinitionsViewModel', function () {
          return w
        })
      var o = i('Eyy1'),
        n = i('wm7x'),
        s = i('HSjo'),
        l = i('Cn8r'),
        r = i('25b6'),
        c = i('turx')
      const d = window.t('Trend Line'),
        a = window.t('Use one color'),
        u = window.t('Background'),
        h = window.t('Levels'),
        b = window.t('Full Circles')
      class w extends l.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            l = Object(r.c)(i),
            w = t.trendline.childs(),
            p = Object(n.a)(
              this._undoModel,
              { showLine: w.visible, lineColor: w.color, lineStyle: w.linestyle, lineWidth: w.linewidth },
              i,
              'TrendLine',
              { line: d },
            )
          e.push(p)
          const g = this._source.levelsCount()
          for (let o = 1; o <= g; o++) {
            const n = t['level' + o].childs(),
              r = Object(s.h)(
                {
                  checked: Object(s.b)(this._undoModel, n.visible, `Change ${i} Level ${o} Line Visibility`),
                  color: Object(s.v)(this._undoModel, n.color, null, `Change ${i} Level ${o} Line Color`),
                  width: Object(s.b)(this._undoModel, n.linewidth, `Change ${i} Level ${o} Line Width`),
                  level: Object(s.b)(this._undoModel, n.coeff, `Change ${i} Level ${o} Coeff`),
                },
                { id: `${l}LineLevel${o}` },
              )
            e.push(r)
          }
          const C = Object(s.e)(
            {
              color: Object(s.v)(
                this._undoModel,
                new c.b(Object(o.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: l + 'AllLineColor', title: a },
          )
          e.push(C)
          const _ = Object(s.r)(
            {
              checked: Object(s.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(s.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: l + 'Background', title: u },
          )
          e.push(_)
          const j = Object(s.c)(
            { checked: Object(s.b)(this._undoModel, t.showCoeffs, `Change ${i} Levels Visibility`) },
            { id: l + 'Levels', title: h },
          )
          e.push(j)
          const O = Object(s.c)(
            { checked: Object(s.b)(this._undoModel, t.fullCircles, `Change ${i} Full Circles Visibility`) },
            { id: l + 'FullCircles', title: b },
          )
          return e.push(O), e
        }
      }
    },
    turx: function (e, t, i) {
      'use strict'
      i.d(t, 'b', function () {
        return r
      }),
        i.d(t, 'a', function () {
          return c
        })
      var o = i('Eyy1'),
        n = i('tc+8'),
        s = i.n(n)
      class l extends s.a {
        constructor(e) {
          super(), (this._listenersMappers = []), (this._isProcess = !1), (this._baseProperty = e)
        }
        destroy() {
          this._baseProperty.destroy()
        }
        value() {
          const e = this._baseProperty.value()
          return 'mixed' === e ? '' : e
        }
        visible() {
          return this._baseProperty.visible()
        }
        setValue(e) {
          ;(this._isProcess = !0),
            this._baseProperty.setValue('' === e ? 'mixed' : e, void 0, { applyValue: this._applyValue.bind(this) }),
            (this._isProcess = !1),
            this._listenersMappers.forEach(e => {
              e.method.call(e.obj, this)
            })
        }
        subscribe(e, t) {
          const i = i => {
              this._isProcess || t.call(e, this)
            },
            o = { obj: e, method: t, callback: i }
          this._listenersMappers.push(o), this._baseProperty.subscribe(e, i)
        }
        unsubscribe(e, t) {
          var i
          const n = Object(o.ensureDefined)(
            null === (i = this._listenersMappers.find(i => i.obj === e && i.method === t)) || void 0 === i
              ? void 0
              : i.callback,
          )
          this._baseProperty.unsubscribe(e, n)
        }
        unsubscribeAll(e) {
          this._baseProperty.unsubscribeAll(e)
        }
      }
      class r extends l {
        constructor(e, t, i) {
          super(e), (this._undoModel = t), (this._undoText = i)
        }
        _applyValue(e, t) {
          this._undoModel.setProperty(e, t, this._undoText)
        }
      }
      class c extends l {
        _applyValue(e, t) {
          e.setValue(t)
        }
      }
    },
    u52p: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'TrendBasedFibTimeDefinitionsViewModel', function () {
          return g
        })
      var o = i('wm7x'),
        n = i('HSjo'),
        s = i('Cn8r'),
        l = i('SMr9'),
        r = i('hY0g'),
        c = i.n(r),
        d = i('25b6'),
        a = i('Eyy1'),
        u = i('turx')
      const h = window.t('Trend Line'),
        b = window.t('Use one color'),
        w = window.t('Background'),
        p = window.t('Labels')
      class g extends s.a {
        _stylePropertyDefinitions() {
          const e = [],
            t = this._source.properties().childs(),
            i = this._source.name(),
            s = Object(d.c)(i),
            r = t.trendline.childs(),
            g = Object(o.a)(
              this._undoModel,
              { showLine: r.visible, lineColor: r.color, lineStyle: r.linestyle, lineWidth: r.linewidth },
              i,
              'TrendLine',
              { line: h },
            )
          e.push(g)
          const C = this._source.levelsCount()
          for (let o = 1; o <= C; o++) {
            const l = t['level' + o].childs(),
              r = Object(n.h)(
                {
                  checked: Object(n.b)(this._undoModel, l.visible, `Change ${i} Level ${o} Line Visibility`),
                  color: Object(n.v)(this._undoModel, l.color, null, `Change ${i} Level ${o} Line Color`),
                  width: Object(n.b)(this._undoModel, l.linewidth, `Change ${i} Level ${o} Line Width`),
                  style: Object(n.b)(this._undoModel, l.linestyle, `Change ${i} Level ${o} Line Style`),
                  level: Object(n.b)(this._undoModel, l.coeff, `Change ${i} Level ${o} Coeff`),
                },
                { id: `${s}LineLevel${o}` },
              )
            e.push(r)
          }
          const _ = Object(n.e)(
            {
              color: Object(n.v)(
                this._undoModel,
                new u.b(Object(a.ensureNotNull)(this._source.lineColorsProperty()), this._undoModel, ''),
                null,
                `Change ${i} All Lines Color`,
                !0,
              ),
            },
            { id: s + 'AllLineColor', title: b },
          )
          e.push(_)
          const j = Object(n.r)(
            {
              checked: Object(n.b)(this._undoModel, t.fillBackground, `Change ${i} Background Visibility`),
              transparency: Object(n.b)(this._undoModel, t.transparency, `Change ${i} Background Transparency`),
            },
            { id: s + 'Background', title: w },
          )
          e.push(j)
          const O = Object(n.t)(
            {
              checked: Object(n.b)(this._undoModel, t.showCoeffs, `Change ${i} Labels Visibility`),
              option1: Object(n.b)(this._undoModel, t.horzLabelsAlign, `Change ${i} Labels Alignment`),
              option2: Object(n.b)(this._undoModel, t.vertLabelsAlign, `Change ${i} Labels Alignment`),
            },
            {
              id: s + 'Labels',
              title: p,
              optionsItems1: new c.a(l.availableAlignmentHorizontalItems),
              optionsItems2: new c.a(l.availableAlignmentVerticalItems),
            },
          )
          return e.push(O), e
        }
      }
    },
    vm8R: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'GeneralTrendFiguresDefinitionsViewModel', function () {
          return a
        })
      var o = i('wm7x'),
        n = i('DSp8'),
        s = i('Cn8r'),
        l = i('HSjo'),
        r = i('25b6')
      const c = window.t('Prices'),
        d = window.t('Background')
      class a extends s.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              { ...e, lineColor: e.linecolor, lineWidth: e.linewidth, lineStyle: e.linestyle },
              t,
              'Line',
            ),
            Object(n.a)(
              this._undoModel,
              { showText: e.showPrices, textColor: e.textcolor, fontSize: e.fontsize, bold: e.bold, italic: e.italic },
              t,
              { customTitles: { text: c } },
            ),
            Object(l.e)(
              {
                checked: Object(l.b)(this._undoModel, e.fillBackground, `Change ${t} background visibility`),
                color: Object(l.v)(
                  this._undoModel,
                  e.backgroundColor,
                  e.transparency,
                  `Change ${t} background visibility color`,
                ),
              },
              { id: Object(r.c)(t + 'Background'), title: d },
            ),
          ]
        }
      }
    },
    'w/mY': function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'FlagMarkDefinitionsViewModel', function () {
          return l
        })
      var o = i('Cn8r'),
        n = i('HSjo')
      const s = window.t('Flag')
      class l extends o.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(n.e)(
              { color: Object(n.v)(this._undoModel, e.flagColor, null, 'Change Flag Color') },
              { id: 'FlagColor', title: s },
            ),
          ]
        }
      }
    },
    wm7x: function (e, t, i) {
      'use strict'
      i.d(t, 'a', function () {
        return c
      })
      var o = i('HSjo'),
        n = i('25b6')
      const s = window.t('Line'),
        l = window.t('Extend left line'),
        r = window.t('Extend right line')
      function c(e, t, i, c, d) {
        const a = {},
          u = { id: `${Object(n.c)(i)}${c}`, title: (d && d.line) || s }
        return (
          void 0 !== t.showLine && (a.checked = Object(o.b)(e, t.showLine, `Change ${i} Visibility`)),
          void 0 !== t.lineWidth && (a.width = Object(o.b)(e, t.lineWidth, `Change ${i} Width`)),
          void 0 !== t.lineStyle && (a.style = Object(o.b)(e, t.lineStyle, `Change ${i} Style`)),
          void 0 !== t.lineColor && (a.color = Object(o.v)(e, t.lineColor, null, `Change ${i} Color`)),
          void 0 !== t.extendLeft &&
            ((a.extendLeft = Object(o.b)(e, t.extendLeft, `Change ${i} Extending Left`)),
            (u.extendLeftTitle = (d && d.extendLeftTitle) || l)),
          void 0 !== t.leftEnd && (a.leftEnd = Object(o.b)(e, t.leftEnd, `Change ${i} Left End`)),
          void 0 !== t.extendRight &&
            ((a.extendRight = Object(o.b)(e, t.extendRight, `Change ${i} Extending Right`)),
            (u.extendRightTitle = (d && d.extendRightTitle) || r)),
          void 0 !== t.rightEnd && (a.rightEnd = Object(o.b)(e, t.rightEnd, `Change ${i} Right End`)),
          Object(o.i)(a, u)
        )
      }
    },
    xhf0: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'CalloutDefinitionsViewModel', function () {
          return s
        })
      var o = i('DSp8'),
        n = i('Cn8r')
      class s extends n.a {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(o.a)(
              this._undoModel,
              {
                textColor: e.color,
                fontSize: e.fontsize,
                bold: e.bold,
                italic: e.italic,
                text: e.text,
                backgroundColor: e.backgroundColor,
                backgroundTransparency: e.transparency,
                borderColor: e.bordercolor,
                borderWidth: e.linewidth,
                wrap: e.wordWrap,
              },
              t,
              { isEditable: !0, isMultiLine: !0 },
            ),
          ]
        }
      }
    },
    xrdl: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'CrossLineDefinitionsViewModel', function () {
          return r
        })
      var o = i('Cn8r'),
        n = i('BDhr'),
        s = i('DSp8')
      const l = window.t('Show text')
      class r extends o.a {
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs()
          return Object(n.a)(this._undoModel, e, this._source.name())
        }
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          if ('showLabel' in e) {
            return [
              Object(s.a)(
                this._undoModel,
                { ...e, showText: e.showLabel, textColor: e.textcolor, fontSize: e.fontsize },
                this._source.name(),
                { isEditable: !0, isMultiLine: !0, customTitles: { text: l } },
              ),
            ]
          }
          return null
        }
      }
    },
    zb1A: function (e, t, i) {
      'use strict'
      i.r(t),
        i.d(t, 'SignpostDefinitionsViewModel', function () {
          return b
        })
      var o = i('YFKU'),
        n = i('25b6'),
        s = i('hY0g'),
        l = i.n(s),
        r = i('HSjo'),
        c = i('DSp8'),
        d = i('CA9d'),
        a = i('Cn8r')
      const u = Object(o.t)('#1 (vertical position %, bar)', { context: 'linetool point' }),
        h = Object(o.t)('Emoji pin')
      class b extends a.a {
        _textPropertyDefinitions() {
          const e = this._source.properties().childs()
          return [
            Object(c.a)(
              this._undoModel,
              { text: e.text, fontSize: e.fontSize, bold: e.bold, italic: e.italic },
              this._source.name(),
              { isEditable: !0, isMultiLine: !0 },
            ),
          ]
        }
        _coordinatesPropertyDefinitions() {
          const e = this._source.pointsProperty().childs().points[0].childs(),
            t = this._source.name(),
            i = Object(d.a)(this._undoModel, e),
            o = {
              property: Object(r.b)(this._undoModel, e.price, 'Change Vertical position Y coordinate'),
              info: { typeY: 1, stepY: new l.a(1), minY: new l.a(-100), maxY: new l.a(100) },
            }
          return [
            Object(r.f)(
              { x: i.property, y: o.property },
              { id: Object(n.c)(`${t}Coordinates${u}`), title: u, ...i.info, ...o.info },
            ),
          ]
        }
        _stylePropertyDefinitions() {
          const e = this._source.properties().childs(),
            t = this._source.name()
          return [
            Object(r.g)(
              {
                checked: Object(r.b)(this._undoModel, e.showImage, `Change ${t} Emoji Visibility`),
                backgroundColor: Object(r.v)(this._undoModel, e.plateColor, null, `Change ${t} Image Background Color`),
                emoji: Object(r.b)(this._undoModel, e.emoji, `Change ${t} Emoji`),
              },
              { id: Object(n.c)(`${t}Emoji${u}`), title: h },
            ),
          ]
        }
      }
    },
  },
])
