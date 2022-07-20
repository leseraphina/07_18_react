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
// search
const [query,setQuery] = useState('')
// 함수
const filterAppointments = appointList.filter(
  (item) => {
    return (
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )
  }
)

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
      <Search 
        query = {query}
        onQueryChange = {myQuery => setQuery(myQuery)}
        />
      <div id="list">
        <ul>
          {
          // appointList.map( (appointment) => (
            filterAppointments.map( (appointment) => (
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
