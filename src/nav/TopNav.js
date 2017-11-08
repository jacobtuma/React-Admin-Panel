import React from "react";

export default class TopNav extends React.Component {


    render() {
        return (
            <div>
                <nav className="navbar topnav">
                    <a className="navbar-brand"><h2>DOG PORTAL</h2></a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link">Home</a></li>
                        <li className="nav-item"><a className="nav-link">Members</a></li>
                        <li className="nav-item"><a className="nav-link">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}