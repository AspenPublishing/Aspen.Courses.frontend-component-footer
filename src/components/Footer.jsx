import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';
import { Container, Row, Col, Icon } from '@openedx/paragon';
import { Facebook, LinkedIn, Twitter, YouTube } from '@openedx/paragon/icons';

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
      { title: "Twitter", url: "https://twitter.com/AspenPublishing", icon: Twitter },
      { title: "LinkedIn", url: "https://www.linkedin.com/company/aspenpublishing/", icon: LinkedIn },
      { title: "YouTube", url: "https://www.youtube.com/@aspenpublishing6830", icon: YouTube },
      { title: "Facebook", url: "https://www.facebook.com/profile.php?id=61555997104704", icon: Facebook },
    ];

    return (
      <footer className="bg-dark text-white py-4" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <Container size="lg">
          <Row className="mb-4">
            <Col xs={12} md={4} className="mb-4 mb-md-0">
              <div className="d-flex">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.title}
                    href={socialLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLink.title}
                    className="text-white mr-3"
                    onClick={this.externalLinkClickHandler}
                  >
                    <Icon src={socialLink.icon} size="sm" />
                  </a>
                ))}
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                {navLinks.map((link) => (
                  <Col key={link.title} xs={6} sm={4} className="mb-3">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.title}
                      className="text-white small"
                      onClick={this.externalLinkClickHandler}
                    >
                      {link.title}
                    </a>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <hr className="border-light" />
          <Row className="mt-3">
            <Col>
              <p className="text-muted small">&copy; {new Date().getFullYear()} All rights reserved. Aspen Publishing</p>
            </Col>
          </Row>
          {showLanguageSelector && (
            <Row className="mt-3">
              <Col>
                <LanguageSelector
                  options={supportedLanguages}
                  onSubmit={onLanguageSelected}
                />
              </Col>
            </Row>
          )}
        </Container>
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
