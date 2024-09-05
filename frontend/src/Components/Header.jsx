import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

import logo from '../assets/img/logo/logo.jpg';
import phone from '../assets/img/icon/phone-call.png';

import { auth, db } from '../Firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Header() {
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    const fetchUserData = async (uid) => {
        try {
            const docRef = doc(db, "Users", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log("DOCSNAP: ", docSnap.data());
            } else {
                console.log("User details not found");
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                fetchUserData(user.uid);
            } else {
                setUser(null);
                setUserDetails(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setUserDetails(null);
            toast.success("Logged out successfully", { position: 'top-center' });
            navigate("/signuplogin");
        } catch (error) {
            toast.error("Error logging out", { position: 'bottom-center' });
        }
    };

    return (
        <>
            <div className="header-area header-transparent" style={{top: 0,zIndex: 1000}}>
                <div className="main-header">
                    <div className="header-bottom header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-1 col-md-1">
                                    <div className="logo">
                                        <Link to="/">
                                            <img style={{ width: '80%', borderRadius: '5px' }} src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-8">
                                    <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/service">Services</Link></li>
                                                <li>
                                                    <a href="#">Blog</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog_details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages</a>
                                                    <ul className="submenu">
                                                        <li><a href="elements.html">Element</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                                {/* Display user name if logged in */}
                                                {user && userDetails ? (
                                                    <li style={{ color: '#EB566C', backgroundColor:'white', padding:'5px', borderRadius:'7px'}}>
                                                        Namaste, {userDetails.name}
                                                    </li>
                                                ) : null}
                                                
                                                {/* Conditionally render based on user login status */}
                                                {user ? (
                                                    <li><button onClick={handleLogout} style={{marginLeft:'10px', borderRadius:'10px', padding:'20px'}} className="btn header-btn">Log out</button></li>
                                                ) : (
                                                    <li><Link to="/signuplogin">Register</Link></li>
                                                )}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-xl-2 col-lg-3 col-md-3">
                                    <div className="header-right-btn f-right d-none d-lg-block">
                                        <a href="#" className="btn header-btn" > 
                                            <img src={phone} style={{ width: '15%', marginRight: '1rem' }} alt="Phone Icon" />
                                            +91 1234567890
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
