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
        <main className="container my-5" data-component="Wrapper">
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