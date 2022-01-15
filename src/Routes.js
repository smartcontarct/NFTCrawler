
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './utils/history';
// import About from "./pages/About";
import Home from "./pages/MainPage";
import Marketplace from "./pages/marketplace";
import About from "./pages/about";
import Navbar from './components/Navbar';
// import ServiceAdminPage from "./pages/ServiceAdminPage";
// import ManageService from "./pages/ManageService";
// import ServeiceReceivers from "./pages/ServeiceReceivers";
// import UserPage from "./pages/UserPage"
// import PolicyManagement from "./pages/PolicyManagement";
// import AddPolicy from "./pages/AddPolicy";

// import AdminPage from "./pages/AdminPage";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/marketplace" exact component={Marketplace} />
                    <Route path="/about" exact component={About} />
                     {/* <Route path="/ServiceAdminPage" component={ServiceAdminPage} />
                     <Route path="/ManageService" component={ManageService} />
                     <Route path="/ServeiceReceivers" component={ServeiceReceivers} />
                     <Route path="/UserPage" component={UserPage} />
                     <Route path="/PolicyManagement" component={PolicyManagement} />
                     <Route path="/AddPolicy" component={AddPolicy} /> */}
                </Switch>
            </Router>
        )
    }
}