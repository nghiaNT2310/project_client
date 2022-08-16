import './Header.css'
import React,{useState} from 'react'
import {IoMdClock, IoMdClose, IoMdImage, IoMdMenu} from 'react-icons/io'
import { AiOutlineUser,AiOutlineAppstore,AiOutlinePaperClip } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";
import { VscListFlat } from "react-icons/vsc";
import { FaUserLock } from "react-icons/fa";
import {HiOutlineDeviceTablet} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import {BiUserCircle,BiLayout,BiHomeAlt} from  "react-icons/bi";
export const Header = (props) => {
    const [active,setActive]=useState(false)

    const activeNav=()=>{
        setActive(!active)
    }
   

    // const activeNav=props.setActive
    // const active=props.active
    
  return (
    <div className={active?'header':'header-mobile'}>


                <div className='menu-icon' onClick={activeNav}>

                    {!active ? <IoMdMenu className='menu'/>:<IoMdClose className='menu'/>}

                </div>

            <nav>
                <ul className={active ?'ul-item':'ul-item oicon'}>

                <li>
                    <BiHomeAlt className='icon'></BiHomeAlt>
                    <Link to='/home'>Home</Link>
                </li>

                <li>
                    <AiOutlineUser className='icon'/>
                    <Link to='/user'>Quản lý người sử dụng</Link>
                </li>

                <li>
                    <AiOutlinePaperClip className='icon'/>
                    <Link to='/addLockerToEmployee'>Thêm tủ cho nhân viên</Link>
                </li>

                <li>
                    <FaUserLock className='icon'/>
                    <Link to='/ManageUseLocker'>Quản lý sử dụng tủ</Link>
                </li>

                <li>
                    <BiBuilding className='icon'/>
                    <Link to='/building'>Quản lý tòa nhà</Link>
                </li>

                <li>
                    <VscListFlat className='icon'/>
                    <Link to='/floor'>Quản lý tầng</Link>
                </li>

                <li>
                    <HiOutlineDeviceTablet className='icon'/>
                    <Link to='/control_device'>Quản lý thiết bị điều khiển</Link>
                </li>

                <li>
                    <AiOutlineAppstore className='icon'/>
                    <Link to='/layoutLocker'>Quản lý layout tủ</Link>
                </li>

                <li>
                    <BiLayout className='icon'/>
                    <Link to='/locker'>Quản lý tủ</Link>
                </li>
                {
                    localStorage.getItem('role')==0
                    &&<li>
                    <BiUserCircle className='icon'/>
                    <Link to='/account'>Quản lý tài khoản quản trị</Link>
                </li>
                }
                

                </ul>
            </nav>

    </div>
  )
}
