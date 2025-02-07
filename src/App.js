import React from 'react';
import './styles/App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/NavBar'; 
import Footer from './Components/Footer'; 
import Pricing from './Pages/Pricing';
import Error404 from './Pages/Error404';

function App() {
  return (
    <Router basename='/ByteLearn'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;