import React,{useState,useEffect}from 'react'
import axios from 'axios'
import qs from 'qs'
import SearchCD from './SearchCD'

const LockerApp = () => {

    

    const [locker,setLocker]=useState({
        lockers:[]
    })
    const [building,setbuilding]=useState({
        buildings:[]
    })
    const [floor,setfloor]=useState({
        floors:[]
    })
    const [controlDevice,setControlDevice]=useState({
        controlDevices:[]
    })
    const [user_locker,setUser_locker]=useState({
        user_lockers:[]
    })

    const [user,setUser]=useState({
        users:[]
    })


    useEffect(()=>{
        var config={
            method: 'get',
            url: 'http://localhost:4000/controlDevice',
            headers: {}
        }
    
        axios(config)
        .then(function(response){
            var str=JSON.stringify(response.data)
    
            setControlDevice({controlDevices:JSON.parse(str)})
            
        })
        .catch(err=>{
            console.log(err)
        })
    
        var config2={
            method: 'get',
            url: 'http://localhost:4000/building',
            headers: {}
        }
    
        axios(config2)
        .then(response=>{
            var str=JSON.stringify(response.data)
            setbuilding({buildings:JSON.parse(str)})
            
        })
        .catch(err=>{
            console.log(err)
        })
    
        var config3={
            method: 'get',
            url: 'http://localhost:4000/floor',
            headers: {}
        }
    
        axios(config3)
        .then(response=>{
            var str=JSON.stringify(response.data)
            setfloor({floors:JSON.parse(str)})
        })
        .catch(err=>{
            console.log(err)
        })
    
        var config4={
          method: 'get',
          url: 'http://localhost:4000/locker',
          headers: {}
      }
    
      axios(config4)
      .then(response=>{
          var str=JSON.stringify(response.data)
          setLocker({lockers:JSON.parse(str)})
      })
      .catch(err=>{
          console.log(err)
      })
        

      var config5={
        method: 'get',
        url: 'http://localhost:4000/user_locker',
        headers: {}
    }
  
    axios(config5)
    .then(response=>{
        var str=JSON.stringify(response.data)
        setUser_locker({user_lockers:JSON.parse(str)})
    })
    .catch(err=>{
        console.log(err)
    })

    var config6 = {
        method: 'get',
        url: 'http://localhost:4000/user',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'token': localStorage.getItem('token')
        } 
      };
      
      axios(config6)
      .then(function (response) {
        console.log('token',localStorage.getItem('token'))
        
        var str=JSON.stringify(response.data)

        console.log(JSON.parse(str))

        setUser({users: JSON.parse(str)})
        
      })
      .catch(function (error) {
        console.log('err',error);
      });

    },[])

  return (
    <div className='container'>
        <SearchCD buildings={building.buildings} floors={floor.floors} controlDevices={controlDevice.controlDevices} lockers={locker.lockers} user_locker={user_locker.user_lockers} users={user.users}/>
    </div>
  )
}

export default LockerApp