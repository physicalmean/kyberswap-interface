;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['export-data'],
  {
    SIoL: function (e, t, s) {
      'use strict'
      s.r(t),
        s.d(t, 'exportData', function () {
          return r
        })
      s('YFKU')
      var i = s('Eyy1'),
        l = s('ZJKN'),
        n = s('k9/m'),
        o = s('23IT'),
        a = s('cKqi'),
        c = s('xCUR')
      const d = {
        includeTime: !0,
        includeUserTime: !1,
        includeSeries: !0,
        includeDisplayedValues: !1,
        includedStudies: 'all',
      }
      function r(e, t = {}) {
        const s = Object.assign({}, d, t),
          o = { schema: [], data: [], displayedData: [] },
          r = e.timeScale().points(),
          f = e.mainSeries(),
          m = (function (e, t) {
            const s = e.allStudies().filter(e => e.showInObjectTree())
            if ('all' === t) return s
            return s.filter(e => t.includes(e.id()))
          })(e, s.includedStudies),
          T = m.filter(e => e instanceof a.study_Overlay).map(e => e.data())
        ;(s.includeSeries || 0 === T.length) && T.push(f.bars())
        const y = (function (e, t, s, o) {
            const a = Object(i.ensureNotNull)(void 0 !== s ? e.indexOf(s, !0) : e.firstIndex()),
              c = Object(i.ensureNotNull)(void 0 !== o ? e.indexOf(o, !0) : e.lastIndex())
            let d = c,
              r = a
            for (const e of t) {
              const t = e.search(a, n.PlotRowSearchMode.NearestRight)
              null !== t && t.index < d && (d = t.index)
              const s = e.search(c, n.PlotRowSearchMode.NearestLeft)
              null !== s && s.index > r && (r = s.index)
            }
            return Object(i.assert)(d <= r, 'Range must contain at least 1 time point'), new l.BarsRange(d, r)
          })(r, T, s.from, s.to),
          w = y.firstBar(),
          O = y.lastBar()
        s.includeTime && o.schema.push({ type: 'time' })
        const b = o.schema.length
        s.includeUserTime && o.schema.push({ type: 'userTime' })
        const g = o.schema.length
        if (s.includeSeries) {
          const e = f
            .statusProvider({ hideResolution: !0 })
            .getSplitTitle()
            .filter(e => '' !== e)
            .join(', ')
          o.schema.push(h('open', e)),
            o.schema.push(h('high', e)),
            o.schema.push(h('low', e)),
            o.schema.push(h('close', e))
        }
        let j = o.schema.length
        const P = []
        for (const e of m) {
          const t = u(e)
          P.push(t), o.schema.push(...t.fields)
        }
        const x = o.schema.length
        if (0 === x) return o
        for (let e = w; e <= O; ++e) {
          const e = new Float64Array(x)
          e.fill(NaN), o.data.push(e), s.includeDisplayedValues && o.displayedData.push(new Array(x).fill(''))
        }
        if (s.includeTime || s.includeUserTime) {
          const t = e.timeScale(),
            l = e.dateTimeFormatter()
          for (let e = w; e <= O; ++e) {
            s.includeTime && (o.data[e - w][0] = Object(i.ensureNotNull)(r.valueAt(e)))
            const n = Object(i.ensureNotNull)(t.indexToUserTime(e))
            if ((s.includeUserTime && (o.data[e - w][b] = n.getTime() / 1e3), s.includeDisplayedValues)) {
              const t = l.format(n)
              s.includeTime && (o.displayedData[e - w][0] = t), s.includeUserTime && (o.displayedData[e - w][b] = t)
            }
          }
        }
        if (s.includeSeries) {
          const e = f.bars().range(w, O),
            t = Object(c.a)(f)
          e.each((e, i) => {
            const l = o.data[e - w],
              n = p(i[1]),
              a = p(i[2]),
              c = p(i[3]),
              d = p(i[4])
            if (((l[g] = n), (l[g + 1] = a), (l[g + 2] = c), (l[g + 3] = d), s.includeDisplayedValues)) {
              const s = o.displayedData[e - w]
              ;(s[g] = t(n)), (s[g + 1] = t(a)), (s[g + 2] = t(c)), (s[g + 3] = t(d))
            }
            return !1
          })
        }
        for (let e = 0; e < m.length; ++e) {
          const t = m[e],
            i = P[e],
            l = Object(c.a)(t)
          for (let e = 0; e < i.fields.length; ++e) {
            const n = i.fieldPlotOffsets[e],
              a = i.fieldToPlotIndex[e],
              c = w - n,
              d = O - n,
              r = j + e
            t.data()
              .range(c, d)
              .each((e, t) => {
                const i = o.data[e - c],
                  n = p(t[a])
                return (i[r] = n), s.includeDisplayedValues && (o.displayedData[e - c][r] = l(n)), !1
              })
          }
          j += i.fields.length
        }
        return o
      }
      function u(e) {
        const t = e.metaInfo(),
          s = { fieldToPlotIndex: [], fieldPlotOffsets: [], fields: [] },
          l = e.id(),
          n = e.title(!1, void 0, !1)
        for (let a = 0; a < t.plots.length; ++a) {
          const c = t.plots[a]
          let d,
            r = ''
          if (
            Object(o.isLinePlot)(c) ||
            Object(o.isShapesPlot)(c) ||
            Object(o.isCharsPlot)(c) ||
            Object(o.isArrowsPlot)(c)
          )
            d = Object(i.ensureDefined)(t.styles)[c.id]
          else if (Object(o.isOhlcPlot)(c))
            switch (((d = t.ohlcPlots && t.ohlcPlots[c.target]), c.type)) {
              case 'ohlc_open':
                r = ` (${window.t('Open')})`
                break
              case 'ohlc_high':
                r = ' (' + window.t('High')
                break
              case 'ohlc_low':
                r = ` (${window.t('Low')})`
                break
              case 'ohlc_close':
                r = ` (${window.t('Close')})`
            }
          if (void 0 === d || void 0 === d.title) continue
          const u = `${d.title}${r}`
          s.fields.push(f(l, n, u)), s.fieldToPlotIndex.push(a + 1), s.fieldPlotOffsets.push(e.offset(c.id))
        }
        return s
      }
      function f(e, t, s) {
        return { type: 'value', sourceType: 'study', sourceId: e, sourceTitle: t, plotTitle: s }
      }
      function h(e, t) {
        return { type: 'value', sourceType: 'series', plotTitle: e, sourceTitle: t }
      }
      function p(e) {
        return null != e ? e : NaN
      }
    },
  },
])
