/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function BuildNameCarousel(props) {
        return (
            <div id={props.carouselId} class="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
                <div class="carousel-inner text-center">
                    <div class="carousel-item active">
                        Name 1
                    </div>
                    <div class="carousel-item">
                        Name 2
                    </div>
                    <div class="carousel-item">
                        Name 3
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default BuildNameCarousel;