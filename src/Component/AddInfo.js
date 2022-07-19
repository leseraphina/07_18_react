import {BiTrash} from 'react-icons/bi'

function AddInfo({appointment,onDeleteAppoint}){
    return (
       <li>
        <dl>
            <dt>
            {appointment.petName}
            </dt>
            <dd className ="owner">
            <dfn>예약자명</dfn>
            {appointment.ownerName}
            </dd>
            <dd className="desc">
            {appointment.aptNotes}
            </dd>
            <dd className="data">
            {appointment.aptDate}
            </dd>
        </dl>
        <p>
            <button 
            onClick = {()=> {onDeleteAppoint(appointment.id)}}>
            <BiTrash />
            </button>
        </p>
       </li>
    )
}
export default AddInfo;