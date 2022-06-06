import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <div className="main-container">
        <header>
          <div className="header-title">MODERN IN THE DESERT</div>
        </header>
        <div className="content">
          <div className="center">Test</div>
        </div>
        <footer>
          <div className="footer-title">© 2022 Modern in the Desert, All rights reserved.</div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
