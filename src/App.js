import "./App.css";
import Welcome from "./Components/Welcome";
import {Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;