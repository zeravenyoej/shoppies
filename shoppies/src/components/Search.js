import React, { useState, useEffect } from 'react';
import Results from './Results';
import axios from 'axios';


const Search = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=8869509b')
        .then(res => console.log(res))
        .catch(err => console.log("Here is the error: ", err))
    },[data])


    return (
        <div>
            <h3>Movie title</h3>
            <form>
                <input
                placeholder="search movie title"
                id="movie"
                type="text"
                />
            </form>

            <Results/>
        </div>
    );
};

export default Search;