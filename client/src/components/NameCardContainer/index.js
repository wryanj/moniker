/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useEffect, useState } from "react";
    import CurrentUserContext from "../../utils/CurrentUserContext";
    import MyNamesContext from "../../utils/MyNamesContext";
    import NameCard from "../NameCard";
  
/* -------------------------------------------------------------------------- */
/*                            Define Component                                */
/* -------------------------------------------------------------------------- */

    function NameCardContainer(props) {

    /* -------------------------------Context ----------------------------------- */

        // Get context from current user (entire user object)
        const currentUser = useContext(CurrentUserContext); // May not need here, leaving for now in case

        // Get context specifically for the current Users's Liked Names (this context may be changed here, or from other parts of the app using setMyNames)
        const {myNames, setMyNames} = useContext(MyNamesContext);

    /* ---------------------------------- Logic --------------------------------- */

        

    /* ---------------------------------- Render Controls ----------------------- */
        /*
            Due to react the first render of things has undefined values for context
            which throws a cant map undefined error. So I handle this here with
            Some controls to show loading if needed, then show cards when there are names
        */

        // Wait to render things until there is data loaded
        function displayMyNames() {

            // If undefined (has not loaded yet)....
            if (myNames===undefined) {
                return (
                    <div className="alert-info p-3 fw-bold my-3 text-center">Loading...</div>
                )
            }

            // Else if not undefined (its loaded)....
            else {

                // If lenght is 0 (aka there are no liked names for that user)....
                if (myNames.length===0) {
                    return (
                        <div className="alert-info p-3 fw-bold my-3 text-center">No Liked Names Yet!</div>
                    )
                }

                // Else if length is not zero (there are liked names with that user)...
                else {
                    console.log('myNames in map', myNames);
                    return (
                        
                        myNames.map((name => {
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