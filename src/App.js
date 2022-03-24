import './App.css';
import Home from './components/Home';
import User from './components/User';
import Confirm from './components/Confirm';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return <Home setStep={setStep} step={step} />;

    case 2:
      return <User setStep={setStep} step={step} />;

    case 3:
      return <Confirm setStep={setStep} step={step} />;

    default:
      return <div className="App"></div>;
  }
}

export default App;
