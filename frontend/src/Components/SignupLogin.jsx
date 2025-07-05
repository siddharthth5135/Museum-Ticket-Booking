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

    const toggleSignup = () => setIsSignup(!isSignup);

    const handlePasswordToggle = (event) => {
        const eyeIcon = event.currentTarget;
        const pwFields = eyeIcon.closest('form').querySelectorAll(`.${styles.password}`);
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

            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    name,
                    email: user.email,
                });
            }

            toast.success("User registered successfully", { position: 'top-center' });
            navigate("/", { replace: true });
            window.location.reload();
        } catch (error) {
            console.error("Register Error: ", error);
            toast.error("Registration failed", { position: 'bottom-center' });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful", { position: 'top-center' });
            navigate("/", { replace: true });
            window.location.reload();
        } catch (error) {
            console.error("Login Error: ", error);
            toast.error("Check your email and password", { position: 'bottom-center' });
        }
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            await setDoc(doc(db, "Users", user.uid), {
                name: user.displayName,
                email: user.email,
            });

            toast.success("Logged in with Google", { position: 'top-center' });
            navigate("/", { replace: true });
            window.location.reload();
        } catch (error) {
            console.error("Google Login Error: ", error);
            toast.error("Google login failed", { position: 'bottom-center' });
        }
    };

    return (
        <section className={`${styles.container} ${styles.forms} ${isSignup ? styles['show-signup'] : ''}`}>
            {/* LOGIN FORM */}
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
                            <span className={styles['forgot-pass']}>Forgot password?</span>
                        </div>
                        <div className={`${styles.field} ${styles['button-field']}`}>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div className={styles['form-link']}>
                        <span>
                            Don't have an account?{' '}
                            <span className={styles.link} role="button" onClick={toggleSignup}>Signup</span>
                        </span>
                    </div>
                </div>

                <div className={styles.line} />
                <div className={styles['media-options']}>
                    <div className={`${styles.field} ${styles.facebook}`} role="button">
                        <img src="/img/logo/facebook.png" alt="Facebook" className={styles['google-img']} />
                        <span style={{ color: 'white' }}>Login with Facebook</span>
                    </div>
                </div>
                <div className={styles['media-options']} onClick={googleLogin}>
                    <div className={`${styles.field} ${styles.google}`} role="button">
                        <img src="/img/logo/Google.png" alt="Google" className={styles['google-img']} />
                        <span>Login with Google</span>
                    </div>
                </div>
            </div>

            {/* SIGNUP FORM */}
            <div className={`${styles.form} ${styles.signup}`}>
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
                            <input
                                type="password"
                                placeholder="Confirm password"
                                className={styles.password}
                            />
                            <i className={`bx bx-hide ${styles['eye-icon']}`} onClick={handlePasswordToggle} />
                        </div>
                        <div className={`${styles.field} ${styles['button-field']}`}>
                            <button type="submit">Signup</button>
                        </div>
                    </form>
                    <div className={styles['form-link']}>
                        <span>
                            Already have an account?{' '}
                            <span className={styles.link} role="button" onClick={toggleSignup}>Login</span>
                        </span>
                    </div>
                </div>

                <div className={styles['media-options']}>
                    <div className={`${styles.field} ${styles.facebook}`} role="button">
                        <img src="/img/logo/facebook.png" alt="Facebook" className={styles['google-img']} />
                        <span>Login with Facebook</span>
                    </div>
                </div>
                <div className={styles['media-options']} onClick={googleLogin}>
                    <div className={`${styles.field} ${styles.google}`} role="button">
                        <img src="/img/logo/Google.png" alt="Google" className={styles['google-img']} />
                        <span>Login with Google</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
