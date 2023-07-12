import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='outer' >
      <div className='card'>
        <p>
          This website is a collection of several random APIs. 
          Select any of the above category and you will get some random data based on the selection.
          Made using ReactJS, each selection brings a React component that fetches the required data
          and displays inside this card. The APIs are being fetched using the Axios library.
        </p>
        <p className='list' >
          <b>Advice -</b> Generates a Random Advice
          <br />
          <b>Trivia -</b> Generates a Random Question
          <br />
          <b>Jokes -</b> Generates a Random Joke
          <br />
          <b>Poetry -</b> Generates 10 lines of a Random Poetry
          <br />
          <b>Pun -</b> Generates a Random Pun
          <br />
          <b>Riddles -</b> Generates a Random Riddle 
          <br />
        </p>
      </div>
    </div>
  )
}

export default Home;