/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useState, useEffect } from "react"; 
    import MyNamesContext from "../../utils/MyNamesContext";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */
    function NameTypeFilter() {

        console.log('NameTypeFilter component has rendered');

        /* --------------------------------- Context -------------------------------- */

            // Users liked names
            const {myNames, setMyNames} = useContext(MyNamesContext);
                console.log('myNames context on render is set to', myNames);

        /* ---------------------------------- State --------------------------------- */

            const [isAllShowing, setShowAll] = useState(true)
            const [isFirstShowing, setisFirstShowing] = useState(false)
            const [isMiddleShowing, setisMiddleShowing] = useState(false)
            const [isFullShowing, setisFullShowing] = useState(false)

            /*
                Any time state changes, dom is re-rendered (so NameTypeFilter is re-rendered any time
                the state above changes between true or false). Use effect can be used so that a specified
                function (in this case my filter logic) will run every time this component re-renders, which
                will be any time that state used on this component changes

                The second argument in brackets is to avoid an infinite loop of component re-rendering. It is saying
                to run filter names after the first render, and then ONLY if the specified state in brackets changes 
                again. Without this additional argument, the useEffect here will loop forever basically. 
            */

            useEffect(() => {
                filterNames();
            }, [isAllShowing, isMiddleShowing, isFirstShowing, isFullShowing]);

            

        /* ---------------------------------- Logic --------------------------------- */

        // Set Filter Button Color & Manage Filter

            // Show All Names
            function handleShowAll () {
                setShowAll(true)
                setisFirstShowing(false);
                setisMiddleShowing(false);
                setisFullShowing(false);
            } 

            // Show First Names
           function handleShowFirst () {
                setShowAll(false);
                setisFirstShowing(true);
                setisMiddleShowing(false);
                setisFullShowing(false);
            }

            // Show Middle Names
            function handleShowMiddle () {
                setShowAll(false);
                setisFirstShowing(false);
                setisMiddleShowing(true);
                setisFullShowing(false);
            }
              
            // Show Full Names
            function handleShowFull () {
                setShowAll(false);
                setisFirstShowing(false);
                setisMiddleShowing(false);
                setisFullShowing(true);
            }

        // Filter myNames State
        function filterNames () {

            // Declare variable to hold value of filtered names
            let filteredNames;

            if (isAllShowing===true) {
                filteredNames = myNames.filter(function(name) {
                    return (name.type==="first" || "middle" || "full")
                })
                    console.log('----EXECUTE ALL BLOCK---')
                    console.log('filtered names set to', filteredNames)
                    console.log('is All showing - ', isAllShowing);
                    console.log('is first showing - ', isFirstShowing);
                    console.log('is middle showing - ', isMiddleShowing);
                    console.log('is full showing - ', isFullShowing);
            }
            else if (isFirstShowing===true) {
                filteredNames = myNames.filter(function(name) {
                    return (name.type==="first")
                });
                setMyNames(filteredNames);
                    console.log('---EXECUTE FIRST BLOCK---')
                    console.log('filtered names set to', filteredNames)
                    console.log('is All showing - ', isAllShowing);
                    console.log('is first showing - ', isFirstShowing);
                    console.log('is middle showing - ', isMiddleShowing);
                    console.log('is full showing - ', isFullShowing);
            }
            else if (isMiddleShowing===true) {
                filteredNames = myNames.filter(function(name) {
                    return (name.type==="middle")
                });
                setMyNames(filteredNames);
                    // console.log('----EXECUTE MIDDLE BLOCK---')
                    // console.log('filtered names set to', filteredNames)
                    // console.log('is All showing - ', isAllShowing);
                    // console.log('is first showing - ', isFirstShowing);
                    // console.log('is middle showing - ', isMiddleShowing);
                    // console.log('is full showing - ', isFullShowing);
            }
            // Implied else if isFullShowing
            else {
                filteredNames = myNames.filter(function(name) {
                    return (name.type==="full")
                });
                    console.log('----EXECUTE FULL BLOCK---')
                    console.log('filtered names set to', filteredNames)
                    console.log('is All showing - ', isAllShowing);
                    console.log('is first showing - ', isFirstShowing);
                    console.log('is middle showing - ', isMiddleShowing);
                    console.log('is full showing - ', isFullShowing);
            }
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