import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Advice.css";


function Jokes() {
    const [jokeSetup, setJokeSetup] = useState('');
    const [jokeDelivery, setJokeDelivery] = useState('');
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    useEffect(() => {
        fetchJoke();
      }, []);
    
      const fetchJoke = async () => {
        try {
          const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist');
          setJokeSetup(response.data.setup);
          setJokeDelivery(response.data.delivery);
          setIsAnswerVisible(false);
        } catch (error) {
          console.log(error);
        }
      };

      const revealAnswer = () => {
        setIsAnswerVisible(true);
      };
  return (
    <div className='outer'>
      <section>
        <h4>Let's Laugh</h4>
        <p>
          <span>Setup:</span> {jokeSetup}
            <br />
            <br />
          <span>Delivery:</span> {isAnswerVisible ? jokeDelivery : '******'}
            <button className='reveal' onClick={revealAnswer}>
              Reveal
            </button>
        </p>
          <button onClick={fetchJoke} className='next-btn'>
            Next Joke
          </button>
      </section>
    </div>
  )
}

export default Jokes;