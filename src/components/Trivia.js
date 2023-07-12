import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Trivia.css";

function Trivia() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const queNum = Math.floor(Math.random() * 50);

  useEffect(() => {
    fetchTrivia();
  }, []);

  const fetchTrivia = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=50');
      setQuestion(response.data.results[queNum].question);
      setAnswer(response.data.results[queNum].correct_answer);
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
        <h4>Do You Know?</h4>
        <p>
          <span>Question:</span> {question}
            <br />
            <br />
          <span>Answer:</span> {isAnswerVisible ? answer : '******'}
            <button className='reveal' onClick={revealAnswer}>
              Reveal
            </button>
        </p>
          <button onClick={fetchTrivia} className='next-btn'>
            Next Trivia
          </button>
      </section>
    </div>
  );
}

export default Trivia;
