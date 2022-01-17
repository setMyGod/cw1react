import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";

const Ships = () => {
    const [ships, setShips] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value =>setShips(value));


    },[])

    return (
        <div>
            {ships.map(value => <Ship ss ={value.flight_number}  dd ={value.mission_name}/>)}

        </div>
    );
};

export default Ships;