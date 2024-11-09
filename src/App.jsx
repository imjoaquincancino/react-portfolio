import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home"

import "./index.css"
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/About";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
