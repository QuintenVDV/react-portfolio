import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import "../dist/output.css";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col gap-10 py-10">
        <NavBar />
        <div className="Content  ">
          <Switch>
            <Route exact path="/">
              <div>
                <Home />
              </div>
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
        <div className="h-max"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
