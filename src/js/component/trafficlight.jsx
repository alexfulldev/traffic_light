import React, { useState } from "react";




export const Trafficlight = () => {
    const [color, setColor] = useState("")
    const colors = ["red", "orange", "green"];
    const handleButtonClick = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };
    return (
        <div className="traffic-light-container">
            <div className="traffic-light">
              <div className={`light light-red ${color === "red" ? "active" : ""}`}onClick={() => setColor("red")}></div>
              <div className={`light light-orange ${color === "orange" ? "active" : ""}`}onClick={() => setColor("orange")}></div>
              <div className={`light light-green ${color === "green" ? "active" : ""}`}onClick={() => setColor("green")}></div>
            </div>  
            <button className="toggle-button" onClick={handleButtonClick}>Aprete fuerte carajo</button>
        </div>
        
        
    )
}
