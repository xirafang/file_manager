import { connect } from 'react-redux';
import Slideshow from "../../components/Slideshow";

const mapState = state => ({
    displayedImageId: state.slideshow.displayedImageId
    , set: state.slideshow.set
    , imageProps: state.slideshow.imageProps
    , slides: state.slideshow.slides
});

export default connect(mapState)(Slideshow);