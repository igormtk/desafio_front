import React, { useContext } from "react";
import Card from "../../components/card/card";
import LineChart from "../../components/chart/chart"
import Header from "../../components/header/header";
import GlobalStateContext from "../../global/globalStateContext";
import UpdatedDate from "../../services/date";

const HomePage = () => {

    const { states, setters } = useContext(GlobalStateContext)

    return(<div>

        <Header title={"COVID-19 DATABASE"}/> 
        
        <UpdatedDate/>
        
        <Card 
            name = "WORLD CASES CONFIRMED"
            info = {states.cases.cases}
        />

        <Card 
            name = "WORLD CASES RECOVERED"
            info = {states.cases.recovered}
        />

        <Card 
            name = "WORLD DEATHS"
            info = {states.cases.deaths}
        />

        <h1>{states.selects}</h1>
        <select value={states.selects} onChange={e=>setters.setSelectes(e.target.value)}>
        </select>
        
        <div style={{ width: 700 }}>
            <LineChart chartData={states.userData} />
        </div>

        </div>  
    )  
}

export default HomePage;