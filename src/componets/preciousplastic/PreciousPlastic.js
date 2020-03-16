import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import './PreciousPlastic.css';
import PdfSelect from "./PdfSelect.js";

class PreciousPlastic extends Component {
  constructor(props){
    super(props)
    this.preciousPlasticPdf = React.createRef();
    this.loadDocument = this.loadDocument.bind(this);
    this.state = {
      numPages: null,
      pageNumber: 1,
      errorMessage: "Ohhh fudge batman",
      pdf:''
    }
  }

  loadDocument = pdf => {
    let selectValue = pdf.target.value;
    pdf = selectValue;
    this.setState({ pageNumber:1 });
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
    return(
      <div>
        <PdfSelect action={this.loadDocument}/>
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
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={this.previousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default PreciousPlastic;
