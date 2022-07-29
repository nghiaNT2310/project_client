import React,{Fragment,useState,useEffect} from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import './ManageUseLocker.css'
import LockerItem from "./LockerItem";
function Lockers(props){
    const [building,setBuilding]=useState("")
    const [floor,setFloor]=useState("")
    const [label,setLabel]=useState("")
    const [controlDevice,setControlDevice]=useState("")
    const [lockers,setLockers]=useState(props.lockers)
    var SetFloor=(event)=>{
        setFloor(event.target.value)
    }

    var SetBuilding=(event)=>{
        setBuilding(event.target.value)
    }
    var SetControlDevice=(event)=>{
        setControlDevice(event.target.value)
    }

    var SetLabel=(event)=>{
        setLabel(event.target.value)
    }
    useEffect(()=>{
        setLockers(props.lockers)
      },[props.lockers])

    var filterLocker=()=>{
        console.log("filter2:",props.lockers)
        setLockers( props.lockers.filter(l=>{
                return (!building||(l.lockerId.cd.floor.building.name.toUpperCase().includes(building.toUpperCase())))
                &&(!floor||(l.lockerId.cd.floor.name.toUpperCase().includes(floor.toUpperCase())))
                &&(!controlDevice||(l.lockerId.cd.imei.toUpperCase().includes(controlDevice.toUpperCase())))
                &&(!label||(l.lockerId.label.toUpperCase().includes(label.toUpperCase())))
        }))
        
        }
    return(
        <div className="divPart" >
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
                name="controlDevice"
                placeholder="Thiết bị điều khiển"
                value={controlDevice}
                onChange={SetControlDevice}
                />

            <input
                type="text"
                className="input_text_search"
                name="label"
                placeholder="Nhãn tủ"
                value={label}
                onChange={SetLabel}
                />
         <button className='btn_search' onClick={filterLocker}><AiOutlineSearch/></button>
 
       </div>
        
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <td style={{width: '18%'}}>Tòa nhà</td>
                    <td style={{width: '18%'}}>Tầng</td>
                    <td style={{width: '18%'}}>Thiết bị điều khiển</td>
                    <td style={{width: '18%'}}>Tủ</td>
                    <td style={{width: '20%'}}>Tình trạng phần tủ</td>
                    <td style={{width: '8%'}}>Action</td>
                </tr>
            </thead>
            <tbody>
            {
                lockers.map((l,index)=>{
                     return <LockerItem locker={l} key={index} deleteUserfromLocker={props.deleteUserfromLocker} locker_user={props.locker_user}/> 
                })
                }
            </tbody>
        </table>
        </div>
    )
}

export default Lockers