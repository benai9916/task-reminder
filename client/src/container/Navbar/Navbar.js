import React from "react";
import useStyles from "./style";
import {
  IconButton,
  Typography,
  Toolbar,
  Button,
  AppBar,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from  '../../redux/actions/authAction';

const Navbar = ({ searchProduct }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const logMeOut = () => {
    dispatch(signout());
  }

  return (
    <div>
      <AppBar
        position="fixed"
        color="transparent"
        classes={{ root: classes.hide }}
      >
        <Toolbar className={classes.wrapper}>
          <IconButton edge="start" color="primary" aria-label="menu">
            <DateRangeIcon
              fontSize="large"
              className={classes.brandIcon}
              color="primary"
            />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={classes.title}
            letterSpacing={2}
            fontFamily="Monospace"
          >
            ReeMind
          </Typography>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={searchProduct}
            />
          </div> */}
          <Button onClick={logMeOut} size="small" color="secondary" variant="contained" style={{marginRight: 10}}>Logout</Button>
          <div className={classes.allIcons}>
            <AccountCircleRoundedIcon  style={{ paddingTop: 0, cursor: "pointer" }}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;