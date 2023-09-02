import React, { useState } from 'react';
//import './SignUp.css'; // Import your CSS file for styling

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [contactError, setContactError] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Your sign-up logic here
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <form onSubmit={handleSignUp}>
                    <div>
                        <p>Full Name<span className="required">*</span></p>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        {fullNameError && <p className="error-message">{fullNameError}</p>}

                        <p>Email<span className="required">*</span></p>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}

                        <p>Password<span className="required">*</span></p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}

                        <p>Contact<span className="required">*</span></p>
                        <div className="contact-input">
                            <input
                                type="text"
                                name="contact"
                                placeholder="Enter your contact number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        {contactError && <p className="error-message">{contactError}</p>}

                        <div className="button-container">
                            <div className="back-button">
                                <span className="button-text">← Back</span>
                            </div>
                            <div className="button-box">
                                <button type="submit" className="submit-button">Save & Verify</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
