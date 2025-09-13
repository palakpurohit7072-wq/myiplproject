import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import PointsTable from './Components/PointsTable';
import Matchdetails from './Components/Matchdetails';
import Home from './Components/Home';

const App = () => {
  return (
   
      <div className='w-[50%] mx-auto  min-h-screen  bg-gray-200'>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="PointsTable" element={<PointsTable />} />
            <Route path="matchdetails/:id" element={<Matchdetails />} />
          </Route>
        </Routes>
      </div>   

  );
};

export default App;
