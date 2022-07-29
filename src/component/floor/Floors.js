import React, { Fragment, useState,useEffect } from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import FloorItem from "./FloorItem";
function FLoors(props){

    const [building,setBuilding]=useState("")
    const [floors,setFloor]=useState(props.floors)

    useEffect(()=>{
        setFloor(props.floors)
      },[props.buildings,props.floors])


     var SetBuilding=(event)=>{
        setBuilding(event.target.value)
     }

     var filterFloor=()=>{
        setFloor(props.floors.filter(floor=>{
            return (!building||(floor.building.name.toUpperCase().includes(building.toUpperCase())))
    }))
     }

    return(
        <Fragment>
            <div className='search'>
        
            <input
                type="text"
                className="input_text_search"
                name="building"
                placeholder="Tòa nhà"
                value={building}
                onChange={SetBuilding}
                />
 
         <button className='btn_search' onClick={filterFloor}><AiOutlineSearch/></button>
 
       </div>
        
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td style={{width: '25%'}}>Tên tòa nhà</td>
                    <td style={{width: '25%'}}>Tên tầng</td>
                    <td style={{width: '25%'}}>thông tin tầng</td>
                    <td style={{width: '25%'}}>Control</td>
                </tr>
            </thead>
            <tbody>
                {
                    floors.map((f,index)=>{
                        return (
                            <FloorItem floor={f} key={index} deleteFloor={props.deleteFloor} updateFloor={props.updateFloor}/>
                        )
                    })
                }
            </tbody>
        </table>
        </Fragment>
    )
}

export default FLoors