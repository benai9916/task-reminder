import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 20,
    },
    title: {
      flexGrow: 1,
    },
    paper: {
        marginTop: 70,
        maxWidth: "70%",
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        boxShadow: "none"
      },
  }));

export default useStyles