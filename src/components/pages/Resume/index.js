import React from "react";
import { Document, Page } from 'react-pdf';
import "./style.css";
import pdf from "./img/Resume21.pdf";
import { Component } from 'react';
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume() {
  return (
    <div className="pdf">
  <Document file={pdf}>
<Page pageNumber={1} />
  </Document>
  </div>
  );
}

export default Resume; 

{/* // export default function Resume() { */}
{/* //   return (
//     <Document file={pdf}>
//       <Page pageNumber={0} />
//     </Document>
//   );
// }

// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';





// function Resume() { */}
{/* //   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) { */}
{/* //     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <Document */}
{/* //         file="./img/Resume21.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={1} />
//       </Document> */}
{/* //       <p>Page {1} of {1}</p>
//     </div>
//   );
// }
// export default  Resume; */}