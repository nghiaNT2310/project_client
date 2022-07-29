import {React,useState} from 'react'
import {useNavigate,Location, useLocation} from 'react-router-dom'
import './login.css';
import profile from "./a.png";
import email from "./email.jpg";
import pass from "./pass.png";
import axios from 'axios';
var qs = require('qs');
const Login = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const [waring,setwaring]=useState(0)

  let changeUser=(event)=>{
    setUser(event.target.value)
  }

  let changePassword=(event)=>{
    setPassword(event.target.value)
  }

  let flogin=function(){

  if(!user){
    setwaring(3)
        setTimeout(()=>{
          setwaring(0)
        },4000)
  }else if(!password){
    setwaring(4)
        setTimeout(()=>{
          setwaring(0)
        },4000)
  }else{
    var data = qs.stringify({
      'username': user,
      'password': password 
    });
    var config = {
      method: 'post',
      url: 'http://localhost:4000/login',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
       if(response.status==200){
        console.log(response.data)
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('username',response.data.account.username)
        localStorage.setItem('role',response.data.account.role)
        navigate('/home');
        window.location.reload();
      }
      
    })
    .catch(function (error) {
      if(error.response.status==400){
        setwaring(1)
        setTimeout(()=>{
          setwaring(0)
        },4000)
      }else if(error.response.status==401){
        setwaring(2)
        setTimeout(()=>{
          setwaring(0)
        },4000)
      }else
      console.log('err:',error.response.status);
    });

  }

  }
  

  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div className="second-input">
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name input" value={user} onChange={changeUser}/>
           </div>
           {waring==1&&<label style={{"color":'red' }}>Tài khoản không tồn tại</label>}
           {waring==3&&<label style={{"color":'red' }}>Không được để trống</label>}
           
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="pass word" className="name input" value={password} onChange={changePassword}/>
           </div>
           {waring==2&&<label style={{"color":'red' }}>Mật khẩu không đúng</label>}
           {waring==4&&<label style={{"color":'red' }}>Không được để trống</label>}
          <div className="login-button">
          <button className='button_login' onClick={flogin}>Login</button>
          </div>
         </div>
       </div>
       

     </div>
    </div>
  )
}

export default Login