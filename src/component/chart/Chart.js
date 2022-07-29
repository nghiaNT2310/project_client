import React,{ useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./chart.css"
var axios = require('axios');
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = () => {

  const [state,setState]=useState({})

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:4000/user_locker/tk',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {    
      var str=JSON.stringify(response.data)
      setState(JSON.parse(str))
      
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }, []);




  // const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const data1 = {
    labels: ['Người dùng đã được cấp tủ', 'Người dùng chưa được cấp tủ'],
    datasets: [
      {
        label: '# of Votes',
        data: [state.cntUserHasLocker,state.cntUser- state.cntUserHasLocker],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'    
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: ['Tủ đã có người dùng', 'Tủ chưa có người dùng'],
    datasets: [
      {
        label: '# of Votes',
        data: [state.cntLockerUsed,state.cntLocker-state.cntLockerUsed],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',    
        ],
        borderWidth: 1,
      },
    ],
  };
    
  return (
    <div className='container'>
        <div className='divPart'>
            <div className='chart'>
              <Pie data={data1} />;
            </div>
        </div>

        <div className='divPart'>
        <div className='chart'>
              <Pie data={data2} />;
            </div>
        </div>
    </div>
  )
}

export default Chart