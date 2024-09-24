import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// import App from './example/Ex04_p'

// import App from './example/CelebCard'

import App from './example/Binding'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
