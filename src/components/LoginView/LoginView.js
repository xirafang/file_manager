/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LoginView.css';

import Header from '../Header';
import Footer from '../Footer';
import Slideshow from '../../containers/Slideshow/SlideshowContainer';
import Login from './Login';

class LoginView extends React.Component {
  static propTypes = {
    
  };

  /*static defaultProps = { };*/

  render() {
    const { to, children, ...props } = this.props;
    return (
      <div className={s.root}>
        <div className={s.slidshow}>
          <Slideshow />
        </div>
        <div className={s.page}>
          <Header isLoginView />
          <Login />
          <Footer isLoginView />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(LoginView);