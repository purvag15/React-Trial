import React from "react"

class Navbar extends React.Component{
    render()
    {
        const styles = {
            margin: "10px"
        }

        return (
            <div>
                <nav>
                    <a href="/product"style={styles}> Products</a> |
                    <a href="/jokes"style={styles}>Jokes</a> |
                    <a href="/" style={styles}>Incrementor/Decrementor</a> |
                    <a href="/todo"style={styles}>Todo_App</a> |
                    <a href="/form"style={styles}>Form</a> |
                    <a href="/memegen"style={styles}>Meme Generator</a>

                    {/*    We can use <Link to="/create> instead of <a href=""> because anchor tag
                sends request to the server to fetch a new page, but Link tag links pages at browser
                level only. */}
                {/*    Disadvantage of Link tag: when we promptly switch between pages again and
                again, the change of page request to the server couldn't get fulfilled, thus, we get an
                error on the console. To fix it, we can use useEffect Cleanup.
                Ref: https://www.youtube.com/watch?v=aKOQtGLT-Yk*/}

                </nav>
            </div>
        )
    }
}

export default Navbar