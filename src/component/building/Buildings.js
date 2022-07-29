import React, { Fragment, useEffect, useState } from "react";
import BuildingItem from "./BuildingItem";
import {AiOutlineSearch} from 'react-icons/ai'
function Buildings(props) {

  const [state,setstate]=useState(props.buildings)

  const[name,setName]=useState("")
  const [address,setAddress]=useState("")

  var SetName=(event)=>{
    setName(event.target.value)
  }

  var SetAddress=(event)=>{
    setAddress(event.target.value)
  }

  var filterBuilding=()=>{
    console.log(state)
    setstate( props.buildings.filter(building=>{
            return (!name||(building.name.toUpperCase().includes(name.toUpperCase())))&&(!address||(building.address.toUpperCase().includes(address.toUpperCase())))
    }))
    }



  useEffect(()=>{
    setstate(props.buildings)
  },[props.buildings])


  return (
    <Fragment>
      <div className='search'>
        
       <input
                type="text"
                className="input_text_search"
                name="name"
                placeholder="Tên tòa nhà"
                value={name}
                onChange={SetName}
                />
        <input
                type="text"
                className="input_text_search"
                name="address"
                placeholder="Địa chỉ tòa nhà"
                value={address}
                onChange={SetAddress}
                />
         <button className='btn_search' onClick={filterBuilding}><AiOutlineSearch/></button>
 
       </div>
    
    <table >
      <thead>
        <tr>
          <td></td>
          <td style={{width: '25%'}}>Tên tòa nhà</td>
          <td style={{width: '25%'}}>Địa chỉ</td>
          <td style={{width: '25%'}}>thông tin tòa nhà</td>
          <td style={{width: '25%'}}>Control</td>
        </tr>
      </thead>
      <tbody>
        {state.map((b,index) => {
          return (
            <BuildingItem
              building={b}
              key={index}
              deleteBuilding={props.deleteBuilding}
              updateBuilding={props.updateBuilding}
            />
          );
        })}
      </tbody>
    </table>
    </Fragment>
  );
}

export default Buildings;
