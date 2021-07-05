import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
    padding: 0,
    overflow: "hidden",
    outline: "none",
  },
}));

function TransitionsModal({ children, ...rest }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        {...rest}
      >
        <Fade in={rest.open}>
          <div className={classes.paper}>{children}</div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
