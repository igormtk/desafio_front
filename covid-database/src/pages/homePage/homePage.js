import React, { useContext, useEffect } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import GlobalStateContext from "../../global/globalStateContext";
import { 
    CardContainer, 
    CardsContainer, 
    ChartContainer 
} from "./homePageStyle";

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)    

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
            
            {states.chart}

        </ChartContainer>

        </div>  
    )  
}

export default HomePage;