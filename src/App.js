import React from 'react'
import { Route } from 'wouter';
import './App.css';
import Buscador from './components/Buscador';
import ListOfGifs from './components/ListOfGifs';


function App() {
  
  
  return (
    <div className="App">
      <section className="App-content">
        <a href="/"><h1>Giffy</h1></a>
        <h3><i>El mejor buscador de Gifs hecho en React</i></h3>

        <Buscador />
        <Route
          component={ListOfGifs}
          path="/search/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
