/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react";
  
/* -------------------------------------------------------------------------- */
/*                            Define Component                                */
/* -------------------------------------------------------------------------- */

    function NameCard(props) {

    /* ---------------------------- Visability Handlers --------------------------- */

        // Checks if card should have promote button visible on the card based on page that renders this component
        function handleShowPromoteButton () {
            if (props.showPromoteButton === true) {
                return (
                    <div className="px-1">
                        <div>
                            <button className="btn btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-up text-success" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"/>
                                    <path fillRule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }
            else {
                return;
            }
        };

    /* ------------------------------ Console Logs ------------------------------ */

        //console.log('Props on NameCard', props);

    /* ---------------------------- Component Render ---------------------------- */
        return (
            <div data-component="MyNameCard">
                <div className="card row my-1">
                    <div className="card-body d-flex align-items-center px-0">
                        
                        {/*Rank Up or Down Buttons*/}
                        <div className="px-1">
                            <div>
                                <button className="btn mb-1 btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-circle-fill text-secondary" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-circle-fill text-secondary" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/*Liked Name*/}
                        <div className="px-2 w-75 fw-bold text-center fs-5">
                            {props.name}
                        </div>

                        {/*Promote Button*/}
                        {handleShowPromoteButton()}

                        {/*Info Button*/}
                        <div className="px-1">
                            <div>
                                <button className="btn btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-info-circle text-info" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Component                                */
/* -------------------------------------------------------------------------- */

    export default NameCard;