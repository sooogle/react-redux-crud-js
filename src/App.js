import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCreateContainer from "./containers/EmployeeCreateContainer";
import EmployeeListContainer from "./containers/EmployeeListContainer";
import EmployeeUpdateContainer from "./containers/EmployeeUpdateContainer";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1 className="title">従業員マスタメンテナンス</h1>
          <Route path="/" exact={true} component={EmployeeListContainer} />
          <Route path="/emp/create" component={EmployeeCreateContainer} />
          <Route path="/emp/:id/update" component={EmployeeUpdateContainer} />
        </div>
      </Router>
    );
  }
}
