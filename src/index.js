import React,{useState,useEffect,useCallback} from 'react';
import ReactDOM from 'react-dom/client';

// compoment
import AddAppointment from './Component/AddAppointment';
import Search from './Component/Search';
import AddInfo from './Component/AddInfo';

// source
import './index.css'
// import appointData from './data.json'
import {BiArchive} from 'react-icons/bi'
import './index.css';

function App(){
// state
const [appointList,setAppointList] = useState([])
// 함수

// useCallback
const fetchData = useCallback(
  () => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointList(data))
  },[]
)
// useEffect
useEffect(() => {fetchData()},[fetchData])

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
            appointList.map( (appointment) => (
              <AddInfo
                key={appointment.id}
                appointment = {appointment}
                onDeleteAppoint = {
                  appointmentId => setAppointList(appointList.filter(appointment => appointment.id !== appointmentId ))
                }
                />
            ))
          }
          {/* <AddInfo /> */}
        </ul>
      </div>
    </article>

  )
}
// 40
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
