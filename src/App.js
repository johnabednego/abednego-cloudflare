import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Traffic } from "./pages/Traffic";
import { Attack } from "./pages/Attack";
import { Domains } from "./pages/Domains";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Traffic />}></Route>
          <Route path="/popular-domains" element={<Domains />} />
          <Route path="/attack-layer3" element={<Attack />} />
      </Routes>
    </Router>
  );
}

export default App;
