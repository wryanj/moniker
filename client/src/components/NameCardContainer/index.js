/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useEffect, useState } from "react";
    import MyNamesContext from "../../utils/MyNamesContext";
    import NameCard from "../NameCard";
  
/* -------------------------------------------------------------------------- */
/*                            Define Component                                */
/* -------------------------------------------------------------------------- */

    function NameCardContainer(props) {

    /* -------------------------------Context ----------------------------------- */

        // Get context specifically for the current Users's Liked Names (this context may be changed here, or from other parts of the app using setMyNames)
        const {myNames, setMyNames} = useContext(MyNamesContext);

    /* ---------------------------------- Logic --------------------------------- */

        

    /* ---------------------------------- Render Controls ----------------------- */
        /*
            Due to react the first render of things has undefined values for context
            which throws a cant map undefined error. So I handle this here with
            Some controls to show loading if needed, then show cards when there are names

            I am also checking the is_visible property of each name here, which I set to true 
            or false by hitting filters and invoking logic defined in Name Type Filter Component
        */

        // Wait to render things until there is data loaded
        function displayMyNames() {

            // Filter the myNames context (based on is_visible property I set in NameTypeFilter)
            let filteredNames = myNames.filter(name => name.is_visible===true);
                console.log('filtered names on namecard container is', filteredNames);

    
            // If undefined (has not loaded yet)....
            if (filteredNames===undefined) {
                return (
                    <div className="alert-info p-3 fw-bold my-3 text-center">Loading...</div>
                )
            }

            // Else if not undefined (its loaded)....
            else {

                // If lenght is 0 (aka there are no liked names for that user)....
                if (filteredNames.length===0) {
                    return (
                        <div className="alert-info p-3 fw-bold my-3 text-center">No Liked Names Yet!</div>
                    )
                }

                // Else if length is not zero (there are liked names with that user)...
                else {
                    return (  
                        filteredNames.map((name => {
                            return (
                                <NameCard
                                    showPromoteButton={props.showPromoteButton}
                                    name = {name.name}
                                    key = {name.id}
                                />
                            )
                        }))
                    )
                }
            }
        };
   
           
    /* ---------------------------- Component Render ---------------------------- */

        return (
            <div data-component="MyNamesComponent">
                {displayMyNames()}
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Component                                */
/* -------------------------------------------------------------------------- */

    export default NameCardContainer;