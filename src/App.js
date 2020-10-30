
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog/Blog'


function App() {
  return (
  //   <div className="App">
  //  <Home></Home>
  //   </div>
  <Router>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/blog">
      <Blog />
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
