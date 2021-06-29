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
                <h3 className="mb-3 text-center">Sign Up</h3>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputLastName" className="form-label">First Name</label>
                    </div>
                    <input type="text" className="form-control" id="InputFirstName" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputLastName" className="form-label">Last Name</label>
                    </div>
                    <input type="text" className="form-control" id="InputLastName" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text text-center">This will be set as the name of your family</div>
                </div>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputGender" className="form-label">Gender</label>
                    </div>
                    <select id="InputGender" className="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputRole" className="form-label">Role</label>
                    </div>
                    <select id="InputRole" className="form-select" aria-label="Default select example">
                        <option selected></option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                    </div>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-2">
                    <div className="text-center fw-bold">
                        <label htmlFor="InputPassword" className="form-label">Password</label>
                    </div>
                    <input type="password" className="form-control" id="InputPassword"/>
                    <div id="emailHelp" className="form-text text-center">Pasword must be 8 characters or longer</div>
                </div>
                <div className="text-center mt-4">
                    <button type="submit" onClick={props.handleSignup} className="btn btn-sm btn-secondary">Submit</button>
                </div>
            </form>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default SignupForm;