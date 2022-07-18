import React from 'react';
import ReactDOM from 'react-dom/client';
import {BiCalendarCheck} from 'react-icons/bi'

import './index.css';

function App(){
  return (
    <div>
      <h1>
        <BiCalendarCheck /> </h1>

      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
