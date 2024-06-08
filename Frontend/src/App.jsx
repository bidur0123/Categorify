import React, { useEffect, useState } from 'react';
// import api from './api';
import './App.css';
import ListItem from './components/ListItem';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await api.get('/your-endpoint');/

        setData([{name:"hero"}]);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Data from API</h1>
      <ul>
        {data.map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
