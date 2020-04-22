import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LearningApp from "./components/LearningApp";
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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/metaharmony" component={Home} />
          <Route path="/learning" component={LearningApp} />
          <Route path="/team" component={Team} />
          <Route path="/supporters" component={Supporters} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/videos" component={Videos} />
        </Switch>

        <hr style={{ marginTop: 100 }} />
        <footer
          style={{
            marginTop: "auto",
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          <i>&copy; 2020 Meta-Harmony Team </i>
        </footer>
      </Fragment>
    );
  }
}

export default App;
