import { useEffect, useState } from 'react';
import AddUser from './components/CreateUser/CreateUser.js';
import ShowUser from './components/User.js';
import './App.css';

function App() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => { setBackendData(data); 
        })
    }, []);

  return (
    <div>
      <AddUser />
      <ShowUser items={backendData.users}/>
    </div>
  );
}

export default App;
