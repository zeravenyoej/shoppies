import React from 'react';
import cuid from "cuid";
import { connect } from 'react-redux';
import { nominateMovie } from '../actions/index';
import applause from '../sounds/applause.wav';
import { Howl } from 'howler';

const Results = (props) => {
    const sound = new Howl({src: [applause]})

    return (
        <div id="resultsDiv">
            <h2>Results for {props.query ? `"${props.query}"` : "..."}</h2>
            <ul>
                {props.movieData && props.movieData.map(movie => {
                    return (
                        <li key={cuid()}>
                            <img src={movie.Poster} atl="poster"/>
                            <h4>{movie.Title}</h4>
                            <div className="movieInfo">
                                {/* ternary checks if movie has already been nominated and renders the appropriate button accordingly */}
                                {props.nominatedMovies.includes(movie) ? (
                                    <button className="disabledButton"> Nominate </button>
                                    ) : (
                                    <button className="liveButton" onClick={(e) => {
                                        e.preventDefault();
                                        if (props.nominatedMovies.length < 5) {
                                            props.nominateMovie(movie)
                                            sound.play()
                                        }}}>
                                        Nominate
                                    </button>
                                )}
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
  
export default connect(mapStateToProps, { nominateMovie })(Results);