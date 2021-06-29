/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import API from "../../utils/API";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import SignupForm from "../../components/SignupForm";
    import MyUtils from "../../utils/MyUtils";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Signup() {

        /* ---------------------------------- Logic --------------------------------- */
        function handleSignup (event) {

            // Prevent Default
            event.preventDefault();

            // Get values from the login form
            const firstName = document.querySelector('#InputFirstName').value.trim();
            const lastName = document.querySelector('#InputLastName').value.trim();
            const gender = document.querySelector('#InputGender').value.trim();
            const role = document.querySelector('#InputRole').value.trim();
            const email = document.querySelector('#InputEmail').value.trim();
            const password = document.querySelector('#InputPassword').value.trim();

            // Create an object to post to the Family DB (Create family before user)
            const family = {
                name: MyUtils.capitalizeFirstLetter(lastName)
            };

            // Create a variable to hold the newly created family id
            let createdFamilyId;

            // Create a blank object that will eventually be the new user object
            let user = {};

            // If all required inputs are present....
            if (lastName && firstName && email && password && gender && role) {

                // First create a family
                API.createNewFamily(family)
                
                    // Take the response (created family) and get the family id
                    .then (res => {
                        createdFamilyId = res.data.id;
                    })

                    // Then assign property values to the empty user object created above
                    .then(() => {
                        user = {
                            family_id: createdFamilyId, // this should be the id of the created family in the above reply
                            first_name: MyUtils.capitalizeFirstLetter(firstName),
                            last_name: MyUtils.capitalizeFirstLetter(lastName),
                            gender: gender,
                            role: role,
                            is_admin: true,
                            email: email,
                            password: password
                        }
                    })

                    // Then create a new user in the db for the family just created
                    .then(() => {

                        API.createNewUser(user)

                            // If the create new user call to server returns a good response (no error)....
                            .then(res => {

                                // Console log the response for dev purpose
                                console.log('created user object is', res);

                                // Greet the user with an alert...
                                alert(`Welcome ${MyUtils.capitalizeFirstLetter(firstName)}! Your now part of the moniker family. Please use your login credentials to sign in on the next page. Happy naming!`);

                                // And redirect them to the login screen...
                                window.location="./";
                            })

                            // If there is an error in the create new user process, catch it and delete the created family so there is no duplicates upon retry
                            .catch(err => {

                                // Console log the error
                                console.log('error in create new user catch block is', err.response);
        
                                // Then delete the family I recently created
                                API.deleteFamily(createdFamilyId)

                                    // Console log that response for dev purpose
                                    .then(res => {
                                        console.log('rollback (delete) created family response', res);
                                        alert('Oops! Something went wrong in the create new user process. Please try again');
                                    })
                
                                    // If error catch it
                                    .catch(err => {
                                        console.log(err.response);
                                        alert('Oops! Something failed in the rollback (delete) of family creation');
                                    });
                            })
                    })

                    // If there is error when creating a family....
                    .catch(err => {
                        console.log(err);
                        alert('Oops! Something failed in the family creation process Please try again!')
                    })
            }

            // Else if any information is missing from the form upon hitting the submit button...
            else {
                alert('Please ensure you have entered all the required information!')
            }
        };

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <Container className=" mt-3 mx-3">
                <Row>
                    <Col>
                        <SignupForm
                            handleSignup = {handleSignup}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    export default Signup;