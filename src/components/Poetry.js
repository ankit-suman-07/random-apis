import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Poetry.css";

function Poetry() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [lines, setLines] = useState([]);
    useEffect(() => {
        fetchPoetry();
      }, []);
    
      const fetchPoetry = async () => {
        try {
          const response = await axios.get('https://poetrydb.org/random');
          setTitle(response.data[0].title);
          setAuthor(response.data[0].author);
          setLines(response.data[0].lines);
        } catch (error) {
          console.log(error);
        }
      };
      const startIndex = Math.floor(Math.random() * 11);
  return (
    <div className='outer'>
        <section className='poetry-sec'>
            <h4>{title}</h4>
            <span className='author' > -{author}</span>
            <div className='poetry-para' >
            
                {
                  lines.slice(startIndex, startIndex + 10).map((line, index) => (
                        <span key={index} className='poetry-body' >{line} <br /> </span>
                    ))
                }
            </div>
            
            <button onClick={fetchPoetry} className='next-btn poetry-btn' >
              Next Poetry
            </button>
        </section>
    </div>
  )
}

export default Poetry;