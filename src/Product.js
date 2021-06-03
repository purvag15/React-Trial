import React from "react"

function Product(props)
{
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{(props.price*72.97).toLocaleString("en-US", { style: "currency", currency: "INR" })}</h3>
            {/* Multiplying by 72.97 (as of 03/06/2021) to convert USD to INR */}
            <p>{props.desc}</p>
        </div>
    )
}

export default Product