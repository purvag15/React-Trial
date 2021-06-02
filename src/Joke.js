import React from "react"

function Joke(props)
{
    // const stylespunch = {
    //     // color: "00c900"
    // }
    console.log(props)
    if(props.joke.question==null){
        return (
            <div>
                <h2  className="ans"> Punchline: </h2><h3 className="ansval">{props.joke.punchline}</h3>
            </div>
        )
    }
    else{
        return (
            <div>
                <div>
                    <h2 className="que"> Question: </h2><h3 className="queval">{props.joke.question}</h3>
                </div>
                <h2 className="que"> Punchline: </h2><h3 className="queval">{props.joke.punchline}</h3>
            </div>
        )
    }
}

export default Joke;