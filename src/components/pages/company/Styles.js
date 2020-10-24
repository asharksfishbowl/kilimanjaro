import { makeStyles } from '@material-ui/core/styles';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    trigger: {
      position: 'absolute',
      bottom: '-50em',
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
      fontFamily: 'Roboto',
      textShadow: '1px 2px #f8bbd0',
      fontSize: '30px',
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
    focusVisible: {},
    image: {
      position: 'relative',
      height: 150,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
   imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
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
