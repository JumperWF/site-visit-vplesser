import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import MainPage from './pages/main';
import SMI from './pages/smi';



const AppRouter = () => (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/smi" element={<SMI />} />
        </Routes>
      </div>
    </Router>
);

export default AppRouter;