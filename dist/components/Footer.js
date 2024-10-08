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
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
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
      var _this2 = this;
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        logo = _this$props.logo,
        intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;
      var navLinks = [{
        title: "About Us",
        url: "https://aspenpublishing.com/pages/discover-jd-next-program"
      }, {
        title: "Support",
        url: "https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next"
      }, {
        title: "End User License Agreement",
        url: "/agreement"
      }, {
        title: "Terms Of Use",
        url: "/tos"
      }, {
        title: "Privacy Statement",
        url: "/privacy"
      }, {
        title: "California Disclosure",
        url: "/disclosure"
      }];
      var socialLinks = [{
        title: "x",
        url: "https://twitter.com/AspenPublishing"
      }, {
        title: "linkedin",
        url: "https://www.linkedin.com/company/aspenpublishing/"
      }, {
        title: "youtube",
        url: "https://www.youtube.com/@aspenpublishing6830"
      }, {
        title: "facebook",
        url: "https://www.facebook.com/profile.php?id=61555997104704"
      }];
      return /*#__PURE__*/React.createElement("footer", {
        className: "bg-indigoDark",
        "aria-labelledby": "footer-heading"
      }, /*#__PURE__*/React.createElement("h2", {
        id: "footer-heading",
        className: "sr-only"
      }, "Footer"), /*#__PURE__*/React.createElement("div", {
        className: "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"
      }, /*#__PURE__*/React.createElement("div", {
        className: "xl:grid xl:grid-cols-4 xl:gap-8"
      }, /*#__PURE__*/React.createElement("div", {
        className: "space-y-8"
      }, /*#__PURE__*/React.createElement("img", {
        className: "h-11",
        src: logo || config.LOGO_TRADEMARK_URL,
        alt: intl.formatMessage(messages['footer.logo.altText'])
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex space-x-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-center space-x-10"
      }, socialLinks.map(function (socialLink) {
        return /*#__PURE__*/React.createElement("a", {
          key: socialLink.title,
          href: socialLink.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": socialLink.title,
          className: "text-gray-400 hover:text-indigoSecondary",
          onClick: _this2.externalLinkClickHandler
        }, /*#__PURE__*/React.createElement("span", {
          className: "sr-only"
        }, socialLink.title));
      })))), /*#__PURE__*/React.createElement("div", {
        className: "mt-16 grid grid-cols-3 xl:col-span-2 xl:mt-0"
      }, navLinks.map(function (link) {
        return /*#__PURE__*/React.createElement("div", {
          key: link.title,
          className: "md:grid md:grid-cols-1 md:gap-8"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
          role: "list",
          className: "mt-6 space-y-4"
        }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": link.title,
          className: "text-sm leading-6 text-gray-100 hover:text-gray-300",
          onClick: _this2.externalLinkClickHandler
        }, link.title)))));
      }))), /*#__PURE__*/React.createElement("div", {
        className: "mt-16 border-t border-gray-400/10 pt-8 sm:mt-20 lg:mt-16"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-xs leading-5 text-gray-500"
      }, "\xA9 ", new Date().getFullYear(), " All rights reserved. Aspen Publishing"))), showLanguageSelector && /*#__PURE__*/React.createElement(LanguageSelector, {
        options: supportedLanguages,
        onSubmit: onLanguageSelected
      }));
    }
  }]);
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map