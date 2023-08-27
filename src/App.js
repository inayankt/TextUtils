import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#2B3035';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.background = '#F5F5F5';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
    <div className="alert alert-success hidden-alert" role="alert" id="copy-alert">
      <strong>Copied!</strong> Edited text copied successfully.
    </div>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
    <div className="container mt-5">
      <Textform heading='Enter the text to analyse below' phInput='Type your text here...' phOutput='Edited text will appear here...' rows={7} mode={mode} />
      <hr />
      <About mode={mode} />
    </div>
    </>
  );
}

export default App;
