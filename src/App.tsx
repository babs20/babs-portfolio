import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
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
        <Route path='/contact'>
          <FooterAndHeader>
            <Contact />
          </FooterAndHeader>
        </Route>
        <Route path='/about'>
          <FooterAndHeader>
            <About />
          </FooterAndHeader>
        </Route>
        <Route path='/'>
          <FooterAndHeader>
            <About />
          </FooterAndHeader>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
