import React,{useState} from 'react';
import './App.css';
import UserApp from './component/user/UserApp';
import FloorApp from './component/floor/FloorApp';
import BuildingApp from './component/building/BuildingApp';
import ControlDeviceApp from './component/control_device/ControlDeviceApp';
import LayoutLocker from './component/locker/LayoutLocker';
import MUseLocerApp from './component/manageUseLocker/MUseLocerApp';
import ALTEApp from './component/addLockerToEmployee/ALTEApp';
import PopupQuetion from './component/layout/PopupQuetion';
import Login from './component/layout/Login';
import Register from './component/layout/Register';
import { TopHeader } from './component/layout/TopHeader';
import LockerApp from './component/lockerManage.js/LockerApp';
import ChangePassword from './component/layout/ChangePassword';
import AccountApp from './component/account/AccountApp';
import Chart from './component/chart/Chart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate  
} from "react-router-dom"
import { Header } from './component/layout/Header';

function App() {
  // const [active,setActive]=useState(false)

  // const activeNav=()=>{
  //     setActive(!active)
  // }

  return (
    <div className="App">
     
      <Router>
      {localStorage.getItem('token')&& <TopHeader />}
      {localStorage.getItem('token')&& <Header  />}
      
          <Routes>
          
            <Route exact path="/" element={localStorage.getItem('token')?<Chart/> :<Navigate replace to={'/login'}/>}/>


            <Route  path="/user" element={localStorage.getItem('token')?<UserApp/> :<Navigate replace to={'/login'}/>}/>

            

            <Route path="/home" element={localStorage.getItem('token')?<Chart/>: <Navigate replace to={'/login'} />}/>

            <Route path="/login"element={<Login />}/>

            <Route path="/register"element={<Register />}/>

            <Route path="/building"element={localStorage.getItem('token')?<BuildingApp /> :<Navigate replace to={'/login'}/>}/>
                 
            <Route path="/floor"element={localStorage.getItem('token')?<FloorApp /> :<Navigate replace to={'/login'}/>}/>
                 
            <Route path="/control_device"element={localStorage.getItem('token')?<ControlDeviceApp /> :<Navigate replace to={'/login'}/>}/>
                
            <Route path="/ManageUseLocker"element={localStorage.getItem('token')?<MUseLocerApp /> :<Navigate replace to={'/login'}/>}/>

            <Route path="/layoutLocker"element={localStorage.getItem('token')?<LayoutLocker /> :<Navigate replace to={'/login'}/>}/>

            <Route path="/locker"element={localStorage.getItem('token')?<LockerApp /> :<Navigate replace to={'/login'}/>}/>

            <Route path="/addLockerToEmployee"element={localStorage.getItem('token')?<ALTEApp /> :<Navigate replace to={'/login'}/>}/>
            
            <Route path="/changePassword"element={localStorage.getItem('token')?<ChangePassword /> :<Navigate replace to={'/login'}/>}/>

             <Route path="/account"element={localStorage.getItem('token')?<AccountApp /> :<Navigate replace to={'/login'}/>}/>   
            
          </Routes>
       
        
      </Router>
      
    </div>
  );
}

export default App;
