/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
  import React, { useEffect, useState } from 'react';
  import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Main from './components/Main';
  import Nav from './components/Navbar';
  import MyNames from './pages/MyNames';
 
/* -------------------------------------------------------------------------- */
/*                            Define App Component                            */
/* -------------------------------------------------------------------------- */

  function App() {
    return (
      <>
        <Header>
          Sticky Header Page Title
        </Header>
        <Main>
          <MyNames/>
        </Main>
        <Footer>
          <Nav></Nav>
        </Footer>
      </>
    );
  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
  export default App;
