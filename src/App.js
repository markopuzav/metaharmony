import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LearningApp from "./components/LearningApp";
import About from "./components/About";
import Team from "./components/Team";
import Supporters from "./components/Supporters";
import ContactForm from "./components/ContactForm";
import Videos from "./components/Videos";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route
            path={process.env.PUBLIC_URL + "/metaharmony"}
            component={Home}
          />
          <Route
            path={process.env.PUBLIC_URL + "/learning"}
            component={LearningApp}
          />
          <Route path={process.env.PUBLIC_URL + "/team"} component={Team} />
          <Route
            path={process.env.PUBLIC_URL + "/supporters"}
            component={Supporters}
          />
          <Route
            path={process.env.PUBLIC_URL + "/contact"}
            component={ContactForm}
          />
          <Route path={process.env.PUBLIC_URL + "/videos"} component={Videos} />
        </Switch>

        <hr style={{ marginTop: 100 }} />
        <footer
          style={{
            marginTop: "auto",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          <i>&copy; 2020 Meta-Harmony® Team </i>
        </footer>
      </Fragment>
    );
  }
}

export default App;
