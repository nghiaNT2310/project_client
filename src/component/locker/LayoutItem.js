import React from "react";
import axios from 'axios'
import UpdateLocker from "./UpdateLocker";
import { VscNoNewline } from "react-icons/vsc";
class LayoutItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display: false,
            canChange: true
        }
        
        
    }

    


   setDisplay=()=>{
     if(this.state.canChange){
        this.setState({
            canChange:false,
            display: true
        })
     }
   }

   unDisplay=()=>{
    this.setState({
        canChange: true,
        display: false
    })
   }

   

    render(){
        return(
           
                
                <div className='layout_item'  onClick={this.setDisplay}>
                    <p className="lockerItem lockerp1">stt: {this.props.locker.stt}</p>
                    <p className="lockerItem lockerp2">{this.props.locker.label}</p>
                    <div style={{display: (this.state.display?"Block":"none")}} >
                        <UpdateLocker locker={this.props.locker} unDisplay={this.unDisplay} updateLocker={this.props.updateLocker} deleteLocker={this.props.deleteLocker}/>
                    </div>
                </div>
          
            
        )
    }
}

export default LayoutItem