//Reference for routing: https://www.youtube.com/watch?v=DO-pSysGItQ

import './App.css';
import React from "react";
import Joke from './Joke';
import jokesData from './jokesData';
import productsData from "./productsData";
import Product from "./Product";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import IncrDecr from "./IncrDecr";
import Todo from "./Todo";

function App()
{

    const jokesArray = jokesData.map(joke =>
        <Joke
            key={joke.id}
            question={joke.question}
            punchLine={joke.punchLine}
        />);

    // Arrow function used

    const productsArray = productsData.map(product =>
        <Product
            key = {product.id}
            name = {product.name}
            price = {product.price}
            desc = {product.description}
        />
    )
  return (
      <Router>
          <div>
              <br />
              <Navbar />
              <br /><br />
              {/* Switch is used to ensure that at once, only one route is chosen by react.
              It works in a top-down fashion. */}
              <Switch>
                  {/* exact keyword matches the path exactly with the url path. If not specified,
                   it can match a substring too! */}
                  <Route exact path = "/">
                      <h1>Incrementor/Decrementor</h1>
                      <IncrDecr />
                  </Route>
                  <Route exact path="/product">
                      <h1> Products </h1>
                      {productsArray}
                  </Route>
                  <Route exact path="/jokes">
                      <h1> Jokes </h1>
                      {jokesArray}
                  </Route>
                  <Route exact path = "/todo">
                      <h1>Todo_App</h1>
                      <Todo />
                  </Route>
              </Switch>
          </div>
      </Router>
  )
};

export default App;