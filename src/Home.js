import React from 'react';
import { useState, useEffect } from 'react';
import Contact from './Contact';
import Products from './HomeProduct';
import Players from './HomePlayers';
function Home() {
    const [currentLeftSlide,setCurrentLeftSlide]=useState(0);
    const [currentRightSlide,setCurrentRightSlide]=useState(0);
    const leftSlides=[
        {
            heading:'Royals Captain Sanju Samson',
            text:`
Sanju Samson, a calm yet aggressive leader, inspires Rajasthan Royals with fearless cricket and tactical acumen as captain.`
        },
        {
            heading:'Rajsthan Royals Squard',
            text:`Rajasthan Royals: A team filled with young talent and seasoned players.`
        },
        {
            heading:'Royals practice session in nets',
            text:` Our squad is hitting the nets, gearing up for the season, and we’d love for you to be part of it!`
        }
    ];

    const rightSlides=[
        {
            image:'./img/captain.png',
            about:`Sanju Samson, captain of Rajasthan Royals, excels in leadership through strategic decision-making, adaptability, and fostering teamwork, inspiring confidence in his players and enhancing their performance on the field.`
        },
        {
            image:'./img/squard.png',
            about:`squad comprises a blend of experienced international stars and emerging local talent, fostering a dynamic team environment. With a strong focus on diverse skills, including powerful batsmen, versatile all-rounders, and skilled bowlers, RR aims for IPL success.`
        },
        {
            image:'./img/practice.png',
            about:`A friendly practice session fosters camaraderie among players, encouraging teamwork and communication. Laughter and supportive interactions create a relaxed atmosphere, enhancing skills while building strong relationships both on and off the field.`

        }
    ];

    useEffect(()=>{
        const leftSlideInterval=setInterval(()=>{
            setCurrentLeftSlide((prevSlide)=>prevSlide === leftSlides.length-1 ? 0 : prevSlide+1);
        },3000);
    

    const rightSlideInterval = setInterval(() => {
        setCurrentRightSlide((prevSlide) =>
          prevSlide === rightSlides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);

      return ()=>{
        clearInterval(leftSlideInterval);
        clearInterval(rightSlideInterval);
      };
    },[leftSlides.length,rightSlides.length]);

  return (
   <>
    <div className='home' id='home'>
        <div className='home-left'>
            <h3><u>Rajasthan Royals</u></h3>
            <h2 className='left-head'><u>{leftSlides[currentLeftSlide].heading}</u></h2>
            <p className='left-text'>{leftSlides[currentLeftSlide].text}</p>
        </div>

        <div className='home-right' id='home-right'>
            <img 
            src={rightSlides[currentRightSlide].image}
            alt="RR"
            className='slide-img'/>
            <p>{rightSlides[currentRightSlide].about}</p>
        </div>
        
    </div>
    <Players/>
    <Products/>
    <Contact/>
    </>
  )
}

export default Home