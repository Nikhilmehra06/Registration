import React, { useState } from 'react';
import { connect } from 'react-redux';
import Navigate from './layout/Navigate';

const Home = ({ userDetail, setStep, step }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmailHander = (e) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <>
      <form>
        <div className="container shadow-lg  col-md-6 mt-5">
          <div className="mb-3">
            <label className="form-labe mt-2">Email address</label>

            <input
              type="email"
              className="form-control"
              value={email}
              onChange={onChangeEmailHander}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={onChangePasswordHandler}
            />
          </div>

          <button
            type="submit"
            className="btn btn-outline-dark mb-3"
            onClick={nextStep}
          >
            Continue
          </button>
        </div>
      </form>
      <Navigate setStep={setStep} step={step} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetail: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
