import React from "react";
class UpdateConstrolDevice extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            id_building:this.props.controlDevice.floor.building._id,
            id_floor:this.props.controlDevice.floor._id,
            imei:this.props.controlDevice.imei,
            mac:this.props.controlDevice.mac,
            area:this.props.controlDevice.area,
            buildings:this.props.buildings,
            floors:this.props.floors,
            warning:0
        }
       
        
    }
    


    setFarams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        console.log("day",name,value)
        if(name=="id_building"){
            this.setState({
                floors: this.props.floors.filter(f=>{
                    return f.building._id==value
                }),
                id_floor:""
            })
        }

        if(name=="id_floor"){
            
            this.setState({
                id_building:this.props.floors.filter(f=>{
                    return f._id==value
                })[0].building._id
            })
        }
 
      };

    updateControlDevice=(e)=>{
        e.preventDefault();
        if(!this.state.id_building){
            this.setState({warning:1})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.id_floor){
            this.setState({warning:2})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else if(!this.state.imei){
            this.setState({warning:3})
            setTimeout(()=>{
                this.setState({warning: 0})
              },3000)
        }else{
        console.log("floor",this.state.id_floor)
        const cd={
            floor:this.state.id_floor,
            imei:this.state.imei,
            mac:this.state.mac,
            area:this.state.area,
        }
        
        this.props.updateControlDevice(this.props.controlDevice._id,cd)
        this.props.unDisplay();
    }
    }

    cancel=(e)=>{
        e.preventDefault();
        this.setState({
            id_building:this.props.controlDevice.floor.building._id,
            id_floor:this.props.controlDevice.floor._id,
            imei:this.props.controlDevice.imei,
            mac:this.props.controlDevice.mac,
            area:this.props.controlDevice.area,
            buildings:this.props.buildings,
            floors:this.props.floors
        })
        
        this.props.unDisplay();
    }

    render(){
        return(
            <div className="modal">
                <div className="modal_inner">
                    <div className="modal_header">
                        Update ControlDevice
                    </div>
                    <div className="modal_body">
                    {this.state.warning==1&&<label style={{"color":'red', "fontSize":"15px" }}>Bạn chưa chọn tòa nhà</label>}
                        <select name="id_building" className="select_longer" value={this.state.id_building} onChange={this.setFarams}>
                        <option value="" selected  disabled hidden >Chọn tòa nhà</option>
                            {
                                this.state.buildings.map((building,index)=>{
                                    return <option key={index} value={building._id}>{building.name}</option>
                                })
                            }
                        </select>
                        {this.state.warning==2&&<label style={{"color":'red', "fontSize":"15px" }}>Bạn chưa chọn tầng</label>}
                        <select name="id_floor" className="select_longer" value={this.state.id_floor} onChange={this.setFarams}>
                        <option value="" selected disabled hidden>Chọn tầng</option>
                            {
                                this.state.floors.map((floor,index)=>{
                                    
                                    return <option key={index} value={floor._id}>{floor.name}</option>
                                })
                            }
                        </select>
                        {this.state.warning==3&&<label style={{"color":'red', "fontSize":"15px" }}>Imei không được bỏ trống</label>}
                        <input
                            type="text"
                            placeholder="Imei"
                            className="input-text"
                            name="imei"
                            value={this.state.imei}
                            onChange={this.setFarams}
                        />
                        <input
                            type="text"
                            placeholder="MAC"
                            className="input-text"
                            name="mac"
                            value={this.state.mac}
                            onChange={this.setFarams}
                        />
                        <input
                            type="text"
                            placeholder="AREA"
                            className="input-text"
                            name="area"
                            value={this.state.area}
                            onChange={this.setFarams}
                        />
                    </div>
                    <div className="modal_footer">
                        
                        <input 
                                type="submit" 
                                value="Update" 
                                className="input-submit"
                                onClick={this.updateControlDevice}
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

export default UpdateConstrolDevice