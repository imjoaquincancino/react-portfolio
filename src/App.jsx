import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

import Home from "./pages/Home"

import "./index.css"
import "animate.css";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/About";
import Planes from "./pages/Planes";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/sobre-mi" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
