import Home from './views/Home';
import Projects from './views/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/goals'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Home></Home>
        </Route>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
