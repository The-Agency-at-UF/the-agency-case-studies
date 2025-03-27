// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // This line connects this front-end code to the server

// import GatorsUnidos from '../src/case-studies/GatorsUnidos';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/gatorsunidos" element={<GatorsUnidos />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import GatorsUnidos from "../src/case-studies/GatorsUnidos";
import Seagram from "./case-studies/Seagram";

const App = () => {
  return (
    <Router>
      {/* Navigation Links */}
      {/* <nav className="p-4 bg-gray-200">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/gatorsunidos" className="text-blue-600">Gators Unidos</Link>
          </li>
          <Link to="/seagram" className="text-blue-600">Seagram</Link>
        </ul>
      </nav> */}

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome to The Agency Case Studies</h1>} />
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/Seagram" element={<Seagram/>} />
      </Routes>
    </Router>
  );
};

export default App;
