import React from "react";
import { Document, Page } from 'react-pdf';
import "./style.css";
import pdf from "./img/Resume21.pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume() {
  return (
    <div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }} >
  <h1 className="name">Resume</h1>
  </div>
    <div className="pdf" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
  <Document file={pdf}>
<Page pageNumber={1} />
  </Document>
  </div>
  </div>
  );
}

export default Resume; 

