import { makeStyles } from '@material-ui/core/styles';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    section: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    exemplar: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    features: {
      backgroundColor: 'lightgrey',
      padding: theme.spacing(4),
    },
    about: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    latestNews: {
      backgroundColor: 'lightgrey',
      padding: theme.spacing(1),
    },
    socialBrand: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.primary.light,
      padding: theme.spacing(4),
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    header: {
      marginTop: theme.spacing(8),
      padding: theme.spacing(4),
      textAlign: 'center',
    },
    headerTitle: {
      color: theme.palette.primary.main,
      opacity: '0.9',
      fontFamily: 'fantasy',
      textShadow: '6px 2px #000000'
    },
    headerText: {
      color: theme.palette.secondary.dark,
      opacity: '0.9',
      fontFamily: 'fantasy',
      textShadow: '1px 2px #000000',
      fontSize: '20px',
    },
    statUpper: {
      textTransform: 'uppercase',
    },
    stats: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    stat: {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
      textTransform: 'uppercase',
      border: '1px solid white',
      borderLeft: '1px solid grey',
      width: 'calc(100% * (1/2))',
      padding: '32px',
      textAlign: 'center',
    },
    counter: {
      fontSize: '32px',
    },
    logo: {
      borderRadius: '15px',
      boxShadow: '12px 6px 11px 0px black',
    },
    video: {
      boxShadow: '12px 6px 11px 0px black',
    },
    footerContent: {
      display: 'flex',
    },
    footer: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(6),
      marginTop: 'auto',
    },
    footerContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    particleBg: {
      background: theme.palette.secondary.dark,
    },
  }))
  return useStyles();
};

export default Styles;
