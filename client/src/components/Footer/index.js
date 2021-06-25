/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


    function Footer(props) {
        return (
            <footer className="fixed-bottom my-fixed-footer-height bg-dark text-white text-center py-1" data-component="Footer">
                {props.children}
            </footer>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Footer;