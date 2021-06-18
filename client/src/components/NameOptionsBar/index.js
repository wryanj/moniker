/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import NameTypeFilter from "../NameTypeFilter";
    import AddNameModal from "../AddNameModal";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function NameOptionsBar() {
        return (
           <div className="mb-2">
                <NameTypeFilter/>
           </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default NameOptionsBar;