import { makeStyles } from '@material-ui/core/styles';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    header: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(6),
      width: '100%',
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: '50px'
    },
    headerText: {
      fontSize: '20px'
    },
    footer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(6),
      marginTop: 'auto',
    },
  }))
  return useStyles();
};

export default Styles;
