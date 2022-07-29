import React from "react";

class InputBuilding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "",
      address: "",
      info: "",
    };
  }

  addBuilding = (e) => {
    e.preventDefault();
    this.props.addBuilding(this.state);
    this.setState({
      name: "",
      address: "",
      info: "",
    });
    this.props.unDisplay();
  };
  setFarams = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  cancel=()=>{
      this.setState({
        name: "",
        address: "",
        info: "",
      })
      this.props.unDisplay();
  }

  render() {
      return(
        <div className="modal">
        <div className="modal_inner">
          <div className="modal_header">
            <p>{this.props.nameButton} Building</p>
          </div>
          <div className="modal_body">
            <form className="form" onSubmit={this.addBuilding}>
              <input
                type="text"
                placeholder="Name"
                className="input-text"
                name="name"
                value={this.state.name}
                onChange={this.setFarams}
              />
              <br />
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
              <br />
              <input type="submit" value="Add" className="input-submit" />
            </form>
          </div>
          <div className="modal_footer">
            <button onClick={this.cancel} >Cancel</button>
          </div>
        </div>
      </div>
      )
    
  }

}

export default InputBuilding;
