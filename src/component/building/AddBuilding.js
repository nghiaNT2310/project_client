import React, { useState } from "react";

class AddBuilding extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:new Date(),
            name:"",
            address:"",
            info:""
        }
    }
    addBuilding = e=>{
        e.preventDefault();
        this.props.addBuilding(this.state);
        this.setState({
            name:"",
            address:"",
            info:""
        })
    }
    setFarams=(event)=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }

    render(){
        return (
            <form className="form" onSubmit={this.addBuilding}>
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
                    placeholder="Address"
                    className="input-text"
                    name="address"
                    value={this.state.address}
                    onChange={this.setFarams}
                 />
                <br/>
                <input
                    type="text"
                    placeholder="Info"
                    className="input-text"
                    name="info"
                    value={this.state.info}
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

export default AddBuilding