import React from "react";
// import MissedGoal from "./MadeGoal";
// import MadeGoal from "./MissedGoal";

const Demo = (props) => {
    const a = 10;
    // const bool = true;

    // if (bool) {
    //     return <MadeGoal />;
    // }
    // return <MissedGoal />;
    const handleClick = (x,y) => {
        alert(x + y);
    };
    return (
        <div>
            <h2>New Components</h2>
            {a === 1 &&<h4>{props.para}</h4>}

            <button onClick={() => handleClick(10, 50)}>Button</button>
        </div>
    );
};

export default Demo;