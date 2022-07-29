import React from "react";

class InputUser extends React.Component{
    constructor(props){
        super(props)
        const user=this.props.user
        if(user){
            this.state={
                name:user.name,
                ID_Employee:user.ID_Employee,
                department:user.department,
                email:user.email,
                vip:user.vip,
                statusPINCode:user.statusPINCode,
                card:user.card,
                warning:0
                
            }
        }else{
            this.state={
                name:"",
                ID_Employee:"",
                department:"",
                email:"",
                vip:"",
                statusPINCode:"",
                card:"",
                warning:0
            }
        }
    }

    setFarams=(event)=>{
        let name=event.target.name
        let value=event.target.value
        this.setState({[name]:value})
    }

    updateUser=(e)=>{
        e.preventDefault();
        if(!this.state.name){
            this.setState({warning:1})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.ID_Employee){
            this.setState({warning:2})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.statusPINCode){
            this.setState({warning:3})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else{
        this.props.updateUser(this.props.user._id,this.state)
        this.props.unDisplay()
        }
    }

    addUser=(e)=>{
        e.preventDefault();
        if(!this.state.name){
            this.setState({warning:1})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.ID_Employee){
            this.setState({warning:2})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.statusPINCode){
            this.setState({warning:3})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else{
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
            this.props.unDisplay()
        }
        
    }

    cancel=(e)=>{
        e.preventDefault();
        const user=this.props.user
        if(user){
            this.setState({
                name:user.name,
                ID_Employee:user.ID_Employee,
                department:user.department,
                email:user.email,
                vip:user.vip,
                statusPINCode:user.statusPINCode,
                card:user.card
            })
        }else{
            this.setState({
                name:"",
                ID_Employee:"",
                department:"",
                email:"",
                vip:"",
                statusPINCode:"",
                card:""
            })
        }
        this.props.unDisplay();
    }

    render(){
        return(
            <div className="modal">
                <div className="modal_inner">
                    <div className="modal_header">
                        <p>{this.props.nameButton} USER</p>
                    </div>
                    <div className="modal_body">
                    <form className="form-addUser" >
                    {this.state.warning==1&&<label style={{"color":'red', "fontSize":"15px" }}>Tên Không được để trống</label>}
                        <input
                                    type="text"
                                    className="input-text"
                                    name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.setFarams}
                            />
                        <br/>
                        {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>ID Không được để trống</label>}
                        <input
                                    type="text"
                                    className="input-text"
                                    name="ID_Employee"
                                    placeholder="ID_Employee"
                                    value={this.state.ID_Employee}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="department"
                                    placeholder="Department"
                                    value={this.state.department}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="vip"
                                    placeholder="vip"
                                    value={this.state.vip}
                                    onChange={this.setFarams}
                            />
                        <br/>
                        {this.state.warning==3&&<label style={{"color":'red', "fontSize":"15px" }}>StatusPINCode Không được để trống</label>}
                            <input
                                    type="text"
                                    className="input-text"
                                    name="statusPINCode"
                                    placeholder="StatusPINCode"
                                    value={this.state.statusPINCode}
                                    onChange={this.setFarams}
                            />
                        <br/>
                            <input
                                    type="text"
                                    className="input-text"
                                    name="card"
                                    placeholder="card"
                                    value={this.state.card}
                                    onChange={this.setFarams}
                            />
                        {/* <br/>
                        {
                        this.props.updateUser ? 
                        <input 
                                type="submit" 
                                value="update" 
                                className="input-submit"
                                onClick={this.updateUser}
                                /> :
                         <input 
                                type="submit" 
                                value="Add" 
                                className="input-submit"
                                onClick={this.addUser}
                                />   
                        } */}
                    </form>
                    </div>
                        <div className="modal_footer">
                        {
                        this.props.updateUser ? 
                        <input 
                                type="submit" 
                                value="update" 
                                className="input-submit"
                                onClick={this.updateUser}
                                /> :
                         <input 
                                type="submit" 
                                value="Add" 
                                className="input-submit"
                                onClick={this.addUser}
                                />   
                        }
                            <input onClick={this.cancel}
                                type="submit"
                                className="input-submit"
                                value="Cancel"
                             />
                        </div>
                </div>
            </div>
        )
    }
}

export default InputUser 