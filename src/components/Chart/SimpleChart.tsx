import { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const options = {
  scaleShowLabels: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      ticks: {
        callback: function () {
          return '';
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: function () {
          return '';
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

interface Props {
  points: string[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export const SimpleChart: FC<Props> = ({ points }) => {
  const pointsFloat = points.map((point) => parseInt(point));
  const data = {
    labels: new Array(points.length).fill(''),
    datasets: [
      {
        label: '',
        type: 'line' as const,
        borderColor: '#e65100',
        borderWidth: 2,
        fill: false,
        data: pointsFloat,
      },
    ],
  };

  return <Line options={options} data={data} />;
};
