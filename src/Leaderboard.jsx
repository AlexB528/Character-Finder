import React, {useState, useEffect} from 'react';
import './styles/style.css';
import { useLocation } from "react-router-dom";
import { getData, addUser } from "./databaseFunctions.js"; 

function Leaderboard() {
    const location = useLocation();
    const { hours, minutes, seconds } = location.state;
    const [timeForDB, setTimeForDB] = useState({timeFormatted: hours.formatted+':'+minutes.formatted+':'+seconds.formatted , totalSeconds: seconds.basic + minutes.basic*60 + hours.basic*60})
    const [name, setName] = useState('');
    const [players, setPlayers] = useState([]);
    const [currentUserAdded, setCurrentUserAdded] = useState(false);
    const [buttonToggle, setButtonToggle] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            return data;
        };
        fetchData().then(
            function(value) {
                const sortedPlayers = value.sort((a, b) => a.time.totalSeconds - b.time.totalSeconds);
                const playersWithKeys = sortedPlayers.map((player, index) => ({ ...player, key: index + 1 }));
                setPlayers(playersWithKeys);
            }
        );
    }, [currentUserAdded]);

    return (
        <div className='finalPage'>
            <div className='finalPageSection'>
                Congradulations! You found all three characters in {hours.basic} hours, {minutes.basic} minutes, and {seconds.basic} seconds.<br />
                Enter your name to add yourself to the below leaderborad
            </div>
            <div className='finalPageSection'>
                {buttonToggle &&
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                    <button onClick={() => {
                        addUser({name:name , time: timeForDB})
                            .then(() => setCurrentUserAdded(prevState => !prevState));
                        setButtonToggle(false);
                     }}>
                        Add to Leaderboard
                    </button>
                </div>
                }

            </div>
            <div className='finalPageSection'>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player =>
                        <React.Fragment key={player.key}>
                            <tr>
                                <td>{player.key}</td>
                                <td>{player.name}</td>
                                <td>{player.time.timeFormatted}</td>
                            </tr>
                        </React.Fragment>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;
