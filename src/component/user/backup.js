import React,{ useState } from "react";
import InputUser from "./InputUser";

function UserItems2(props){
    const [state, setState] = useState({
            name:props.user.name,
            ID_Employee:props.user.ID_Employee,
            department:props.user.department,
            email:props.user.email,
            vip:props.user.vip,
            statusPINCode:props.user.statusPINCode,
            card:props.user.card
        });

    const setFarams=(event)=>{
        let name=event.target.name
        let value=event.target.value
        setState({ [name]:value})
        console.log(state)
    }
    const updateUser=(e)=>{
        e.preventDefault();
        var newUser={
            name:state.name,
            ID_Employee:state.ID_Employee,
            department:state.department,
            email:state.email,
            vip:state.vip,
            statusPINCode:state.statusPINCode,
            card:state.card
        }
        console.log(newUser)
        props.updateUser(props.user.id_user,newUser)
    }
    return(
        <tr>
            <td>{props.user.name}</td>
            <td>{props.user.ID_Employee}</td>
            <td>{props.user.department!=="undefined"?props.user.department:""}</td>
            <td>{props.user.email!=="undefined"?props.user.email:""}</td>
            <td>{props.user.vip!=="undefined"?props.user.vip:""}</td>
            <td>{props.user.statusPINCode}</td>
            <td>{props.user.card!=="undefined"?props.user.card:""}</td>
            <button className="btn-style" onClick={() => {
                props.deleteUser(props.user.id_user)}}> X </button>
            <div>
            <InputUser/>
            <form className="form-addUser" onSubmit={updateUser}>
            <input
                    type="text"
                    placeholder="Name"
                    className="input-text"
                    name="name"
                    value={state.name}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="ID"
                    className="input-text"
                    name="ID_Employee"
                    value={state.ID_Employee}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Department"
                    className="input-text"
                    name="department"
                    value={state.department!=="undefined"?state.department:""}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Email"
                    className="input-text"
                    name="email"
                    value={state.email!=="undefined"?state.email:""}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="Vip"
                    className="input-text"
                    name="vip"
                    value={state.vip!=="undefined"?state.vip:""}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="statusPINCode"
                    className="input-text"
                    name="statusPINCode"
                    value={state.statusPINCode}
                    onChange={setFarams}
            />
            <br/>
             <input
                    type="text"
                    placeholder="card"
                    className="input-text"
                    name="card"
                    value={state.card!=="undefined"?state.card:""}
                    onChange={setFarams}
            />
            <br/>
            <input 
                    type="submit" 
                    value="update" 
                    className="input-submit"/>
        </form>
        <button className="btn-style" onClick={() => {
                props.deleteUser(props.user.id_user)}}> X </button>
            </div>
        </tr>
    )
}

class UserItems extends React.Component{
    constructor(props){
        super(props)
        const user=this.props.user
        this.state={
            name:user.name,
            ID_Employee:user.ID_Employee,
            department:user.department,
            email:user.email,
            vip:user.vip,
            statusPINCode:user.statusPINCode,
            card:user.card,
            displayUpdate: "none",
        }
    }

    setFarams=(event)=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }
    
    updateUser=(e)=>{
        e.preventDefault();
        var newUser={
            name:this.state.name,
            ID_Employee:this.state.ID_Employee,
            department:this.state.department,
            email:this.state.email,
            vip:this.state.vip,
            statusPINCode:this.state.statusPINCode,
            card:this.state.card
        }
        this.setState({displayUpdate: "none"})
        this.props.updateUser(this.props.user.id_user,newUser)
    }
    render(){
        return(
            <tr>
                <td><InputUser/></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.ID_Employee}</td>
                <td>{this.props.user.department!=="undefined"?this.props.user.department:""}</td>
                <td>{this.props.user.email!=="undefined"?this.props.user.email:""}</td>
                <td>{this.props.user.vip!=="undefined"?this.props.user.vip:""}</td>
                <td>{this.props.user.statusPINCode}</td>
                <td>{this.props.user.card!=="undefined"?this.props.user.card:""}</td>
                <td> 
                    <button className="btn-style" onClick={() => {
                        this.props.deleteUser(this.props.user.id_user)}}> X </button>
                    <button className="btn-style" onClick={()=>{
                        this.setState({displayUpdate: "block"})
                    }}>UPDATE</button>
                </td>
                
                 <div style={{display: this.state.displayUpdate}}>
                    <form className="form-addUser" onSubmit={this.updateUser}>
                        <input
                                    type="text"
                                    className="input-text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.setFarams}
                            />
                        <br/>
                        <input
                                    type="text"
                                    className="input-text"
                                    name="ID_Employee"
                                    value={this.state.ID_Employee}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="department"
                                    value={this.state.department!=="undefined"?this.state.department:""}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="email"
                                    value={this.state.email!=="undefined"?this.state.email:""}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="vip"
                                    value={this.state.vip!=="undefined"?this.state.vip:""}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="statusPINCode"
                                    value={this.state.statusPINCode}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="card"
                                    value={this.state.card!=="undefined"?this.state.card:""}
                                    onChange={this.setFarams}
                            />
                        <br/>
                        <input 
                                type="submit" 
                                value="update" 
                                className="input-submit"/>
                    </form>
    
                </div>
                
            </tr>
        )
    }

    
    
}

export default UserItems