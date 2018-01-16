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
import s from './Slide.css';
import { Media } from 'reactstrap';

import { 
  startSlideAnimation
  , stopSlideAnimation  
} from "../../../actions/slideshow";

class Slide extends React.Component {
  
  static propTypes = {
    active: PropTypes.bool.isRequired
    , animate: PropTypes.bool.isRequired
    , src: PropTypes.string.isRequired
    , srcProps: PropTypes.shape({
      zoom: PropTypes.number.isRequired
      , xOffset: PropTypes.number.isRequired
      , yOffset: PropTypes.number.isRequired
    }).isRequired
  };

  static animationTrigger = 8000;

  //------------------------------------------------

  componentDidUpdate() {
    const { dispatch, active, animate, id } = this.props;
    if (active && !animate) {
      setTimeout((_ => { this.props.dispatch(startSlideAnimation(id)) }), this.animationTrigger );
    }
  }
  

  //------------------------------------------------

  getClasses() {
    const { active, animate } = this.props;
    return s.root 
      + " " 
      + ( active 
          ? s.foreground
          : s.background )
      + " "
      + ( animate 
          ? s.animate
          : "" )
  }

  getStyle() {
    const { src, srcProps } = this.props;
    return {
      backgroundImage: 'url(' + src + ')'
      , transform: 'scale(' + srcProps.zoom + ')'
      /*, backgroundPosition: 
        srcProps.xOffset + 'px '
        + (srcProps.yOffset) + 'px'*/
    }
  }

  render() {
    return (
      <div 
        className={this.getClasses()}
        style={this.getStyle()}
        >
      </div>
    );
  }
}

export default withStyles(s)(Slide);