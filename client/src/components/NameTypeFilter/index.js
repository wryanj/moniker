/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */
    function NameTypeFilter() {

        /* ---------------------------------- State --------------------------------- */

        const [isAllShowing, setShowAll] = useState(true)
        const [isFirstShowing, setisFirstShowing] = useState(false)
        const [isMiddleShowing, setisMiddleShowing] = useState(false)
        const [isFullShowing, setisFullShowing] = useState(false)

        /* ---------------------------------- Logic --------------------------------- */
        // Show Ticket Details
        function handleShowAll () {
            // Set this showing state to true and others false
            setShowAll(true);
            setisFirstShowing(false);
            setisMiddleShowing(false);
            setisFullShowing(false);
        } 
        // Show Ticket Details
         function handleShowFirst () {
            // Set this showing state to true and others false
            setShowAll(false);
            setisFirstShowing(true);
            setisMiddleShowing(false);
            setisFullShowing(false);
        }

        // Show Client Details
        function handleShowMiddle () {
            // Set this state true and others false
            setShowAll(false);
            setisFirstShowing(false);
            setisMiddleShowing(true);
            setisFullShowing(false);
        }

        // Show Client Details
        function handleShowFull () {
            // Set this state true and others false
            setShowAll(false);
            setisFirstShowing(false);
            setisMiddleShowing(false);
            setisFullShowing(true);
        }

        /* ---------------------------- Render Component ---------------------------- */
        return (
        
            <div className="row mb-3 justify-content-center">
                            <div className="col text-center">
                               <button 
                                    className={isAllShowing ? "btn alert-info btn-sm text-center shadow-sm" : "btn btn-light btn-sm text-center shadow-sm"} 
                                    onClick={handleShowAll}>
                                        All
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isFirstShowing ? "btn alert-info btn-sm text-center shadow-sm" : "btn btn-light btn-sm text-center shadow-sm"} 
                                    onClick={handleShowFirst}>
                                        First
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isMiddleShowing ? "btn alert-info btn-sm text-center shadow-sm" : "btn btn-light btn-sm text-center shadow-sm"} 
                                    onClick={handleShowMiddle}>
                                        Middle
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isFullShowing ? "btn alert-info btn-sm text-center shadow-sm" : "btn btn-light btn-sm text-center shadow-sm"} 
                                    onClick={handleShowFull}>
                                        Full
                                </button>
                            </div>
            </div>
            
            
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default NameTypeFilter;