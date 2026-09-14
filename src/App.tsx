import Home from "./components/Home.tsx";
import Bar from "./components/Bar.tsx";

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
      </Routes>
    </div>
  );
}

export default App;
