import React,{useState,useEffect}  from "react";
import axios from 'axios'
import qs from 'qs'
import {GrAdd} from 'react-icons/gr'
import Accounts from "./Accounts";
import AddAccount from "./AddAccount";
function AccountApp(){
    const [state,setState]=useState({
        accounts:[]
    })

    const [displayAdd,setDisplayAdd]=useState("none")

    useEffect(()=>{

        var config = {
            method: 'get',
            url: 'http://localhost:4000',
            headers: {}
          };

        axios(config)
          .then(function (response) {
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setState({accounts: JSON.parse(str)})
            
          })
          .catch(function (error) {
            console.log(error);
          });
    },[]);

    const addAccount=account=>{
        var data = qs.stringify(account);
          var config = {
            method: 'post',
            url: 'http://localhost:4000/register',
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
                accounts: [...state.accounts, JSON.parse(str)]
            })            
          })
          .catch(function (error) {
            alert('tài khoản đã tồn tại')
            console.log(error)
           
          });
    }
    
    const deleteAccount=id=>{
        var config = {
            method: 'delete',
            url: `http://localhost:4000/${id}`,
            headers: { }
          };
          
          //axios(config)
          axios.delete(`http://localhost:4000/${id}`)
          .then(function (response) {
            setState({
                accounts: [
                    ...state.accounts.filter(a => {
                        return a._id != id;
                    })
                ]
                })
          })
          .catch(function (error) {
            console.log(error);
            alert("Loi server")
          });
    }

    const unDisplay=()=>{
        setDisplayAdd("none")
    }

    return (
        <div className="container">
            <button className="btn-style-add" onClick={()=>{
                       setDisplayAdd("block")
            }}><GrAdd/></button>

            <div style={{display: displayAdd}}>
                <AddAccount addAccount={addAccount} nameButton={"Add"} unDisplay={unDisplay}/>
            </div>
            
            <Accounts accounts={state.accounts} deleteAccount={deleteAccount} />
        </div>
    )

}

export default AccountApp