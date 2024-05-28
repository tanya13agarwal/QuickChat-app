import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS  , 
        Tooltip ,
        Filler , 
        CategoryScale , 
        LinearScale,
        PointElement ,
        LineElement ,
        ArcElement, 
        Legend,
        
        
    } from 'chart.js'


    ChartJS.register(
        Tooltip ,
        Filler , 
        CategoryScale , 
        LinearScale,
        PointElement ,
        LineElement ,
        ArcElement, 
        Legend,
    )
const doughnutChartOptions = {
    responsive : true,
        plugins: {
            legend : {
                display:false,
            },
        },
        cutout : 120, 
}


const DoughnutChart = ({labels = [] , value = []}) => {
    const data = {
        labels,
        datasets : [
          {
              data : value,
              label : "Total Chats VS Group Chats",
              fill : true,
              backgroundColor : ["rgba(75,12,192,0.2)" , "#40A578"],
              hoverBackgroundColor : ["purple" , "#006769"],
              borderColor : ["purple" , "#40A578"],
              offset : 40,
          },
        ],
      }
  return (
    <Doughnut data = {data} className='z-10'/>
  )
}

export default DoughnutChart;