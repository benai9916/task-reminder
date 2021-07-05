import React, {useEffect, useState} from "react";
import { Typography, Grid, Paper, Box, Button,Container } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from '../../redux/actions/taskReminderAction';
import ReminderTable from '../../components/ReminderTable';
import AddTaskModal from '../../components/AddTask/AddTaskModel';


const TaskReminder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
 
    useEffect(() => {
        dispatch(getTask());
    },[reload, dispatch]);

    const handleOpen = () => {
        setCurrentId(null)
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
    };

    const allTask =  useSelector((state) => state.taskReminderReducer)

  return (
      <>
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
          <Typography
            align="center"
            style={{ paddingTop: 20, paddingLeft: 30, fontWeight: 700 }}
            variant="h2"
          >
            The only task tool you need for task management and lists
          </Typography>
          <Box width="68%" margin="auto">
            <Typography
                align="center"
                style={{ paddingTop: 20, paddingLeft: 30, color: "#6f718f" }}
                variant="h4"
            >
                Task manager tool to keep track of individual tasks and get them
                done faster.
            </Typography>
          </Box>
            
            <Box width="68%" display="flex" margin="auto" style={{ paddingTop: 40}} justifyContent="center">
                <Button variant="contained" size="large" color="primary" onClick={handleOpen}>
                    Add Reminder
                </Button>

                <AddTaskModal currentId={currentId} open={open} handleClose={handleClose}/>
            </Box>
        </Grid>
      </Grid>
    </Paper>

    <Container maxWidth="md">
    <Grid container wrap="nowrap" spacing={2}>
    <Grid item xs maxWidht={"60%"}>
        <ReminderTable AllTasks={allTask} setReload={setReload} />
    </Grid>
        
    </Grid>

    </Container>
        </>
  );
};

export default TaskReminder;
