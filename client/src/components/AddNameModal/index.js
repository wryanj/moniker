/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
    

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function AddNameModal() {

        /* ---------------------------------- State --------------------------------- */

            // Set modal visability state to false by default
            const [visability, setVisablity] = useState(false)

        /* ------------------------ Modal Visability Handlers ----------------------- */

            // Show Modal
            function openModal () {
                setVisablity(true)
            };

            // Hide Modal
            function closeModal () {
                setVisablity(false)
            };

        /* ---------------------------- Render Component ---------------------------- */
            return (
                <>
                    <button  className="btn btn-sm btn-success px-2" variant="primary" onClick={openModal}>
                        Add Name
                    </button>
                    <Modal show={visability} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Name</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <h6 className= "text-center">Name</h6>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Name..." aria-label="Title" aria-describedby="titleinput"/> 
                                    </div>
                                <h6 className= "text-center">Liked as a...</h6>
                                    <div className="input-group mb-3">
                                        <select className="form-select"  aria-label="Default select example">
                                            <option value="Open">First Name</option>
                                            <option value="Assigned">Middle Name</option>
                                        </select>
                                    </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="text-center">
                                <Button className="btn-success px-2">Add</Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </>
            );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default AddNameModal;