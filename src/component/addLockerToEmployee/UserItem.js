import React,{useState} from "react";
class UserItem extends React.Component{

    clickBoxUser=()=>{
        this.props.clickBoxUser(this.props.user._id)
    }

    render(){
        return (
            <tr>
                <td><input type="checkbox" checked={this.props.user.isCheck} onChange={this.clickBoxUser} /></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.ID_Employee}</td>
                <td>{this.props.user.department}</td>
                <td>{this.props.user_locker.some(data=>{
                    return data.userId==this.props.user._id
                })?'Đã được phân tủ':"Chưa được phân tủ"}</td>
                
                    
            </tr>

        )
    }
}
export default UserItem