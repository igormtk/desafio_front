import GlobalStateContext from "./globalStateContext";
import React, { useState } from "react";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import axios from "axios";

const GlobalState = (props) => {

    const cases = useRequestData([], `${BASE_URL}/all`)
    const countries = useRequestData([],`${BASE_URL}/countries`)
    const especificCountry = useRequestData([], `${BASE_URL}/countries/Brazil`)
    const historicalData = useRequestData([], `${BASE_URL}/historical/all`)

    let countriesList = []
    let population = []
    for(let country of countries){
        countriesList.push(country.country)
        population.push(country.population)
    }

    const countryPopulation = especificCountry.population
    const confirmedCases = especificCountry.cases
    const recoveredCases = especificCountry.recovered
    const deathCases = especificCountry.deaths 

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
        deathCases
    }

    const setters = { setChartData, setChartOptions }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;