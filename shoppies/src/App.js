import React, { useState, useEffect } from 'react';
import './Sass/App.scss';
import Search from './components/Search';
import Nominations from './components/Nominations';
import axios from 'axios';
import Results from './components/Results';

function App() {
    const [query, setQuery] = useState('');
    const [movieData, setMovieData] = useState();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${query}&apikey=36575925`)
        .then(res => setMovieData(res.data.Search))
        .catch(err => console.log("Here is the error: ", err))
    },[query]);
    

    return (
        <div className="App">
            <div id="topContent">
                <h1>The Shoppies</h1>
                <h3>Choose up to five movies to nominate</h3>
                <Search
                    setQuery={setQuery}
                    setMovieData={setMovieData}
                />
            </div>
            <div id="resultsAndNoms">
                <Results
                    movieData={movieData}
                    query={query}/>
                <Nominations/>
            </div>
        </div>
    );
};

export default App;
