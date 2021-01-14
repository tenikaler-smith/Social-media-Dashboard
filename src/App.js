import React from "react";
import "./globals.css";
import Header from './header.js'
import Overview from './overview.js'
import TopCardList from './top-card-list.js'


function App() {
  return(
    <>
      <Header />
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
