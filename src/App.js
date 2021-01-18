import React from "react";
import "./globals.css";
import Header from './header.js'
import TopCardList from './top-card-list.js'
import Overview from './overview.js'
import Switch from './switch'

function App() {
  return(
    <>
      <Header>
        <Switch/>
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
