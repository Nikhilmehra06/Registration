import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/layout/Navbar';
//Importing ReactStrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Importing Store and Providing it Globally
import { Provider } from 'react-redux';
import store from './redux/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <Navbar />
        <App />
      </>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);
