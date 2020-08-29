import React from 'react';
import './Sass/App.scss';
import Search from './components/Search';
import Results from './components/Results';
import Nominations from './components/Nominations';

function App() {
  return (
    <div className="App">
        The Shoppies
        <Search/>
        <div id="resultsAndNoms">
            <Results/>
            <Nominations/>
        </div>
    </div>
  );
}

export default App;
