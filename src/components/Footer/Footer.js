import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './style.scss';
import Typography from '../Typography';
import footerNavigation from '../../data/footer.json';
import Grid from '../Grid';
import { CookieContext } from '../Layout';
import navigation from '../../data/navigation.json';

const Footer = ({ location }) => {
  const { handleResetCookieConsent } = useContext(CookieContext);
  const urlLanguagePart = (location?.pathname?.split('/') ?? [])[1];
  const language = Object.keys(navigation).includes(urlLanguagePart) ? urlLanguagePart : 'en';
  const footerTranslations = language && footerNavigation[language] ? footerNavigation[language] : footerNavigation.en;
  const { items: menus } = footerTranslations || {};

  return (
    <footer>
      <section className="pt-80 pt-sm-48 pb-24">
        <Grid container>
          <Grid row>
            {menus.map(menu => (
              <Grid key={menu?.label} column xs={12} sm={6} lg={3} className="mb-32 mb-lg-0">
                <Typography variant="subtitle" className="text-uppercase font-weight-bold mb-8">
                  {menu.label}
                </Typography>
                <ul className="list-unstyled">
                  {menu.items.map(item => {
                    if (item?.url === 'change-cookie-settings') {
                      return (
                        <li className="mb-8" key={item?.url}>
                          <Typography
                            component="button"
                            href=""
                            onClick={e => {
                              e.preventDefault();
                              handleResetCookieConsent();
                            }}
                            className="btn btn-link p-0"
                            title={item?.label}
                          >
                            {item?.label}
                          </Typography>
                        </li>
                      );
                    }

                    return (
                      <li className="mb-8" key={item?.url}>
                        <Typography
                          {...(item?.external ? { href: item?.url } : { to: item?.url })}
                          component={item?.external ? 'a' : Link}
                          target={item?.newWindow ? '_blank' : null}
                          rel={item?.newWindow ? 'noreferrer' : null}
                          title={item?.label}
                        >
                          {item?.label}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <div className="container">
          <Typography className="mt-40" component="div">
            © {new Date().getFullYear()} Gijsbotje. All rights reserved.
          </Typography>
        </div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.object,
};

Footer.defaultProps = {
  location: undefined,
};

export default Footer;
