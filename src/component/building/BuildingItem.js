import React,{ useState } from "react";
import InputBuilding from "./InputBuilding";
import { AiFillEdit, } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import PopupQuetion from "../layout/PopupQuetion";
class BuildingItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayUpdate: "none",
            displayPopup:"none"
        }
    }

    changeDisplayPopup=()=>{
        if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
        else this.setState({displayPopup:'none'})
    }

    deleteBuilding=()=>{
        this.props.deleteBuilding(this.props.building._id)
    }

    updateBuilding=(id,newBuilding)=>{
        this.setState({displayUpdate:"none"})
        this.props.updateBuilding(id,newBuilding)
    }

    unDisplay=()=>{
        this.setState({displayUpdate: "none"})
    }

    render(){
        return (
            <tr>
            <td >
                    <div style={{display: this.state.displayUpdate}}>
                        <InputBuilding building={this.props.building} nameButton={"Update"} updateBuilding={this.updateBuilding} unDisplay={this.unDisplay}/>
                    </div>
                </td>
                <td >{this.props.building.name}</td>
                <td>{this.props.building.address}</td>
                <td>{this.props.building.info}</td>
                
                <td >
                <button className="btn-style" onClick={this.changeDisplayPopup}>
                <div style={{"display":this.state.displayPopup}}>
                    <PopupQuetion unDisplayPopup={this.changeDisplayPopup} action={this.deleteBuilding} text={"Bạn có chắc chắn muốn xóa tòa nhà này"}/>
                    </div>

                     <ImBin/> </button>
                
                <button className="btn-style" onClick={()=>{
                        this.setState({displayUpdate: "block"})
                    }}><AiFillEdit/></button>
                </td>
                
            </tr>
        )
    }
}

export default BuildingItem