import React,{useState} from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'
import {BsFillPuzzleFill} from 'react-icons/bs'
import PopupQuetion from "../layout/PopupQuetion";
class UserItem extends React.Component{
    constructor(props){
        super(props)
        this.state={displayPopup:'none'}
    }

    targetUser=()=>{
        console.log(this.props.locker_user)
        this.props.targetUser(this.props.user._id)
        
    }

    deletePermissionUser=()=>{
        this.props.deletePermissionUser(this.props.user._id)
        this.setState({displayPopup:'none'})
    }

    changeDisplayPopupUser=()=>{
        if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
        else this.setState({displayPopup:'none'})
      }

    render(){
        return (
            <tr onClick={this.targetUser}>

                 
                <td>{this.props.user.name}<div style={{"display":this.state.displayPopup}}>
                     <PopupQuetion unDisplayPopup={this.changeDisplayPopupUser} action={this.deletePermissionUser} text={"adfafadsfadsfadfasdfbc"}/>
                </div></td>
                <td>{this.props.user.ID_Employee}</td>
                <td >{this.props.user.department}</td>
                <td>{this.props.locker_user.reduce((total,item)=>{
                    console.log('da vao')
                    if(item.userId==this.props.user._id) return total+1
                    else return total
                },0)}</td>
                <td><BsFillPuzzleFill size={20} className='icon' onClick={this.props.setDisplayAdd}/><RiDeleteBin6Line size={20} className='icon' onClick={this.changeDisplayPopupUser}/></td>
                
                    
            </tr>

        )
    }
}
export default UserItem