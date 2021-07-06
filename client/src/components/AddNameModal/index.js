/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useContext, useEffect, useState } from "react"; 
    import CurrentUserContext from "../../utils/CurrentUserContext";
    import MyNamesContext from "../../utils/MyNamesContext";
    import {Modal,Button} from "react-bootstrap";
    import API from "../../utils/API";
    import MyUtils from "../../utils/MyUtils";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function AddNameModal(props) {

        /* ------------------------------- Context ---------------------------------- */

            // Get provided information about the current user and associated data
            const currentUser = useContext(CurrentUserContext);

            // Get provided info about user liked name array to update on additoin without refresh
            const {myNames, setMyNames} = useContext(MyNamesContext);

        /* ---------------------------------- State --------------------------------- */

            // Visability state For Add Name Modal
            const [visability, setVisablity] = useState(false)

        /* ------------------------------- References ------------------------------- */

            // Define references to get values from component for handleAddName function
            let Name = React.createRef();
            let NameType = React.createRef();
            let NameGender = React.createRef();

        /* ---------------------------------- Logic --------------------------------- */

            // Manage opening and closing of Add Name Modal via state change
            function openModal () {
                setVisablity(true)
            };
            function closeModal () {
                setVisablity(false)
            };

            // Handle Addition of New Name Via Add Name Modal
            function handleAddName () {

                // Set the name object for the db post transaction
                let newName = 
                    {
                        // {id} for this name will be auto-created in SQL
                        user_id: currentUser.id, 
                        family_id: currentUser.family_id,
                        name: MyUtils.capitalizeFirstLetter(Name.current.value),
                        gender: NameGender.current.value,
                        type: NameType.current.value,
                        user_rank: 1, // hard coded until I figure out how to use
                        family_rank: 1, // hard coded until I figure out how to use
                        is_visible: true
                    };

                // If the required inputs are there, add the name to the db & update the state
                if (newName.name !=="" && newName.type!=null && newName.gender !=null) {
                    API.createNewName(newName)
                        .then(alert('New Name Added!'))
                        .then(closeModal)
                        .then(window.location.reload())
                        .then(console.log('new state is', myNames))
                        .catch(err => {
                            console.log(err);
                            alert('Oops! We were not able to add this name!');
                    });
                }

                // If inputs are missing, alert the user to fill out required information
                else {
                    alert("Please make sure you have entered or selected values for all required fields!")
                };
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
                                    <Button className="btn-success px-2" onClick={handleAddName}>Add</Button>
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