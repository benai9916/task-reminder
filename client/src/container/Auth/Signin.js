import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";

import { Typography, Container, Paper, Grid, Button } from "@material-ui/core";

import Input from "../../components/input";
import { signin } from "../../redux/actions/authAction";

const initialState = { email: "", password: " " };

const Signin = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={4}>
        <Typography style={{ paddingTop: 20, paddingLeft: 30 }} variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container style={{ padding: "10px 20px" }}>
            <Input
              name="email"
              handleChange={handleChange}
              type="email"
              label="Email"
            />

            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
          </Grid>

          <Button
            style={{ margin: "20px", marginLeft: 36, width: 150 }}
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
          <Grid container justify="center" style={{ paddingBottom: 10 }}>
            <Grid item>
              <Button href="/signup">Dont have an accout? Sign Up</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signin;
