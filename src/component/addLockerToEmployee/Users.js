import React, { Fragment,useState,useEffect } from "react";
import UserItem from './UserItem'
import './ALTE.css'
import {AiOutlineSearch} from 'react-icons/ai'
function Users(props) {
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [users,setUsers]=useState(props.users)
    var SetName=(event)=>{
        setName(event.target.value)
    }

    var SetDepartment=(event)=>{
        setDepartment(event.target.value)
    }

    useEffect(()=>{
        setUsers(props.users)
      },[props.users])

    var filterUser=()=>{
        setUsers( props.users.filter(user=>{
                return (!name||(user.name.toUpperCase().includes(name.toUpperCase())))&&(!department||(user.department.toUpperCase().includes(department.toUpperCase())))
        }))
        console.log("users:",users)
        }
    return(
        <div className="divPart" >
            <div className='search'>
        
            <input
                type="text"
                className="input_text_search"
                name="name"
                placeholder="Tên nhân viên"
                value={name}
                onChange={SetName}
                />
 
            <input
                type="text"
                className="input_text_search"
                name="department"
                placeholder="Bộ phận làm việc"
                value={department}
                onChange={SetDepartment}
                />
         <button className='btn_search' onClick={filterUser}><AiOutlineSearch/></button>
 
       </div>
        
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <td style={{width: '8%'}}></td>
                    <td style={{width: '23%'}}>Họ và tên</td>
                    <td style={{width: '23%'}}>ID nhân sự</td>
                    <td style={{width: '23%'}}>Bộ phận làm việc</td>
                    <td style={{width: '23%'}}>Tình trạng phân tủ</td>
                </tr>
            </thead>
            <tbody>
            {
                users.map((u,index)=>{
                    return <UserItem user={u} key={index} clickBoxUser={props.clickBoxUser} user_locker={props.user_locker}/> 
                })
                }
            </tbody>
        </table>
        </div>
    )
}

export default Users;