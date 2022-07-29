import React,{Fragment,useState,useEffect} from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import './ALTE.css'
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
        console.log("filter:",building,floor,controlDevice,label)
        setLockers( props.lockers.filter(l=>{
            console.log("locker:",l.cd)
                return l.cd&&(!building||(l.cd.floor.building.name.toUpperCase().includes(building.toUpperCase())))
                &&(!floor||(l.cd.floor.name.toUpperCase().includes(floor.toUpperCase())))
                &&(!controlDevice||(l.cd.imei.toUpperCase().includes(controlDevice.toUpperCase())))
                &&(!label||(l.label.toUpperCase().includes(label.toUpperCase())))
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
                    <td style={{width: '8%'}}></td>
                    <td style={{width: '18%'}}>Tòa nhà</td>
                    <td style={{width: '18%'}}>Tầng</td>
                    <td style={{width: '18%'}}>Thiết bị điều khiển</td>
                    <td style={{width: '18%'}}>Tủ</td>
                    <td style={{width: '20%'}}>Tình trạng phần tủ</td>
                </tr>
            </thead>
            <tbody>
            {
                lockers.map((l,index)=>{
                    if(l.label) return <LockerItem locker={l} key={index} clickBoxLocker={props.clickBoxLocker} user_locker={props.user_locker}/> 
                })
                }
            </tbody>
        </table>
        </div>
    )
}

export default Lockers