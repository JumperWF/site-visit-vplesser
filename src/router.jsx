import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import SMI from './pages/smi';



const AppRouter = () => (
    <Router>
      <div>
        <Routes>
          <Route exact path="/site-visit-vplesser" component={<MainPage />} />
          <Route path="/site-visit-vplesser/smi" element={<SMI />} />
        </Routes>
      </div>
    </Router>
);

export default AppRouter;