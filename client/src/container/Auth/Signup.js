import React, { useState } from "react";
import useStyles from "./style";
import { useDispatch } from "react-redux";

import { Typography, Container, Paper, Grid, Button } from "@material-ui/core";

import Input from "../../components/input";

import { signup } from "../../redux/actions/authAction";

const initialState = {
  name: "",
  email: "",
  password: " ",
  passwordVerify: "",
};

const Signup = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={4}>
        <Typography style={{ paddingTop: 20, paddingLeft: 30 }} variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container style={{ padding: "10px 20px" }}>
            <Input name="name" handleChange={handleChange} label="Name" />

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

            <Input
              name="passwordVerify"
              label="Repeat Password"
              type="password"
              handleChange={handleChange}
            />
          </Grid>

          <Button
            style={{
              margin: "20px",
              marginLeft: 36,
              width: 150,
              fontWeight: "bold",
            }}
            type="submit"
            size="large"
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="center" style={{ paddingBottom: 10 }}>
            <Grid item>
              <Button href="/signin">Already have an account? Sign In</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
