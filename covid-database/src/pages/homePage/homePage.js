import React from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import { 
    CardContainer, 
    CardsContainer, 
    ChartContainer 
} from "./homePageStyle";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import Chart from "../../components/chart/chart";

const HomePage = () => {

    const cases = useRequestData([], `${BASE_URL}/all`)

    return(<div>

        <Header title={"COVID-19 DATABASE"}/> 
        
        <CardsContainer>
            <CardContainer>
                <Card 
                    title = "WORLD CASES CONFIRMED"
                    info = {cases.cases}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CASES RECOVERED"
                    info = {cases.recovered}
                />
            </CardContainer>

            <CardContainer>
                <Card 
                    title = "WORLD CONFIRMED DEATHS"
                    info = {cases.deaths}
                />
            </CardContainer>
        </CardsContainer>

        <ChartContainer>
           <Chart/>
        </ChartContainer>

        </div>  
    )  
}

export default HomePage;