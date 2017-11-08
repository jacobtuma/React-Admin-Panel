import React from "react";

export default class SideNav extends React.Component {


    render() {
        return (
            <div>
                <nav className="navbar sidenav">
                    <ul className="mr-auto">
                        <li className="nav-item"><a className="nav-link"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
                        <li className="nav-item"><a className="nav-link"><i class="fa fa-paw" aria-hidden="true"></i> Members</a></li>
                        <li className="nav-item"><a className="nav-link"><i class="fa fa-question-circle" aria-hidden="true"></i>About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}