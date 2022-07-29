import React, { useState } from "react";



class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            ID_Employee:"",
            department:"",
            email:"",
            vip:"",
            statusPINCode:"",
            card:""
        }
    }

     addUser = e => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name:"",
            ID_Employee:"",
            department:"",
            email:"",
            vip:"",
            statusPINCode:"",
            card:""
        })
    };
    
     setFarams=(event)=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }

    render(){
    return(
        <form className="form" onSubmit={this.addUser}>
            <input
                    type="text"
                    placeholder="Name"
                    className="input-text"
                    name="name"
                    value={this.state.name}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="ID"
                    className="input-text"
                    name="ID_Employee"
                    value={this.state.ID_Employee}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Department"
                    className="input-text"
                    name="department"
                    value={this.state.department}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Email"
                    className="input-text"
                    name="email"
                    value={this.state.email}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Vip"
                    className="input-text"
                    name="vip"
                    value={this.state.vip}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="statusPINCode"
                    className="input-text"
                    name="statusPINCode"
                    value={this.state.statusPINCode}
                    onChange={this.setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="card"
                    className="input-text"
                    name="card"
                    value={this.state.card}
                    onChange={this.setFarams}
            />
            <br/>
            <input 
                    type="submit" 
                    value="Add" 
                    className="input-submit"/>
        </form>
    )
    }
}
export default AddUser