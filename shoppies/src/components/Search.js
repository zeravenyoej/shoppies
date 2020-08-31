import React from 'react';

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
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <input
                    placeholder="search by title"
                    id="movie"
                    onChange={handleChange}/>
            </form>
        </div>
    );
};

export default Search;