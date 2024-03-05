import { Bar } from "react-chartjs-2";

import{
    chart as chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const beneficios = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
const meses = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const miData = {
    labels: meses,
    datasets: [
        {
            data:beneficios,
            backgroundColor:"hsl(10, 79%, 65%)"
        }
    ]
}
const misOptions = {
    resposive : true,
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
export default function Bars(){
    return <Bar data = {miData} options={misOptions}/>
}