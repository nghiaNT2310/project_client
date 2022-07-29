import React from "react";

class AddFloor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            building:"",
            name:"",
            info:"",
            warning:0
        }
    }

    setFarams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
      };

    addFloor=(e)=>{
        e.preventDefault();
        if(!this.state.building){
            this.setState({warning:1})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.name){
            this.setState({warning:2})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else{
        this.props.addFloor(this.state);
        console.log(this.state)
        this.setState({
            building:"",
            name:"",
            info:""
        })
        this.props.unDisplay();
    }
    }

    cancel=(e)=>{
        e.preventDefault();
        this.setState({
            id_building:"",
            name:"",
            info:""
        })
        this.props.unDisplay();
    }

    render(){
        return(
            <div className="modal">
                <div className="modal_inner">
                    <div className="modal_header">
                        Add floor
                    </div>
                    <div className="modal_body">
                    <form className="form" >
                    {this.state.warning==1&&<label style={{"color":'red', "fontSize":"15px" }}>Bạn chưa chọn tòa nhà</label>}
                        <select className="select_longer" name="building" value={this.state.building} onChange={this.setFarams}>
                        <option value="" selected disabled hidden>Chọn tòa nhà</option>
                            {
                                this.props.buildings.map((building,index)=>{
                                    return <option key={index} value={building._id}>{building.name}</option>
                                })
                            }
                        </select>
                        <br/>
                        {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>Tên Không được để trống</label>}
                        <input
                            type="text"
                            placeholder="Name"
                            className="input-text"
                            name="name"
                            value={this.state.name}
                            onChange={this.setFarams}
                        />
                        <input
                            type="text"
                            placeholder="info"
                            className="input-text"
                            name="info"
                            value={this.state.info}
                            onChange={this.setFarams}
                        />  
                    </form>
                    </div>
                    <div className="modal_footer">
                         
                            <input 
                                type="submit" 
                                value="Add" 
                                className="input-submit"
                                onClick={this.addFloor}
                                />  
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

export default AddFloor