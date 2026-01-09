import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";

export default function LineGraph({ allExpenses = [] }) {

  if (!allExpenses.length) {
    return (
      <div className="text-center text-muted py-5">
        No Expense data available
      </div>
    );
  }

  
  const sortedExpenses = [...allExpenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const labels = sortedExpenses.map(item =>
    new Date(item.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    })
  );

  const values = sortedExpenses.map(item => item.amount);

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        data: values,
        borderColor: "#F40D30",
        backgroundColor: "rgba(22,163,74,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx =>
            `₹${ctx.raw.toLocaleString("en-IN")}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          callback: value => `₹${value}`,
        },
      },
    },
  };

  return (
    
    <Line data={data} options={options} />
    
  );
}