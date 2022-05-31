import React, { useContext } from "react";
import Card from "../../components/card/card";
import LineChart from "../../components/chart/chart"
import Header from "../../components/header/header"
import GlobalStateContext from "../../global/globalStateContext";
import { CardContainer, CardsContainer, ChartContainer } from "./homePageStyle";

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)

    return(<div>

        <Header/>
        
        <CardsContainer>
            <CardContainer>
                <Card 
                    title = "WORLD CASES CONFIRMED"
                    info = {states.cases.cases.toLocaleString('en-GB')}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CASES RECOVERED"
                    info = {states.cases.recovered.toLocaleString('en-GB')}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CONFIRMED DEATHS"
                    info = {states.cases.deaths.toLocaleString('en-GB')}
                />
            </CardContainer>
        </CardsContainer>

        <ChartContainer>

            <h1>{states.selects}</h1>
            <select value={states.selects} onChange={e=>setters.setSelectes(e.target.value)}>
                <option>TESTE</option>
            </select>
            
            <div style={{ width: 500 }}>
                <LineChart chartData={states.userData} />
            </div>

        </ChartContainer>

        </div>  
    )  
}

export default HomePage;