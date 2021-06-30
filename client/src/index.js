/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.js';

/* -------------------------------------------------------------------------- */
/*                                 Render App                                 */
/* -------------------------------------------------------------------------- */
    /*
        Wrapping app component in router here so I can access useLocation
        from app js and manage conditional display of components / pages
        from that level as much as possible. 
    */
    ReactDOM.render(
		<React.StrictMode>
            <Router>
                <App />
            </Router>
		</React.StrictMode>,
      	document.getElementById('root')
    );


