// icon
import React,{useState} from 'react'
import {BiSearch,BiCaretDown} from 'react-icons/bi'

function DropDown({toggleSort}){
    if(!toggleSort){
        return null
    }
    return (
        <ul>
            <li>애기이름</li>
            <li>예약자명</li>
            <li>날짜</li>
        </ul>
    )
}

function Search(){
const [toggleSort, setToggleSort] = useState(false)
    return (
        <div id="search">
            <p>
                <BiSearch />
                <input type="text" placeholder="search" />
                <button 
                    type="button"
                    onClick = {() => {
                        setToggleSort(!toggleSort)
                    }}> 
                정렬하기
                <BiCaretDown />
                </button>
            </p>
            <DropDown toggleSort = {toggleSort} />
        </div>
    )
}

export default Search