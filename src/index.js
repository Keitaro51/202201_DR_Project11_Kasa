import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import HousingSheet from './pages/HousingSheet';
import NotFound from './pages/NotFound'
import About from './pages/About'


import './style/variable.css';
import './style/normalize.css';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="housing" element={<HousingSheet />}/>   
                <Route path="about" element={<About />}/>  
                <Route path="*" element={<NotFound />}/>            
            </Routes>
        </Router>
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
