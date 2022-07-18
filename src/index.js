import React from 'react';
import ReactDOM from 'react-dom/client';

// compoment
import AddAppointment from './Component/AddAppointment';
import Search from './Component/Search';
import AddInfo from './Component/AddInfo';

// source
import './index.css'
import appointData from './data.json'
import {BiArchive} from 'react-icons/bi'
import './index.css';

function App(){
  return (
    <article>
      <h3>
        <BiArchive />
        예약시스템
      </h3>
      <AddAppointment />
      <Search />
      <div id="list">
        <ul>
          {
            appointData.map( (item) => (
              <AddInfo
                key={item.id}
                appointment = {item}
                />
            ))
          }
          {/* <AddInfo /> */}
        </ul>
      </div>
    </article>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
