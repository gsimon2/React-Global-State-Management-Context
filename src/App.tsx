import React from 'react';
import logo from './logo.svg';
import Slider from './Slider';
import styled from 'styled-components';

import './App.css';

const AppLogo = styled.img<{duration: number}>`
  animation: ${props => `App-logo-spin infinite ${props.duration}s linear`};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Global State Management</h1>
        <AppLogo src={logo} className="App-logo" alt="logo" duration={20}/>
        <Slider/>
      </header>
    </div>
  );
}

export default App;
