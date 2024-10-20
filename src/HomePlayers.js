// PlayersSection.js
import React from 'react';
import PlayerCard from './PlayerCard';

const players = [
    { name: 'Player 1', position: 'Batsman', image: './img/player1.png' },
    { name: 'Player 2', position: 'Bowler', image: './img/player2.png' },
    { name: 'Player 3', position: 'Allrounder', image: './img/player3.png' },
    { name: 'Sanju Samson', position: 'Wicketkeeper', image: './img/player4.png' },
    { name: 'Player 5', position: 'Batsman', image: './img/player5.png' },
    { name: 'Player 6', position: 'Bowler', image: './img/player6.png' },
];

function Players() {
    return (
        <div className="players-section" style={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#f0f0f0', 
            padding: '20px' ,
            background:'linear-gradient(to left,rgb(114, 27, 94), rgb(0, 0, 0))'
        }}>
            <h2 style={{ marginBottom: '20px', color:'white' }}>Meet Our Players</h2>
        
            <div className='player-grid' style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between', 
                gap: '20px', 
                width: '100%' // Ensures the grid spans the full container
            }}>
                {players.slice(0, 6).map((player, index) => (  // Only display the first 6 players
                    <div key={index} style={{ 
                        flexBasis: 'calc(30% - 40px)', // Ensures 3 cards per row
                        marginBottom: '20px', 
                        backgroundColor: '#fff', 
                        padding: '15px', 
                        textAlign: 'center', 
                        borderRadius: '10px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                    }}>
                        <PlayerCard player={player} />
                    </div>
                ))}
            </div>
            <div>
            <a href="/Squard" style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Go to Players Section
    </a>
</div>
        </div>
        
    );
}

export default Players;
