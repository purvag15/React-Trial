import React from "react"

// props are Read-Only

function Joke(props)
{
    //    Using inline css
    // const stylespunch = {
    //     // color: "00c900"
    // }

        return (
            <div>
                <h2 className="que" style={{display: !props.question && "none"}}> Question: </h2>
                <h3 className="queval">{props.question}</h3>
                <h2 className="que"> Punchline: </h2>
                <h3 className="queval">{props.punchLine}</h3>
            </div>
        );
};

export default Joke;