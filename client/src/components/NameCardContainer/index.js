/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import NameCard from "../NameCard";
  
/* -------------------------------------------------------------------------- */
/*                            Define Component                                */
/* -------------------------------------------------------------------------- */

    function NameCardContainer(props) {

    /* ------------------------------ Console Logs ------------------------------ */

        console.log('Props on NameCardContainer', props)

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
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Component                                */
/* -------------------------------------------------------------------------- */

    export default NameCardContainer;