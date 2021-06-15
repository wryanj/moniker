/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import Row from "../Row";
    import Col from "../Column"
    import Nav from "../Navbar";
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


function Wrapper(props) {

    return (
        <main className="my-0" data-component="Wrapper">
            <Row>
               <Col>
                    <Nav/>
               </Col>
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
    export default Wrapper;