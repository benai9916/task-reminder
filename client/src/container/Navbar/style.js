import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    hide: {
        boxShadow: "none !important",
    },
    wrapper: {
        backgroundColor: "#fff",
        boxShadow: "0 1px 9px 0 rgb(25 27 43 / 19%)",
        height: 70,
        [theme.breakpoints.up('md')]: {
            padding: "0 68px !important"
          },
    },
    brandIcon: {
      color:  "#ffcc80",
      flexGrow: 1,
    },
    title: {
        textDecoration: "none",
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
    },
    navIcons: {
        margin: "0 10px 0 18px ",
        [theme.breakpoints.down('sm')]: {
            margin: "0 0px 0 10px ",
          },
    },

    allIcons: {
        [theme.breakpoints.down('sm')]: {
            display: "inline-flex",
          },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
            margin: "auto",
          },
          [theme.breakpoints.down('xs')]: {
            width: '154px',
          },
      },
      searchIcon: {
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
      },
      inputRoot: {
        color: 'inherit',
        border: "1px solid lightgray",
        borderRadius: 6,
        paddingLeft: 10,
        width: 300,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        fontSize: 14,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '100%',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
    }));

export default useStyles