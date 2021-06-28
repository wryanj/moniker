/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import API from "../../utils/API";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import SignupForm from "../../components/SignupForm";


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
                name: lastName
            };

            // Create a variable to hold the newly created family id
            let createdFamilyId;

            // Create a blank object that will eventually be the new user object
            let user = {};

            // Validate if inputs exist and advance accordingly
            if (lastName && email && password) {

                // First create a family
                API.createNewFamily(family)
                
                    // Take the response (created family) and get the family id
                    .then (res => {
                        console.log('response from family creation is', res);
                        createdFamilyId = res.data.id;
                    })

                    // Then assign property values to the empty user object created above
                    .then(() => {
                        user = {
                            family_id: createdFamilyId, // this should be the id of the created family in the above reply
                            first_name: firstName,
                            last_name: lastName,
                            gender: gender,
                            role: role,
                            is_admin: true,
                            email: email,
                            password: password
                        }
                        console.log('user created is', user);
                    })

                    .catch(err => {
                        alert('Oops! Something failed in the user creation. Please try again!')
                        console.log(err);
                    })
            }
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