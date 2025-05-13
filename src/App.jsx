//import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import GatorsUnidos from "../src/case-studies/GatorsUnidos";
import Seagram from "./case-studies/Seagram";
import Dole from "../src/case-studies/Dole";
import MichelobUltra from "../src/case-studies/MichelobUltra";

const App = () => {
  return (
    <Router>
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome to The Agency Case Studies</h1>} />
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/Seagram" element={<Seagram/>} />
        <Route path="/dole" element={<Dole />} />
        <Route path="/MichelobUltra" element={<MichelobUltra />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
