import React,{useState,useEffect} from "react"
import Buildings from "./Buildings";
import AddBuilding from "./AddBuilding";
import InputBuilding from "./InputBuilding";
import axios from 'axios'
import qs from 'qs'
import {GrAdd} from 'react-icons/gr'
function BuildingApp(){
    const [state,setState]=useState({
        buildings:[]
    });

    const [displayAdd,setDisplayAdd]=useState("none")

    useEffect(()=>{

        var config = {
            method: 'get',
            url: 'http://localhost:4000/building',
            headers: {}
          };

        axios(config)
          .then(function (response) {
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setState({buildings: JSON.parse(str)})
            
          })
          .catch(function (error) {
            console.log(error);
          });
    },[]);

    const addBuilding=building=>{
        var data = qs.stringify(building);
          var config = {
            method: 'post',
            url: 'http://localhost:4000/building',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            var str=JSON.stringify(response.data)
            //console.log(JSON.parse(response.data))
            setState({
                buildings: [...state.buildings, JSON.parse(str)]
            })
            
          })
          .catch(function (error) {
            console.log(error)
            alert(error)
          });
    }

    const deleteBuilding=id=>{
        var config = {
            method: 'delete',
            url: `http://localhost:4000/building/${id}`,
            headers: { }
          };
          
          //axios(config)
          axios.delete(`http://localhost:4000/building/${id}`)
          .then(function (response) {
            setState({
                buildings: [
                    ...state.buildings.filter(b => {
                        return b._id != id;
                    })
                ]
                })
          })
          .catch(function (error) {
            console.log(error);
            alert("Loi server")
          });
    }

    const unDisplay=()=>{
        setDisplayAdd("none")
    }

    const updateBuilding=(id,newbuilding)=>{
        var data = qs.stringify(newbuilding);
        var config = {
          method: 'put',
          url: `http://localhost:4000/building/${id}`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          setState({
              buildings: state.buildings.map(building=>{
                  if(building._id!== id) return building;
                  else return {_id:building._id,...newbuilding};
              })
              })
        })
        .catch(function (error) {
          alert(error)
        });
    }

    return (
        <div className="container">
            <button className="btn-style-add" onClick={()=>{
                       setDisplayAdd("block")
            }}><GrAdd/></button>

            <div style={{display: displayAdd}}>
                <InputBuilding addBuilding={addBuilding} nameButton={"Add "} unDisplay={unDisplay}/>
            </div>
            
            <Buildings buildings={state.buildings} deleteBuilding={deleteBuilding} updateBuilding={updateBuilding}/>
        </div>
    )
}
export default BuildingApp