import {useState} from 'react';


function Search(props) {
    const {filterBank} = props
    const [query, setQuery] = useState('');
    
    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterBank(e.target.value);
      };

  return (
    <div>  
    <h3>Search</h3>
         <input type="text" value={query} onChange={handleQuery} />
    </div>
  );
}

export default Search