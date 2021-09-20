import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "../components/navbar/Navbar";
import Register from"../pages/Register";
import Login from"../pages/Login";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar/>

            <Switch>

                {/* <Route exact path="/" component={Dashboard}/> */}
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>

            </Switch>
            
        </BrowserRouter>
    )
}
