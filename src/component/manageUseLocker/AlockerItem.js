import React,{useState} from "react";
class ALockerItem extends React.Component{
    clickBoxLocker=()=>{
        this.props.clickBoxLocker(this.props.locker._id)
    }

    changeBox=()=>{
        this.props.changeBox(this.props.locker._id)
    }

    render(){
        return (
            <tr>
                <td><input type="checkbox" checked={this.props.locker.isCheck} onChange={this.changeBox} /></td>
                <td>{this.props.locker.cd.floor.building.name}</td>
                <td>{this.props.locker.cd.floor.name}</td>
                <td>{this.props.locker.cd.imei}</td>
                <td>{this.props.locker.label}</td>
                <td>{this.props.locker_user.some((data,index)=>{
                    //console.log('check',this.props.locker,index,data.lockerId,this.props.locker._id )
                    return data.lockerId==this.props.locker._id
                })?'Tủ đã được sử dụng':"Tủ chưa được sử dụng"}</td>
                    
            </tr>

        )
    }
}
export default ALockerItem