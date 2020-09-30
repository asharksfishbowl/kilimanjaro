import { makeStyles } from '@material-ui/core/styles';

const Styles = () => {
  const useStyles = makeStyles(theme => ({
    h1: {
      fontWeight: '300',
    },
    p: {
      fontSize: '16px',
    },
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
      padding: theme.spacing(8),
    },
    about: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
    },
    latestNews: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4),
      height: '90vh',
    },
    socialBrand: {
      backgroundColor: theme.palette.secondary.light,
      padding: theme.spacing(4),
    },
    container: {
      height: '60vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    header: {
      padding: theme.spacing(10),
      width: '100%',
      textAlign: 'center',
      height: '30vh',
    },
    headerTitle: {
      color:'lightgrey',
      fontSize: '50px',
      opacity: '0.4'
    },
    headerText: {
      color:'lightgrey',
      fontSize: '20px',
      opacity: '0.4'
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    blogpost: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
    },
    imageWrapper: {
      flex: 4,
      margin: '0px auto'
    },
    blogpostContent: {
      flex: 4,
    },
    blogpostFooter: {
      display: 'flex',
      flexDirection: 'column',
    },
    blogpostFooterContent: {
      display: 'flex',
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
    row: {
      flex: 2,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    materialIcons: {
      maxWidth: '24px',
      margin: '0 8px',
    },
    footerContent: {
      display: 'flex',
    },
    readMore: {
      display: 'flex',
      justifyContent: 'center',
    },
    flexDirCol: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    jcCenter: {
      justifyContent: 'center',
    },
    jcSpaceBetween: {
      justifyContent: 'space-between',
    },
    mR16: {
      marginRight: '16px'
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
  }))
  return useStyles();
};

export default Styles;
