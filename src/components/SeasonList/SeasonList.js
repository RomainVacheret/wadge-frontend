import React, { useState, useEffect } from 'react';

const SeasonList = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/food_list", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setFoodList([...response['Food']])), 
    []);
    
    return (<ul> {foodList.map((element, idx) => {console.log(element); return (<li key={idx}>{element}</li>)})} </ul>);
}

export default SeasonList;



const [value, setValue] = useState("Janvier");
const onClick = (value_) => { setValue(value_); };
function FilterMonth(props){
    return (
        <>
            <label>
                Choisissez un Mois:
                <select value={} onChange={ () => onClick(value) }>
                    <option value="Janvier">Janvier</option>
                    <option value="Fevrier">Fevrier</option>
                    <option value="Mars">Mars</option>
                    <option value="Avril">Avril</option>
                    <option value="Mai">Mai</option>
                    <option value="Juin">Juin</option>
                    <option value="Juillet">Juillet</option>
                    <option value="Aout">Aout</option>
                    <option value="Septembre">Septembre</option>
                    <option value="Octobre">Octobre</option>
                    <option value="Novembre">Novembre</option>
                    <option value="Decembre">Decembre</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </>
    );
}