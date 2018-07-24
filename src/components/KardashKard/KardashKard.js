
import React from "react";
import "./KardashKard.css";

const KardashKArd = props => (

    <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shufflemembers(props.id)} />
    </div>
);

export default KardashKard;