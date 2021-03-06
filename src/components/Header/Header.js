/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

import Navigation from '../Navigation';
import LanguageSwitcher from '../LanguageSwitcher';
import logoUrl from './logo.png';

const messages = defineMessages({
  brand: {
    id: 'header.brand',
    defaultMessage: 'Your Company Brand',
    description: 'Brand name displayed in header',
  },
  bannerTitle: {
    id: 'header.banner.title',
    defaultMessage: 'React',
    description: 'Title in page header',
  },
  bannerDesc: {
    id: 'header.banner.desc',
    defaultMessage: 'Complex web apps made easy',
    description: 'Description in header',
  },
});

class Header extends React.Component {

  renderContent() {
    const { isLoginView } = this.props;
    if (isLoginView) {
      return (
        <div>
          <img
            className={s.loginLogo}
            src={logoUrl}
            width="90"
            height="90"
            alt="Logo"
          />
          <h1 className={s.loginBrand}>Your Company</h1>
        </div>
      );
    } 
    
    else {
      return "nothing for now";
    }
  }

  render() {
    const { isLoginView } = this.props;
    return (
      <div className={ isLoginView ? s.rootLogin : s.root }>
        <div className={s.container}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);


/*
<Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>
              <FormattedMessage {...messages.brand} />
            </span>
          </Link>
          <LanguageSwitcher />
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>
              <FormattedMessage {...messages.bannerTitle} />
            </h1>
            <FormattedMessage tagName="p" {...messages.bannerDesc} />
          </div>


*/