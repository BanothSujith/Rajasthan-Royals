import React from 'react';
import PlayerCard from './PlayerCard';

const players = [
    { name: 'Sanju Samson', position: 'Captain and WicketKeeper', sr:'136.72',avg:'29.14' },
    { name: 'Jos Buttler', position: 'Batsman/Wicketkeeper', sr:'150.82',avg:'29.14'},
    { name: 'Yashasvi Jaiswal', position: 'Batsman', sr:'142.73',avg:'32.13' },
    { name: 'Shimron Hetmyer', position: 'Batsman',  sr:'148.99',avg:'32.30'},
    { name: 'Devdutt Padikkal ', position: 'Batsman', sr:'148.99',avg:'26.27' },
    { name: 'Riyan Parag', position: 'All-rounder',sr:'123.3',avg:'16.97'  },
    { name: 'Trent Boult', position: 'Bowler', sr:'17.58',avg:'26.61' },
    { name: 'Yuzvendra Chahal', position: 'Bower',sr:'16.9',avg:'21.51' },
    { name: 'Ravichandran Ashwin', position: 'All-rounder/Bowler', sr:'113.55',avg:'13.92' },
    { name: 'Obed McCoy', position: 'Bowler', sr:'16.5',avg:'22.57' },
    { name: 'Navdeep Saini', position: 'Bowler', sr:'19.1',avg:'28.29' },
    { name: 'Dhruv Jurel', position: 'Wicketkeeper/Batsman',sr:'144.93',avg:'21.91'  },
    { name: 'Prasidh Krishna', position: 'Bowler',sr:'23.8',avg:'32.48'  },
    { name: 'Jason Holder', position: 'All-rounder', sr:'124.97',avg:'15.73' },
    { name: 'Adam Zampa', position: 'Bowler', sr:'23.43',avg:'18'},
    { name: 'Murugan Ashwin', position: 'Bowler', sr:'24.9',avg:'30.48' },
];

function Squard() {
    return (
        <>
        <div className='players-grid'>
            {players.map((player, index) => (
                <PlayerCard key={index} player={player} />
            ))}
        </div>
        </>
    );
}

export default Squard;
