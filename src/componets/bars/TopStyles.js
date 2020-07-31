import { makeStyles } from '@material-ui/core/styles';

const TopStyles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }))
  return useStyles;
};

export default TopStyles;
