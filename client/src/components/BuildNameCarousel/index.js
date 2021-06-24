/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function BuildNameCarousel(props) {
        return (
            <div id={props.carouselId} className="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        Name 1
                    </div>
                    <div className="carousel-item">
                        Name 2
                    </div>
                    <div className="carousel-item">
                        Name 3
                    </div>
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