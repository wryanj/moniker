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

            /* ------------------------------- User Routes ------------------------------ */
                // Get the current (logged in) user
                getCurrentUser: function () {
                    return axios.get("/api/user/current");
                },

            /* ------------------------------- Name Routes ------------------------------ */

            /* ----------------------------- Comment Routes ----------------------------- */
        
    };
