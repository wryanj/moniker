/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function LoginForm(props) {
        return (
            <form>
                <h3 className="mb-3 text-center">Login</h3>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" id="passwordInput"/>
                </div>
                <div className="text-center">
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-secondary">Submit</button>
                </div>
                <div className="mt-5 text-center">
                    <div className="mb-2">
                        Not part of the moniker family yet?
                    </div>
                    <div>
                        <a href="/signup">Click here to signup!</a>
                    </div>
                </div>
            </form>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default LoginForm;