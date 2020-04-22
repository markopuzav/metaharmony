import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import App from "./App";
import "./index.scss";

/**
 * Default behaviour of react-router is to not scroll to the top.
 * https://reacttraining.com/react-router/web/guides/scroll-restoration
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ConnectedApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
