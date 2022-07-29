import React,{ useState, useEffect } from 'react'
import Users from './Users';
import AddUser from './AddUser';
import InputUser from './InputUser';
import axios from 'axios'
import qs from 'qs'
import {GrAdd} from 'react-icons/gr'
function UserApp(props){

   

    const [state, setState] = useState({
        users: []
    });
    const [user_locker,setUserLocker]=useState({
      user_locker:[]
    })
    const [displayAdd,setDisplayAdd]=useState("none")

    useEffect(() => {
        
        
        console.log('token',localStorage.getItem('token'))
        var config = {
            method: 'get',
            url: 'http://localhost:4000/user',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'token': localStorage.getItem('token')
            } 
          };
          
          axios(config)
          .then(function (response) {
            console.log('token',localStorage.getItem('token'))
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setState({users: JSON.parse(str)})
            
          })
          .catch(function (error) {
            console.log('err',error);
          });

          var config2 = {
            method: 'get',
            url: 'http://localhost:4000/user_locker',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'token': localStorage.getItem('token')
            }
            
          };
          console.log(config2)
          axios(config2)
          .then(function (response) {
            
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setUserLocker({user_locker: JSON.parse(str)})
            
          })
          .catch(function (error) {
            console.log('err',error);
          });

    }, []);

    const deleteUser = id => {
          var config = {
            method: 'delete',
            url: `http://localhost:4000/user/${id}`,
            headers: { }
          };
          
          //axios(config)
          axios.delete(`http://localhost:4000/user/${id}`)
          .then(function (response) {
            setState({
                users: [
                    ...state.users.filter(user => {
                        return user._id != id;
                    })
                ]
                })
          })
          .catch(function (error) {
            console.log(error);
            alert("Loi server")
          });    
    };

    const updateUser = (id,newuser) => {

        var data = qs.stringify(newuser);
          var config = {
            method: 'put',
            url: `http://localhost:4000/user/${id}`,
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            setState({
                users: state.users.map(user=>{
                    if(user._id!== id) return user;
                    else return {_id:user._id,...newuser};
                })
                })
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
          });
   };


    const addUser=(user)=>{

        var data = qs.stringify(user);
          var config = {
            method: 'post',
            url: 'http://localhost:4000/user',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            var str=JSON.stringify(response.data)
            console.log(JSON.parse(str))
            setState({
                users: [...state.users, JSON.parse(str)]
            })

            
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
          });
    }

    const unDisplay=()=>{
        setDisplayAdd("none")
    }

    return (
        // <div  className={active?'container-mobile':'container'}>
        <div  className={'container'}>
            <button className="btn-style-add" onClick={()=>{
                       setDisplayAdd("block")
            }}><GrAdd/></button>
            <div style={{display: displayAdd}}>
                    <InputUser nameButton={"Add"} addUser={addUser} unDisplay={unDisplay}/>
             </div>

            

            <Users users={state.users} deleteUser={deleteUser} updateUser={updateUser} user_locker={user_locker.user_locker}/>
        </div>
    )

}

export default UserApp;