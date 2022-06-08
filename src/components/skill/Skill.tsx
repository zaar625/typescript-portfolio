import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { skillImages01, skillImages02 } from '../../assets';

import './skill.scss';

// chart.js 설정
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['html', 'css', 'javascript', 'react', 'vue', 'typescript'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [90, 90, 70, 60, 50, 50],
      fill: true,
      backgroundColor: [
        'rgba(249, 86, 77, 0.7)',
        'rgba(60, 67, 234, 0.7)',
        'rgba(251, 223, 0, 0.7)',
        'rgba(72, 178, 192, 0.7)',
        'rgba(0, 122, 204, 0.7)',
        'rgba(144, 204, 97, 0.7)',
      ],
      borderColor: [
        'rgb(249, 86, 77)',
        'rgb(60, 67, 234)',
        'rgb(251, 223, 0)',
        'rgb(72, 178, 192)',
        'rgb(0, 122, 204)',
        'rgb(144, 204, 97)',
      ],
      borderWidth: 1,
    },
  ],
};

const Skill = () => {
  return (
    <div className="skill col-5 col-md-12">
      <div className="skill__chart cardstyle">
        <div className="title">Skill Chart</div>
        <Bar options={options} data={data} />
      </div>
      <div className="skill__imgbox row cardstyle">
        {skillImages01.map((item, index) => (
          <div key={index}>
            <img src={item} alt="skill img" />
          </div>
        ))}
      </div>
      <div className="skill__imgbox row cardstyle">
        {skillImages02.map((item, index) => (
          <div key={index}>
            <img src={item} alt="skill img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
