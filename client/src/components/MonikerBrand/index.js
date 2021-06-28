/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function MonikerBrand (props) {
        return (
          <>
                <h3 className={!props.isLoggedIn? "text-white mb-0 ms-3" : "text-white mb-0 ms-1"}>
                    Moniker <span className="fst-italic fs-6 text-danger">beta</span>
                </h3>
          </>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
    /*
        Exported for use Header Component as placed in app.js
    */
    export default MonikerBrand;