import './App.css';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Problems from './containers/Problems';
import Projects from './Projects';
import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router,
} from 'react-router-dom';
import NavBar from './containers/navigation/NavBar';
import NavItem from './containers/navigation/NavItem';
import NavDropdown from './containers/navigation/NavDropdown';


const App = () => {

  return (
    <div className="app">
      <Router>
        
        <NavBar>
          <NavItem to="/" title="Home" exact/>
          <NavItem to="/projects" title="Projects">
            <NavDropdown>
              <NavItem to="/projects/tictactoe" title="Tic-Tac-Toe"/>
              <NavItem to="/projects/todo" title="To Do"/>
            </NavDropdown>
          </NavItem>
          <NavItem to="/problems" title="Problems">
            <NavDropdown>
              <NavItem to="/problems/leetcode" title="LeetCode"/>           
              <NavItem to="/problems/physics" title="Physics"/>           
            </NavDropdown>
          </NavItem>
          <NavItem to="/resume" title="Resume"/>
        </NavBar>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/problems">
            <Problems/>
          </Route>
          <Redirect to="/"/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
