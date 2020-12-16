import React from "react";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import PopupForm from "./PopupForm";
import { connect } from "react-redux";
import { closeModalAction } from "../actions/modalAction";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Popup(props) {
  const classes = useStyles();

  const { isOpen, close, id, tabValue } = props;

  return (
    <div>
      <Modal
        disableEnforceFocus
        disableAutoFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Container
            maxWidth="sm"
            style={{ outline: 0 }}
            className={classes.paper}
          >
            <PopupForm id={id} close={close} tabValue={tabValue} />
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    tabValue: state.modal.tabValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(closeModalAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
