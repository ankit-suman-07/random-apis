import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Advice.css";


function Advice() {
    const [advice, setAdvice] = useState('');
    useEffect(() => {
        fetchAdvice();
      }, []);
    
      const fetchAdvice = async () => {
        try {
          const response = await axios.get('https://api.adviceslip.com/advice');
          setAdvice(response.data.slip.advice);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <div className='outer'>
        <section>
            <h4>Today's Advice</h4>
                <p className='quote-p' >{advice}</p>
            <button onClick={fetchAdvice} className='next-btn' >Next Advice</button>
        </section>
    </div>
  )
}

export default Advice;