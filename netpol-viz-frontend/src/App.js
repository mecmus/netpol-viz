import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkloadGraph from './WorkloadGraph';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});


function App() {
  const [data, setData] = useState({ services: [], deployments: [], statefulsets: [], networkPolicies: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services = await axios.get('/services?namespace=default');
        const deployments = await axios.get('/deployments?namespace=default');
        const statefulsets = await axios.get('/statefulsets?namespace=default');
        const networkPolicies = await axios.get('/networkpolicies?namespace=default');
        
        setData({
          services: services.data,
          deployments: deployments.data,
          statefulsets: statefulsets.data,
          networkPolicies: networkPolicies.data
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des données : ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Netpol Viz Dashboard</h1>
      <WorkloadGraph data={data} />
    </div>
  );
}

export default App;