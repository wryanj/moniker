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

    /* ------------------------------- Get Context ------------------------------ */
        const currentUserContext = useContext(CurrentUserContext);
            console.log('current user from current user context is', currentUserContext);

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <div data-component="MyNamesComponent">
                <NameCard
                    showPromoteButton={props.showPromoteButton}
                />
                <NameCard
                    showPromoteButton={props.showPromoteButton}
                />
                <NameCard
                    showPromoteButton={props.showPromoteButton}
                />
                <NameCard
                    showPromoteButton={props.showPromoteButton}
                />
                <NameCard
                    showPromoteButton={props.showPromoteButton}
                />
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Component                                */
/* -------------------------------------------------------------------------- */

    export default NameCardContainer;