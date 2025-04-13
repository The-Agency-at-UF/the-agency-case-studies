import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

import GatorsUnidos from "../src/case-studies/GatorsUnidos";
import Dole from "../src/case-studies/Dole";
import MichelobUltra from "../src/case-studies/MichelobUltra";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/dole" element={<Dole />} />
        <Route path="/MichelobUltra" element={<MichelobUltra />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
