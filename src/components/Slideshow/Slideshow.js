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
import s from './Slideshow.css';
import Slide from './Slide';

// Actions
import { 
  setSlideshowSet
  , nextSlideshowImage
 } from "../../actions/slideshow";

// Temporary Images
import itmp0 from './tmp/0.jpg';
import itmp1 from './tmp/1.jpg';
import itmp2 from './tmp/2.jpg';
import itmp3 from './tmp/3.jpg';
const tmpSet = [itmp0, itmp1, itmp2, itmp3];

// Class
class Slideshow extends React.Component {
  
  static propTypes = {
    displayedImageId: PropTypes.number
    , set: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    , imageProps: PropTypes.shape({
      zoom: PropTypes.number.isRequired
      , xOffset: PropTypes.number.isRequired
      , yOffset: PropTypes.number.isRequired
    }).isRequired
    , slides: PropTypes.arrayOf(
      PropTypes.shape({
        active: PropTypes.bool.isRequired
        , animate: PropTypes.bool.isRequired
      })
    )
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(setSlideshowSet(tmpSet));
  }

  changeImage(dispatch, set, id) {
    dispatch(nextSlideshowImage());
  }

  getImageSrc(set = [], id, active) {
    if (set.length !== 0) {
      return active 
        ? set[id]
        : id === 0
          ? set[set.length-1]
          : set[id-1]
    } else return itmp0;
  }

  getSources(set = [], id, slides) {
    if (set.length !== 0) {
      return slides.map( slide => {    
        return slide.active 
          ? set[id]
          : id === 0
            ? set[set.length-1]
            : set[id-1];
      });
    } else  return [0, 1].map( index => index === 0 ? itmp3 : itmp0 )
  }

  render() {
    
    // Props
    const { 
      set
      , slides
      , dispatch
      , displayedImageId 
    } = this.props;

    // Get the images to display in each slide.
    let sources = 
      this.getSources(set, displayedImageId, slides );

    // Render
    return (
      <div className={s.root}>

        {/* Slider */}
        <div className={s.slider}>
          <Slide 
            id={0}
            active={slides[0].active} 
            animate={slides[0].animate}
            finish={slides[0].finish}
            dispatch={dispatch}
            src={sources[0]} 
            srcProps={this.props.imageProps}
            />
          <Slide 
            id={1}
            active={slides[1].active}
            animate={slides[1].animate}
            finish={slides[1].finish}
            dispatch={dispatch}
            src={sources[1]}
            srcProps={this.props.imageProps}
            />
        </div>

        {/* Overlay */}
        <div className={s.overlay}></div>
      </div>
    );
  }
}

export default withStyles(s)(Slideshow);