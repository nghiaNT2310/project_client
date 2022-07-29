import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Users from './Users';
import Lockers from './Lockers';
import qs from 'qs'
import AddLockerForUser from './AddLockerForUser';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import PopupQuetion from '../layout/PopupQuetion';
const MUseLocerApp = () => {
    const [state, setState] = useState({
        users: []
    });

    const [locker,setLocker]=useState({
      lockers:[]
    })

    const [userTarget,setUserTarget]=useState({
      userId:""
    })

    const [allLockers,setAllLockers]=useState({
      lockers:[]
    })

    const [locker_user,setLocker_user]=useState({
      locker_user:[]
    })

    const [display,setDisplay]=useState("none")

    

    useEffect(() => {
        
        // tạo GET request để lấy danh sách todos

        var config = {
            method: 'get',
            url: 'http://localhost:4000/user',
            headers: {}
          };
          
          axios(config)
          .then(function (response) {
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setState({users: JSON.parse(str)})
            
          })
          .catch(function (error) {
            console.log(error);
          });


          var config_LU = {
            method: 'get',
            url: 'http://localhost:4000/user_locker',
            headers: {}
          };
          
          axios(config_LU)
          .then(function (response) {
            
            var str=JSON.stringify(response.data)

            console.log(JSON.parse(str))

            setLocker_user({locker_user: JSON.parse(str)})
          })
          .catch(function (error) {
            console.log(error);
          });

          var config4={
            method: 'get',
            url: 'http://localhost:4000/locker',
            headers: {}
        }
      
        axios(config4)
        .then(response=>{
            var str=JSON.stringify(response.data)
            var lockers=JSON.parse(str)
            lockers.map(l=>{
              l.isCheck=false
            })
            setAllLockers({lockers:lockers})
        })
        .catch(err=>{
            console.log(err)
        })
    }, []);

    useEffect(()=>{
      var config_LU = {
        method: 'get',
        url: 'http://localhost:4000/user_locker',
        headers: {}
      };
      
      axios(config_LU)
      .then(function (response) {
        
        var str=JSON.stringify(response.data)

        console.log(JSON.parse(str))

        setLocker_user({locker_user: JSON.parse(str)})
      })
      .catch(function (error) {
        console.log(error);
      });
    })

    var changeBox=(id)=>{
      setAllLockers({lockers: allLockers.lockers.map(l=>{
        if(l._id==id) l.isCheck=!l.isCheck
        return l
      })})
    }

    var getLockerOfUser=(id)=>{
      var config={
        method: 'get',
        url: `http://localhost:4000/user_locker/${id}`,
        headers: {}
    }
  
    axios(config)
    .then(response=>{
        var str=JSON.stringify(response.data)
        
        setLocker({lockers:JSON.parse(str)})
        
    })
    .catch(err=>{
        console.log(err)
    })
    }

    var deletePermissionUser=(id)=>{
      var config={
        method: 'delete',
        url: `http://localhost:4000/user_locker/user/${id}`,
        headers: {}
    }
  
    axios(config)
    .then(response=>{
        getLockerOfUser(id)
    })
    .catch(err=>{
        console.log(err)
    })
    }

    var targetUser=(id)=>{
      setUserTarget({userId:id})
      getLockerOfUser(id)
      
    }

    var deleteUserfromLocker=(id)=>{
        var config={
          method: 'delete',
          url: `http://localhost:4000/user_locker/locker/${id}`,
          headers: {}
      }
    
      axios(config)
      .then(response=>{
          getLockerOfUser(userTarget.userId)
      })
      .catch(err=>{
          console.log(err)
      })
    }

    var setDisplayAdd=()=>{
        setDisplay("block")
    }
    var setUndisplay=()=>{
        setDisplay("none")
        setAllLockers({lockers: allLockers.lockers.map(l=>{
          if(l.isCheck) l.isCheck=false
          return l
        })})
    }

    var pushLockerToUser=()=>{
      let lockercheck=[];
      locker_user.locker_user.forEach(item=>{
        if(!lockercheck.includes(item.lockerId)){
          lockercheck.push(item.lockerId)
        }
      })


      let users=[],lockers=[]
       
       users.push(userTarget.userId)
       
    
       allLockers.lockers.forEach(locker=>{
        if(locker.isCheck) lockers.push(locker._id)
       })

       let check2=lockers.some(item=>{
        return lockercheck.includes(item)
     })

     if(check2){
      alert('Thêm không thành công do tồn tại tủ đã có người sử dụng')
      setUndisplay()
     }else {
      users=users.join(',')
       lockers=lockers.join(',')

       var data=qs.stringify({users: users,lockers: lockers})
       
        var config={
            method: 'post',
            url:'http://localhost:4000/user_locker/add',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        }

        axios(config)
        .then(data=>{
          console.log('thanh cong',data)
          
          setAllLockers({lockers: locker.lockers.map(locker=>{
            if(locker.isCheck){
              locker.isCheck=!locker.isCheck
            }
            return locker
          })})
          getLockerOfUser(userTarget.userId)
          setUndisplay()

        })
        .catch(err=>{
          console.log(err)
          alert(err)
        })

     }


       
    }

    



  return (
    <div className='container'>
        <div style={{display: display}}>
          <AddLockerForUser lockers={allLockers.lockers} setUndisplay={setUndisplay} changeBox={changeBox} pushLockerToUser={pushLockerToUser} locker_user={locker_user.locker_user}/>
        </div>
        

        <Users users={state.users} targetUser={targetUser} deletePermissionUser={deletePermissionUser} setDisplayAdd={setDisplayAdd} locker_user={locker_user.locker_user}/>
        
        <Lockers lockers={locker.lockers} deleteUserfromLocker={deleteUserfromLocker} locker_user={locker_user.locker_user}/>
    </div>
  )
}

export default MUseLocerApp