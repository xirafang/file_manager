import { 
    SET_SLIDESHOW_IMAGE
    , SET_SLIDESHOW_SET
    , UPDATE_SLIDESHOW_IMAGE
    , START_SLIDESHOW_SLIDE_ANIMATION
    , STOP_SLIDESHOW_SLIDE_ANIMATION
    , START_SLIDESHOW_TIMER
    , STOP_SLIDESHOW_TIMER
} from "../constants";

const initialState = {
    displayedImageId: null
    , set: []
    , imageProps: {
        zoom: 0
        , xOffset: 0
        , yOffset: 0
    } , slides: [
        { active: true,  animate: false },
        { active: false, animate: false }
    ]
};

const slideshowReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SLIDESHOW_SET:
            return {
                ...state
                , set: action.set
                , displayedImageId: action.displayedImageId
                , imageProps: action.imageProps
                , slides: state.slides.map((slide, id) => {
                    return id !== 0
                        ? slide
                        : { active: true, animate: false }
            })};
        case SET_SLIDESHOW_IMAGE:
            return {
                ...state
                , displayedImageId: action.displayedImageId
                , slides: state.slides.map((slide, id) => ({
                    active: !slide.active
                    , animate: false
                }))
            };
        case START_SLIDESHOW_SLIDE_ANIMATION:
            return {
                ...state
                , slides: state.slides.map((slide, id) => {
                    return (id !== action.id)
                        ? slide
                        : { ...slide , animate: true }
            })}
        case STOP_SLIDESHOW_SLIDE_ANIMATION:
            return {
                ...state
                , slides: state.slides.map((slide, id) => {
                    return (id !== action.id)
                        ? slide
                        : { ...slide , animate: false }
            })}
        default:
            return state;
    }
};

export default slideshowReducer;