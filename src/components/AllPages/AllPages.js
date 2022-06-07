import "./AllPages.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Card } from "react-bootstrap";

const AllPages = ({ pdf }) => {
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Card key={`page_${index + 1}`}>
          <Card.Body>
            <Page pageNumber={index + 1} />
          </Card.Body>
        </Card>
      ))}
      {/* Filler for photos */}
    </Document>
  );
};

export default AllPages;
