import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [submit, setSubmit] = useState(false);

  function handleSubmit() {
    setSubmit(true)
  }

  function backToForm() {
    setSubmit(false)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookmarker</h1>
      </header>
      <main>
        {!submit? 
        <form>
          <input type="text" placeholder="Enter a URL" />
          <button onClick={handleSubmit}>Submit</button>
        </form>
        :
        <div>
          Thank you for your submission
          <button onClick={backToForm}>Back to form</button>
        </div>
        }
      </main>
    </div>
  );
}

export default App;
