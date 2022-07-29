import React,{useState,useEffect}from 'react'
import axios from 'axios'
import qs from 'qs'

import Lockers from './Lockers'
const LayoutLocker = () => {

  const [state,setState]=useState({
    lockers:{
      buildingId:"",
      floorId:"",
      controlDeviceId:""
    }
  })

  const [building,setBuilding]=useState({
    buildings:[]
  })

  const [floor,setFloor]=useState({
    floors:[]
  })

  const[controlDevice,setControlDevice]=useState({
    controlDevices:[]
  })

  const [locker,setLocker]=useState({
    lockers:[]
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
        setBuilding({buildings:JSON.parse(str)})
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
        setFloor({floors:JSON.parse(str)})
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
    
},[])

  const updateLocker=(id,newLocker)=>{
    var data = qs.stringify(newLocker);
    var config={
      method: 'put',
      url: `http://localhost:4000/locker/${id}`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    }

    axios(config)
        .then(function (response) {
          setLocker({
              lockers: locker.lockers.map(l=>{
                  if(l._id!== id) return l;
                  else{
                    l.label=newLocker.label
                    //console.log("new",newLocker,typeof(newLocker))
                    return l
                  }
              })
              })
        })
        .catch(function (error) {
          alert(error)
        });
  }

  const deleteLocker=(id)=>{
    var config = {
      method: 'delete',
      url: `http://localhost:4000/locker/${id}`,
      headers: { }
    };
    
    //axios(config)
    axios.delete(`http://localhost:4000/locker/${id}`)
    .then(function (response) {
      setLocker({
          lockers: locker.lockers.map(l => {
                  if(l._id!=id) return l;
                  else{
                    l.label="";
                    return l
                  }
              })
          
          })
    })
    .catch(function (error) {
      console.log(error);
      alert("Loi server")
    });
  }

  return (
    <div className="container">
        <Lockers buildings={building.buildings} floors={floor.floors} controlDevices={controlDevice.controlDevices} lockers={locker.lockers} updateLocker={updateLocker} deleteLocker={deleteLocker}/>
      
    </div>
  )
}

export default LayoutLocker