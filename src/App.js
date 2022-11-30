import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BankList from "./pages/BankList";
import BankCreate from "./pages/BankCreate";
import { Routes, Route } from "react-router-dom";
import EditBankStock from "./pages/Comment";
import StockList from "./pages/StockList";
import StockCreate from "./pages/StockCreate";
import Profile from "./pages/Profile";
import News from "./pages/News";
import React, {useState} from 'react';

function App() {

/// Variaveis ligadas ao Search
const [banks, setBanks] = useState(null);
const [showBank, setShowBank] = useState(null);

const createBank = (bank) => {
  const newBank = [bank, ...banks];
  setBanks(newBank);
  setShowBank(newBank);
};

const filterBank = (searchQuery) => {
  let filteredBank = banks.filter((bank) =>
    bank.name_bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setShowBank(filteredBank);
};


  return (
    <div className="App">
      <NavBar />
      <iframe
        width="100%"
        height="1%"
        src="https://rss.app/embed/v1/ticker/tXBw2HRHnJDSw2Pr"
        frameborder="0"
      ></iframe>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/bank/list" element={<BankList />} />
        <Route path="/bank/create" element={<BankCreate />} />
        <Route path="/comment/:id" element={<EditBankStock />} />
        <Route path="/stock/list" element={<StockList />} />
        <Route path="/stock/create" element={<StockCreate />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/news/list" element={<News/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
