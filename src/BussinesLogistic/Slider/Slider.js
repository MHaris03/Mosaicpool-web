import React from 'react';
import Video from '../../Images/mosic.mp4';


import '../BussinesLogistic.css';
//class Slider extends Component
const Slider = () => {
    // render() {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="100000">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        {/* <img class="d-block img-fluid" id="slider__Image" src={Slider2} alt="First slide" /> */}
                        <video autoPlay muted width="100%" hieght="100%" loop>
                            <source src={Video} type="video/mp4" />
                            <source src={Video} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="carousel-item">
                        <video autoPlay muted width="100%" hieght="100%" loop>
                            <source src={Video} type="video/mp4" />
                            <source src={Video} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="carousel-item">
                    <video autoPlay muted width="100%" hieght="100%" loop>
                            <source src={Video} type="video/mp4" />
                            <source src={Video} type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id="slider-btn">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" id="slider-btn">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    )
    //}
}
export default Slider;