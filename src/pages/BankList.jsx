import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

function BankList() {
  const [bank, setBank] = useState(null);
  const {id} = useParams();
  const storedToken = localStorage.getItem('authToken');
  const getBank = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/bank/list`,{ 
        headers: {Authorization: `Bearer ${storedToken}`},
        
    });
        setBank(response.data)
        console.log(response.data) 

    }catch (error) {
        console.log(error)
    }
};

  useEffect(() =>{
    getBank();
    // If we were able to go from one details view straight to another we should pass id on the de
    // dependency array, so that everytime the component rerenders we get the information from the correct/latest id
  },[]);

  return (
    <div>
        {bank && 
        bank.map((banks) => (
         <li className="Bank Card" key={bank._id}>
            <h3>{banks.name_bank}</h3>
            <h4>Description:</h4>
            <p>{banks.description_bank}</p>
            <h4>Rate:</h4>
            <p>{banks.rate_bank}</p>
            <h4>Site:</h4>
            <p>{banks.site_bank}</p>
            <h4>YouTube:</h4>
            <p>{banks.youtube_bank}</p>
          </li>                
        ))}
  
        <Link to={`/bank/create/${id}`}> Create a New Bank Folder</Link>
    </div>
  );
}

export default BankList