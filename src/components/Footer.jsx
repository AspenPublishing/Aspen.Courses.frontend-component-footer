import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { Container, Row, Col } from '@openedx/paragon';

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

    const navLinks = [
      { title: "About Us", url: "https://aspenpublishing.com/pages/discover-jd-next-program" },
      { title: "Support", url: "https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next" },
      { title: "End User License Agreement", url: "/agreement" },
      { title: "Terms Of Use", url: "/tos" },
      { title: "Privacy Statement", url: "/privacy" },
      { title: "California Disclosure", url: "/disclosure" },
    ];

    const socialLinks = [
      { title: "x", url: "https://twitter.com/AspenPublishing", icon: "M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" },
      { title: "linkedin", url: "https://www.linkedin.com/company/aspenpublishing/", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" },
      { title: "youtube", url: "https://www.youtube.com/@aspenpublishing6830", icon: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" },
      { title: "facebook", url: "https://www.facebook.com/profile.php?id=61555997104704", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    ];

    return (
      <footer className="bg-indigoDark" aria-labelledby="footer-heading" style={{ backgroundColor: 'rgb(17 9 6)' }}>
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <Container size="lg" className="px-4 pb-8 pt-16 sm:pt-24 lg:pt-32">
          <Row className="xl:grid xl:grid-cols-4 xl:gap-8">
            <Col className="space-y-8">
              <img 
                className="h-11" 
                src={`${getConfig().LMS_BASE_URL}/static/indigo/images/logo.svg`}
                alt="Aspen Publishing" 
              />
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
                      <svg className="h-6 w-6 transition-transform duration-300 ease-in-out hover:scale-125" fill="#d6ae75" viewBox="0 0 24 24" aria-hidden="true">
                        <path d={socialLink.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col className="mt-16 grid grid-cols-3 xl:col-span-2 xl:mt-0">
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
            </Col>
          </Row>
          <div className="mt-16 border-t border-gray-400/10 pt-8 sm:mt-20 lg:mt-16">
            <p className="text-xs leading-5 text-gray-500">&copy; {new Date().getFullYear()} All rights reserved. Aspen Publishing</p>
          </div>
        </Container>
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