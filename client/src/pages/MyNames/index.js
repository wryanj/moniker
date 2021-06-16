/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import NameCardContainer from "../../components/NameCardContainer";
    import SectionHeading from "../../components/SectionHeading";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function MyNames() {

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <Container className=" mt-3 mx-3">
                <Row>
                    <Col>
                        <SectionHeading> My Names </SectionHeading>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NameCardContainer
                            showPromoteButton={true}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    export default MyNames;
      