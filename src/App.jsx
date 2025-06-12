import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GatorsUnidos from "../src/case-studies/GatorsUnidos";
import Seagram from "./case-studies/Seagram";
import Dole from "../src/case-studies/Dole";
import MichelobUltra from "../src/case-studies/MichelobUltra";
import Bliss from "../src/case-studies/Bliss";

const App = () => {
  return (
    <Router>
      {/* Navigation Buttons */}
      <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
        <Link to="/gatorsunidos"><button>Gators Unidos</button></Link>
        <Link to="/Seagram"><button>Seagram</button></Link>
        <Link to="/dole"><button>Dole</button></Link>
        <Link to="/MichelobUltra"><button>Michelob Ultra</button></Link>
        <Link to="/Bliss"><button>Bliss</button></Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<h1>Welcome to The Agency Case Studies</h1>} />
        <Route path="/gatorsunidos" element={<GatorsUnidos />} />
        <Route path="/Seagram" element={<Seagram />} />
        <Route path="/dole" element={<Dole />} />
        <Route path="/MichelobUltra" element={<MichelobUltra />} />
        <Route path="/Bliss" element={<Bliss/>}/>
      </Routes>
    </Router>
  );
};

export default App;
