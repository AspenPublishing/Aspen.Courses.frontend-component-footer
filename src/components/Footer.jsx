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

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }
  
  render() {
    const {
      supportedLanguages,
      onLanguageSelected,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;
    const currentYear = new Date().getFullYear();


    return (
      <footer className="relative w-full bg-181818 py-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-start py-8 px-6 lg:px-0">
        <div className="flex flex-col mb-8 lg:mb-0">
          <img src={getConfig().LOGO_URL} alt="Aspen Publishing Logo" className="w-40 h-auto mb-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 text-white">
            <h3 className="uppercase footer-link">
              <a href="https://aspenpublishing.com/pages/discover-jd-next-program" target="_blank" rel="noopener" aria-label="About Us">About Us</a>
            </h3>
            <h3 className="uppercase footer-link">
              <a href="https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next" target="_blank" rel="noopener" aria-label="Support">Support</a>
            </h3>
          </div>
          <div className="flex flex-col gap-4 text-gray-300">
            <a href="/tos" className="footer-link-extra">Terms of Service</a>
            <a href="/privacy" className="footer-link-extra">Privacy Policy</a>
            <a href="/disclosure" className="footer-link-extra">California Consumer Act Policy</a>
            <a href="/agreement" className="footer-link-extra">End User License Agreement</a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-t border-d6ae75 mx-6 lg:mx-24" aria-hidden="true" />
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center px-6 lg:px-0 py-8">
        <span className="text-gray-300 text-sm mb-4 lg:mb-0">&copy; {currentYear} ASPEN PUBLISHING</span>
        <div className="flex gap-4 lg:gap-8">
          <a href="https://www.facebook.com/profile.php?id=61555997104704" className="text-gray-300 text-sm">Facebook</a>
          <a href="https://www.linkedin.com/company/aspenpublishing/" className="text-gray-300 text-sm">LinkedIn</a>
          <a href="https://twitter.com/AspenPublishing" className="text-gray-300 text-sm">Twitter</a>
          <a href="https://www.youtube.com/@aspenpublishing6830" className="text-gray-300 text-sm">YouTube</a>
        </div>
        </div>
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };