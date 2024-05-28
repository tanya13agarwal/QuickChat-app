import { Line } from 'react-chartjs-2';
import { Chart as ChartJS  , 
        Tooltip ,
        Filler , 
        CategoryScale , 
        LinearScale,
        PointElement ,
        LineElement ,
        ArcElement, 
        Legend,
        plugins,
        scales,
        
        
    } from 'chart.js'
import { getLast7Days } from '../../../library/features';


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

    const labels = getLast7Days();

    const lineChartOptions = {
        responsive : true,
        plugins: {
            legend : {
                display:false,
            },
            title : {
                display : false,
            }
        },

        scales : {
            x : {
                grid : {
                    display : false,
                },
            },
            y : {
                beginAtZero : true,
                grid : {
                    display : false,
                },
            },
        }
    }


const LineChart = ({value = []}) => {


    const data = {
      labels,
      datasets : [
        {
            data : value,
            label : "Revenue",
            fill : true,
            backgroundColor : "rgba(75,12,192,0.2)",
            borderColor : "purple",
        },
      ],
    }
  return (
    <Line data={data} options={lineChartOptions}/>
  )
}

export default LineChart