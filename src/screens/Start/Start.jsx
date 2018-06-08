import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => (
    <div className="hero is-primary is-fullheight">
        <div className="hero-body">
            <div className="container">
                <h1 className="title">Vamos começar?</h1>
                <Link to="/cadastro" className="button is-large"> Let go! </Link>
            </div>
        </div>
    </div>
)

export default Start;