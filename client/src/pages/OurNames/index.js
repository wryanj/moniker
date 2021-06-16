/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import SectionHeading from "../../components/SectionHeading";
    import NameCardContainer from "../../components/NameCardContainer";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function OurNames() {

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <Container className=" mt-3 mx-3">
                  <Row>
                    <Col>
                        <SectionHeading> Our Names </SectionHeading>
                    </Col>
                </Row>
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