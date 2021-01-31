import React from "react";

const DiagonalTriangleButton = ({ upperLabel, upperCallback, lowerLabel, lowerCallback, upperColor, lowerColor }) => (
    <div>
        <div 
            style={{
                position: "absolute",
                backgroundColor: upperColor,
                backgroundSize: "cover",
                width: "100%",
                height: 80,
                clipPath: "polygon(10% 0, 100% 0, 100% 100%)",
                cursor: "pointer",
                textAlign: "center",
                fontSize: 22,
                fontStyle: 'italic',
                paddingBottom: "20%",
                paddingLeft: "50%",
                userSelect: "none",
                borderRadius: 2,
            }}
            tabindex="0"
            onClick={upperCallback}
        >
            {upperLabel}
        </div>
        <div 
            style={{
                position: "absolute",
                backgroundColor: lowerColor,
                backgroundSize: "cover",
                width: "100%",
                height: 80,
                clipPath: "polygon(0% 100%, 90% 100%, 0% 0%)",
                cursor: "pointer",
                textAlign: "center",
                fontSize: 22,
                fontStyle: 'italic',
                paddingTop: "40%",
                paddingRight: "50%",
                userSelect: "none",
                borderRadius: 2,
            }}
            tabindex="0"
            onClick={lowerCallback}
        >
            {lowerLabel}
        </div>
    </div>
);

export default DiagonalTriangleButton;
