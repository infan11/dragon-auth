import React from 'react';
import Header from './Share/Header/Header';
import Navbar from './Share/Navbar/Navbar';
import RightSideNav from './Share/RightSideNav..jsx/RightSideNav';
import LeftSideNav from './Share/LeftSideNav/LeftSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
   
          <div>
          <Header></Header>
          <BreakingNews></BreakingNews>
          <Navbar></Navbar>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="border">
                  <LeftSideNav></LeftSideNav>
              </div>
              <div className="md:col-span-2 border">
                  <h2 className="text-4xl">News coming soon...</h2>
              </div>
              <div className="border">
                  <RightSideNav></RightSideNav>
              </div>
          </div>
      </div>
    );
};

export default Home;