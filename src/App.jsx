import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

import GatorsUnidos from '../src/case-studies/GatorsUnidos';
import Carnival from '../src/case-studies/Carnival';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/carnival" element={<Carnival />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;