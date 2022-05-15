import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStackOverflow, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="mt-auto container d-flex justify-content-between py-3 mb-2 border-top">
            <span className="text-muted">© 2022 nomnoms12</span>
            <ul className="nav">
                <li>
                    <a target="_blank" className="text-muted"
                       href="https://ru.stackoverflow.com/users/339283/nomnoms12">
                        <FontAwesomeIcon icon={faStackOverflow} className="fa-xl"/>
                    </a>
                </li>
                <li className="ms-3">
                    <a target="_blank" className="text-muted"
                       href="https://github.com/nomnoms12">
                        <FontAwesomeIcon icon={faGithub} className="fa-xl"/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
