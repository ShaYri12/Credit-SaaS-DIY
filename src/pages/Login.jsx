import React, { useState } from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';
import LoginImg from '../assets/images/login.png';
import signupImg from '../assets/images/signup.png';

const ProgressBar = ({ currentStep, totalSteps }) => {
    // Define the array of icons
    const icons = [
        <i className="ri-lock-password-line"></i>,
        <i class="ri-group-line"></i>,
        <i className="ri-medal-line"></i>
    ];

    return (
        <div className="progress-bar">
            {icons.map((icon, index) => (
                <div key={index} className="progress-step">
                    {/* Checkpoint circle with icon */}
                    <div className={`progress-checkpoint ${currentStep >= index + 1 ? 'active' : ''}`}>
                        {icon}
                    </div>

                    {/* Connector line */}
                    {index < totalSteps - 1 && (
                        <div className={`progress-connector ${currentStep > index + 1 ? 'completed' : ''}`}>
                            {/* Connector Line */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};



const Login = () => {
    // Define state for managing current form step and form data
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone:'',
        address: '',
        zipCode: '',
        state: '',
        city: '',
        package: ''
    });

    // Handle form data changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission for sign-up
    const handleSignUp = (e) => {
        e.preventDefault();
        // Add your sign-up logic here
    };

    // Handle form submission for login
    const handleSignIn = (e) => {
        e.preventDefault();
        // Add your sign-up logic here
    };

    // Handle navigation to the next step
    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSignUp(e);
        }
    };

    // Handle navigation to the previous step
    const handlePreviousStep = (e) => {
        e.preventDefault();
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    // Toggle between Sign In and Sign Up forms
    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
    };

    return (
        <section className="login-section">
            <div className="container  shadow-lg">
                <div className="user signinBx">
                    <div class="imgBx">
                        <img className="img-fluid" src={LoginImg} alt="Sign In Image" />
                    </div>
                    <div className="formBx">
                        <form onSubmit={handleSignIn}>
                            <h2>Sign In</h2>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="btn btn-login mt-2">Login</button>
                            <p className="signup">
                                Don't have an account?{' '}
                                <Link to="#" onClick={toggleForm}>Sign Up</Link>.
                            </p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
    <div className="formBx flex-column">
        <h2 className='text-center pt-1'>Create Account</h2>
        {/* Integrate ProgressBar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Multi-step form starts here */}
        <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
            <form onSubmit={handleNextStep}>
                <h2>Account Detail</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                />
                <div className='d-flex justify-content-end'>
                    <button type="submit" className="btn btn-next mt-1">Next</button>
                </div>
                <p className="signup">
                    Already have an account?{' '}
                    <Link to="#" onClick={toggleForm}>Sign In</Link>.
                </p>
            </form>
        </div>

        <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
            <form onSubmit={handleNextStep}>
                <h2>Personal Information</h2>
                <div className='d-flex gap-2'>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                />
                <div className='d-flex flex-column flex-md-row gap-2'>
                    <input
                        type="text"
                        name="city"
                        placeholder="Town/City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" className="btn btn-back mt-1" onClick={handlePreviousStep}>
                        Back
                    </button>
                    <button type="submit" className="btn btn-next mt-1">
                        Next
                    </button>
                </div>
                <p className="signup">
                    Already have an account?{' '}
                    <Link to="#" onClick={toggleForm}>Sign In</Link>.
                </p>
            </form>
        </div>

        <div className={`form-step overflow-y-auto ${currentStep === 3 ? 'active' : ''}`}>
            <form onSubmit={handleSignUp} className='h-100 d-flex flex-column overflow-y-auto'>
                <h2>Membership</h2>

                {/* Define package options */}
                <div className="package-grid">
                    {[
                        {
                            name: 'Free Trial',
                            description: 'Experience our service for free for 7 days.',
                            price: '$0',
                        },
                        {
                            name: 'Basic',
                            description: 'This is a basic package offering limited features.',
                            price: '$10',
                        },
                        {
                            name: 'Premium',
                            description: 'This package offers more features and options.',
                            price: '$20',
                        },
                        {
                            name: 'Deluxe',
                            description: 'The deluxe package offers the most features and support.',
                            price: '$30',
                        },
                    ].map((pkg, index) => (
                        <div
                            key={index}
                            className={`package-option ${formData.package === pkg.name ? 'selected' : ''}`}
                            onClick={() => setFormData({ ...formData, package: pkg.name })}
                        >
                            <h4 >{pkg.name}</h4>
                            <p >{pkg.description}</p>
                            <p className='p-0 mb-1 mt-0'>{pkg.price}</p>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="button" className="btn btn-back mt-1" onClick={handlePreviousStep}>
                        Back
                    </button>
                    <button type="submit" className="btn btn-submit mt-1">
                        Submit
                    </button>
                </div>
                <p className="signup">
                    Already have an account?{' '}
                    <Link to="#" onClick={toggleForm}>Sign In</Link>.
                </p>
            </form>
        </div>
    </div>
    <div className="imgBx d-flex align-items-center justify-content-center mx-auto">
        <img className="img-fluid" src={signupImg} alt="Sign Up Image" />
    </div>
</div>

            </div>
        </section>
    );
};

export default Login;
