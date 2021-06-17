/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import NameOptionsBar from "../../components/NameOptionsBar";
    import NameCardContainer from "../../components/NameCardContainer";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function OurNames() {

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <Container className=" mt-3 mx-3">
                {/* <Row>
                    <Col>
                       <NameOptionsBar/>
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <NameCardContainer
                            showPromoteButton={false}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    export default OurNames;