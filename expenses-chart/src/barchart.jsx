import { Bar } from "react-chartjs-2";


const beneficios = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const meses = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const chartData = {
    labels: meses,
    datasets: [
        {
            data:beneficios,
            backgroundColor:"hsl(10, 79%, 65%)"
        }
    ]
}

const chartOptions = {
    responsive : true,
    animation : false,
    plugins : {
        legend :{
            display: false
        }
    },
    scales : {
        y : {
            min: -25,
            max: 100
        },
        x : {
            ticks : {color:'rgba(8, 220, 195)'}
        }
    }
}

export default function Bars() {
    return <Bar data = {chartData} options={chartOptions}/>
}