import React from "react"
import randomcolor from "randomcolor";

function Product(props)
{
    const style = {
        color: randomcolor(),
        // backgroundColor: randomcolor()
    }

    return (
        <div>
            <h2 style={style}>{props.name}</h2>
            <h3 style={style}>{(props.price*72.97).toLocaleString("en-US", { style: "currency", currency: "INR" })}</h3>
            {/* Multiplying by 72.97 (as of 03/06/2021) to convert USD to INR */}
            <p style={style}>{props.desc}</p>
        </div>
    )
}

export default Product