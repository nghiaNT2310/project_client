import React from "react";
class UpdateFloor extends React.Component{
    constructor(props){
        super(props);
        this.state={
            building: this.props.floor.building._id,
            name: this.props.floor.name,
            info: this.props.floor.info,
            warning:0
        }
        
    }

    changInfo=(event)=>{
        this.setState({info: event.target.value})
    }

    cancel=(e)=>{
        e.preventDefault();
        this.setState({
            building_name: this.props.floor.building.name,
            name: this.props.floor.name,
            info: this.props.floor.info
        })
        this.props.unDisplay()
    }
    updateFloor=(e)=>{
        e.preventDefault();
        // const newFloor={
        //     building_name: this.props.floor.building.name,
        //     name: this.props.floor.name,
        //     info: this.state.info
        // }
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
        this.props.updateFloor(this.props.floor._id,this.state)
        this.props.unDisplay()
        }
    }

    render(){
        return (
            <div className="modal">
                <div className="modal_inner">
                    <div className="modal_header">
                        Update floor
                    </div>
                    <div className="modal_body">
                    <form className="form" >
                        
                        <input
                            type="text"
                            placeholder="info"
                            className="input-text"
                            name="building_name"
                            value={this.props.floor.building.name}
                            readOnly={true}
                             disabled={true}
                           
                            
                        />
                        {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>Tên Không được để trống</label>}
                        <input
                            type="text"
                            placeholder="info"
                            className="input-text"
                            name="name"
                            value={this.props.floor.name}
                            readOnly={true}
                            disabled={true}
                        />
                        <input
                            type="text"
                            placeholder="info"
                            className="input-text"
                            name="info"
                            value={this.state.info}
                            onChange={this.changInfo}
                        />
                        
                    </form>
                    </div>
                    <div className="modal_footer">
                           
                            <input 
                                type="submit" 
                                value="Update" 
                                className="input-submit"
                                onClick={this.updateFloor}
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

export default UpdateFloor