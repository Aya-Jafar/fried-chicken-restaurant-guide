import "./App.css";
import React , {useState} from 'react';
import Generator from "./components/Button";



function App() {

  let quoets = ["I'm a batman", 'another quote', 'another quote 2','another quote 3', 'another quote 4']

  const getRandomQuote = () =>{
    return quoets[(Math.floor(Math.random() * quoets.length))]
  }

  const [quote , setQuote] = useState(getRandomQuote)

  const updateQuote = () => {
    let randomQuote= getRandomQuote
    setQuote(randomQuote)
  }

  return (
    <div className="App">
      <h1>{quote}</h1>
      <Generator generate={updateQuote}/>
    </div>
  );
}

export default App;
