import {React,useState} from 'react'
import './login.css';
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
const ChangePassword = () => {
  const [oldPassword,setOldPassword]= useState("")
  const [newPassword,setNewPassword]= useState("")
  const [reNPassword,setreNPassword]= useState("")
  const [waring,setwaring]=useState(0)
  var setParam=(event)=>{
    let name=event.target.name
    let value=event.target.value
    if(name=='oldPassword'){
      setOldPassword(value)
    }else if(name=='newPassword'){
      setNewPassword(value)
    }else{
      setreNPassword(value)
    }
  }

  var sub=()=>{
    if(newPassword!=reNPassword){
      setwaring(2)
      setTimeout(()=>{
        setwaring(0)
      },3000)
    }else{
      alert('da gui')
    }
  }
  return (
    <div>
        <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           


         </div>
         <div>
           <h1>ĐỔI MẬT KHẨU</h1>
           
           <div className="second-input">
             <input type="password" placeholder="Mật khẩu cũ" className="name input" name='oldPassword' value={oldPassword} onChange={setParam}/>
           </div>
             {waring==1&&<label style={{"color":'red' }}>Mật khẩu cũ không đúng</label>}
           <div className="second-input">
             <input type="password" placeholder="Mật khẩu mới" className="name input" name='newPassword' value={newPassword} onChange={setParam}/>
           </div>
           
           <div className="second-input">
             <input type="password" placeholder="Nhập lại mật khẩu mới" className="name input" name='reNewPassword' value={reNPassword} onChange={setParam}/>
           </div>
           {waring==2&&<label style={{"color":'red' }}>Mật khẩu không khớp</label>}
          <div className="login-button">
          <button className='button_login' onClick={sub} >THAY ĐỔI</button>
          </div>
         </div>
       </div>
       

     </div>
    </div>
    </div>
  )
}

export default ChangePassword