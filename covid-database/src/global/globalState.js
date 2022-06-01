import GlobalStateContext from "./globalStateContext";
import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import { Bar } from "react-chartjs-2"
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from "chart.js"

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

const GlobalState = (props) => {
    var Chart = require('chart.js');

    const cases = useRequestData([], `${BASE_URL}/all`)
    const countries = useRequestData([],`${BASE_URL}/countries`)
    const especificCountry = useRequestData([], `${BASE_URL}/countries/Brazil`)

    async function getCountryInfo () {
        const url = `${BASE_URL}/countries`
        const response = await fetch(url)
        const dataPoints = await response.json()
        console.log(dataPoints)
        return dataPoints
    }

    getCountryInfo().then(datapoints =>{
        const country = datapoints.map(datapoint => {
            return datapoint.country
        })
        const countryCases = datapoints.map(datapoint => {
            return datapoint.cases
        })

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: country,
                datasets: [{
                    label: '# of Votes',
                    data: countryCases,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

        return myChart
    })


    let countriesList = []
    let population = []
    for(let country of countries){
        countriesList.push(country.country)
        population.push(country.population)
    }

    const countryPopulation = [especificCountry.population]
    const confirmedCases = [especificCountry.cases]
    const recoveredCases = [especificCountry.recovered]
    const deathCases = [especificCountry.deaths] 

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    const states = { 
        chartData, 
        chartOptions, 
        cases, 
        countriesList, 
        population, 
        especificCountry,
        countryPopulation,
        confirmedCases,
        recoveredCases,
        deathCases, 
        chart
    }

    const setters = { setChartData, setChartOptions }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;