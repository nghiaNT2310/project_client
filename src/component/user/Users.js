import React, { Fragment,useState,useEffect } from "react";
import UserItems from "./UseriItems";
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
            <Fragment>
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
                    <td></td>
                    <td style={{width: '10%'}}>Họ và tên</td>
                    <td style={{width: '10%'}}>ID nhân viên</td>
                    <td style={{width: '10%'}}>Bộ phận làm việc</td>
                    <td style={{width: '10%'}}>email</td>
                    <td style={{width: '15%'}}>vip</td>
                    <td style={{width: '10%'}} >Tình trạng phân tủ</td>
                    <td style={{width: '10%'}} >statusPINCode</td>
                    <td style={{width: '10%'}}>card</td>
                    <td style={{width: '35%'}}>control</td>
                </tr>
            </thead>
            <tbody>
            {
                users.map((u,index)=>{
                    return <UserItems user={u} key={index} deleteUser={props.deleteUser} updateUser={props.updateUser} user_locker={props.user_locker}/> 
                })
                }
            </tbody>
        </table>
        </Fragment>
    )
}

export default Users;