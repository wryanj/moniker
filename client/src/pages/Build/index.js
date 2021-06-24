/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
    import Container from "../../components/Container";
    import Row from "../../components/Row";
    import Col from "../../components/Column";
    import BuiltName from "../../components/BuiltName";
    import BuildNameCarousel from "../../components/BuildNameCarousel";
    import PlusSymbolLg from "../../components/PlusSymbolLg";


/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Build() {

    /* ---------------------------- Component Render ---------------------------- */
        /*
            Pass different props to build name carosel and populate first and middle names 
            using same component passed diff props. Default start based on ranked order
            may have to pass props for ids for data-bs-targets so the arrow work on the same
            page ok
        */
        return (
            <Container className=" mt-3 mx-3">
               
                <Row className="my-3">
                    <Col>
                        <div className="text-center">
                            <button className="btn btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle text-success" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <BuiltName/>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-bar-up text-success" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <BuildNameCarousel
                            carouselId = "firstnameCarousel"
                        />
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                       <PlusSymbolLg/>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <BuildNameCarousel
                            carouselId = "middlenameCarousel"
                        />
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <PlusSymbolLg/>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col>
                        <div className="text-center">
                            Family Last Name
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    export default Build;