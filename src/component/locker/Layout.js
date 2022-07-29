import React from 'react'
import LayoutItem from './LayoutItem';
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='layout_locker'>
                {
                    this.props.lockers.map((locker,index)=>{
                        return(
                                <LayoutItem locker={locker} key={index} updateLocker={this.props.updateLocker} deleteLocker={this.props.deleteLocker}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default Layout