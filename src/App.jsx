import React from 'react';
import Header from './pages/components/Header';
import Router from './router';
import './App.css';

function App() {
  return (
    <div className="App font-Inter-Tight">
        <Header />
        <Router />
    </div>
  );
}

export default App;
