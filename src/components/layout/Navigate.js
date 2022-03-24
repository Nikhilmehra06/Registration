import React from 'react';

const Navigate = ({ step, setStep }) => {
  const nextStep = (e) => {
    setStep(step + 1);
  };
  const prevStep = (e) => {
    setStep(1);
  };

  return (
    <div className="container text-center mt-3">
      <button
        to="/"
        className="btn btn-outline-dark rounded-circle m-2"
        onClick={prevStep}
      >
        1
      </button>
      <button
        to="/user"
        className="btn btn-outline-dark rounded-circle m-2"
        onClick={nextStep}
      >
        2
      </button>
      <button
        to="/confirm"
        className="btn btn-outline-dark rounded-circle m-2 "
        onClick={nextStep}
      >
        3
      </button>
    </div>
  );
};

export default Navigate;
