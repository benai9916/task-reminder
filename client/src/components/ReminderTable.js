import { useState } from "react";
import useStyles from "./style";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
  Paper,
  Container,
  InputLabel,
  InputBase,
  Button,
  FormControl,
  Select
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskModel from "./TaskModel";
import SearchIcon from "@material-ui/icons/Search";
import EditIcon from '@material-ui/icons/Edit';
import AddTaskModal from "../components/AddTask/AddTaskModel";
import { deleteTask } from "../redux/actions/taskReminderAction";
import { useDispatch } from "react-redux";
import moment from 'moment';

const PurpleCell = ({ data }) => {
  return (
    <Typography
      style={{
        color: "#6B59CC",
        fontSize: 14,
        fontWeight: "bold",
      }}
    >
      {data}
    </Typography>
  );
};

const TableHeaders = () => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow style={{ paddingTop: "10px" }}>

        <TableCell className={classes.headCell}>
          <Box>Task</Box>
        </TableCell>

        <TableCell className={classes.headCell}>
          <Box>Type</Box>
        </TableCell>

        <TableCell className={classes.headCell}>
          <Box>
            Deadline
          </Box>
        </TableCell>

        <TableCell className={classes.headCell}>
          <Box>Edit</Box>
        </TableCell>

        <TableCell className={classes.headCell} >
          <Box>
            Delete
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

const Tablerows = ({ item, setModalOpenDelete, setTaskIdToDelete, handleClose, handleOpen, open, currentId }) => {
  const classes = useStyles();

  const currentDate = moment().format("YYYY-MM-DD");
  const taskDate = moment(item.dateTime).format("YYYY-MM-DD");
  const taskTime = moment(item.dateTime).format("hh:mm:ss");


  var forBg;
  if (currentDate > taskDate) {
    forBg = true;
  }

  return (
    <TableRow className={forBg ? classes.rowBgColor : ""}>
      {/* taks name */}
      <TableCell className={classes.tableCell}>
        <PurpleCell data={item.name} />
      </TableCell>

      {/* taks type */}
      <TableCell
        style={{ minWidth: 26, fontSize: 14 }}
        className={classes.tableCell}
      >
        <Box>{item.type}</Box>
      </TableCell>

      {/* time */}
      <TableCell style={{ minWidth: 50 }} className={classes.tableCell}>
        <PurpleCell data={taskDate} />
        <PurpleCell data={taskTime} />
      </TableCell>

      {/* edit */}
      <TableCell
        style={{ minWidth: 100, cursor: "pointer" }}
        className={classes.tableCell}
      >
          <EditIcon  onClick={() => {handleOpen(item["_id"])}}/>
        <AddTaskModal currentId={currentId} open={open} handleClose={handleClose}/>
      </TableCell>

      {/* delete  */}
      <TableCell style={{ minWidth: 60, cursor: "pointer" }} className={classes.tableCell}>
        <DeleteIcon
          onClick={() => {
            setModalOpenDelete(true);
            setTaskIdToDelete(item["_id"]);
          }}
        />
      </TableCell>
      
    </TableRow>
  );
};

function TaskReminderTable({ AllTasks, setReload }) {
  const classes = useStyles();
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [serachText, setSeatchText] = useState("");
  const [taskIdToDelete, setTaskIdToDelete] = useState();
  const [currentId, setCurrentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [filterdValue, setFilterdValue] = useState();

  const dispatch = useDispatch();


  const handleClose = () => {
    setOpen(false);
};

const handleOpen = (id) => {
    setCurrentId(id)
    setOpen(true);
  };


  const searchProduct = (e) => {
    setSeatchText(e.target.value);
  };

//   delete
  const deleteTaskBtn = () => {
    dispatch(deleteTask(taskIdToDelete));
    setReload(true);
  }

  let AllTasksFiltered = []

  const filterDate = (e) => {
    setFilterdValue(e.target.value)
  }

    var startOfWeek = moment().startOf('isoWeek').format("YYYY-MM-DD");
    var endOfWeek = moment().endOf('isoWeek').format("YYYY-MM-DD");
        
        AllTasks.filter((item) => {
            const f_date = moment(item.dateTime.split('T')[0]).format("YYYY-MM-DD");
            if (filterdValue === 'week') {
                if(f_date >= startOfWeek && f_date <= endOfWeek) {
                    AllTasksFiltered.push(item);
                } 
            } else {
                AllTasksFiltered.push(item);
            }
        })

        var count = 0
        AllTasksFiltered.filter((item) => {
            const currentDate = moment().format("YYYY-MM-DD");
            const taskDate = moment(item.dateTime).format("YYYY-MM-DD");
            
            if (currentDate < taskDate) {
                count += 1;
            }
          })

  return (
    <Box>
      <TaskModel
        open={modalOpenDelete}
        onClose={() => setModalOpenDelete(false)}
      >
        <Paper style={{ position: "relative" }}>
          <Container style={{ height: 150, width: 290 }}>
            <InputLabel
              htmlFor="warehouseName"
              className={classes.labelStyle}
              style={{ paddingTop: 40 }}
            >
              Are you sure you want to delete
            </InputLabel>
            <div style={{ marginTop: 15 }}>
              <Button
                className={classes.addWarehouse}
                size="small"
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  position: "relative",
                  top: 6,
                  left: 0,
                  marginRight: 12,
                }}
                text={"Delete"}
                onClick={() => {
                  deleteTaskBtn();
                  setModalOpenDelete(false);
                }}
              > Delete</Button>
              <Button
                className={classes.addWarehouse}
                size="small"
                variant="contained"
                color="primary"
                style={{
                  position: "relative",
                  top: 6,
                  left: 14,
                  backgroundColor: "#F5F5FA",
                  color: "#8F92A1",
                }}
                text={"Cancel"}
                onClick={() => setModalOpenDelete(false)}
              >Cancel </Button>
            </div>
          </Container>
        </Paper>
      </TaskModel>

      <Box className={`${classes.container} ${classes.tableWrapper2}`}>
        <Box>
          <Box className={classes.titleBar}>
            <Typography className={classes.title}>Active Task &nbsp;{count}</Typography>

            <div style={{ position: "absolute", right: 270}}>
            <FormControl variant="outlined" className={classes.formControl}>
                <div className={classes.formControl}>
                  <InputLabel
                    htmlFor="outlined-age-native-simple"
                    className={classes.formControl}
                  >
                    Sort by
                  </InputLabel>
                  <Select
                    native
                    value={filterdValue}
                    onChange={filterDate}
                    label="filter by date"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                    className={`${classes.styleSelect} ${classes.select}`}
                  >
                    <option aria-label="None" value="" />
                    <option value="week">This week</option>
                    <option value="month">This month</option>
                    <option value="year">This year</option>
                  </Select>
                </div>
              </FormControl>
            </div>

            <div className={classes.search} style={{position: "absolute", right: 20}}>
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
            </div>
          </Box>
          <Box>
            <Table width="100%" style={{ maxWidth: 1360 }}>

              <TableHeaders />

              <TableBody className={classes.tableBody}>
                {AllTasksFiltered.filter(
                  (txt) =>
                    txt["name"]
                      .toLowerCase()
                      .includes(serachText.toLowerCase()) ||
                    txt["type"]
                      .toLowerCase()
                      .includes(serachText.toLowerCase()) ||
                    String(txt["dateTime"])
                      .toLowerCase()
                      .includes(serachText.toLowerCase())
                ).map((item, index) => (

                  <Tablerows
                    item={item}
                    key={index}
                    setModalOpenDelete={setModalOpenDelete}
                    setTaskIdToDelete={setTaskIdToDelete}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    currentId={currentId}
                  />
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TaskReminderTable;
