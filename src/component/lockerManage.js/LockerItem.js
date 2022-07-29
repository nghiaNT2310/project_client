import React from "react";
import axios from 'axios'

import { VscNoNewline } from "react-icons/vsc";
class LockerItem extends React.Component{
    constructor(props){
        super(props);
        
        
        
    }

    render(){
        return(
             this.props.locker.label?
                <div className='layout_item'  >
                    <p className="lockerItem lockerp1">{this.props.locker.stt}</p>
                    <p className="lockerItem lockerp2">{this.props.locker.label}</p>
                    <p className="lockerItem lockerp2">{this.props.user_locker.reduce((total,item)=>{
                        if(this.props.locker._id==item.lockerId){
                            let res=""
                            this.props.users.forEach((user)=>{
                                if(user._id==item.userId) res+=user.name+" "+user.ID_Employee
                            })
                            return total+res
                        }
                        else return total+""
                    },"")?
                    this.props.user_locker.reduce((total,item)=>{
                        if(this.props.locker._id==item.lockerId){
                            let res=""
                            this.props.users.forEach((user)=>{
                                if(user._id==item.userId) res+=user.name+" "+user.ID_Employee
                            })
                            return total+res
                        }
                        else return total+""
                    },""):"Tủ trống"}</p>
                    
                </div>
                :
                <div className='layout_item_empty'  >
                    {/* <p className="lockerItem lockerp1">{this.props.locker.stt}</p>
                    <p className="lockerItem lockerp2">Tủ trống</p> */}
                    <p className="lockerItem lockerp1"></p>
                    <p className="lockerItem lockerp2"></p>
                    <p className="lockerItem lockerp2">{""}</p>
                </div>
            
            
        )
    }
}

export default LockerItem