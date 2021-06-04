//Reference for routing: https://www.youtube.com/watch?v=DO-pSysGItQ

import './App.css';
import React from "react";
import Joke from './AppResources/Joke';
import jokesData from './AppResources/jokesData';
import productsData from "./AppResources/productsData";
import Product from "./AppResources/Product";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./AppResources/Navbar";
import IncrDecr from "./AppResources/IncrDecr";
import Todo from "./AppResources/Todo";
import Form from "./AppResources/Form";
import MemeGen from "./AppResources/MemeGen";

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
                  <Route exact path = "/form">
                      <h1>Form</h1>
                      <Form />
                  </Route>
                  <Route exact path = "/memegen">
                      <MemeGen />
                  </Route>
              </Switch>
          </div>
      </Router>
  )
};

export default App;