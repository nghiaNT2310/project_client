import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Users from './Users';
import Lockers from './Lockers';
import qs from 'qs'
import PopupQuetion from '../layout/PopupQuetion';
import PopupQuetion2 from '../layout/PopupQuetion2';
import { AiOutlineCheck ,AiOutlineClose} from "react-icons/ai";
const ALTEApp = () => {
    const [state, setState] = useState({
        users: []
    });

    const [locker,setLocker]=useState({
      lockers:[]
    })

    const [displayButton,setDisplayButton]=useState({
      cntUserT:0,
      cntLockerT:0

    })

    const [displayPopup,setDisplayPopup]=useState('none')

    const [user_locker,setUserLocker]=useState({
      user_locker:[]
    })

    


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

            var users=JSON.parse(str)
            users.map((u)=>{
              u.isCheck=false
            })
            


            setState({users: users})
            
            
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
            console.log(lockers)
            setLocker({lockers:lockers})
        })
        .catch(err=>{
            console.log(err)
        })

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


    useEffect(()=>{
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
    })

    var clickBoxUser=(id)=>{
      setState({users: state.users.map(user=>{
        if(user._id==id) {
          user.isCheck=!user.isCheck
          if(user.isCheck){
            setDisplayButton({cntUserT: 1})
          }else{
            setDisplayButton({cntUserT:0})
          }
        }
        return user
      })})
    }

    var clickBoxLocker=(id)=>{
      setLocker({lockers: locker.lockers.map(locker=>{
        if(locker._id==id) {
          locker.isCheck=!locker.isCheck
          if(locker.isCheck){
            setDisplayButton({cntLockerT: 1})
          }else{
            setDisplayButton({cntLockerT:0})
          }
        }
        return locker
      })})
    }



    var addLockerTOUser=(checkn)=>{
      console.log("check",checkn)
      let lockercheck=[];
      user_locker.user_locker.forEach(item=>{
        if(!lockercheck.includes(item.lockerId)){
          lockercheck.push(item.lockerId)
        }
      })

       let users=[],lockers=[]
       state.users.forEach(user=>{
        if(user.isCheck) users.push(user._id)
       })
       let check=true;
       locker.lockers.forEach(locker=>{
        if(locker.isCheck){       
          lockers.push(locker._id)
        } 
       })

       let check2=lockers.some(item=>{
          return lockercheck.includes(item)
       })
       if(users.length>1&&!checkn){
        alert('Thêm không thành công do mỗi tủ chỉ được cấp cho một người')
        setDisplayPopup("none")
       }
       else if(check2&&!checkn){
        alert('Thêm không thành công do tồn tại tủ đã có người sử dụng')
        setDisplayPopup("none")
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
            setState({users : state.users.map(user=>{
              if(user.isCheck){
                user.isCheck=!user.isCheck
              }
              return user
            })})
            setLocker({lockers: locker.lockers.map(locker=>{
              if(locker.isCheck){
                locker.isCheck=!locker.isCheck
              }
              return locker
            })})
            alert("thêm thành công")
            setDisplayPopup("none")
          })
          .catch(err=>{
            console.log(err)
            alert('Thêm không thành công')
            setDisplayPopup("none")
          })
       }
       

        
      
    }

    var cancelAdd=()=>{
      setState({users : state.users.map(user=>{
        if(user.isCheck){
          user.isCheck=!user.isCheck
        }
        return user
      })})
      setLocker({lockers: locker.lockers.map(locker=>{
        if(locker.isCheck){
          locker.isCheck=!locker.isCheck
        }
        return locker
      })})
    }

  var showPopup=()=>{
    let users=[],lockers=[]
       state.users.forEach(user=>{
        if(user.isCheck) users.push(user._id)
       })
       locker.lockers.forEach(locker=>{
        if(locker.isCheck) lockers.push(locker._id)
       })

       if(users.length<=0){
          alert('Bạn chưa chọn nhân viên được thêm tủ !!!')
       }else if(lockers.length<=0){
          alert('Bạn chưa chọn tủ được thêm !!!')
       }else{
          setDisplayPopup("block")
       }
  }

  var unDisplayPopup=()=>{
    setDisplayPopup("none")
  }

  return (
    <div className='container'>
        <div style={{'display':displayPopup}}>
          <PopupQuetion2 unDisplayPopup={unDisplayPopup} action={addLockerTOUser} text={"Bạn chắc muốn thêm tủ cho người dùng"}/>
        </div>
        <Users users={state.users} clickBoxUser={clickBoxUser} user_locker={user_locker.user_locker}/>
        <Lockers lockers={locker.lockers} clickBoxLocker={clickBoxLocker} user_locker={user_locker.user_locker} />
        <button className="btn-style-add"  onClick={showPopup}><AiOutlineCheck size={30}/></button>
        <button className="btn-style-add_2"  onClick={cancelAdd}><AiOutlineClose size={30}/></button>
    </div>
  )
}

export default ALTEApp