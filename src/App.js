import React from 'react';
import Headers from './components/header'
import Headline from './components/headline'
import './app.scss';

function App() {
  return (
    <div className="App">
      <Headers/>
      <div className="main">
        <Headline header="Posts" desc="Click this buttton to render posts!"/>
      </div>
    </div>
  );
}

export default App;
