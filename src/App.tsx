import Home from './views/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/'>
        <Home></Home>
      </Route>
      <Route path='/projects'>
        <Home></Home>
      </Route>
      <Route path='/goals'>
        <Home></Home>
      </Route>
      <Route path='/contact'>
        <Home></Home>
      </Route>
    </Router>
  );
}

export default App;
