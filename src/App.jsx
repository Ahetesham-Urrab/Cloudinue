import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AISolution from "./pages/AISolution";
import CloudConsulting from "./pages/CloudConsulting";
import CloudImplemantation from "./pages/CloudImplemantation";
import ManageCloud from "./pages/ManageCloud";
import NetworkDesign from "./pages/NetworkDesign";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <Navbar />

        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-solutions" element={<AISolution />} />
            <Route path="/cloud-consulting" element={<CloudConsulting />} />
            <Route path="/cloud-implementation" element={<CloudImplemantation />} />
            <Route path="/managed-cloud" element={<ManageCloud />} />
            <Route path="/network-design" element={<NetworkDesign />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
