/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useEffect, useState } from "react";
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    

    /* ---------------------------- Component Render ---------------------------- */
    function BuildNameCarousel(props) {

        /* --------------------------------- Context -------------------------------- */

            // May need to get built name context and wrap the carosel and name in it

        /* ---------------------------------- Logic --------------------------------- */

        /* ----------------------------- Render Controls ---------------------------- */

            function populateNames() {

                // If undefined (has not loaded yet)....
                if (props.names===undefined) {
                    return (
                        <div className="alert-info p-3 fw-bold my-3 text-center">Loading...</div>
                    )
                }

                // Else if not undefined (its loaded)....
                else {

                    // If lenght is 0 (aka there are no liked names for that user)....
                    if (props.names.length===0) {
                        return (
                            <div className="alert-info p-3 fw-bold my-3 text-center">No Liked Names Yet!</div>
                        )
                    }

                    // Else if length is not zero (there are liked names with that user)...
                    else {
                        return (  

                            // Map through names to populate carosel and give only the first one the active class (bs javascript plugin manages switching this as you scroll)
                            props.names.map((name, index) => {
                                return index < 1
                                ?
                                
                                    <div className="carousel-item active" key={name.id}> 
                                        {name.name}
                                    </div>
                                
                                :
                                
                                    <div className="carousel-item" key={name.id}>
                                        {name.name}
                                    </div>
                            })
                        )
                    }
                }
            };
        
        /* ---------------------------- Component Render ---------------------------- */
        return (
            <div id={props.carouselId} className="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    {populateNames()}
                    {/* <div className="carousel-item active">
                        name 1
                    </div>
                    <div className="carousel-item">
                        name 10
                    </div>
                    <div className="carousel-item">
                        name 20
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default BuildNameCarousel;