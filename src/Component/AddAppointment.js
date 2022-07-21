import {BiCalendarPlus} from 'react-icons/bi'
import React,{useState} from 'react'

function AddWrite({toggleFrom,formData,setFormData,formDataPublish}){
    if(!toggleFrom){
        return null
    }
    return (
        <>
        <ul>
            <li>
                <label htmlFor="userName">집사명</label>
                <input 
                    type="text" id="userName"
                    onChange={(event) =>{setFormData({...formData,ownerName:event.target.value})}} />
            </li>
            <li>
                <label htmlFor="userChildren">애기명</label>
                <input type="text" id="userChildren" 
                    onChange={(event) => {setFormData({...formData,petName:event.target.value})}}/>
            </li>
            <li>
                <label htmlFor="userDate">예약일</label>
                <input type="date" id="userDate"
                onChange={(event) =>{setFormData({...formData,aptDate:event.target.value})}} />
            </li>
            <li>
                <label htmlFor="userTime">예약시간</label>
                <input type="time" id="userTime"
                    onChange={(event) =>{setFormData({...formData,aptTime:event.target.value})}} />
            </li>
            <li>
                <label htmlFor="userDes">기타설명</label>
                <textarea 
                    cols="30" rows="10" 
                    placeholder="기타설명" id="userDes"
                    onChange={(event) =>{setFormData({...formData,aptNotes:event.target.value})}}></textarea>
            </li>
        </ul>
            <p>
                <input 
                    type="submit" vlaue="예약하기"
                    onClick = {formDataPublish} />
            </p>
        </>
    )
}

function AddAppointment({onSendAppointment,lastId}){
    const clearData = {
    petName: '',
    ownerName: '',
    aptNotes: '',
    aptDate: ''
    }
const [toggleFrom,setToggleForm] = useState(false)
const [formData, setFormData] = useState(clearData)

//  함수 만들기
function formDataPublish(){
const appointmentInfo = {
    id: lastId + 1,
    petName: formData.petName,
    ownerName:formData.ownerName,
    aptNotes: formData.aptNotes,
    aptDate: formData.aptDate +'' +formData.aptTime
}
setToggleForm(!toggleFrom)
onSendAppointment(appointmentInfo)
setFormData(clearData)
}
    return (
        <div id="appoint">
        <h4
         onClick = {()=> {setToggleForm(!toggleFrom)}}>
            <BiCalendarPlus />
            예약하기
            </h4>  
             <AddWrite
                toggleFrom = {toggleFrom}
                formData = {formData}
                formDataPublish = {formDataPublish}
                setFormData = {setFormData}  /> 

        </div>
    )
}

export default AddAppointment