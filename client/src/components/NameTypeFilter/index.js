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
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
    
        /*
            Filter logic - update state with an array of the same names, 
            except change their is_visible property based on selected filter. 
            Then, use this as a conditional for rendering name cards on the name 
            card container.
        */

        // Update is_visible property of all myNames based on user selected filter
        function filterNames () {

            // Declare variable to hold value of filtered names
            let filteredNames;

            // If all...
            if (isAllShowing===true) {
                filteredNames = myNames.map((name) => {
                    name.is_visible=true
                    return name
                });
                setMyNames(filteredNames);
            }

            // If first...
            else if (isFirstShowing===true) {
                filteredNames = myNames.map((name) => {
                    if (name.type==='first') {
                        name.is_visible=true
                        return name
                    }
                    else {
                        name.is_visible=false
                        return name;
                    }
                });
                setMyNames(filteredNames);
            }

            // If middle...
            else if (isMiddleShowing===true) {
                filteredNames = myNames.map((name) => {
                    if (name.type==='middle') {
                        name.is_visible=true
                        return name
                    }
                    else {
                        name.is_visible=false
                        return name;
                    }
                });
                setMyNames(filteredNames);
            }

            // If full...(implied as all other types are specified in above conditionals)
            else {
                filteredNames = myNames.map((name) => {
                    if (name.type==='full') {
                        name.is_visible=true
                        return name
                    }
                    else {
                        name.is_visible=false
                        return name;
                    }
                });
                setMyNames(filteredNames);
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