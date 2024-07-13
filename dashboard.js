import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function Dashboard() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      const modulesCollection = collection(db, 'modules');
      const modulesSnapshot = await getDocs(modulesCollection);
      const modulesList = modulesSnapshot.docs.map(doc => doc.data());
      setModules(modulesList);
    };

    fetchModules();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {modules.map((module, index) => (
          <li key={index}>{module.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
