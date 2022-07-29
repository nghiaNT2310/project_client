import React,{Fragment,useState,useEffect} from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import ALockerItem from "./AlockerItem";
// class AddLockerForUser2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       lockers: this.props.lockers
//     };
//   }


//   render() {
//     return (
//       <div className="modal">
//         <div className="modal_inner_big">
//           <div className="modal_header_2">
//             Danh sách các tủ hiện tại
//           </div>
//           <div className="modal_body">
//             <div className="search">
//               <select name="building" className="select_small">
//                 <option value="" selected disabled hidden>
//                   Chọn tòa nhà
//                 </option>
//               </select>

//               <select name="floor" className="select_small">
//                 <option value="" selected disabled hidden>
//                   Chọn tầng
//                 </option>
//               </select>

//               <select name="controlDevice" className="select_small">
//                 <option value="" selected disabled hidden>
//                   Chọn thiết bị điều khiển
//                 </option>
//               </select>

//               <button className="btn_search">
//                 <AiOutlineSearch />
//               </button>
//             </div>

//             <table style={{ width: "100%" }}>
//               <thead>
//                 <tr>
//                     <td style={{width: '8%'}}></td>
//                     <td style={{width: '23%'}}>Tòa nhà</td>
//                     <td style={{width: '23%'}}>Tầng</td>
//                     <td style={{width: '23%'}}>Tủ</td>
//                     <td style={{width: '23%'}}>Tình trạng phần tủ</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 {this.props.lockers.map((l, index) => {
//                   if(l.label)
//                   return (
//                     <ALockerItem locker={l} changeBox={this.props.changeBox}/>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <div>
//                 <input type="submit" value="Add" className="input-submit"  onClick={this.props.pushLockerToUser}/>
//                  <input onClick={this.props.setUndisplay}
//                                 type="submit"
//                                 className="input-submit"
//                                 value="Cancel"
//                              />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function AddLockerForUser(props){
  const [building,setBuilding]=useState("")
    const [floor,setFloor]=useState("")
    const [label,setLabel]=useState("")
    const [controlDevice,setControlDevice]=useState("")
    const [lockers,setLockers]=useState(props.lockers)

    var SetFloor=(event)=>{
        setFloor(event.target.value)
    }

    var SetBuilding=(event)=>{
        setBuilding(event.target.value)
    }
    var SetControlDevice=(event)=>{
        setControlDevice(event.target.value)
    }

    var SetLabel=(event)=>{
        setLabel(event.target.value)
    }
    useEffect(()=>{
        setLockers(props.lockers)
      },[props.lockers])

    var filterLocker=()=>{
        console.log("filter:",building,floor,controlDevice,label)
        setLockers( props.lockers.filter(l=>{
            console.log("locker:",l.cd)
                return l.cd&&(!building||(l.cd.floor.building.name.toUpperCase().includes(building.toUpperCase())))
                &&(!floor||(l.cd.floor.name.toUpperCase().includes(floor.toUpperCase())))
                &&(!controlDevice||(l.cd.imei.toUpperCase().includes(controlDevice.toUpperCase())))
                &&(!label||(l.label.toUpperCase().includes(label.toUpperCase())))
        }))
        
        }
      return(
        <div className="modal">
        <div className="modal_inner_big">
          <div className="modal_header_2">
            Danh sách các tủ hiện tại
          </div>
          <div className="modal_body">
            <div className="search">
            <input
                type="text"
                className="input_text_search"
                name="building"
                placeholder="Tòa nhà"
                value={building}
                onChange={SetBuilding}
                style={{width:'200px'}}
                />
 
            <input
                type="text"
                className="input_text_search"
                name="floor"
                placeholder="Tầng"
                value={floor}
                onChange={SetFloor}
                style={{width:'200px'}}
                />

            <input
                type="text"
                className="input_text_search"
                name="controlDevice"
                placeholder="Thiết bị điều khiển"
                value={controlDevice}
                onChange={SetControlDevice}
                style={{width:'200px'}}
                />

            <input
                type="text"
                className="input_text_search"
                name="label"
                placeholder="Nhãn tủ"
                value={label}
                onChange={SetLabel}
                style={{width:'200px'}}
                />
         <button className='btn_search' onClick={filterLocker}><AiOutlineSearch/></button>
            </div>

            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                    <td style={{width: '8%'}}></td>
                    <td style={{width: '18%'}}>Tòa nhà</td>
                    <td style={{width: '18%'}}>Tầng</td>
                    <td style={{width: '18%'}}>Thiết bị điều khiển</td>
                    <td style={{width: '18%'}}>Tủ</td>
                    <td style={{width: '20%'}}>Tình trạng phần tủ</td>
                    
                </tr>
              </thead>
              <tbody>
                {lockers.map((l, index) => {
                  if(l.label)
                  return (
                    <ALockerItem locker={l} changeBox={props.changeBox} locker_user={props.locker_user}/>
                  );
                })}
              </tbody>
            </table>
            <div>
                <input type="submit" value="Add" className="input-submit"  onClick={props.pushLockerToUser}/>
                 <input onClick={props.setUndisplay}
                                type="submit"
                                className="input-submit"
                                value="Cancel"
                             />
            </div>
          </div>
        </div>
      </div>
      )
}
export default AddLockerForUser
