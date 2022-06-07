import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/ModernInTheDesertLogo.jpg";
import welcomebook from "./pdf/WelcomeBook.pdf";
//import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Document, Page } from "react-pdf";

const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <img src={logo} alt="Modern in the Desert Logo" />
        </div>
      </header>
      <div className="content">
        <Document
          file={welcomebook}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
      <footer>
        <div className="footer-title">
          © 2022 Modern in the Desert, All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
