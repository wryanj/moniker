/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function SignupForm(props) {
        return (
            <form>
                <h3 className="mb-4 text-center">Sign Up</h3>
                <div className="mb-3">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputLastName" className="form-label">Last Name</label>
                    </div>
                    <input type="text" className="form-control" id="InputLastName" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text text-center">This will be set as the name of your family</div>
                </div>
                <div className="mb-3">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                    </div>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text text-center">This will be your username for future logins</div>
                </div>
                <div className="mb-3">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                    </div>
                    <input type="password" className="form-control" id="InputPassword"/>
                    <div id="emailHelp" className="form-text text-center">Pasword must be 8 characters or longer</div>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </div>
            </form>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default SignupForm;