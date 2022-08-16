import React from "react";
import './popup.css'
class PopupQuetion extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="modal">
                <div className="modal_inner_popup">
                    
                    <div className="modal_body">                         
                            {this.props.text}
                    </div>
                    <div className="modal_footer_2">
                        <input type="submit" value="OK" className="input-submit"  onClick={this.props.action}/>
                        <input type="submit" value="Cancel" className="input-submit"  onClick={this.props.unDisplayPopup}/>
                    </div>
                </div>
            </div>

        )
    }
}

export default PopupQuetion