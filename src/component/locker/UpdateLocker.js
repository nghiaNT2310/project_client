import React from "react";

class UpdateLocker extends React.Component{
    constructor(props){
        super(props)
        this.state={
            label:this.props.locker.label
        }
        
    }

    updateLocker=(e)=>{
        e.preventDefault();
        this.props.updateLocker(this.props.locker._id,this.state)
        this.props.unDisplay();
    }

    deleteLocker=(e)=>{
        e.preventDefault();
        this.props.deleteLocker(this.props.locker._id)
        this.setState({
            label:""
        })
        this.props.unDisplay();
    }

    cancelDisplay=(e)=>{
        e.preventDefault();
        
        this.setState({
            label: this.props.locker.label
        })
        
        this.props.unDisplay();
    }
    setFarams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
      };

    render(){
        return(
            <div className="modal">
                <div className="modal_inner">
                    <div className="modal_header">
                    {this.props.locker.label?"Update locker":"Add locker"} 
                    </div>
                    <div className="modal_body">
                    
                        
                        <input
                            type="text"
                            placeholder="Label"
                            className="input-text"
                            name="label"
                            value={this.state.label}
                            onChange={this.setFarams}
                        />
                        
                        <input
                            type="text"
                            placeholder="STT"
                            className="input-text"
                            id="stt"
                            name="stt"
                            value={this.props.locker.stt}
                            readOnly={true}
                             disabled={true}
                        />
                       
                        <input
                            type="text"
                            placeholder="Thiết bị điều khiển"
                            className="input-text"
                            name="area"
                            value={this.props.locker.cd.imei}
                            readOnly={true}
                             disabled={true}
                        />
                        <input
                            type="text"
                            placeholder="Tầng"
                            className="input-text"
                            name="area"
                            value={this.props.locker.cd.floor.name}
                            readOnly={true}
                             disabled={true}
                        />      
                        <input
                            type="text"
                            placeholder="Tòa nhà"
                            className="input-text"
                            name="area"
                            value={this.props.locker.cd.floor.building.name}
                            readOnly={true}
                             disabled={true}
                        />
                    </div>
                    <div className="modal_footer">
                        
                        <input 
                                type="submit" 
                                value={this.props.locker.label?"Update":"Add"} 
                                className="input-submit"
                                onClick={this.updateLocker}
                                />  
                                
                                <input 
                                type="submit"
                                className="input-submit"
                                value="Delete"
                                onClick={this.deleteLocker}
                             />
                                <input  onClick={this.cancelDisplay}
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
export default UpdateLocker