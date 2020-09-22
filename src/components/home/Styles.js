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
      height: '80px',
      borderRadius: '20px !important',
      background: 'linear-gradient(45deg, #24cba0, #0bccff, #0b4aff, #c115ed)',
      backgroundSize: '600% 600%',
      webkitAnimation: 'Gradient 25s ease infinite',
      mozAnimation: 'Gradient 25s ease infinite',
      animation: 'Gradient 25s ease infinite',
      fontSize: '18px',
      color: 'white'
    },
    iconButton: {
      margin: theme.spacing(1)
    },
    focusVisible: {},
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }))
  return useStyles;
};

export default Styles;
