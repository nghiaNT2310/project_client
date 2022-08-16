import React from "react";
import './popup.css'
class PopupQuetion2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            check: false
        }
    }
    changeCheck=()=>{
        if(this.state.check)this.setState({check: false})
        else this.setState({check: true})
    }

    addLockertoUser=()=>{
        this.props.action(this.state.check);
        this.setState({check: false})
    }

    render(){
        return(
            <div className="modal">
                <div className="modal_inner_popup">
                    
                    <div className="modal_body">                         
                            {this.props.text}
                            <input className="checkbox" style={{width: '10%'}} type="checkbox" checked={this.state.check} onChange={this.changeCheck}/>
                             Cho phép nhóm nhân viên cũ tiếp tục sử dụng tủ
                    </div>
                    <div className="modal_footer_2">
                        <input type="submit" value="OK" className="input-submit"  onClick={this.addLockertoUser}/>
                        <input type="submit" value="Cancel" className="input-submit"  onClick={this.props.unDisplayPopup}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default PopupQuetion2