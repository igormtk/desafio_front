import React, { useContext, useState } from "react";
import Card from "../../components/card/card";
import LineChart from "../../components/chart/chart"
import Header from "../../components/header/header";
import GlobalStateContext from "../../global/globalStateContext";
import { CardContainer, CardsContainer, ChartContainer } from "./homePageStyle";

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)

    const [userData, setUserData] = useState({
        labels: [2,3,4],
        datasets: [
            {
                label: "Confirmed",
                data: [2, 4, 6], //confirmedCases,
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
                responsive: true
            },
        ],
    });

    return(<div>

        <Header title={"COVID-19 DATABASE"}/> 
        
        <CardsContainer>
            <CardContainer>
                <Card 
                    title = "WORLD CASES CONFIRMED"
                    info = {states.cases.cases}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CASES RECOVERED"
                    info = {states.cases.recovered}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CONFIRMED DEATHS"
                    info = {states.cases.deaths}
                />
            </CardContainer>
        </CardsContainer>

        <ChartContainer>
            <h1>{states.selects}</h1>
            <select value={states.selects} onChange={e=>setters.setSelectes(e.target.value)}>
                <option>TESTE</option>
            </select>
            
            <div style={{ width: 700 }}>
                <LineChart chartData={userData} />
            </div>
        </ChartContainer>

        </div>  
    )  
}

export default HomePage;