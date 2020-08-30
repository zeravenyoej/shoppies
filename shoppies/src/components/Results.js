import React from 'react';
import cuid from "cuid";

const Results = (props) => {
    return (
        <div id="resultsDiv">
            <h2>Results for {props.query ? `"${props.query}"` : "..."}</h2>
            <ul>
                {props.movieData && props.movieData.map(movie => {
                    return (
                        <li key={cuid()}>
                            <h4>{movie.Title}</h4>
                            <h4>({movie.Year})</h4>
                            <button onClick={()=>{}}>Nominate</button>
                        </li>
                )})}
            </ul>
        </div>
    );
};

export default Results;