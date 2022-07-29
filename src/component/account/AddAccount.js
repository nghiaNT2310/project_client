import React from "react";
import AddBuilding from "../building/AddBuilding";

class AddAccount extends React.Component {
  constructor(props) {
    super(props);
    
        this.state = {
        username:"",
        password:"",
        role:"",
        warning:0
        };
    
  }

  addAccount = (e) => {
    e.preventDefault();
    if(!this.state.username){
      this.setState({warning:1})
      setTimeout(()=>{
          this.setState({warning: 0})
        },3000)
  }else if(!this.state.password){
      this.setState({warning:2})
      setTimeout(()=>{
          this.setState({warning: 0})
        },3000)
  }else if(!this.state.role){
    this.setState({warning:3})
    setTimeout(()=>{
        this.setState({warning: 0})
      },3000)
}else{
    console.log(this.state)
    this.props.addAccount(this.state);
    this.setState({
        username:"",
        password:"",
        role:""
    });
    this.props.unDisplay();
  }
  };

  setFarams = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  cancel=()=>{
      
        this.setState({
            username:"",
            password:"",
            role:""
        })
    
      this.props.unDisplay();
  }

  

  render() {
      return(
        <div className="modal">
        <div className="modal_inner">
          <div className="modal_header">
            <p>Thêm tài khoản</p>
          </div>
          <div className="modal_body">
            <form className="form" >
            {this.state.warning==1&&<label style={{"color":'red', "fontSize":"15px" }}>Tài khoản Không được để trống</label>}
              <input
                type="text"
                placeholder="Tài khoản"
                className="input-text"
                name="username"
                value={this.state.username}
                onChange={this.setFarams}
              />
              <br />
              {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>Mật khẩu Không được để trống</label>}
              <input
                type="text"
                placeholder="Mật khẩu"
                className="input-text"
                name="password"
                value={this.state.password}
                onChange={this.setFarams}
              />
              <br />
              {this.state.warning==3&&<label style={{"color":'red', "fontSize":"15px" }}>Bạn chưa chọn quyền hạn</label>}
              <select name="role" className="select_small" value={this.state.role} onChange={this.setFarams} style={{width: '260px'}}>
              <option value="" selected disabled hidden>Quyền hạn</option>
              <option  value={0} >0</option>
              <option  value={1}>1</option>
                </select>
        
 
            </form>
          </div>
          <div className="modal_footer">
            
                
                <input type="submit" value="Add" className="input-submit"  onClick={this.addAccount}/>
              
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

export default AddAccount;
