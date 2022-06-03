import React from 'react';
import { BASE_URL } from '../../constants/url';
import { useRequestData } from '../../hooks/useRequestData';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

    const continents = useRequestData([], `${BASE_URL}/continents`)
    const continentsNames = continents.map((item)=>{
        return item.continent
    })
    const continentsCases = continents.map((item)=>{
        return item.cases
    })
    const continentsRecoveredCases = continents.map((item)=>{
        return item.recovered
    })
    const continentsDeathCases = continents.map((item)=>{
        return item.deaths
    })

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            fontSize: 10,
            text: 'COVID-19: CASES, RECOVERED, DEATHS',
          },
        },
    };
      
    const data = {
        labels: continentsNames,
        datasets: [
          {
            label: 'Confirmed Cases',
            data: continentsCases,
            borderColor: 'yellow',
            backgroundColor: 'yellow',
          },
          {
            label: 'Recovered Cases',
            data: continentsRecoveredCases,
            borderColor: 'green',
            backgroundColor: 'green',
          },
          {
            label: 'Death Cases',
            data: continentsDeathCases,
            borderColor: 'red',
            backgroundColor: 'red',
          },
        ],
    };

  return (<div>
      <canvas role="img" height="300" width="1000"></canvas>
      <Bar width="800" height="800" options={options} data={data} />;
    </div>
  )
}

export default Chart;
