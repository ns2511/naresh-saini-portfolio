import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound';


const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        {/* <Theme/> */}
    </Router>
);

export default App;
