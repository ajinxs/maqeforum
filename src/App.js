import React from 'react'
import './css/App.css'
import Header from './components/Header'
import Location from './components/Location';
import Main from './components/Main'


function App() {
  return (
    <div className='app'>

      <Header/>
      <Location/>
      <Main/>
      
    </div>
  );
}

export default App;
