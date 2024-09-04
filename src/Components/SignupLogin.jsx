import React, { useState } from 'react';
import styles from '../assets/css/SignupLogin.module.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../Firebase/Firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function SignupLogin() {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    };

    const handlePasswordToggle = (event) => {
        const eyeIcon = event.currentTarget;
        const pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(`.${styles.password}`);
        pwFields.forEach((password) => {
            if (password.type === 'password') {
                password.type = 'text';
                eyeIcon.classList.replace('bx-hide', 'bx-show');
            } else {
                password.type = 'password';
                eyeIcon.classList.replace('bx-show', 'bx-hide');
            }
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log("User Created & Registered in Firebase");
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    name: name,
                    email: user.email,
                });
            }
            toast.success("User Register Successfully", { position: 'top-center' });
            navigate("/");
        } catch (error) {
            console.log("Error in register in Firebase, " + error);
            toast.error("User not Register Succesfully", { position: 'bottom-center' });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User Login Successfully");
            toast.success("User Login Successfully", { position: 'top-center' });
            navigate("/");
        } catch (error) {
            console.log("Error in Login in Firebase, " + error);
            toast.error("Check your Email & Password", { position: 'bottom-center' });
        }
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);

            // Optionally save the user details in Firestore if needed
            const user = result.user;
            await setDoc(doc(db, "Users", user.uid), {
                name: user.displayName,
                email: user.email,
            });

            toast.success("Logged in with Google successfully", { position: 'top-center' });
            navigate("/");
        } catch (error) {
            console.log("Error logging in with Google: ", error);
            toast.error("Failed to log in with Google", { position: 'bottom-center' });
        }
    };

    return (
        <>
            <section className={`${styles.container} ${styles.forms} ${isSignup ? styles['show-signup'] : ''}`}>
                <div className={`${styles.form} ${styles.login}`}>
                    <div className={styles['form-content']}>
                        <header>Login</header>
                        <form onSubmit={handleLogin}>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className={styles.password}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <i className={`bx bx-hide ${styles['eye-icon']}`} onClick={handlePasswordToggle} />
                            </div>
                            <div className={styles['form-link']}>
                                <a href="#" className={styles['forgot-pass']}>
                                    Forgot password?
                                </a>
                            </div>
                            <div className={`${styles.field} ${styles['button-field']}`}>
                                <button>Login</button>
                            </div>
                        </form>
                        <div className={styles['form-link']}>
                            <span>
                                Don't have an account?{' '}
                                <a href="#" className={`${styles.link} ${styles['signup-link']}`} onClick={toggleSignup}>
                                    Signup
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles['media-options']}>
                        <a className={`${styles.field} ${styles.facebook}`}>
                            <img src='src\assets\img\logo\facebook.png' style={{ borderRadius: '20px', }} alt="" className={styles['google-img']} />
                            <span style={{color:'white'}}>Login with Facebook</span>
                        </a>
                    </div>
                    <div className={styles['media-options']} onClick={googleLogin}>
                        <a className={`${styles.field} ${styles.google}`}>
                            <img src='src\assets\img\logo\Google.png' alt="" className={styles['google-img']} />
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>

                {/* Signup Form */}
                <div className={`${styles.form} ${styles.signup}`} style={{}}>
                    <div className={styles['form-content']}>
                        <header>Signup</header>
                        <form onSubmit={handleRegister}>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className={styles.input}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input
                                    type="password"
                                    placeholder="Create password"
                                    className={styles.password}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={`${styles.field} ${styles['input-field']}`}>
                                <input type="password" placeholder="Confirm password" className={styles.password} />
                                <i className={`bx bx-hide ${styles['eye-icon']}`} onClick={handlePasswordToggle} />
                            </div>
                            <div className={`${styles.field} ${styles['button-field']}`}>
                                <button>Signup</button>
                            </div>
                        </form>
                        <div className={styles['form-link']}>
                            <span>
                                Already have an account?{' '}
                                <a href="#" className={`${styles.link} ${styles['login-link']}`} onClick={toggleSignup}>
                                    Login
                                </a>
                            </span>
                        </div>
                    </div>
                    {/* <div className={styles.line} /> */}
                    <div className={styles['media-options']} style={{color:'white'}}>
                        <a className={`${styles.field} ${styles.facebook}`}>
                            <img src='src\assets\img\logo\facebook.png' style={{ borderRadius: '20px' }} alt="" className={styles['google-img']} />
                            <span>Login with Facebook</span>
                        </a>
                    </div>
                    <div className={styles['media-options']} onClick={googleLogin}>
                        <a className={`${styles.field} ${styles.google}`}>
                            <img src='src\assets\img\logo\Google.png' alt="" className={styles['google-img']} />
                            <span>Login with Google</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
