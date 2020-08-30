import React from 'react';
import { connect } from 'react-redux';
import { removeMovie } from '../actions/index';
import cuid from "cuid";

const Nominations = (props) => {
    return (
        <div>
            <h2>Nominations</h2>
            <ul>
                {props.nominatedMovies && props.nominatedMovies.map(movie => {
                    return (
                        <li key={cuid()}>
                            <h4>{movie.Title}</h4>
                            <h4>({movie.Year})</h4>
                            <button onClick={(e) => {
                                e.preventDefault()
                                props.removeMovie(movie)}}>
                                Remove
                            </button>
                        </li>
                )})}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
      nominatedMovies: state.nominatedMovies
    };
};

export default connect(mapStateToProps, { removeMovie })(Nominations);