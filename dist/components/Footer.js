function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { Container, Row, Col } from '@openedx/paragon';
import './Footer.css';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = /*#__PURE__*/function (_React$Component) {
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _callSuper(this, SiteFooter, [props]);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_this);
    return _this;
  }
  _inherits(SiteFooter, _React$Component);
  return _createClass(SiteFooter, [{
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;
      var currentYear = new Date().getFullYear();
      return /*#__PURE__*/React.createElement("footer", {
        className: "relative w-full bg-181818 py-8",
        "aria-labelledby": "footer-heading"
      }, /*#__PURE__*/React.createElement("h2", {
        id: "footer-heading",
        className: "sr-only"
      }, "Footer"), /*#__PURE__*/React.createElement("div", {
        className: "mx-auto flex flex-col lg:flex-row justify-between items-start py-8 px-6 lg:px-0 container-xl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col mb-8 lg:mb-0"
      }, /*#__PURE__*/React.createElement("img", {
        src: getConfig().LOGO_WHITE_URL,
        alt: "Aspen Publishing Logo",
        className: "w-40 h-auto mb-4"
      })), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col lg:flex-row gap-8 lg:gap-16"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col gap-4 text-white"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "uppercase footer-link"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://aspenpublishing.com/pages/discover-jd-next-program",
        target: "_blank",
        rel: "noopener",
        "aria-label": "About Us"
      }, "About Us")), /*#__PURE__*/React.createElement("h3", {
        className: "uppercase footer-link"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next",
        target: "_blank",
        rel: "noopener",
        "aria-label": "Support"
      }, "Support"))), /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col gap-4 text-gray-300"
      }, /*#__PURE__*/React.createElement("a", {
        href: "".concat(getConfig().LMS_BASE_URL, "/tos"),
        className: "footer-link-extra"
      }, "Terms of Service"), /*#__PURE__*/React.createElement("a", {
        href: "".concat(getConfig().LMS_BASE_URL, "/privacy"),
        className: "footer-link-extra"
      }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
        href: "".concat(getConfig().LMS_BASE_URL, "/disclosure"),
        className: "footer-link-extra"
      }, "California Consumer Act Policy"), /*#__PURE__*/React.createElement("a", {
        href: "".concat(getConfig().LMS_BASE_URL, "/agreement"),
        className: "footer-link-extra"
      }, "End User License Agreement")))), /*#__PURE__*/React.createElement("hr", {
        className: "my-8 border-t border-d6ae75 mx-6 lg:mx-24 container-xl mx-auto",
        "aria-hidden": "true"
      }), /*#__PURE__*/React.createElement("div", {
        className: "mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-0 py-8 container-xl"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-gray-300 text-sm mb-4 lg:mb-0"
      }, "\xA9 ", currentYear, " ASPEN PUBLISHING"), /*#__PURE__*/React.createElement("div", {
        className: "flex gap-4 lg:gap-8"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://www.facebook.com/profile.php?id=61555997104704",
        className: "text-gray-300 text-sm"
      }, "Facebook"), /*#__PURE__*/React.createElement("a", {
        href: "https://www.linkedin.com/company/aspenpublishing/",
        className: "text-gray-300 text-sm"
      }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
        href: "https://twitter.com/AspenPublishing",
        className: "text-gray-300 text-sm"
      }, "Twitter"), /*#__PURE__*/React.createElement("a", {
        href: "https://www.youtube.com/@aspenpublishing6830",
        className: "text-gray-300 text-sm"
      }, "YouTube"))));
    }
  }]);
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map