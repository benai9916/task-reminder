import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./container/Navbar/Navbar";
import TaskReminder from "./container/HomePage/TaskReminder";
import Signin from "./container/Auth/Signin";
import Signup from "./container/Auth/Signup";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authstatus = Boolean(localStorage.getItem("authstatus"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authstatus === true) {
          return (
            <>
              <Navbar />
              <Component {...rest} {...props} />
            </>
          );
        } else {
          return (
            <>
              <Redirect
                to={{
                  pathname: "/signin",
                  state: { from: props.location },
                }}
              />
            </>
          );
        }
      }}
    />
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/signin", "/"]} component={Signin} />
          <Route exact path="/signup" component={Signup} />

          <PrivateRoute exact path="/taskreminder" component={TaskReminder} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
