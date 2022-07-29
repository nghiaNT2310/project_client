import React,{useState} from "react";
class LockerItem extends React.Component{
    clickBoxLocker=()=>{
        this.props.clickBoxLocker(this.props.locker._id)
    }
    render(){
        return (
            <tr>
                <td><input type="checkbox" checked={this.props.locker.isCheck} onChange={this.clickBoxLocker} /></td>
                <td>{this.props.locker.cd.floor.building.name}</td>
                <td>{this.props.locker.cd.floor.name}</td>
                <td>{this.props.locker.cd.imei}</td>
                <td>{this.props.locker.label}</td>
                <td>{this.props.user_locker.some(data=>{
                    return data.lockerId==this.props.locker._id
                })?'Tủ đã được sử dụng':"Tủ chưa được sử dụng"}</td>
                    
            </tr>

        )
    }
}
export default LockerItem