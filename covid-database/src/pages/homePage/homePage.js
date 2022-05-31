import React, { useContext } from "react";
import Card from "../../components/card/card";
import LineChart from "../../components/chart/chart"
import Header from "../../components/header/header";
import GlobalStateContext from "../../global/globalStateContext";
import UpdatedDate from "../../services/date";
import { separator } from "../../services/separator";
import { CardContainer, CardsContainer } from "./homePageStyle";

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)

    // const infoConfirmed = states.cases.cases
    // const infoConfirmedFormated = separator(infoConfirmed)

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

        <h1>{states.selects}</h1>
        <select value={states.selects} onChange={e=>setters.setSelectes(e.target.value)}>
            <option>TESTE</option>
        </select>
        
        <div style={{ width: 500 }}>
            <LineChart chartData={states.userData} />
        </div>

        </div>  
    )  
}

export default HomePage;