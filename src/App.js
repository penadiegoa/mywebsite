import './App.css';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Problems from './containers/Problems';
import Projects from './Projects';
import { 
  Route, 
  Switch, 
  NavLink, 
  Redirect, 
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <header className="app-header">
          <div style={{verticalAlign: 'middle'}}>
            <NavLink exact to="/" className="route" activeClassName="active-route">
              Home
            </NavLink>
            <NavLink to="/resume" className="route" activeClassName="active-route">
              Resume
            </NavLink>
            <NavLink to="/projects" className="route" activeClassName="active-route">
              Projects
            </NavLink>
            <NavLink to="/problems" className="route" activeClassName="active-route">
              LeetCode Problems
            </NavLink>
          </div>
        </header>

        <div className="app-body">
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
        </div>

      </Router>
    </div>
  );
}

export default App;
