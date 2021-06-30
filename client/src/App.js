/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

	import React, { useEffect, useState } from 'react';
	import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
	import API from './utils/API';
	import CurrentUserContext from './utils/CurrentUserContext';
	import Header from './components/Header';
	import SettingsMenu from './components/SettingsMenu';
	import MonikerBrand from './components/MonikerBrand';
	import AddNameModal from './components/AddNameModal';
	import Footer from './components/Footer';
	import Main from './components/Main';
	import Nav from './components/Navbar';
	import Login from './pages/Login';
	import Signup from './pages/Signup';
	import MyNames from './pages/MyNames';
	import OurNames from './pages/OurNames';
	import Build from './pages/Build';
	import Browse from './pages/Browse';
	
/* -------------------------------------------------------------------------- */
/*                            Define App Component                            */
/* -------------------------------------------------------------------------- */

	function App() {

		/* ---------------------------------- State --------------------------------- */

			// State for current (unknown by default)
			const [currentUser, setCurrentUser] = useState({});

			// State for whether a user is logged in or not (logged out by default)
			const [loggedIn, setLoggedIn] = useState({loggedIn: false});

		/* --------------------------------- Effect --------------------------------- */

			// Call withAuth when components have loaded
			useEffect(() => {
				withAuth();
			}, [false])
			
			// Call get current users when components have loaded
			useEffect(() => {
				getCurrentUser();
			}, [])

		/* ---------------------------------- Logic --------------------------------- */

			// Handle Authentication & Logged In state
			function withAuth() {
				// Call api check auth method...
				API.checkAuth()
					// Then if there is data in the response (logged in or not) set it as the state
				  	.then(response => {
						if (response.data) {
							setLoggedIn({ loggedIn: response.data });
						};
					})
					// If error log error
				 	.catch(error => {
						console.log(error);
				 	});
			};

			// Handle Setting & Getting Current User
			function getCurrentUser() {
				// Call the api get current user method..
				API.getCurrentUser()
					// then set the current user state to the currente user
					.then(res => {
						setCurrentUser(res.data);
				  	})
			};
			
			// Handle Log out
			function handleLogout() {
				// Call the api logout method...
				API.logout()
					// Then when a response is received, set logged in state back to false
					.then(response => {
						setLoggedIn({ loggedIn: false });
					})
					// If error log error
					.catch(error => {
						console.log(error);
					});
			};
			
			// Conditionally set a isLoggedIn variable based on state to use in the component rendering conditionals
			const { loggedIn: isLoggedIn } = loggedIn;
				console.log('loggedIN is set to', loggedIn);
				console.log('currentUser is set to', currentUser);
	
		/* ---------------------------- Render Component ---------------------------- */
			return (
				<Router>
					<CurrentUserContext.Provider value={currentUser}> 
						<Header>
							{isLoggedIn
								?
									<SettingsMenu
										handleLogout={handleLogout}
									/>
								:
									<></>
							}
							<MonikerBrand
								isLoggedIn={isLoggedIn}
							/>
							{isLoggedIn
								?
									<AddNameModal/>	
								:
									<></>
							}
						</Header>
						<Main>
							<Switch>
								<Route exact path="/login" component={Login}></Route>
								<Route exact path="/signup" component={Signup}></Route>
								{isLoggedIn
									?
										<>
											<Route exact path="/" component={MyNames}></Route>
											<Route exact path="/login" component={Login}></Route>
											<Route exact path="/signup" component={Signup}></Route>
											<Route exact path="/ournames" component={OurNames}></Route>
											<Route exact path="/build" component={Build}></Route>
											<Route exact path="/browse" component={Browse}></Route>
										</>
									:
										<>
											<Route exact path="" component={Login}></Route>
										</>
								}
							</Switch>
						</Main>
						<Footer>
							{isLoggedIn
								?
									<Nav/>
								:
									<></>
							}
						</Footer>
					</CurrentUserContext.Provider>
				</Router>
			);
	}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
 	export default App;
