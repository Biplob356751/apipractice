import React from 'react';
import './Players.css';

function Players(props) {
    const {name, salary,image} = props.play;
    const addPlayer = props.addPlayer;
    return (
        <div className='team1'>
            <div className="team-member">
                <img src={image} alt=""/>
                <h2>{name}</h2>
                <p>{salary}</p>
                <button onClick={()=> addPlayer(name,salary)}>Add Player</button>
            </div>
        </div>
    )
}

export default Players
