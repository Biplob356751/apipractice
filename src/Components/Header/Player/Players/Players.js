import React from 'react';
import './Players.css';

function Players(props) {
    const {name, salary,image} = props.play;
    const addPlayer = props.addplayer;
    return (
        <div className='team1'>
            <div className="team-member">
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <p>{salary}</p>
                <button>Add Player</button>
            </div>
        </div>
    )
}

export default Players
