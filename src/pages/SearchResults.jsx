import React, { useState } from "react";
import Search from "./Search";

function SearchResults() {
  /// Variaveis ligadas ao Search
  const [banks, setBanks] = useState([]);
  const [showBank, setShowBank] = useState(null);

  const filterBank = (searchQuery) => {
    let filteredBank = banks.filter((bank) =>
      bank.name_bank.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowBank(filteredBank);
  };

  return (
    <div>
      <Search filterBank={filterBank} />
    </div>
  );
}

export default SearchResults;
