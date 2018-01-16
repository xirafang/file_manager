import { 
    SET_SLIDESHOW_IMAGE
    , SET_SLIDESHOW_SET
    , UPDATE_SLIDESHOW_IMAGE
    , START_SLIDESHOW_SLIDE_ANIMATION
    , STOP_SLIDESHOW_SLIDE_ANIMATION
    , START_SLIDESHOW_TIMER
    , STOP_SLIDESHOW_TIMER
} from "../constants";

// Settings
const minZoomIn = 1.1, maxZoomIn = 1.6;
const minOffset = 10, maxOffset = 25;
const travelSpeed = 0.05;

// Randomizes the zoom and the offset of an image.
// The image will slowly (speed) go back in place.
const randomizer = _ => {
    let _xOffset = Math.random()*(maxOffset-minOffset)+minOffset,
        _yOffset = Math.random()*(maxOffset-minOffset)+minOffset;
    return {
        zoom: parseFloat((Math.random()*(maxZoomIn-minZoomIn)+minZoomIn).toFixed(4))
        , xOffset: parseFloat((_xOffset * (Math.random() < 0.5 ? 1 : -1)).toFixed(4))
        , yOffset: parseFloat((_yOffset * (Math.random() < 0.5 ? 1 : -1)).toFixed(4))
    }
};

/*===========================================================
 * Slideshow
 *===========================================================*/

export const setSlideshowImage = id => ({
    type: SET_SLIDESHOW_IMAGE
    , displayedImageId: id
    , imageProps: randomizer()
});

export const setSlideshowSet = set => ({
    type: SET_SLIDESHOW_SET
    , set: set
    , displayedImageId: set.length == 0 ? null : 0
    , imageProps: set.length == 0 ? null : randomizer()
});

export const updateSlideshowImage = props => ({
    type: UPDATE_SLIDESHOW_IMAGE
    , imageProps: props
});


/*===========================================================
 * Slides
 *===========================================================*/

export const startSlideAnimation = id => ({
    type: START_SLIDESHOW_SLIDE_ANIMATION
    , id: id
})

export const stopSlideAnimation = id => ({
    type: STOP_SLIDESHOW_SLIDE_ANIMATION
    , id: id
})


/*===========================================================
 * Timer
 *===========================================================*/

// 
let timer = null;
let refreshRate = 30;

export const startSlideshowTimer = (dispatch, props) =>{ 
    timer = setInterval(_ => dispatch(updateSlideshowImage(props)), refreshRate);
    return { type: START_SLIDESHOW_TIMER };
};

export const stopSlidershowTimer = _ => {
    clearInterval(timer);
    return { type: STOP_SLIDESHOW_TIMER };
};