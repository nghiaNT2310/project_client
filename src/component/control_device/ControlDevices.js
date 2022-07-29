import React, { Fragment, useState,useEffect } from "react";
import ControlDeviceItem from "./ControlDeviceItem";
import {AiOutlineSearch} from 'react-icons/ai'
function ControlDevices(props){
    const [building,setBuilding]=useState("")
    const [floor,setFloor]=useState("")
    const [imei,setImei]=useState("")
    const [controlDevices,setControlDevice]=useState(props.controlDevices)

    var SetFloor=(event)=>{
        setFloor(event.target.value)
    }

    var SetBuilding=(event)=>{
        setBuilding(event.target.value)
    }

    var SetImei=(event)=>{
        setImei(event.target.value)
    }
    useEffect(()=>{
        setControlDevice(props.controlDevices)
      },[props.controlDevices])

    var filterControlDevice=()=>{
        setControlDevice( props.controlDevices.filter(cd=>{
                return (!building||(cd.floor.building.name.toUpperCase().includes(building.toUpperCase())))&&(!floor||(cd.floor.name.toUpperCase().includes(floor.toUpperCase())))&&(!imei||(cd.imei.toUpperCase().includes(imei.toUpperCase())))
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
 
            <input
                type="text"
                className="input_text_search"
                name="floor"
                placeholder="Tầng"
                value={floor}
                onChange={SetFloor}
                />

            <input
                type="text"
                className="input_text_search"
                name="imei"
                placeholder="Mã thiết bị"
                value={imei}
                onChange={SetImei}
                />
         <button className='btn_search' onClick={filterControlDevice}><AiOutlineSearch/></button>
 
       </div>
        
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td style={{width:'10%'}}>Tòa nhà</td>
                    <td style={{width:'10%'}}>Tầng</td>
                    <td style={{width:'20%'}}>imei</td>
                    <td style={{width:'10%'}}>MAC</td>
                    <td style={{width:'10%'}}>Khu vực</td>
                    <td style={{width:'10%'}}>Quản lý cụm tủ</td>
                    <td style={{width:'10%'}}>Thời điểm dùng cuối</td>
                    <td style={{width:'20%'}}>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    controlDevices.map((cd,index)=>{
                        return(
                            <ControlDeviceItem key={index} buildings={props.buildings} floors={props.floors} controlDevice={cd} deleteControlDevice={props.deleteControlDevice} updateControlDevice={props.updateControlDevice}/>
                        )
                    })
                }
            </tbody>
        </table>
        </Fragment>
    )
}
export default ControlDevices;