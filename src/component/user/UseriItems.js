import React,{ useState } from "react";
import InputUser from "./InputUser";
import { AiFillEdit, } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import PopupQuetion from "../layout/PopupQuetion";


class UserItems extends React.Component{
    constructor(props){
        super(props)
       
        this.state={
            displayUpdate: "none",
            displayPopup:"none"
        }
     }

    

    changeDisplayPopup=()=>{
            if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
            else this.setState({displayPopup:'none'})
        }

    deleteUser=()=>{
            console.log(this.props.user)
            this.props.deleteUser(this.props.user._id)
        }
    
    
    updateUser=(id,newUser)=>{
        this.setState({displayUpdate: "none"})
        this.props.updateUser(id,newUser)
    }

    unDisplay=()=>{
        this.setState({displayUpdate: "none"})
    }

    render(){
        return(
            <tr>
                <td >
                    <div style={{display: this.state.displayUpdate}}>
                        <InputUser user={this.props.user} nameButton={"Update"} updateUser={this.updateUser} unDisplay={this.unDisplay}/>
                    </div>
                </td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.ID_Employee}</td>
                <td>{this.props.user.department}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.vip}</td>
                <td>{this.props.user_locker.some(data=>{
                    return data.userId==this.props.user._id
                })?'Đã được phân tủ':"Chưa được phân tủ"}</td>
                <td>{this.props.user.statusPINCode}</td>
                <td>{this.props.user.card}</td>
                <td> 
                    <button className="btn-style" onClick={this.changeDisplayPopup}>
                    <div style={{"display":this.state.displayPopup}}>
                    <PopupQuetion unDisplayPopup={this.changeDisplayPopup} action={this.deleteUser} text={"Bạn chắc chắn muốn xóa người dùng này"}/>
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

export default UserItems