import axios from 'axios';
import {useState} from 'react'

function AddProject(props) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleTitle =(e) => setTitle(e.target.value);
const handleDescription =(e) => setDescription(e.target.value);

const handleSubmit = async (e)  => {
    e.preventDefault();
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/projects`,{title, description});
        
        // clear the inputs
        setTitle('');
        setDescription('');

        // refresh the list
        props.refreshProjects();

    } catch(error) {
        console.log(error)
    }
};

  return ( 
    <div className='AddProject' >
        <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input type="text" name='title' value={title}
        onChange={handleTitle}
        />
        <label htmlFor='description'>Description</label>
         <textarea
         nam="description"
         value={description}
         cols="30"
         rows="10"
        onChange={handleDescription}
        ></textarea>

        <button type="submit">Add Project</button>
        </form>

    </div>
  ); 
}

export default AddProject