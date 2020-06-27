import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import './PreciousPlastic.css';
import PdfSelect from "./PdfSelect.js";

import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class PreciousPlastic extends Component {
  constructor(props){
    super(props)
    this.preciousPlasticPdf = React.createRef();
    this.loadDocument = this.loadDocument.bind(this);
    this.state = {
      numPages: 0,
      pageNumber: 1,
      errorMessage: "Ohhh fudge batman",
      pdf:''
    }
  }

  loadDocument = pdf => {
    let selectValue = pdf.target.value;
    pdf = selectValue;
    this.setState({ pageNumber: 1 });
    this.setState({ pdf });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onDocumentLoadError = (error) => {
    let msg = 'Error while Loading document source! ' + error.message;
    this.setState({ errorMessage:msg });
  }

  onDocumentSourceError = (error) => {
    let msg = 'Error while retrieving document source! ' + error.message;
    this.setState({ errorMessage:msg });
  }

  changePage = offset => this.setState(prevState => ({
    pageNumber: prevState.pageNumber + offset,
  }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);


  render() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pdf, numPages, pageNumber, errorMessage }  = this.state;
    const classes = useStyles;
    const theme = useTheme;
    return(
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
              <PdfSelect action={this.loadDocument}/>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.root}>
              <Document
                file={pdf}
                onLoadSuccess={this.onDocumentLoadSuccess}
                onLoadError={this.onDocumentLoadError}
                onSourceError={this.onDocumentSourceError}
                error={errorMessage}
                className='Canvas-center'
                >
                <Page pageNumber={pageNumber} />
              </Document>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <MobileStepper
                    steps={numPages}
                    position="static"
                    variant="text"
                    activeStep={pageNumber}
                    nextButton={
                      <Button size="small" onClick={this.nextPage} disabled={pageNumber === numPages}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={this.previousPage} disabled={pageNumber === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                      </Button>
                    }
                  />
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default PreciousPlastic;
