import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { BiMedal } from 'react-icons/bi';

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = ({ scored, target ,donutSize}:any) => {
  const data = {
    labels: ["Your Score", "Opponent"],
    datasets: [
      {
        data: [scored, target], // Adjust the data values for emphasis
        backgroundColor: ["#F8961E", "#14C9C9"],
        rotation: -90
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      }
    },
    elements: {
      arc: {
        borderWidth: 0, // No border
        // borderColor: "black",
        offset: 5,
        radius: "75%" // Adjust the offset to create emphasis
      }
    },
    layout: {
        padding: {
          left: donutSize,
          right: donutSize,
          top: donutSize,
          bottom: donutSize,
        },
      },
  };

  return (
      <Pie data={data} options={options} />
  );
};

export default PieChart;
