import React,{useState} from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'
import PopupQuetion from "../layout/PopupQuetion";
class LockerItem extends React.Component{

    constructor(props){
        super(props)
        this.state={displayPopup:'none'}
    }

    deleteUserfromLocker=()=>{
        this.props.deleteUserfromLocker(this.props.locker.lockerId._id)
        this.setState({displayPopup:'none'})
    }
    changeDisplayPopupLocker=()=>{
        if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
        else this.setState({displayPopup:'none'})
      }

    render(){
        return (
            
            <tr>
            
                <td>{this.props.locker.lockerId.cd.floor.building.name}<div style={{"display":this.state.displayPopup}}>
                     <PopupQuetion unDisplayPopup={this.changeDisplayPopupLocker} action={this.deleteUserfromLocker} text={"adfafadsfadsfadfasdfbc"}/>
                </div></td>
                <td>{this.props.locker.lockerId.cd.floor.name}</td>
                <td>{this.props.locker.lockerId.cd.imei}</td>
                <td>{this.props.locker.lockerId.label}</td>
                <td>{this.props.locker_user.some((data,index)=>{
                    //console.log('check',this.props.locker,index,data.lockerId,this.props.locker._id )
                    return data.lockerId==this.props.locker.lockerId._id
                })?'Tủ đã được sử dụng':"Tủ chưa được sử dụng"}</td>
                <td><RiDeleteBin6Line className="icon" onClick={this.changeDisplayPopupLocker}/></td>
                    
            </tr>

        )
    }
}
export default LockerItem