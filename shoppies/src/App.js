import React from 'react';
import './Sass/App.scss';
import Search from './components/Search';
import Nominations from './components/Nominations';

function App() {
  return (
    <div className="App">
        <h1>The Shoppies</h1>
        <div id="resultsAndNoms">
            <Search/>
            <Nominations/>
        </div>
    </div>
  );
}

export default App;
