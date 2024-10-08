import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

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
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;

    const navLinks = [
      { title: "About Us", url: "https://aspenpublishing.com/pages/discover-jd-next-program" },
      { title: "Support", url: "https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next" },
      { title: "End User License Agreement", url: "/agreement" },
      { title: "Terms Of Use", url: "/tos" },
      { title: "Privacy Statement", url: "/privacy" },
      { title: "California Disclosure", url: "/disclosure" },
    ];

    const socialLinks = [
      { title: "x", url: "https://twitter.com/AspenPublishing" },
      { title: "linkedin", url: "https://www.linkedin.com/company/aspenpublishing/" },
      { title: "youtube", url: "https://www.youtube.com/@aspenpublishing6830" },
      { title: "facebook", url: "https://www.facebook.com/profile.php?id=61555997104704" },
    ];

    return (
      <footer className="bg-indigoDark" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-4 xl:gap-8">
            <div className="space-y-8">
              <img className="h-11" src={logo || config.LOGO_TRADEMARK_URL} alt={intl.formatMessage(messages['footer.logo.altText'])} />
              <div className="flex space-x-6">
                <div className="flex justify-center space-x-10">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.title}
                      href={socialLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.title}
                      className="text-gray-400 hover:text-indigoSecondary"
                      onClick={this.externalLinkClickHandler}
                    >
                      <span className="sr-only">{socialLink.title}</span>
                      {/* Add appropriate SVG icon based on socialLink.title */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 xl:col-span-2 xl:mt-0">
              {navLinks.map((link) => (
                <div key={link.title} className="md:grid md:grid-cols-1 md:gap-8">
                  <div>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.title}
                          className="text-sm leading-6 text-gray-100 hover:text-gray-300"
                          onClick={this.externalLinkClickHandler}
                        >
                          {link.title}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/10 pt-8 sm:mt-20 lg:mt-16">
            <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} All rights reserved. Aspen Publishing</p>
          </div>
        </div>
        {showLanguageSelector && (
          <LanguageSelector
            options={supportedLanguages}
            onSubmit={onLanguageSelected}
          />
        )}
      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
