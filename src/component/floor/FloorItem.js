import React from "react";
import UpdateFloor from "./UpdateFloor";
import { AiFillEdit, } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import PopupQuetion from "../layout/PopupQuetion";
class FloorItem extends React.Component{
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

    deleteFloor=()=>{
        this.props.deleteFloor(this.props.floor._id)
    }

    updateFloor=(id,newFloor)=>{
        this.setState({displayUpdate:"none"})
        this.props.updateFloor(id,newFloor)
    }

    unDisplay=()=>{
        this.setState({displayUpdate:"none"})
    }

    render(){
        return(
            <tr>
                <td >
                    <div style={{display : this.state.displayUpdate}}>
                        <UpdateFloor floor={this.props.floor} unDisplay={this.unDisplay} updateFloor={this.props.updateFloor}/>
                    </div>
                </td>
                <td>{this.props.floor.building.name}</td>
                <td>{this.props.floor.name}</td>
                <td>{this.props.floor.info}</td>
                <td>
                    <button className="btn-style" onClick={this.changeDisplayPopup}>
                    <div style={{"display":this.state.displayPopup}}>
                    <PopupQuetion unDisplayPopup={this.changeDisplayPopup} action={this.deleteFloor} text={"Bạn có chắc chắn muốn xóa tầng này"}/>
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

export default FloorItem