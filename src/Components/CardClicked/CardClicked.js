import React from "react";
import './CardClicked.css';



function handleClick(props) {
    props.reArrangeCards();
    props.clickedCharacter(props.id);
}

function CardClicked(props){
    return (

        <div className="img-container" onClick={() => handleClick(props)}>
        <img alt={props.name} src={props.image} />
        </div>
    )
}

export default CardClicked;