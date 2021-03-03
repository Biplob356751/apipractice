import React, {useState, useEffect} from 'react';
import './Player.css';
import Players from './Players/Players';
import Data from '../../../Data/data.json';

function Player() {
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        setPlayers(Data);
    }, []);

    const addPlayer = (name,salary) =>{
       setPlayer([...player,name,salary])
    }
    return (
        <div className='players'>
            <h1>My Team Players</h1>
            <p>This My Dream Club.</p>
            <div>{
                player.map(member => <p>{member}</p>)
            }
            </div>
            {
                players.map(team => <Players key={team.id} addPlayer={addPlayer} play={team}></Players>)
            }
        </div>
    )
}

export default Player
