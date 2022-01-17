import React from 'react';



const Ship = (props) => {
    const {flight_number, mission_name} = props
    return (
        <div>
            <div>{flight_number}</div>
            <div>{mission_name}</div>

        </div>
    );
};

export default Ship;