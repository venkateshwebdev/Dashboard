import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export function Donut({ scored, target,color}:any) {
    const progressPercentage = (scored / target) * 100;
    const remainingPercentage = 100 - progressPercentage;
    const data = {
        labels: [`${progressPercentage > 70 ?"Great 👏":"completed"}`, "Remaining"],
        datasets: [
          {
            data: [progressPercentage, remainingPercentage],
            backgroundColor: [color, "lightgray"], // Progress color and color for remaining
            borderWidth: 0,
            borderRadius: [
                progressPercentage === 100 ? 0 : 10, // Set radius to 0 if progress is 100%
                remainingPercentage === 100 ? 0 : 0
              ],
            cutout: "75%",
            rotation:180,
          }
        ]
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false // Hide the legend
          },
          tooltip: {
            enabled: true
          }
        },
      };

  return <Doughnut data={data} options={options} />;
}
