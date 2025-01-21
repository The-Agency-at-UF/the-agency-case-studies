import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

import GatorsUnidos from '../src/case-studies/GatorsUnidos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;