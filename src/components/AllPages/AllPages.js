import "./AllPages.css";
import { useState } from "react";
//import { Document, Page } from "react-pdf";
import { Card } from "react-bootstrap";

const AllPages = ({ pdf }) => {
  const [numPages, setNumPages] = useState();

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  return (
    <>
      <Card>
        <Card.Body>
          <embed src={pdf} />
        </Card.Body>
      </Card>
    </>
  );
};

export default AllPages;
