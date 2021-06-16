/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import Row from "../Row";
    import Col from "../Column"
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


function Main (props) {
    return (
        <main className="container mt-5 pt-4" data-component="Main">
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row> 
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
    /*
        Exported for use in app.js
    */
    export default Main;