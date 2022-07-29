import React from "react";
import UpdateConstrolDevice from "./UpdateControlDevice";
import { AiFillEdit, } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import {VscAdd} from 'react-icons/vsc'
import PopupQuetion from "../layout/PopupQuetion";
class ControlDeviceItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayUpdate: "None",
            displayPopup:"none"
        }
    }

    changeDisplayPopup=()=>{
        if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
        else this.setState({displayPopup:'none'})
    }

    deleteControlDevice=()=>{
        this.props.deleteControlDevice(this.props.controlDevice._id)
    }

    unDisplay=()=>{
        this.setState({displayUpdate:"none"})
    }
    updateControlDevice=(id,newControlDevice)=>{
        this.setState({displayUpdate:"none"})
        this.props.updateControlDevice(id,newControlDevice)
    }

    render(){
        return(
            <tr>
                <td>
                    <div style={{display : this.state.displayUpdate}}>
                        <UpdateConstrolDevice controlDevice={this.props.controlDevice} buildings={this.props.buildings} floors={this.props.floors} unDisplay={this.unDisplay} updateControlDevice={this.props.updateControlDevice}/>
                    </div>
                </td>
                <td>{this.props.controlDevice.floor.building.name}</td>
                <td>{this.props.controlDevice.floor.name}</td>
                <td>{this.props.controlDevice.imei}</td>
                <td>{this.props.controlDevice.mac}</td>
                <td>{this.props.controlDevice.area}</td>
                <td></td>
                <td></td>
                <td>
                <button className="btn-style" onClick={this.changeDisplayPopup}>
                <div style={{"display":this.state.displayPopup}}>
                    <PopupQuetion unDisplayPopup={this.changeDisplayPopup} action={this.deleteControlDevice} text={"Bạn có chắn chắn muốn xóa thiết bị này"}/>
                    </div>
                <ImBin/></button>
                <button className="btn-style" onClick={()=>{
                        this.setState({displayUpdate:"block"})
                    }}><AiFillEdit/></button>

                
                </td>
                
            </tr>
        )
    }
}
export default ControlDeviceItem