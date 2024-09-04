import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/nice-select.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/responsive.css';
import '../assets/css/slick.css';
import '../assets/css/slicknav.css';
import '../assets/css/style.css';
import '../assets/css/themify-icons.css';

import heroRight from '../assets/img/Hero/hero_right.png';
import user from '../assets/img/icon/user.png';
import chatbot from '../assets/img/icon/chatbot.png';
import checked from '../assets/img/icon/checked.png';

export default function Landing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div style={{marginBottom:'10rem'}}>
      {/* Slider */}
      <div className="slider-area slider-bg" style={{ height: '117vh' }}>
        <div className="slider-active dot-style">
          {/* Slide 1 */}
          <div className="single-slider d-flex align-items-center slider-height" data-aos="fade-up">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-9">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInLeft" data-delay=".3s">
                      Revolutionizing Museum Ticketing with Chatbot Solutions!
                    </h1>
                    <p data-animation="fadeInLeft" data-delay=".6s">
                      Say goodbye to long queues and manual errors. Experience seamless and efficient ticket booking with our multilingual chatbot system, starting today!
                    </p>
                    <div className="slider-btns">
                      <a data-animation="fadeInLeft" data-delay="1s" href="industries.html" className="btn radius-btn">
                        get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero__img d-none d-lg-block f-right" data-aos="fade-left">
                    <img style={{ width: '100%', height: '50%' }} src={heroRight} alt="" data-animation="fadeInRight" data-delay="1s" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 1 Ends */}
        </div>
        {/* Shapes */}
        <div className="slider-shape d-none d-lg-block" data-aos="fade-in">
          <img className="slider-shape1" src="assets/img/hero/top-left-shape.png" alt="" />
          <img className="slider-shape2" src="assets/img/hero/right-top-shape.png" alt="" />
          <img className="slider-shape3" src="assets/img/hero/left-botom-shape.png" alt="" />
        </div>

      </div>

      {/* Services */}
      <div className="services-area section-padding30 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-100" data-aos="fade-up">
                <span>Our Service</span>
                <h2>Book Your Tickets in 3 Simple Steps</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Step 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-wrapper mb-50" data-aos="zoom-in" data-aos-delay="100">
                <div className="single-services">
                  <div className="services-icon">
                    <img src={user} style={{ width: '50%' }} alt="Login or Signup Icon" />
                  </div>
                  <div className="services-cap">
                    <h3><a href="services.html">Create or Access Your Account</a></h3>
                    <p>Log in or sign up easily to start booking your tickets and enjoy a seamless ticketing experience with us.</p>
                  </div>
                </div>
                <div className="services-shape">
                  <span>.01</span>
                  <img src="assets/img/gallery/shape-services.png" alt="" />
                </div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-wrapper mb-50" data-aos="zoom-in" data-aos-delay="200">
                <div className="single-services">
                  <div className="services-icon">
                    <img src={chatbot} style={{ width: '50%' }} alt="ChatBot Icon" />
                  </div>
                  <div className="services-cap">
                    <h3><a href="services.html">Engage with Our Virtual Assistant</a></h3>
                    <p>Use our ChatBot to book tickets effortlessly and get answers to all your questions quickly and easily.</p>
                  </div>
                </div>
                <div className="services-shape">
                  <span>.02</span>
                  <img src="assets/img/gallery/shape-services.png" alt="" />
                </div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-wrapper mb-50" data-aos="zoom-in" data-aos-delay="300">
                <div className="single-services">
                  <div className="services-icon">
                    <img src={checked} style={{ width: '50%' }} alt="Confirmation Icon" />
                  </div>
                  <div className="services-cap">
                    <h3><a href="services.html">Receive Booking Confirmation</a></h3>
                    <p>Receive instant confirmation with all ticket details sent to your registered phone number or email for your convenience.</p>
                  </div>
                </div>
                <div className="services-shape">
                  <span>.03</span>
                  <img src="assets/img/gallery/shape-services.png" alt="" />
                </div>
              </div>
            </div>
            {/* Service Steps End */}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section className="pricing-area section-padding30" data-aos="fade-up">
        <div className="container p-5" style={{ backgroundColor: '#020230' }}>
          <h2 className="text-center mb-5 display-5 fw-bold text-white">Ticket Options</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border" style={{ backgroundColor: '#fff' }}>
                <div className="card-body">
                  <h3 className="h5 fw-semibold">Indian Citizens</h3>
                  <p className="display-6 fw-bold mt-2">Adults: Rs 20</p>
                  <p className="mt-4">Experience the rich cultural heritage of our museum with a hassle-free entry process designed for Indian citizens.</p>
                  <ul className="list-unstyled mt-4">
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Priority access for Indian citizens</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Guided tours available at discounted rates</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Access to all permanent exhibits</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Complimentary museum brochure in multiple languages</span>
                    </li>
                  </ul>
                  <button className="btn" style={{ backgroundColor: '#EB566C', color: '#fff' }}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card text-white" style={{ backgroundColor: '#EB566C' }}>
                <div className="card-body">
                  <h3 className="h5 fw-semibold">Foriegn Citizens</h3>
                  <p className="display-6 fw-bold mt-2">Adults/Childs: Rs 500</p>
                  <p className="mt-4">Explore the treasures of our museum with a seamless booking experience for our international visitors.</p>
                  <ul className="list-unstyled mt-4">
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Fast-track entry for foreign guests</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Access to exclusive exhibits and galleries</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Free audio guides in your preferred language</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="me-2">✔️</span>
                      <span>Souvenir voucher included</span>
                    </li>
                  </ul>
                  <button className="btn" style={{ backgroundColor: 'white', color: '#EB566C', transition: 'color 0.3s ease'}} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#EB566C'}>Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border" style={{ backgroundColor: '#fff' }}>
                <div className="card-body">
                  <h3 className="h5 fw-semibold">Students</h3>
                  <p className="display-6 fw-bold mt-2">Free Entry for Students under 12th Standard (with i'd card)</p>
                  <p className="mt-4">Empowering the next generation of learners with complimentary access to our educational exhibits.</p>
                  <ul className="list-unstyled mt-4">
                    <li className="d-flex align-items-center mb-2">
                      <span className="text-success me-2">✔️</span>
                      <span>Interactive learning sessions for students</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="text-success me-2">✔️</span>
                      <span>Free educational materials and guides</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <span className="text-success me-2">✔️</span>
                      <span>Dedicated student tours with expert guides</span>
                    </li>
                  </ul>
                  <button className="btn" style={{ backgroundColor: '#EB566C', color: '#fff' }}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Support */}
      <section className="support-area" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center mb-50">
                <span>Need Help?</span>
                <h2>Our 24/7 Support Team is Here for You!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="support-wrapper text-center">
                <p>Contact our support team at any time for assistance with your booking or any other inquiries. We’re here to ensure your experience is smooth and enjoyable!</p>
                <a href="#" className="btn">contact support</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
