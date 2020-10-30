
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog/Blog'
import Project from './components/Project/Project';


function App() {
  return (
  <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/blog">
      <Blog />
      </Route>
      <Route path="/project">
       <Project></Project>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
