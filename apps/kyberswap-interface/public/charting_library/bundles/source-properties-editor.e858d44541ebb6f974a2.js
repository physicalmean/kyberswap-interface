;(window.webpackJsonp = window.webpackJsonp || []).push([
  ['source-properties-editor'],
  {
    CbZh: function (e, t, i) {
      'use strict'
      i.r(t)
      i('YFKU')
      var s = i('q1tI'),
        o = i('i8i4'),
        n = i('FQhm'),
        a = i('Eyy1'),
        r = (i('bSeV'), i('qFKp')),
        l = i('Vdly'),
        c = i.n(l),
        h = i('ycFu'),
        d = i('tWVy'),
        u = i('aDg1'),
        _ = i('pLAj'),
        p = i('tmL0'),
        g = i('CW80'),
        b = i('vHME'),
        m = i('3ClC'),
        C = i('qJq3'),
        P = i('Ss5c'),
        v = i('GVHu'),
        f = i('/KDZ'),
        S = i('LWBq'),
        y = i('ttKw')
      class I extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._activePageRef = s.createRef()),
            (this._getActionPageById = e => {
              if (!e) return
              const { pages: t } = this.props
              return t.find(t => t.id.toLowerCase() === e.toLowerCase())
            }),
            (this._onChangeActivePageDefinitions = () => {
              this.setState({ tableKey: Date.now() }, () => {
                this._requestResize && this._requestResize()
              })
            }),
            (this._renderFooterLeft = () => {
              const { source: e, model: t } = this.props
              return Object(g.isLineTool)(e)
                ? s.createElement(_.a, { source: e, model: t })
                : s.createElement(
                    f.a,
                    { rule: 'screen and (max-width: 428px)' },
                    i =>
                      Object(m.isStudy)(e) &&
                      s.createElement(b.a, { model: t, source: e, mode: i ? 'compact' : 'normal' }),
                  )
            }),
            (this._subscribe = e => {
              e && e.definitions.subscribe(this._onChangeActivePageDefinitions)
            }),
            (this._unsubscribe = e => {
              e && e.definitions.unsubscribe(this._onChangeActivePageDefinitions)
            }),
            (this._getActiveTabSettingsName = () => {
              const { source: e } = this.props
              return e instanceof C.Series
                ? 'properties_dialog.active_tab.chart'
                : e instanceof P.LineDataSource
                ? 'properties_dialog.active_tab.drawing'
                : e instanceof v.Study
                ? 'properties_dialog.active_tab.study'
                : ''
            }),
            (this._handleSelectPage = e => {
              const { activePageId: t } = this.state,
                i = this._getActionPageById(t),
                s = this._getActionPageById(e),
                o = this._getActiveTabSettingsName()
              t !== e &&
                (this._unsubscribe(i),
                o && c.a.setValue(o, e),
                this._subscribe(s),
                this.setState({ activePageId: e, tableKey: Date.now() }, () => {
                  this._requestResize && this._requestResize(), this._focusActivePageFirstTextInput()
                }))
            }),
            (this._handleScroll = () => {
              d.a.fire()
            }),
            (this._handleSubmit = () => {
              this.props.onSubmit(), this._closePopupDialog()
            }),
            (this._closePopupDialog = () => {
              window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.refresh(), this.props.onClose()
            })
          const { pages: t } = this.props
          let i
          if (this._getActionPageById(this.props.activePageId)) i = Object(a.ensureDefined)(this.props.activePageId)
          else {
            const e = c.a.getValue(this._getActiveTabSettingsName(), ''),
              s = this._getActionPageById(e)
            i = s ? s.id : t[0].id
          }
          ;(this.state = { activePageId: i, tableKey: Date.now() }),
            window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.hide()
        }
        componentDidMount() {
          const { activePageId: e } = this.state,
            t = this._getActionPageById(e)
          this._focusActivePageFirstTextInput(), this._subscribe(t)
        }
        componentWillUnmount() {
          const { activePageId: e } = this.props,
            t = this._getActionPageById(e)
          clearTimeout(this._timeout), this._unsubscribe(t)
        }
        render() {
          var e
          const { source: t, onCancel: i } = this.props,
            { activePageId: o } = this.state,
            n = (null === (e = t.properties().title) || void 0 === e ? void 0 : e.value()) || t.title()
          return s.createElement(h.a, {
            dataName: 'source-properties-editor',
            title: n,
            isOpened: !0,
            onSubmit: this._handleSubmit,
            onCancel: i,
            onClickOutside: this._handleSubmit,
            onClose: this._closePopupDialog,
            footerLeftRenderer: this._renderFooterLeft,
            render: this._renderChildren(o),
            submitOnEnterKey: !1,
          })
        }
        _renderChildren(e) {
          return ({ requestResize: t }) => {
            this._requestResize = t
            const { pages: i } = this.props,
              o = { allIds: i.map(e => e.id), byId: i.reduce((e, t) => ({ ...e, [t.id]: { title: t.title } }), {}) },
              n = i.find(t => t.id === e)
            return s.createElement(
              s.Fragment,
              null,
              s.createElement(u.a, { activeTabId: e, onSelect: this._handleSelectPage, tabs: o }),
              s.createElement(
                p.a,
                { className: y.scrollable, onScroll: this._handleScroll },
                s.createElement(S.a, { page: n, pageRef: this._activePageRef, tableKey: this.state.tableKey }),
              ),
            )
          }
        }
        _focusActivePageFirstTextInput() {
          if (!r.CheckMobile.any() && this._activePageRef.current) {
            const e = this._activePageRef.current.querySelector('input[type=text],textarea')
            e &&
              (this._timeout = setTimeout(() => {
                e.focus()
              }, 0))
          }
        }
      }
      var w = i('sQaR')
      i.d(t, 'SourcePropertiesEditorRenderer', function () {
        return T
      })
      class T extends w.a {
        constructor(e) {
          super(),
            (this._timeout = null),
            (this._handleClose = () => {
              o.unmountComponentAtNode(this._container),
                this._setVisibility(!1),
                this._onClose && this._onClose(),
                this._subscription.unsubscribe(this, this._handleCollectionChanged)
            }),
            (this._handleSubmit = () => {
              const e = this._source
              Object(g.isLineTool)(e) &&
                e.hasAlert.value() &&
                setTimeout(() => {
                  e.localAndServerAlertsMismatch && e.synchronizeAlert(!0)
                })
            }),
            (this._handleCancel = () => {
              this._model.undoToCheckpoint(this._checkpoint)
            }),
            (this._propertyPages = e.propertyPages),
            (this._model = e.model),
            (this._activePageId = e.activePageId),
            (this._onClose = e.onClose),
            (this._source = e.source),
            (this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint)),
            (this._subscription = this._model.model().dataSourceCollectionChanged()),
            this._subscription.subscribe(this, this._handleCollectionChanged)
        }
        hide(e) {
          e ? this._handleCancel() : this._handleSubmit(), this._handleClose()
        }
        isVisible() {
          return this.visible().value()
        }
        show() {
          o.render(
            s.createElement(I, {
              source: this._source,
              onSubmit: this._handleSubmit,
              onClose: this._handleClose,
              onCancel: this._handleCancel,
              pages: this._propertyPages,
              model: this._model,
              activePageId: this._activePageId,
            }),
            this._container,
          ),
            this._setVisibility(!0),
            n.emit('drawings_settings_dialog', { objectType: 'drawing', scriptTitle: this._source.title() })
        }
        _handleCollectionChanged() {
          null === this._timeout &&
            (this._timeout = setTimeout(() => {
              this._closeDialogIfSourceIsDeleted(), (this._timeout = null)
            }))
        }
        _closeDialogIfSourceIsDeleted() {
          null === this._model.model().dataSourceForId(this._source.id()) && this._handleClose()
        }
        _ensureCheckpoint(e) {
          return void 0 === e && (e = this._model.createUndoCheckpoint()), e
        }
      }
    },
    ttKw: function (e, t, i) {
      e.exports = { scrollable: 'scrollable-2w4-r8AL' }
    },
  },
])
