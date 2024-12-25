import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faInstagram, faGithub, faLinkedin)

import "./index.css"
import "animate.css";
import Home from "./pages/Home"
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
