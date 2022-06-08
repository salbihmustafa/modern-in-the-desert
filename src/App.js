import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./image/ModernInTheDesertLogo.png";
import welcomebook from "./pdf/WelcomeBook.pdf";
import AllPages from "./components/AllPages/AllPages";
//import SinglePage from "./components/SinglePage/SinglePage";

const App = () => {
  return (
    <div className="main-container">
      <header>
        <div className="logo">
          <img src={logo} alt="Modern in the Desert Logo" />
        </div>
      </header>
      <div className="content">
        <AllPages pdf={welcomebook} />
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
