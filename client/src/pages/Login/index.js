/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import LoginForm from "../../components/LoginForm";
    import API from "../../utils/API";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Login() {


        /* ---------------------------------- Logic --------------------------------- */
        function handleFormSubmit(event) {

            // Prevent Default
            event.preventDefault();

            // Get values from the login form
            const email = document.querySelector('#emailInput').value.trim();
            const password = document.querySelector('#passwordInput').value.trim();

            // Validate if inputs exist and advance accordingly
            if (email && password) {
                // Hit the API endpoint
                API.login ({email,password})
                    .then (res => {
                        alert(res.data.message);
                        window.location="./"
                    })
                    .catch(err => {
                        alert('The password or email you have entered is not correct. Please make sure you are entering the proper credentials')
                        console.log(err);
                    })
            }
            else {
                alert('Please ensure you have entered an email and a password!')
            }
        };

        /* ---------------------------- Component Render ---------------------------- */
        return (
            <Container className=" mt-3 mx-3">
                <Row>
                    <Col>
                        <LoginForm
                            handleFormSubmit={handleFormSubmit}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    export default Login;