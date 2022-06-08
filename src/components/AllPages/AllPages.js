import "./AllPages.css";
import { Card } from "react-bootstrap";

const AllPages = ({ pdf }) => {

  return (
    <>
      <Card className="custom-card-container">
        <Card.Body className="card-body-content">
          <embed src={pdf} />
        </Card.Body>
      </Card>
    </>
  );
};

export default AllPages;
