import React, { Component } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import './PreciousPlastic.css';
import PdfSelect from "./PdfSelect.js";

import Safety from "./Safety.pdf";
import PlasticTypes from "./starterkit/1. Learn about plastic/Plastic-Types_A1.pdf";

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

  render() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const { pdf, numPages, errorMessage }  = this.state;
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
          <Page pageNumber={1} />
        </Document>
      </div>
    )
  }
}

export default PreciousPlastic;
