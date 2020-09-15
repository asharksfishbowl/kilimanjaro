import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      'z-index':1,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '100.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: red[500],
    },
    dateField: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
    visibleField: {
      marginTop: theme.spacing(2),
    },
  }))
  return useStyles();
};

export default Styles;
