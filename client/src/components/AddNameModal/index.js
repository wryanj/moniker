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

                    // Ensure name entry has a capital first letter

                        // Define variable to reference when creating new name object for the db post transaction
                        let capitalizedName;

                        // Declare a function to make name capitalized
                        function capitalizeName (currentName) {
                            return currentName.charAt(0).toUpperCase() + currentName.slice(1)
                        };

                        // Invoke function to capitalize name (even if already done) by passing created ref current value as argument
                        capitalizedName = capitalizeName(Name.current.value);
                            
                    // Set the name object for the db post transaction
                    let newName = 
                        {
                            // id is auto created in sql
                            // user_id: ENTER CURRENT USER ID,
                            // family_id: ENTER CURRENT USER'S FAMILY ID,
                            name: capitalizedName,
                            gender: NameGender.current.value,
                            type: NameType.current.value,
                            // user_rank: FIGURE OUT HOW TO POPULATE
                            // family_rank is left null until promoted to family board 
                        };
                            console.log('newName for db submission read as', newName); // FOR TESTING

                    // Validate all require inputs are completed
                    if (newName.name !=="" && newName.gender !=null && newName.type!=null) {
                        console.log('trigger to execute post of added name'); // FOR TESTING - confirms call of executePost
                        /*
                        executePost();
                        */
                    }
                    else {
                        alert("Please make sure you have entered or selected values for all required fields!")
                    };

                    /*
                    // Post the new name to the db
                    function executePost () {   
                        API.addName(newName)
                            .then(closeModal)
                            .then(window.location.reload())
                            .catch(err=>console.log(err));
                    };
                    */
                    
                };
                            
        /* ---------------------------- Render Component ---------------------------- */
            return (
                <div className="ms-auto">

                    {/* Modal Button */}
                    <button  className="btn btn-sm text-success mx-3" variant="primary" onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                    </button>

                    {/* Modal Window Hidden Until Button Selection */}
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
                                            <option value="first">First Name</option>
                                            <option value="middle">Middle Name</option>
                                        </select>
                                    </div>
                                <h6 className= "text-center">For a...</h6>
                                    <div className="input-group mb-3">
                                        <select ref={NameGender} className="form-select" aria-label="Name Gender">
                                            <option value="male">Boy</option>
                                            <option value="female">Girl</option>
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