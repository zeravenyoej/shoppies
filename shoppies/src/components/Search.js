import React, { useState, useEffect } from 'react';
import Results from './Results';
import axios from 'axios';


const Search = () => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?t=${query}&apikey=36575925`)
        .then(res => console.log(res))
        .catch(err => console.log("Here is the error: ", err))
    },[query])

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setQuery('');
    };

    return (
        <div>
            <h3>Choose a movie to nominate</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="search movie title"
                    id="movie"
                    type="text"
                    // should it be query.name?
                    value={query}
                    onChange={handleChange}
                    />
            </form>
            <Results/>
        </div>
    );
};

export default Search;