import {BiCalendarPlus} from 'react-icons/bi'
import React,{useState} from 'react'

function AddWrite({toggleFrom}){
    if(!toggleFrom){
        return null
    }
    return (
        <>
        <ul>
            <li>
                <label htmlFor="userName">집사명</label>
                <input type="text" id="userName" />
            </li>
            <li>
                <label htmlFor="userChildren">애기명</label>
                <input type="text" id="userChildren" />
            </li>
            <li>
                <label htmlFor="userDate">예약일</label>
                <input type="date" id="userDate" />
            </li>
            <li>
                <label htmlFor="userTime">예약시간</label>
                <input type="time" id="userTime" />
            </li>
            <li>
                <label htmlFor="userDes">기타설명</label>
                <textarea 
                    cols="30" rows="10" 
                    placeholder="기타설명" id="userDes"></textarea>
            </li>
        </ul>
            <p>
                <input type="submit" vlaue="예약하기" />
            </p>
        </>
    )
}

function AddAppointment(){
const [toggleFrom,setToggleForm] = useState(false)
    return (
        <div id="appoint">
        <h4
         onClick = {()=> {setToggleForm(!toggleFrom)}}>
            <BiCalendarPlus />
            예약하기
            </h4>  
             <AddWrite
             toggleFrom = {toggleFrom}  /> 

        </div>
    )
}

export default AddAppointment