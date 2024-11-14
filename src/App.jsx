// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import Home from './Pages/Home/Home';
import Homemain from './Pages/Home/Homemain';
import Footer from './Pages/Footer';
import About from './Pages/About ';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20"> {/* Add margin to prevent content from being hidden behind the navbar */}
        <Routes>
          <Route path="/" element={<Homemain />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
