import React, { useContext, useEffect } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import GlobalStateContext from "../../global/globalStateContext";
import { 
    CardContainer, 
    CardsContainer, 
    ChartContainer 
} from "./homePageStyle";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)

    useEffect(()=>{
        setters.setChartData({
            labels: ["population", "Confirmed Cases", "Recovered Cases", "Death Cases"],
            datasets: [
                {
                    label: "Population",
                    data: states.countryPopulation,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "blue"
                },
                {
                    label: "Confirmed cases",
                    data: states.confirmedCases,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "red"
                },
                {
                    label: "Recovered Cases",
                    data: states.recoveredCases,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "green"
                },
                {
                    label: "Death Cases",
                    data: states.deathCases,
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "black"
                },
            ]
        })
        setters.setChartOptions({
            responsive: true,
            plugins:{
                legend: "top"
            },
            title: {
                display: true,
                text: "Test chart"
            },
        })
    }, [])

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
            
            <Bar options={states.chartOptions} data={states.chartData}/>
            
        </ChartContainer>

        </div>  
    )  
}

export default HomePage;