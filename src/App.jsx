import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";

import "./index.css"
import "animate.css";
import Home from "./pages/Home"
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/Historia";
import Planes from "./pages/Planes";
import Asesoria from "./pages/Asesoria";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/asesoria" element={<Asesoria />} />
          <Route path="/historia" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
    </Router>
  );
}

export default App;
