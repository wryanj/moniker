/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

	import React, { useEffect, useState } from 'react';
	import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
	import Header from './components/Header';
	import SettingsMenu from './components/SettingsMenu';
	import MonikerBrand from './components/MonikerBrand';
	import Footer from './components/Footer';
	import Main from './components/Main';
	import Nav from './components/Navbar';
	import MyNames from './pages/MyNames';
	import OurNames from './pages/OurNames';
	import Build from './pages/Build';
	import Browse from './pages/Browse';
  
/* -------------------------------------------------------------------------- */
/*                            Define App Component                            */
/* -------------------------------------------------------------------------- */


	/* ---------------------------- Render Component ---------------------------- */
	function App() {
		return (
			<Router>
				<Header>
					<SettingsMenu/>
					<MonikerBrand/>
				</Header>
				<Main>
					<Switch>
						<Route exact path="/" component={MyNames}></Route>
						<Route exact path="/ournames" component={OurNames}></Route>
						<Route exact path="/build" component={Build}></Route>
						<Route exact path="/browse" component={Browse}></Route>
					</Switch>
				</Main>
				<Footer>
					<Nav></Nav>
				</Footer>
			</Router>
		);
	}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
 	export default App;
