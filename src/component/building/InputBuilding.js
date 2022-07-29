import React from "react";

class InputBuilding extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.building){
        const building=this.props.building
        this.state = {
            name: building.name,
            address: building.address,
            info: building.info,
            warning:0
            };
    }else{
        this.state = {
        name: "",
        address: "",
        info: "",
        warning:0
        };
    }
  }

  addBuilding = (e) => {
    e.preventDefault();
    if(!this.state.name){
      this.setState({warning:1})
      setTimeout(()=>{
          this.setState({warning: 0})
        },3000)
  }else if(!this.state.address){
      this.setState({warning:2})
      setTimeout(()=>{
          this.setState({warning: 0})
        },3000)
  }else{
    this.props.addBuilding(this.state);
    this.setState({
      name: "",
      address: "",
      info: "",
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
      if(this.props.building){
        const building=this.props.building
        this.setState( {
            name: building.name,
            address: building.address,
            info: building.info
            });
      }else{
        this.setState({
            name: "",
            address: "",
            info: "",
        })
    }
      this.props.unDisplay();
  }

  updateBuilding=(e)=>{
      e.preventDefault();
      if(!this.state.name){
        this.setState({warning:1})
        setTimeout(()=>{
            this.setState({warning: 0})
          },3000)
    }else if(!this.state.address){
        this.setState({warning:2})
        setTimeout(()=>{
            this.setState({warning: 0})
          },3000)
    }else{
      this.props.updateBuilding(this.props.building._id,this.state)
      this.props.unDisplay()
    }
  }

  render() {
      return(
        <div className="modal">
        <div className="modal_inner">
          <div className="modal_header">
            <p>{this.props.nameButton} Building</p>
          </div>
          <div className="modal_body">
            <form className="form" >
            {this.state.warning==1&&<label style={{"color":'red', "fontSize":"15px" }}>Tên Không được để trống</label>}
              <input
                type="text"
                placeholder="Name"
                className="input-text"
                name="name"
                value={this.state.name}
                onChange={this.setFarams}
              />
              <br />
              {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>Địa chỉ Không được để trống</label>}
              <input
                type="text"
                placeholder="Address"
                className="input-text"
                name="address"
                value={this.state.address}
                onChange={this.setFarams}
              />
              <br />
              <input
                type="text"
                placeholder="Info"
                className="input-text"
                name="info"
                value={this.state.info}
                onChange={this.setFarams}
              />
 
            </form>
          </div>
          <div className="modal_footer">
            {
                this.props.updateBuilding?
                <input type="submit" value="Update" className="input-submit"  onClick={this.updateBuilding}/> :
                <input type="submit" value="Add" className="input-submit"  onClick={this.addBuilding}/>
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

export default InputBuilding;
