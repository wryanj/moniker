/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
  import React, { useEffect, useState } from 'react';
  import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
  import Wrapper from './components/Wrapper';
  import MyNames from './pages/MyNames';
 
/* -------------------------------------------------------------------------- */
/*                            Define App Component                            */
/* -------------------------------------------------------------------------- */

  function App() {
    return (
      <>
        <Wrapper>
        <MyNames/>
        </Wrapper>
        
      </>
    );
  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
  export default App;
