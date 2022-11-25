import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <iframe width="1200" height="60" src="https://rss.app/embed/v1/ticker/tXBw2HRHnJDSw2Pr" frameborder="0"></iframe>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
