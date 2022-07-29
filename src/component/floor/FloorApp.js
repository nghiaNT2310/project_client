import React,{useState,useEffect} from "react";
import FLoors from "./Floors";
import AddFloor from "./AddFloor";
import axios from 'axios'
import qs from 'qs'
import {GrAdd} from 'react-icons/gr'


function FloorApp(){
    const [state,setState]=useState({
        floors:[]
    });

    const [displayAdd,setDisplayAdd]=useState("none")

    const [building,setBuilding]=useState({
        buildings:[]
    })

    useEffect(()=>{
        var config={
            method: 'get',
            url: 'http://localhost:4000/floor',
            headers: {}
        }

        axios(config)
        .then(function(response){
            var str=JSON.stringify(response.data)

            setState({floors:JSON.parse(str)})
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

    },[])

    const addFloor=floor=>{
        var data=qs.stringify(floor)
        var config={
            method: 'post',
            url:'http://localhost:4000/floor',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }

        axios(config)
        .then(response=>{
            var str=JSON.stringify(response.data)
            var b;
            for(var i=0;i<building.buildings.length;i++){
                
                if(building.buildings[i]._id==JSON.parse(str).building) b=building.buildings[i]
            }

            setState({
                floors:[...state.floors,{...JSON.parse(str),building:b}]
            })
        })
        .catch(err=>{
            alert(err)
        })

    }


    const deleteFloor=id=>{
        var config = {
            method: 'delete',
            url: `http://localhost:4000/floor/${id}`,
            headers: { }
          };

          axios.delete(`http://localhost:4000/floor/${id}`)
          .then(function (response) {
            setState({
                floors: [
                    ...state.floors.filter(f => {
                        return f._id != id;
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

    const updateFloor=(id,newFloor)=>{
        var data = qs.stringify(newFloor);
          var config = {
            method: 'put',
            url: `http://localhost:4000/floor/${id}`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };


          axios(config)
          .then(function (response) {
            setState({
                floors: state.floors.map(f=>{
                    if(f._id!== id) return f;
                else{
                    f.info=newFloor.info;
                    return f
                }
                })
                })
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
          });

    }

    return (
        <div className="container">
            <button className="btn-style-add" onClick={()=>{
                setDisplayAdd("block")
            }}><GrAdd/></button>
            <div style={{display :displayAdd}}>
                <AddFloor buildings={building.buildings} addFloor={addFloor} unDisplay={unDisplay}/>
            </div>
            

            <FLoors buildings={building.buildings} floors={state.floors} deleteFloor={deleteFloor} updateFloor={updateFloor}/>
        </div>

    )

}
export default FloorApp