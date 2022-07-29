import React,{ useState } from "react";
import { AiFillEdit, } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import PopupQuetion from "../layout/PopupQuetion";

class AccountItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayPopup:"none"
        }
    }

    changeDisplayPopup=()=>{
        if(this.state.displayPopup=='none') this.setState({displayPopup:'block'})
        else this.setState({displayPopup:'none'})
    }

    deleteAccount=()=>{
        this.props.deleteAccount(this.props.account._id)
    }


    

    render(){
        return (
            <tr>
                <td></td>
                <td >{this.props.account.username}</td>
                <td>{this.props.account.role<=0?"super admin":"admin"}</td>
                
                <td >
                <button className="btn-style" onClick={this.changeDisplayPopup}>
                <div style={{"display":this.state.displayPopup}}>
                    <PopupQuetion unDisplayPopup={this.changeDisplayPopup} action={this.deleteAccount} text={"Bạn có chắc muốn xóa tài khoản"}/>
                    </div>

                     <ImBin/> </button>
                </td>
                
            </tr>
        )
    }
}

export default AccountItem