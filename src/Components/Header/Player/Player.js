import React, {useState, useEffect} from 'react';
import './Player.css';
import Players from './Players/Players';
import Data from '../../../Data/data.json';

function Player() {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(Data);
    }, []);

    
    return (
        <div className='players'>
            <h1>My Team Players</h1>
            {
                players.map(team => <Players play={team}></Players>)
            }
        </div>
    )
}

export default Player
