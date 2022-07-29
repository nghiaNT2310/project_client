import React,{useState,useEffect} from "react";
import ControlDevices from "./ControlDevices";
import AddConstrolDevice from "./AddControlDevice";
import axios from 'axios'
import qs from 'qs'
import {GrAdd} from 'react-icons/gr'
function ControlDeviceApp(){
    const [state,setState]=useState({
        controlDevices:[]
    })
    const [building,setBuilding]=useState({
        buildings:[]
    })
    const [floor,setFloor]=useState({
        floors:[]
    })
    const [displayAdd,setDisplayAdd]=useState("none")

    useEffect(()=>{
        var config={
            method: 'get',
            url: 'http://localhost:4000/controlDevice',
            headers: {}
        }

        axios(config)
        .then(function(response){
            var str=JSON.stringify(response.data)

            setState({controlDevices:JSON.parse(str)})
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
        
    },[])

    const addControlDevice=controlDevice=>{
        var data=qs.stringify(controlDevice)
        var config={
            method: 'post',
            url:'http://localhost:4000/controlDevice',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }

        axios(config)
        .then(response=>{
            var str=JSON.stringify(response.data)
            setState({
                controlDevices:[...state.controlDevices,JSON.parse(str)]
            })
        })
        .catch(err=>{
            alert(err)
        })
    }

    const deleteControlDevice=id=>{
        var config = {
            method: 'delete',
            url: `http://localhost:4000/controlDevice/${id}`,
            headers: { }
          };
          axios.delete(`http://localhost:4000/controlDevice/${id}`)
          .then(function (response) {
            setState({
                controlDevices: [
                    ...state.controlDevices.filter(cd => {
                        return cd._id != id;
                    })
                ]
                })
          })
          .catch(function (error) {
            alert(error);  
          });
    }

    const unDisplay=()=>{
        setDisplayAdd("none")
    }

    const updateControlDevice=(id,newControlDevice)=>{
        var data = qs.stringify(newControlDevice);
          var config = {
            method: 'put',
            url: `http://localhost:4000/controlDevice/${id}`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };


          axios(config)
          .then(function (response) {
            var str=JSON.stringify(response.data)
            setState({
                controlDevices: state.controlDevices.map(f=>{
                    if(f._id!== id) return f;
                else{
                    return JSON.parse(str)
                }
                })
                })
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
          });

    }

    return(
        <div className="container">
            <button className="btn-style-add" onClick={()=>{
                setDisplayAdd("block")
            }}><GrAdd/></button>
            
            <ControlDevices buildings={building.buildings} floors={floor.floors}  controlDevices={state.controlDevices} deleteControlDevice={deleteControlDevice} updateControlDevice={updateControlDevice}/>
            <div style={{display: displayAdd}}>
                <AddConstrolDevice buildings={building.buildings} floors={floor.floors} addControlDevice={addControlDevice} unDisplay={unDisplay}/>
            </div>
        </div>
    )


}

export default ControlDeviceApp