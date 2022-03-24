import React from 'react';
import { connect } from 'react-redux';
import Navigate from './layout/Navigate';

const Confirm = ({ user, setStep, step }) => {
  return (
    <>
      <div className="container mt-5 shadow-lg col-md-6 rounded">
        <h1>Confirm Your detail</h1>
        <div className="col-auto p-3">
          <ul className="list-group">
            <li className="list-group-item">Name: {user.firstName}</li>
            <li className="list-group-item">Last Name: {user.lastName}</li>
            <li className="list-group-item">Mobile No: {user.mobile}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">Address: {user.address}</li>
            <li className="list-group-item">Country : {user.countary}</li>
            <li className="list-group-item">Mobile No: {user.mobile}</li>
            <li className="list-group-item">Mobile No: {user.mobile}</li>
          </ul>
        </div>
        <button className="btn btn-outline-dark ">Confirm</button>
      </div>
      <Navigate setStep={setStep} step={step} />;
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps, null)(Confirm);
