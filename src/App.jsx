import { useState } from 'react'
import React from 'react';
import axios from 'axios';

import './App.css'


class App extends React.Component {
  state = {advice:''};

  componentDidMount() {
    this.fetchAdvices();
  }
    fetchAdvices = () => {
      axios.get('https://api.adviceslip.com/advice')
      
      .then((response)=> {

        const {advice} = response.data.slip;
          this.setState({advice});
        
        console.log(advice);

      }).catch((error) => {
        console.log(error);

      });
    }

  render() {
    
     const {advice} = this.state;
     return(

      <div className="app">
       <div className="card">
      
       <h1 className='heading'>{advice}</h1>
       <button onClick = {this.fetchAdvices}className='button'>

        <span>Give Me advice</span>
       </button>
      </div></div>
      
     )
    
  }
}

export default App;
