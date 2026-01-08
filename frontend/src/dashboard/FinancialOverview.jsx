import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

export default function FinancialOverview({
  income = 0,
  expense = 0,
}) {
  const balance = Math.max(income - expense, 0);

  const data = {
    labels: ["Income", "Expense", "Balance"],
    datasets: [
      {
        data: [income, expense, balance],
        backgroundColor: [
          "#FFA500", // green
          "#F40D30", // red
          "#0d6efd", // blue
        ],
        borderWidth: 0,
        cutout: "70%", // donut thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: ctx =>
            `₹${ctx.raw.toLocaleString("en-IN")}`,
        },
      },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
