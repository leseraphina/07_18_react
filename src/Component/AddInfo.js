import {BiTrash} from 'react-icons/bi'

function AddInfo({appointment}){
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
            <BiTrash />
        </p>
       </li>
    )
}
export default AddInfo;