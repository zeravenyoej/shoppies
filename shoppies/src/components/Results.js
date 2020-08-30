import React from 'react';
import cuid from "cuid";
import { connect } from 'react-redux';
import { nominateMovie } from '../actions/index';

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
                            <button onClick={(e) => {
                                e.preventDefault();
                                props.nominateMovie(movie)}}>
                                Nominate
                            </button>
                        </li>
                )})}
            </ul>
        </div>
    );
};


const mapStateToProps = state => {
    return {};
};
  
export default connect(mapStateToProps, { nominateMovie })(Results);