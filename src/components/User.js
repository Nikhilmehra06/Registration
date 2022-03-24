import React, { useState } from 'react';
import Navigate from './layout/Navigate';

const User = ({ step, setStep }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [countary, setCountary] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const prevStep = (e) => {
    setStep(step - 1);
  };

  const NextStep = (e) => {
    setStep(step + 1);
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const addressHandler = (e) => {
    setAddress(e.target.value);
  };

  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };

  const countaryHandler = (e) => {
    setCountary(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const postalCodeHandler = (e) => {
    setPostalCode(e.target.value);
  };

  return (
    <>
      <div className="container shadow-lg mt-5 rounded col-6">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="form-control"
              value={firstName}
              onChange={firstNameHandler}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="form-control"
              value={lastName}
              onChange={lastNameHandler}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Permanent Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Address"
              value={address}
              onChange={addressHandler}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile</label>
            <input
              type="number"
              className="form-control"
              value={mobile}
              onChange={mobileHandler}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Countary</label>
            <input
              type="text"
              className="form-control"
              value={countary}
              onChange={countaryHandler}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={cityHandler}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              value={gender}
              onChange={genderHandler}
            >
              <option defaultValue>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-2">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={ageHandler}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Postal Code</label>
            <input
              type="number"
              className="form-control"
              value={postalCode}
              onChange={postalCodeHandler}
            />
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-outline-dark mb-3"
              onClick={prevStep}
            >
              Back
            </button>

            <button
              type="submit"
              className="btn btn-outline-dark mb-3"
              onClick={NextStep}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <Navigate setStep={setStep} step={step} />
    </>
  );
};

export default User;
