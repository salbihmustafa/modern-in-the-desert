import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo/ModernInTheDesertLogo.png";
import AllPages from "./components/AllPages/AllPages";
import { Card } from "react-bootstrap";

const App = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <img src={logo} alt="Modern in the Desert Logo" />
        </div>
      </header>
      <div className="content">
        <Card className="pdf-container">
          <AllPages/>
        </Card>
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
