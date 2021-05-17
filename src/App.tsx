import Home from './views/Home';
import Projects from './views/Projects';
import { FooterAndHeader } from './containers/FooterAndHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/projects'>
          <FooterAndHeader>
            <Projects />
          </FooterAndHeader>
        </Route>
        <Route path='/goals'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Home></Home>
        </Route>
        <Route path='/'>
          <FooterAndHeader>
            <Home />
          </FooterAndHeader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
