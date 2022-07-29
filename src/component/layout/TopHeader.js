import React from 'react'
import {useNavigate,Location, useLocation} from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import {AiFillSetting} from "react-icons/ai"
import './TopHeader.css'
export const TopHeader = () => {
    const navigate = useNavigate();
    let logout=function(){
    
        localStorage.removeItem('token')

        window.location.reload();
        
      }

    let setting=function(){
        navigate('/changePassword')
    }

  return(
    <nav className='container'>
        <div className='div-header container' >
           
          <div className='div-svg-2 text' >
                HUSTLOCKER
            </div>
            <div className='div-svg-3 text' >
                
            </div>
            <div className='div-svg' style={{'color': 'green'}}>
                xin chào:   {localStorage.getItem('username')}
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',margin:'3px'}}>
                <button className='button-header'  onClick={setting}> <AiFillSetting size={23} color={'#000000'}/></button>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <button className='button-header' onClick={logout} > <FiLogOut size={23} color={'black'}/></button>
            </div>
        </div>
    </nav>
)
}
