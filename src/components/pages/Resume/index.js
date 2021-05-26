import React from "react";
import { Document, Page } from 'react-pdf';
import pdf from '../../../img/resume21.pdf';


function Resume() {
  return (
    <Document file={pdf}>
    <Page pageNumber={1} />
  </Document>
  );
}

export default Resume; 