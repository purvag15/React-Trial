import React from "react"

class Form extends React.Component{

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseIntolerant: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                        ...prevState,
                        [name]: checked
                    }
            })
            :
            this.setState({
                [name]: value
            })
    }

    render()
    {
        return (
            <div>
            <form>
                <label>First Name: &nbsp;
                <input
                    name="firstName"
                    value={this.state.firstName}
                    type="text"
                    placeholder="Enter first name"
                    onChange={this.handleChange}
                /></label>

                <br/> <br/>
                <label>Last Name: &nbsp;
                <input
                    name="lastName"
                    value={this.state.lastName}
                    type="text"
                    placeholder="Enter last name"
                    onChange={this.handleChange}
                /></label>

                <br/> <br/>
                <label>Age: &nbsp;
                <input
                    name="age"
                    value={this.state.age}
                    type="Number"
                    placeholder="Enter age"
                    onChange={this.handleChange}
                /></label>

                <br/> <br/>
                <label>Gender: &nbsp;
                <input
                    name="gender"
                    value="Male"
                    type="radio"
                    onChange={this.handleChange}
                /> Male &nbsp;
                <input
                    name="gender"
                    value="Female"
                    type="radio"
                    onChange={this.handleChange}
                /> Female </label>

                <br/> <br/>
                <label>Choose your destination: </label> <br />
                <select value={this.state.destination} name="destination" onChange={this.handleChange}>
                    <option>---Please choose a destination---</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Manali</option>
                    <option>Puducherry</option>
                </select>

                <br/> <br/>
                <label>Choose your diet restrictions:  <br />
                <input
                    type="checkbox"
                    name="isVegan"
                    onChange={this.handleChange}
                    checked={this.state.isVegan}
                /> Vegan? &nbsp;
                <input
                    type="checkbox"
                    name="isKosher"
                    onChange={this.handleChange}
                    checked={this.state.isKosher}
                /> Kosher? &nbsp;
                <input
                    type="checkbox"
                    name="isLactoseIntolerant"
                    onChange={this.handleChange}
                    checked={this.state.isLactoseIntolerant}
                /> Lactose Intolerant? &nbsp;<br /><br /></label>
                <button type="submit">Submit </button>
            </form>
            <br />
            <h2>Entered values: </h2>
                <h3>Name: {this.state.firstName} {this.state.lastName} <br/><br/>
                    Age: {this.state.age} years <br/><br/>
                    Gender: {this.state.gender} <br/><br/>
                    Destination: {this.state.destination} <br/><br/>
                    Diet Restrictions: <br />
                    &nbsp; Vegan: {this.state.isVegan ? "Yes" : "No" }<br />
                    &nbsp; Kosher: {this.state.isKosher ? "Yes" : "No" }<br />
                    &nbsp; Lactose Intolerant: {this.state.isLactoseIntolerant ? "Yes" : "No" }<br />
                    <br/><br/>
                </h3>
            </div>
        )
    }
}

export default Form