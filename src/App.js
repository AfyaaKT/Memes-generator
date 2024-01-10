import './App.css';
import Header from './Componnts/Header';
import Meme from './Componnts/Meme';
import React from 'react';


function App() {
  const [darkMode , setDarkMode]=React.useState(false)

  const toggleDarkMode = ()=>{
    setDarkMode(prevState=>!prevState)
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Meme darkMode={darkMode} />
     
      
    </div>
  );
}

export default App;
