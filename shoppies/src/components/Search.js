import React, { useState, useEffect } from 'react';
import Results from './Results';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movieData, setMovieData] = useState();
    const form = document.getElementById("form");

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${query}&apikey=36575925`)
        .then(res => setMovieData(res.data.Search))
        .catch(err => console.log("Here is the error: ", err))
    },[query]);
    
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovieData();
        form.reset();
        setQuery('')
    };

    return (
        <div>
            <h3>Choose a movie to nominate</h3>
            
            <form id="form" onSubmit={handleSubmit}>
                <input
                    placeholder="search by title"
                    id="movie"
                    onChange={handleChange}/>
            </form>
           
            <Results
                movieData={movieData}
                query={query}
            />
        </div>
    );
};

export default Search;