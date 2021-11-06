import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Registration Form</h2>
            <form action="">
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered?</Link>
        </div>
    );
};

export default Register;