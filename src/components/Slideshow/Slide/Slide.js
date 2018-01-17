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
  , nextSlideshowImage 
} from "../../../actions/slideshow";
import { setTimeout } from 'timers';

class Slide extends React.Component {
  
  static propTypes = {
    active: PropTypes.bool.isRequired
    , animate: PropTypes.bool.isRequired
    , finish: PropTypes.bool.isRequired
    , src: PropTypes.string.isRequired
    , srcProps: PropTypes.shape({
      zoom: PropTypes.number.isRequired
      , xOffset: PropTypes.number.isRequired
      , yOffset: PropTypes.number.isRequired
    }).isRequired
  };

  //------------------------------------------------

  componentDidUpdate() {
    const { dispatch, active, animate, id, finish } = this.props;
    if (active && !animate && !finish) {

      const animationTrigger = _ => { 
        dispatch(startSlideAnimation(id)) 
      };
      const nextSlideTrigger = _ => { 
        dispatch(stopSlideAnimation(id));
        dispatch(nextSlideshowImage()); 
      };

      setTimeout(animationTrigger, 200);
      setTimeout(nextSlideTrigger, 14000);
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

  static savedStyles = null;
  getStyle() {
    const { src, srcProps, active } = this.props;
    if (active) {
      this.savedStyles = {
        backgroundImage: 'url(' + src + ')'
        , transform: 'scale(' + srcProps.zoom + ')'
        , backgroundPosition: 
          srcProps.xOffset + 'px '
          + (srcProps.yOffset) + 'px'
      }; return this.savedStyles;
    } else {
      return this.savedStyles;
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