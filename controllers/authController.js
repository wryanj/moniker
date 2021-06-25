/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {User} = require('../models');
   
/* -------------------------------------------------------------------------- */
/*                    Define Methods For Family Controller                    */
/* -------------------------------------------------------------------------- */
    module.exports = {

        /* --------------------------- Check Authorization -------------------------- */
            authcheck: async function (req, res) {

                console.log('authCheck controller endpoint hit');

                // When called upon app load, check if there is session logged in data
                try {
                    console.log('try block hit in authCheck controller');
                    res.json(req.session.logged_in)
                }
                catch (err) {
                    console.log('catch block it in authcheck');
                    console.log(err);
                    res.status(422).json(err);
                }
            },

        /* ------------------------------- Signup User ------------------------------ */

            signup: async function (req, res) {

                console.log('signup endpoint hit');

                // When the signup button is pressed and a request is sent to this endpoint...
                try {

                    // Create a new user using body of the request
                    const userData = await User.create(req.body);

                    // Save the user's session information to the session
                    req.session.save(() => {
                        req.session.user_id = userData.id;
                        req.session.logged_in = true;
                        res.status(200).json({ user: userData, message: 'Welcome, you are now logged in!' });
                    });

                } 
                // If error respond with error object in json
                catch (err) {
                    res.status(422).json(err);
                }
            },
        
        /* ------------------------------- Login User ------------------------------- */
        
            login: async function (req, res) {

                console.log('login endpoint hit');

                // When the login button is pressed and a request is sent to this endpoint...
                try {

                    // Find that user from the db using the email address provided in the request body...
                    const userData = await User.findOne({
                        where: { email: req.body.email },
                    });

                    // If nothing is found, notify client nothing is there for a user
                    if (!userData) {
                        res
                            .status(400)
                            .json({ message: 'No user is found with this email, please make sure you have entered the right email or signup if you have not already' });
                        return;
                    };

                    // Assuming a user is found, check the user password with the password provided in the request body
                    const validPassword = await userData.checkPassword(req.body.password);

                    // If the password is not valid, notify the client
                    if (!validPassword) {
                        res
                            .status(400)
                            .json({ message: 'Incorrect password! Please enter the correct password to try again' });
                        return;
                    };

                    // If the users exists and the password is valid, save the user's information to the session
                    req.session.save(() => {
                        req.session.user_id = userData.id;
                        req.session.logged_in = true;
                        res.json({ user: userData, message: 'You are now logged in! Moniker will keep you logged in unless you choose to log out, or if we make updates to the app. Happy naming!' });
                    });
        
                } 
                // If error respond with error object in json
                catch (err) {
                    console.log(err);
                    res.status(422).json(err);
                }
            },
      

        /* ------------------------------- Logout User ------------------------------ */

            logout: async function (req, res) {

                // When the logout button is selected...
                try {

                    // If the session is logged in, destroy the session object from the db and end the current session
                    if (req.session.logged_in) {
                        req.session.destroy(() => {
                            res.status(204).end();
                        });
                    } 
                    // If somhow its logged out already based on session status just end it
                    else {
                        res.status(404).end();
                    }
                }
                // If error respond with error object in json
                catch (err) {
                    console.log(err);
                    res.status(422).json(err);
                }
            }

    }