import React from 'react';
import Header from './components/Header';
import Meme from "./components/Meme";

function clickIt(event){
  console.log(event);
}

function App() {
  return (
    <div className='wrapper' onClick={clickIt}>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
