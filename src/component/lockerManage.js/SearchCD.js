import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import LockerItem from "./LockerItem";
class SearchCD extends React.Component{
    constructor(props){
        super(props)
        this.state={
            buildings: this.props.buildings,
            floors: this.props.floors,
            controlDevices: this.props.controlDevices,
            lockers: [],
            building:"",
            floor:"",
            controlDevice:""
        }
       
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            buildings: nextProps.buildings,
            floors: nextProps.floors,
            controlDevices:nextProps.controlDevices,
        })
      }

      

    setFarams = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
        if(name=="building"){
            this.setState({
                floors: this.props.floors.filter(f=>{
                    return f.building._id==value
                }),
                floor:"",
                controlDevice:""
            })
        }

        if(name=="floor"){
            
            this.setState({
                building:this.props.floors.filter(f=>{
                    return f._id==value
                })[0].building._id,
                controlDevices:this.props.controlDevices.filter(cd=>{
                    return cd.floor._id==value
                })
            })
        }

        if(name=="controlDevice"){
            this.setState({
                building:this.props.controlDevices.filter(cd=>{
                    return cd._id==value
                })[0].floor.building._id,
                floor:this.props.controlDevices.filter(cd=>{
                    return cd._id==value
                })[0].floor._id,

            })
        }
 
      };

    searchLocker=()=>{
        if(this.state.controlDevice!=""){
            this.setState({
                lockers: this.props.lockers.filter(l=>{
                    
                    return l.cd&&l.cd._id==this.state.controlDevice
                })
            })
        }else{
            this.setState({
                lockers:[]
            })
        }
    }

    render(){
        return (
            <div className>
        
              <div className='search'>
        
               <select name="building" className="select_small" value={this.state.building} onChange={this.setFarams}>
                    <option value="" selected disabled hidden>Chọn tòa nhà</option>
                        {
                            this.state.buildings.map((building,index)=>{
                               
                                return <option key={index} value={building._id}>{building.name}</option>
                            })
                        }
                </select>
        
                <select name="floor" className="select_small" value={this.state.floor} onChange={this.setFarams}>
                    <option value="" selected disabled hidden>Chọn tầng</option>
                        {
                            this.state.floors.map((floor,index)=>{
                                return <option key={index} value={floor._id}>{floor.name}</option>
                            })
                        }
                </select>
        
                <select name="controlDevice" className="select_small" value={this.state.controlDevice} onChange={this.setFarams}>
                    <option value="" selected disabled hidden>Chọn thiết bị điều khiển</option>
                        {
                            this.state.controlDevices.map((cd,index)=>{
                                return <option key={index} value={cd._id}>{cd.imei}</option>
                            })
                        }
                </select>
        
                <button className='btn_search' onClick={this.searchLocker}><AiOutlineSearch/></button>
        
              </div>
              
              {/* <Layout lockers={this.state.lockers} user_locker={this.props.user_locker}/> */}
                <div className='layout_locker'>
                    {
                        this.state.lockers.map((locker,index)=>{
                            return(
                                <LockerItem locker={locker} key={index} users={this.props.users} user_locker={this.props.user_locker}/>
                            )
                        })
                    }
                </div>
            </div>
          )
    }
}

export default SearchCD