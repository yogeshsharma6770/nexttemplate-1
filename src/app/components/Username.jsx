"use client"
import React, { useState } from 'react';

const Username = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    HomeNo: '',
    Pincode: '',
    Country: '',
    State: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateProgress = () => {
    return ((step - 1) / 3) * 100; // Assuming 3 steps in the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Resetting errors on change
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (step < 3) {
        setStep(step + 1);
      } else {
        setSubmitted(true);
        console.log('Final form data:', formData); // Replace this with the action you want on final submission
      }
    }
  };

  const validate = (values) => {
    let errors = {};

    if (step === 1) {
      if (!values.firstName.trim()) {
        errors.firstName = '* First name is required';
      }
      if (!values.lastName.trim()) {
        errors.lastName = '* Last name is required';
      }
      if (!values.mobileNumber.trim()) {
        errors.mobileNumber = '* Mobile number is required';
      }
      if (!values.email.trim()) {
        errors.email = '* Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '* Email address is invalid';
      }
    } else if (step === 2) {
      if (!values.HomeNo.trim()) {
        errors.HomeNo = '* Home number is required';
      }
      if (!values.Pincode.trim()) {
        errors.Pincode = '* Pincode is required';
      }
    } else if (step === 3) {
      if (!values.Country.trim()) {
        errors.Country = '* Country is required';
      }
      if (!values.State.trim()) {
        errors.State = '* State is required';
      }
    }

    return errors;
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    margin: '20px 0 0 0',
  };

  const progressBarStyle = {
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    marginBottom: '20px',
    height: '20px',
  };

  const progressStyle = {
    height: '100%',
    width: `${calculateProgress()}%`,
    backgroundColor: '#007bff',
    borderRadius: '5px',
    transition: 'width 0.3s ease-in-out',
  };
  const ProgressDots = () => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: index === step ? '#007bff' : '#ddd',
            margin: '0 5px',
          }}
        />
      ))}
    </div>
  );

  return (
    <div>
      {submitted ? (
        <div>
         <p> <a href="#" id="style-2" data-replace="Thank you for submitting form"><span>Thank you for submitting form</span></a></p>
        </div>
      ) : (
        <div>
          <div style={progressBarStyle}>
            <div style={progressStyle}></div>
          </div>
         
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <div>
                  <h1>Step 1</h1>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.firstName && <h6 style={{ color: 'red' }}>{errors.firstName}</h6>}
                </div>
                <div>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.lastName && <h6 style={{ color: 'red' }}>{errors.lastName}</h6>}
                </div>
                <div>
                  <label htmlFor="mobileNumber">Mobile Number:</label>
                  <input
                    type="number"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.mobileNumber && <h6 style={{ color: 'red' }}>{errors.mobileNumber}</h6>}
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.email && <h6 style={{ color: 'red' }}>{errors.email}</h6>}
                </div>
                <button type="submit" style={buttonStyle}>
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div>
                  <h1>Step 2</h1>
                  <label htmlFor="HomeNo">Home No:</label>
                  <input
                    type="text"
                    id="HomeNo"
                    name="HomeNo"
                    value={formData.HomeNo}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.HomeNo && <h6 style={{ color: 'red' }}>{errors.HomeNo}</h6>}
                </div>
                <div>
                  <label htmlFor="Pincode">Pincode No:</label>
                  <input
                    type="number"
                    id="Pincode"
                    name="Pincode"
                    value={formData.Pincode}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.Pincode && <h6 style={{ color: 'red' }}>{errors.Pincode}</h6>}
                </div>
                <button type="submit" style={buttonStyle}>
                  Next
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <div>
                  <h1>Step 3</h1>
                  <label htmlFor="Country">Country:</label>
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.Country && <h6 style={{ color: 'red' }}>{errors.Country}</h6>}
                </div>
                <div>
                  <label htmlFor="State">State:</label>
                  <input
                    type="text"
                    id="State"
                    name="State"
                    value={formData.State}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {errors.State && <h6 style={{ color: 'red' }}>{errors.State}</h6>}
                </div>
                <button type="submit" style={buttonStyle}>
                  SUBMIT
                </button>
              </div>
            )}

            {step > 1 && (
              <button type="submit" onClick={handlePrevious} style={buttonStyle}>
                Previous
              </button>
            )}
          </form>
          <br></br>
          <ProgressDots />
        </div>
      )}
    </div>
  );
};

export default Username;
