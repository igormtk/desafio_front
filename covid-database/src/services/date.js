import React from "react";

const UpdatedDate = () => {

    const semana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday ", "Friday", "Saturday"]

    const today = new Date()
    const weekDay = new Date().getDay()
    const day = today.getDate().toString().padStart(2,'0')
    const month = String(today.getMonth() + 1).padStart(2,'0')
    const year = today.getFullYear()
    const dataAtual = `${year} ${month} ${day} ${semana[weekDay]}`

    return(<div>
        {dataAtual}
        </div>  
    )  
}

export default UpdatedDate;