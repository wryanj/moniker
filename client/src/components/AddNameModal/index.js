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

            // Visability state For Add Name Modal
            const [visability, setVisablity] = useState(false)

        /* ---------------------------------- Logic --------------------------------- */

            // Manage opening and closing of Add Name Modal via state change
            function openModal () {
                setVisablity(true)
            };
            function closeModal () {
                setVisablity(false)
            };

            // Manage cancelling capturing, validating, and posting a new name via Add Name Modal

                // Define needed references
                let Name = React.createRef();
                let NameType = React.createRef();
                let NameGender = React.createRef();

                // Manage capture, validation, and posting of a newly added name
                function addName () {

                    // Set the name object for the db
                    let newName = 
                        {
                            // id is auto created in sql
                            // user_id: ENTER CURRENT USER ID,
                            // family_id: ENTER CURRENT USER'S FAMILY ID,
                            name: Name.current.value,
                            gender: NameGender.current.value,
                            // user_rank: FIGURE OUT HOW TO POPULATE
                            // family_rank is left null until promoted to family board 
                        };
                            console.log('newName for db submission read as', newName); // FOR TESTING

                    // Validate all require inputs are completed
                    if (newName.name !=="" && newName.gender !=null && NameType.current[NameType.current.selectedIndex]!=null) {
                        console.log('trigger to execute post of added name'); // FOR TESTING
                        /*
                        executePost();
                        */
                    }
                    else {
                        alert("Please make sure you have entered or selected values for all required fields!")
                    };

                    /*
                    // Post the new name as first or middle based on type selection (?ADD TYPE FIELD TO MODELS?)
                    function executePost () {
                            
                        // If first name was type, post to firstname db
                        if (NameType.current[NameType.current.selectedIndex]==="First Name") {
                            API.addFirstName(newName)
                                .then(closeModal)
                                .then(window.location.reload())
                                .catch(err=>console.log(err));
                        }
                        // Else (if Middle Name, only other option type) post to middlename db
                        else {
                            API.addMiddleName(newName)
                                .then(closeModal)
                                .then(window.location.reload())
                                .catch(err=>console.log(err));
                        };
                    };
                    */ 
                };
                            
        /* ---------------------------- Render Component ---------------------------- */
            return (
                <div className="text-center mb-3">
                    <button  className="btn btn-sm btn-success px-2" variant="primary" onClick={openModal}>
                        Add Name
                    </button>
                    <Modal show={visability} onHide={closeModal} className="mt-3">
                        <Modal.Header>
                            <Modal.Title>Add Name</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <h6 className= "text-center">Name</h6>
                                    <div className="input-group mb-3">
                                        <input ref={Name} type="text" className="form-control" placeholder="Enter Name..." aria-label="Name" aria-describedby="nameinput"/> 
                                    </div>
                                <h6 className= "text-center">Liked as a...</h6>
                                    <div className="input-group mb-3">
                                        <select ref={NameType} className="form-select" aria-label="Name Type">
                                            <option value="First Name">First Name</option>
                                            <option value="Last Name">Middle Name</option>
                                        </select>
                                    </div>
                                <h6 className= "text-center">For a...</h6>
                                    <div className="input-group mb-3">
                                        <select ref={NameGender} className="form-select" aria-label="Name Gender">
                                            <option value="Boy">Boy</option>
                                            <option value="Girl">Girl</option>
                                        </select>
                                    </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="d-flex">
                                <div>
                                    <Button className="btn-secondary px-2 mx-2" onClick={closeModal}>Cancel</Button>
                                </div>
                                <div>
                                    <Button className="btn-success px-2" onClick={addName}>Add</Button>
                                </div>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
    };

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default AddNameModal;