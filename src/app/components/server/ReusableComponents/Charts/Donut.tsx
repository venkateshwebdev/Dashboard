import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { BiRun } from 'react-icons/bi';

ChartJS.register(ArcElement, Tooltip, Legend);
export function Donut({ scored, target,color,imagePath}:any) {
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

  return <div className='flex relative items-center justify-center w-full h-[100%] text-2xl' style={{color:color}}><div className={`absolute font-bold`} >{imagePath}</div><Doughnut data={data} options={options} /></div>
}
{/* <img className='absolute w-[3%] max-md:w-[10%]' src='https://via.placeholder.com/250' alt="nothing" /> */}
{/* <BiRun className={`absolute w-[3%] max-md:w-[10%] text-2xl`} style={{color:color}}  /> */}