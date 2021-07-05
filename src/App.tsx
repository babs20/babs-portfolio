import Home from "./views/Home";
import { FooterAndHeader } from "./containers/FooterAndHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FooterAndHeader>
            <Home />
          </FooterAndHeader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
