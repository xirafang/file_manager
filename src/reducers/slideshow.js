import { 
    SET_SLIDESHOW_IMAGE
    , NEXT_SLIDESHOW_IMAGE
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
        { active: true,  animate: false, finish: false },
        { active: false, animate: false, finish: false }
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
                        : { ...slide, active: true }
            })};
        case SET_SLIDESHOW_IMAGE:
            return {
                ...state
                , displayedImageId: action.displayedImageId
                , slides: state.slides.map((slide, id) => ({
                    active: !slide.active
                    , animate: false
                    , finish: !slide.finish
                }))
            };
        case NEXT_SLIDESHOW_IMAGE:
            return {
                ...state
                , imageProps: action.imageProps
                , displayedImageId: (state.displayedImageId+1) % state.set.length
                , slides: state.slides.map((slide, id) => ({
                    active: !slide.active
                    , animate: false
                    , finish: slide.active  
                }))
            }
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
                        : { ...slide , animate: false, finish: true }
            })}
        default:
            return state;
    }
};

export default slideshowReducer;