import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AirQuality from "./pages/AirQuality";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
      <nav className="bg-green-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold flex items-center space-x-2">
            {/* Replace with your SVG logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <span>GreenSphere Jakarta</span>
          </h1>
          <div className="space-x-8 text-2xl">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/air-quality" className="hover:text-gray-300">Air Quality</Link>
            <Link to="/news" className="hover:text-gray-300">News</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-green-700 text-white py-6 mt-auto">
          <div className="container mx-auto text-center">
            <h2 className="text-lg font-bold">Find Us Here</h2>
            <div className="flex justify-center w-full mt-6">
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5363291992203!2d106.84656137499019!3d-6.192735693794915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f442e36e0f69%3A0x5ff33d732b34d6a5!2sThousand%20Islands%20National%20Park%20Office!5e0!3m2!1sen!2sid!4v1736232997858!5m2!1sen!2sid&zoom=100"
    width="90%"
    height="200"
    style={{ border: '0', borderRadius: '8px' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Thousand Islands National Park Office Map"
  />
          </div>


          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
