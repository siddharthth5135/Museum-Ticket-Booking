import React from 'react'

import logo from '../assets/img/logo/logo.jpg'

export default function Footer() {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-top footer-padding">
                        <div className="row justify-content-between">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-logo">
                                            <a href="index-2.html">
                                                <img src={logo} style={{width:'70%'}} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>All packages</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Package-1</a>
                                            </li>
                                            <li>
                                                <a href="#">Package-2</a>
                                            </li>
                                            <li>
                                                <a href="#">Package-3</a>
                                            </li>
                                            <li>
                                                <a href="#">Custome</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick Link</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">News &amp; Articles</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>+1 514 648 256</h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span
                                                        className="__cf_email__"
                                                        data-cfemail="433a2c3631262e222a2f03242e222a2f6d202c2e"
                                                    >
                                                        [email&nbsp;protected]
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-xl-9 col-lg-9 ">
                                <div className="footer-copy-right">
                                    <p>
                                        Copyright © All rights reserved by Misisty of Culture Government of India
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <div className="footer-social f-right">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fas fa-globe" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
