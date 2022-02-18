import React, { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

interface Props {
  points: string[];
}

export const DetailChart: FC<Props> = ({ points }) => {
  const pointsFloat = points.map((point) => parseInt(point));
  const data = {
    labels: new Array(points.length).fill(''),
    datasets: [
      {
        label: '',
        type: 'line' as const,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: pointsFloat,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
