import React from 'react';
import { Outlet } from 'react-router-dom';
import InPageNavigation from './InPageNavigation';

const Navbar = () => {
  return (
    <div  className="'">
      <div className="flex gap-1 p-2 bg-gray-400 justify-evenly ">
        <InPageNavigation
          teams={[
            { title: "MATCHES", path: "/" },
            // { title: "NEWS", path: "/" },
            { title: "TABLE", path: "/PointsTable" }
          ]}
        />
      </div>
      <div className="p-4  flex justify-center">
        <Outlet /> {/* Ye zaruri hai nested routes ke liye */}
      </div>
    </div>
  );
};

export default Navbar;

