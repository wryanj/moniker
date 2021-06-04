/* -------------------------------------------------------------------------- */
/*                                  Create DB                                 */
/* -------------------------------------------------------------------------- */
    -- Used to create DB --
    DROP DATABASE IF EXISTS moniker_db;
    CREATE DATABASE moniker_db;

    -- Used in Workbench to view tables --
    SELECT * FROM family;
    SELECT * FROM user;
    SELECT * FROM firstname;
    SELECT * FROM middlename;
    SELECT * FROM comment;
    SELECT * FROM session;