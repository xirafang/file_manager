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
import s from './Login.css';

import {
  FaUser,
  FaLock
} from 'react-icons/lib/fa';

import {  
  Form
  , FormGroup
  , Input
  , Button
} from 'reactstrap'; 


class Login extends React.Component {

  static propTypes = {

  }

  //----------------------------------------

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Form className={s.form}>
            <FormGroup className={s.formGroup}>
              <div>
                <FaUser className={s.icon} />
              </div>
              <Input 
                className={s.input}
                type="text" 
                name="lusername" 
                placeholder="username" 
                />
            </FormGroup>
            <FormGroup className={s.formGroup}>
              <div>
                <FaLock className={s.icon} />
              </div>
              <Input 
                className={s.input}
                type="password" 
                name="password"
                placeholder="password" 
                />
            </FormGroup>
            <Button className={s.submitBtn}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);