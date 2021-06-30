/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useEffect, useState } from "react";
    import CurrentUserContext from "../../utils/CurrentUserContext";
    import NameCard from "../NameCard";
  
/* -------------------------------------------------------------------------- */
/*                            Define Component                                */
/* -------------------------------------------------------------------------- */

    function NameCardContainer(props) {

    /* -------------------------------Context ----------------------------------- */

        // Get context from current user
        const currentUserContext = useContext(CurrentUserContext);

            // Use Context to set array of names for mapping name cards
            const userLikedNames = currentUserContext.userLikedNames;
                console.log('userlikednames array on namecard container is', userLikedNames);

    /* ---------------------------------- Render Controls ----------------------- */
        /*
            Due to react the first render of things has undefined values for context
            which throws a cant map undefined error. So I handle this here with
            Some controls to show loading if needed, then show cards when there are names
        */

        // Wait to render things until there is data loaded
        function displayMyNames() {

            // If undefined (has not loaded yet)....
            if (userLikedNames===undefined) {
                return (
                    <div className="alert-info p-3 fw-bold my-3 text-center">Loading...</div>
                )
            }

            // Else if not undefined (its loaded)....
            else {

                // If lenght is 0 (aka there are no names)....
                if (userLikedNames.length===0) {
                    return (
                        <div className="alert-info p-3 fw-bold my-3 text-center">No Liked Names Yet!</div>
                    )
                }

                // Else if length is not zero (there are names)...
                else {
                    return (
                        userLikedNames.map((name => {
                            return (
                                <NameCard
                                    showPromoteButton={props.showPromoteButton}
                                    name = {name.name}
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