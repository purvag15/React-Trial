import React from "react"
import randomcolor from "randomcolor"

class IncrDecr extends React.Component{
    // constructor() {
    //     super();
        state = {
            count: 0,
            color: ""
        }
        // this.increment = this.increment.bind();
        // this.decrement = this.decrement.bind();
    // }

    increment()
    {
        this.setState( prevState => {
            return {
                count: prevState.count+1,
                color: randomcolor()
            }
        })
    }

    decrement()
    {
        this.setState(prevState => {
            return {
                count: prevState.count-1,
                color: randomcolor()
            }
        })
    }

    render()
    {
        return (
            <div>

                <h2>(Traditional class-based method)</h2>
                <h2 style={{color: this.state.color, textAlign: "center"}}> {this.state.count} </h2>
                <br />
                <button className="center" onClick={() => this.increment()}>
                    Increment!
                </button> <br />
                <button className="center" onClick={() => this.decrement()}>
                    Decrement!
                </button>
            </div>
        )
    }3
}

export default IncrDecr