import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);




export default function ExpenseBarChart({data=[]}){
    console.log(data)
    const chartData={
        labels:data.map(item=>item.source),
        datasets:[
            {
                label:"Expense Amount (₹)",
                data:data.map(item=>item.amount),
                backgroundColor:"#F40D30",
                borderRadius:4,
                barThickness:40,
            }
        ]
    }

    const options = {
        responsive: true,
        
        plugins: {
        legend: { display: false },
        
        tooltip: {
            callbacks: {
            label: ctx => `₹${ctx.raw.toLocaleString("en-IN")}`,
            },
        },
        },
        scales: {
    x: {
      grid: {
        display: false,   
      },
      border: {
        display: false,   
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,  
      },
      border: {
        display: false,   
      },
      ticks: {
        stepSize:500,
        callback: value => `₹${value}`,
      },
    },
  },
  };
    
  return <Bar data={chartData} options={options} />;

}