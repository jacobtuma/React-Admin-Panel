import React from "react";

import DashboardLayout from "./DashboardLayout";
import TopNav from "../nav/TopNav"
import SideNav from "../nav/SideNav";

export default class DashboardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <SideNav/>
                <TopNav/>
                <DashboardLayout/>

            </div>
        );
    }
}