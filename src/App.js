import './App.css';
import React from "react";
import Joke from './Joke';

function App()
{
  return (
      <div>
        <Joke joke={{question: "Why is 1 so scared of 7?", punchline: "Because 7 ate 9"}}
        />
        <Joke joke={{question: "Why are alphabets so bad by manners?", punchline: "Because abc = ae BC!"}}
        />
        <Joke joke={{punchline: "All socks are eyes and all eyes are pyjamas!"}}
        />
      </div>
  )
}

export default App;