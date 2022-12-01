import { useState } from "react";

function Search({ filterBank }) {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterBank(e.target.value);
    console.log(e.target.value);
  };

  console.log(filterBank);
  return (
    <div>
      <input
        id="searchField"
        type="text"
        value={query}
        placeholder="🕵️ Search"
        onChange={handleQuery}
      />
    </div>
  );
}

export default Search;
