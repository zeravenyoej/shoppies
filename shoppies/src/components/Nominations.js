import React from 'react';
import { connect } from 'react-redux';
import { removeMovie } from '../actions/index';
import cuid from "cuid";

const Nominations = (props) => {
    return (
        <div id="nominationsDiv">
            <h2>Nominations</h2>
            <ul>
                {props.nominatedMovies && props.nominatedMovies.map(movie => {
                    return (
                        <li key={cuid()}>
                            <img src={movie.Poster} atl="poster"/>
                            <h4>{movie.Title}</h4>
                            <div className="movieInfo"> 
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    props.removeMovie(movie)}}>
                                    Remove
                                </button>
                                <h4>({movie.Year})</h4>
                            </div>
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