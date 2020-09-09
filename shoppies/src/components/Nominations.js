import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeMovie } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import cuid from "cuid";
import Modal from 'react-modal';

const Nominations = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (props.nominatedMovies.length === 5) {
            setModalIsOpen(true)
        }
    }, [props.nominatedMovies])

    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '25%',
            height: '20%'
        }
      };

    Modal.setAppElement('#root')

    return (
        <div id="nominationsDiv">
            <h2>Nominations</h2>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={()=>setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Congrats Banner">
                    <div id="banner">
                        <FontAwesomeIcon class="trophy" icon={faTrophy}/>
                        <p>Congratulations!<br/> The nominations are in!</p>
                    </div>
            </Modal>

            <ul>
                {props.nominatedMovies.map(movie => {
                    return (
                        <li key={cuid()}>         
                            <img src={movie.Poster} atl="poster"/>
                            <h4>{movie.Title}</h4>
                            <div className="movieInfo"> 
                                <button className="liveButton" onClick={(e) => {
                                    e.preventDefault()
                                    props.removeMovie(movie)}}>
                                    Remove
                                </button>
                                <h4>({movie.Year})</h4>
                            </div>
                        </li>
                    )
                })}
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