import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import FormPembelian from "../Tugas-9/FormPembelian"
import DataBuah from "../Tugas-10/Buah"
import Timer from "../Tugas-11/Timer"
import DataCRUD from "../Tugas-12/DataCRUD"
import DataAPI from "../Tugas-13/DataAPI"
import Buah from "../Tugas-14/Buah"

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary static-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span> </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/tugas-10">Tugas 10</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/tugas-11">Tugas 11</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/tugas-12">Tugas 12</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/tugas-13">Tugas 13</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/tugas-14">Tugas 14</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path="/" component={FormPembelian}/>
            <Route path="/tugas-10" component={DataBuah}/>
            <Route path="/tugas-11" component={Timer}/>
            <Route path="/tugas-12" component={DataCRUD}/>
            <Route path="/tugas-13" component={DataAPI}/>
            <Route path="/tugas-14" component={Buah}/>
        </Switch>
      </div>
    </Router>
  );
}