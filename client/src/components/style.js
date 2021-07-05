import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
      flexDirection: "column",
      backgroundColor: "#fff",
      borderRadius: 20,
      display: "block",
      overflowX: "hidden",
      // whiteSpace: "nowrap",
      paddingLeft: 12,
      paddingRight: 12,
      paddingBottom: 80,
    },
    titleBar: {
      display: "flex",
      alignItems: "center",
      padding: "28px 0 20px 0px",
      position: "relative",
    },
    title: {
      color: "black",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 2,
      paddingLeft: 24,
    },
    buttonContainer: {
      flexGrow: 1,
      gap: 10,
      display: "flex",
      justifyContent: "flex-end",
    },
    headCell: {
      color: "gray",
      fontSize: "12px",
      lineHeight: 1.5,
      padding: "10px 7px 10px 7px",
      verticalAlign: "bottom",
      position: "sticky",
      top: "0px",
      backgroundColor: "white",
      zIndex: 999,
    },
    tableBody: {
      backgroundColor: "white",
      borderRadius: "10px",
    },
    tableCell: {
      fontSize: "12px",
      fontWeight: "bold",
      borderBottom: "none",
      padding: "12px 5px 12px 5px",
      verticalAlign: "top",
    },
    tableWrapper2: {
      overflowY: "auto",
    },
    stickheader: {
      position: "fixed",
      top: 70,
    },
    noOfrows: {
      height: 18,
      backgroundColor: "#F5F5FA",
      paddingLeft: 85,
      width: 20,
      paddingTop: 14,
    },
    selectText: {
      zIndex: 999,
      marginRight: "-50px",
      marginTop: 36,
      top: "-25px",
      left: 23,
      position: "absolute",
      fontSize: 18,
      color: "#8F92A1",
      fontFamily: "DM Sans",
    },
    rootss: {
      "& .MuiOutlinedInput-notchedOutline": {
        margin: theme.spacing(1),
        width: "220px",
        border: "none",
      },
    },
    hideSaveIcon: {
      display: "none",
    },
    hideCrossIcon: {
      display: "none",
    },
    inputsRoot: {
      display: "inline-flex",
      "& .MuiOutlinedInput-input": {
        padding: "0px",
        paddingLeft: 5,
  
        "*::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
        },
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
        },
      },
    },
    bottompage: {
      display: "inline-flex",
      position: "absolute",
      backgroundColor: "#fff",
      width: "94%",
      right: 20,
      left: 66,
      marginTop: "-70px",
      color: "#8F92A1",
      fontWeight: 700,
      padding: "10px 0 32px 0",
    },
    bottomselect: {
      display: "inline-flex",
      backgroundColor: "#F5F5FA",
      padding: "7px 14px",
      borderRadius: 10,
    },
    selectborder: {
      "& .MuiInput-root": {
        "&::before": {
          border: "none",
        },
      },
    },
    rowBgColor: {
      backgroundColor: "#EBEBEB",
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
        width: 200,
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
      styleSelect: {
        width: 130,
        height: 42,
        [theme.breakpoints.down('sm')]: {
          width: '150px',
        },
      },
  }));

  export default useStyles