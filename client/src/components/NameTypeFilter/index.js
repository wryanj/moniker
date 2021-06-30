/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function NameTypeFilter() {
        return (
            <div className="text-center">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="firstnameFilter" value="first"/>
                    <label className="form-check-label" htmlFor="firstnameFilter">All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="fullnameFilter" value="full"/>
                    <label className="form-check-label" htmlFor="fullnameFilter">Full</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="firstnameFilter" value="first"/>
                    <label className="form-check-label" htmlFor="firstnameFilter">First</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="middlenameFilter" value="middle"/>
                    <label className="form-check-label" htmlFor="middlenameFilter">Middle</label>
                </div>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default NameTypeFilter;