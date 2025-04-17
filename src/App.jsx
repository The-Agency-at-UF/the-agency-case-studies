import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// This line connects this front-end code to the server

import GatorsUnidos from '../src/case-studies/GatorsUnidos';
import AmazonAlexa from '../src/case-studies/AmazonAlexa';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/amazonalexa" element={<AmazonAlexa />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;