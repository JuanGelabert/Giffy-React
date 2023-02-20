import React from 'react'
import { Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';


function App() {
  
  
  return (
    <div className="App">
      <section className="App-content">
        
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
