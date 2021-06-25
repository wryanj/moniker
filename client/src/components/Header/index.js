/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function Header(props) {
        return (
            <header className="fixed-top my-fixed-header-height bg-dark d-flex align-items-center text-white py-3 mb-1" data-component="Header">
                {props.children}
            </header>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Header;