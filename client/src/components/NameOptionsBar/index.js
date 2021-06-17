/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import FullnameToggle from "../FullnameToggle";
    import AddNameModal from "../AddNameModal";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function NameOptionsBar() {
        return (
           <div className="d-flex justify-content-between align-items-center mb-3">
               <AddNameModal/>
               <FullnameToggle/>
           </div>
           
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default NameOptionsBar;