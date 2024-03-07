import React, { useState } from "react";
import '../App.css';

const PersonCard = ({ firstName, lastName, hairColor, age }) => {
    const [currentAge, setCurrentAge] = useState(age);

    const handleClick = () => {
        setCurrentAge(currentAge + 1);
    }
    return (
        <div className="Card">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday for: {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;