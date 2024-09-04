import React from 'react'
import '../assets/css/animate.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/flaticon.css'
import '../assets/css/fontawesome-all.min.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/nice-select.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/responsive.css'
import '../assets/css/slick.css'
import '../assets/css/slicknav.css'
import '../assets/css/style.css'
import '../assets/css/themify-icons.css'

import heroRight from '../assets/img/Hero/hero_right.png';


export default function Slider() {
    return (
        <>
            <div className="slider-area slider-bg" style={{ height: '117vh' }}>
                <div className="slider-active dot-style">
                    {/* Repeat this block for each slide */}
                    <div className="single-slider d-flex align-items-center slider-height">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-9">
                                    <div className="hero__caption">
                                        <h1 data-animation="fadeInLeft" data-delay=".3s">
                                            Hosting digital technology web solution!
                                        </h1>
                                        <p data-animation="fadeInLeft" data-delay=".6s">
                                            Automated Control Panel with Up to 50% Off Hosting Starting from $2.50/Month.
                                        </p>
                                        <div className="slider-btns">
                                            <a data-animation="fadeInLeft" data-delay="1s" href="industries.html" className="btn radius-btn">
                                                get started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="hero__img d-none d-lg-block f-right">
                                        <img style={{ width: '100%', height: '50%' }} src={heroRight} alt="" data-animation="fadeInRight" data-delay="1s" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat block ends */}
                </div>
                <div className="slider-shape d-none d-lg-block">
                    <img className="slider-shape1" src="assets/img/hero/top-left-shape.png" alt="" />
                    <img className="slider-shape2" src="assets/img/hero/right-top-shape.png" alt="" />
                    <img className="slider-shape3" src="assets/img/hero/left-botom-shape.png" alt="" />
                </div>
                <div className="slider-social d-none d-md-block">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fas fa-globe"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </>
    )
}
