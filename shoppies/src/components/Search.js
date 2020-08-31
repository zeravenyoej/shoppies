import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = (props) => {
    const form = document.getElementById("form");
   
    const handleChange = (e) => {
        props.setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setMovieData();
        form.reset();
        props.setQuery('')
    };

    return (
        <form id="form" onSubmit={handleSubmit}>
            <FontAwesomeIcon class="magnifyIcon" icon={faSearch}/>
            <input
                placeholder="search by title"
                id="movie"
                onChange={handleChange}/>
        </form>
    );
};

export default Search;