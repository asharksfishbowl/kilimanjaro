import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";


import Safety from "./Safety.pdf";
import PlasticTypes from "./starterkit/1. Learn about plastic/Plastic-Types_A1.pdf";

class PreciousPlastic extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    errorMessage: "Ohhh fuck batman"
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
    alert('Error while retrieving document source! ' + error.message);
  }

  render() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pageNumber, numPages, errorMessage } = this.state;

    return(
      <Document
        file={PlasticTypes}
        onLoadSuccess={this.onDocumentLoadSuccess}
        onLoadError={this.onDocumentLoadError}
        onSourceError={this.onDocumentSourceError}
        error={errorMessage}
      >
        <Page height={600} width={400} pageNumber={1} />
      </Document>
    )
  }
}

export default PreciousPlastic;
