import React, {useState, useEffect } from 'react';
import useStyles from "./style";
import { Modal, Button,
    TextField, Box} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { addTask, updateTask } from '../../redux/actions/taskReminderAction';

// send data to redux
import { useDispatch, useSelector } from 'react-redux';


 const AddTaskModal = ({currentId, open , handleClose}) => {
  const classes = useStyles();

  const [tasksData, settasksData] = useState({
    name: '', type: '', dateTime: ''})


  useEffect(()  => {
    if (currentId === null) {
      settasksData({ name: '', type: '', dateTime: ''})
    }
  }, [currentId])

  const dispatch = useDispatch();

  const tasks = useSelector((state) => currentId ? state.taskReminderReducer.find((p) => p._id === currentId ) : null );

  useEffect(() => {
    if (tasks) settasksData(tasks)
  }, [tasks])

  //  form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) { 

      dispatch(updateTask(currentId, tasksData))
    } else {
        dispatch(addTask(tasksData))
    }
    handleClose()
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" > {currentId === null ? 'Add' : 'Update'} Task</h2>
                <form className={classes.root} noValidate autoComplete="off" style={{marginTop: "-30px"}}>
                    <TextField className={classes.txtfield} 
                    required
                    value={tasksData.name} 
                    onChange={(e) => settasksData({ ...tasksData, name: e.target.value})}
                    label="Task" />

                    <TextField className={classes.txtfield}
                    required
                     label="Task Type"
                     value={tasksData.type} 
                    onChange={(e) => settasksData({ ...tasksData, type: e.target.value})}
                      />


                    <TextField 
                            value={tasksData.dateTime}
                            id="datetime-local"
                            label="Date and time"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.txtfield}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={(e) => settasksData({ ...tasksData, dateTime: e.target.value})}
                        />


                        <Box style={{marginTop: 38}}>
                  <Button className={classes.btnstyle} variant="contained" color="primary" onClick={handleSubmit}>
                  {currentId === null ? 'Add' : 'Update'}
                  </Button>
                  <Button style={{marginLeft: 20}} className={classes.btnstyle} variant="contained" color="secondary" onClick={handleClose}>
                      Cancel
                  </Button>
                </Box>
                </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddTaskModal;