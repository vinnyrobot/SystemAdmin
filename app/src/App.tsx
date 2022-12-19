import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
