import GlobalStateContext from "./globalStateContext";
import React, { useState } from "react";
import { BASE_URL_NOVELCOVID_API } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";

const GlobalState = (props) => {
    
    const [casesPerDay, setCasesPerDay] = useState([])
    const [selects, setSelectes] = useState()

    const cases = useRequestData({}, `${BASE_URL_NOVELCOVID_API}/all`)
    const globalCases = useRequestData({}, `${BASE_URL_NOVELCOVID_API}/historical/all`)
    const countryCases = useRequestData({}, `${BASE_URL_NOVELCOVID_API}/countries`)

    const UserData = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823,
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345,
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555,
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555,
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234,
        },
      ];

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
            },
        ],
    });

    const states = { cases, userData, casesPerDay, selects, globalCases, countryCases }
    const setters = { setUserData, setCasesPerDay, setSelectes }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;