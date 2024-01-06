// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import DetailPage from "./Pages/DetailsPage/DetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/details" component={DetailPage} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
