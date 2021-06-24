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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info">Submit</button>
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