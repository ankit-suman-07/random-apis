import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Pun() {
    const [setup, setSetup] = useState('');
    const [punchline, setPunchline] = useState('');
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    useEffect(() => {
        fetchPun();
      }, []);
    
      const fetchPun = async () => {
        try {
          const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
          setSetup(response.data.setup);
          setPunchline(response.data.punchline);
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
        <h4>A Pun?</h4>
        <p>
          <span>Setup:</span> {setup}
            <br />
            <br />
          <span>Punchline:</span> {isAnswerVisible ? punchline : '******'}
            <button className='reveal' onClick={revealAnswer}>
              Reveal
            </button>
        </p>
          <button onClick={fetchPun} className='next-btn'>
            Next Pun
          </button>
      </section>
    </div>
  )
}

export default Pun;