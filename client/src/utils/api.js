/* eslint-disable import/no-anonymous-default-export */
/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                        Define Client Side API Calls                        */
/* -------------------------------------------------------------------------- */
    export default {

        /* -------------------------------------------------------------------------- */
        /*                              Login & Auth APIs                             */
        /* -------------------------------------------------------------------------- */

            // Check for authorization
            checkAuth: function () {
                return axios.get("/api/auth/authcheck");
            },

            // Log Users In
            login: function ({ email, password }) {
                return axios.post("/api/auth/login", { email, password });
            },

            // Log Users Out
            logout: function () {
                return axios.post("/api/auth/logout");
            },

        /* -------------------------------------------------------------------------- */
        /*                             DB Transaction APIs                            */
        /* -------------------------------------------------------------------------- */

            /* ------------------------------ Family Routes ----------------------------- */
                // Create a new family
                createNewFamily: function(newFamily) {
                    return axios.post("/api/family", newFamily);
                },

                // Delete a family by id
                deleteFamily: function(id) {
                    return axios.delete("/api/family/" + id);
                },

            /* ------------------------------- User Routes ------------------------------ */
                // Get the current (logged in) user
                getCurrentUser: function () {
                    return axios.get("/api/user/current");
                },

                // Create a new user
                createNewUser: function(newUser) {
                    return axios.post("/api/user", newUser);
                },

            /* ------------------------------- Name Routes ------------------------------ */
                // Create a new name on the DB
                createNewName: function (newName) {
                    return axios.post("/api/name", newName);
                },

            /* ----------------------------- Comment Routes ----------------------------- */
        
    };
