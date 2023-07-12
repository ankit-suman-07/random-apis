import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Riddle.css";


function Riddles() {
    const [question, setQue] = useState('');
    const [answer, setAns] = useState('');
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);
    useEffect(() => {
      fetchRiddle();
      }, []);
    
      const fetchRiddle = async () => {
        try {
          const response = await axios.get('https://api.api-ninjas.com/v1/riddles');
          setQue(response.data[0].question);
          setAns(response.data[0].answer);
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
      <section className='riddle' >
        <h4>Riddle Me This</h4>
        <p>
          <span>Riddle:</span> {question}
            <br />
            <br />
          <span>Answer:</span> {isAnswerVisible ? answer : '******'}
            <button className='reveal' onClick={revealAnswer}>
              Reveal
            </button>
        </p>
          <button onClick={fetchRiddle} className='riddle-btn '>
            Next Riddle
          </button>
      </section>
    </div>
  )
}

export default Riddles;