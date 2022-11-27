import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BankList from "./pages/BankList";
import BankCreate from "./pages/BankCreate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <iframe width="100%" height="1%" src="https://rss.app/embed/v1/ticker/tXBw2HRHnJDSw2Pr" frameborder="0"></iframe>
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/bank/list" element={<BankList/>}/>
        <Route path="/bank/create" element={<BankCreate/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
