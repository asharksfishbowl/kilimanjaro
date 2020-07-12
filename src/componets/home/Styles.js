import { makeStyles } from '@material-ui/core/styles';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      minWidth: 300,
      width: '100%',
      'z-index':1,
    },
    button: {
      margin: theme.spacing(1),
      width: '60%',
      height: '75px',
      borderRadius: '20px !important',
      background: '#50c878 !important',
      fontSize: '18px'
    },
    iconButton: {
      margin: theme.spacing(1)
    },
    focusVisible: {},
  }))
  return useStyles;
};

export default Styles;
