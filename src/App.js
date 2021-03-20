import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import NavBar from './Navigation/NavBar';
import NavItem from './Navigation/NavItem';
import NavDropdown from './Navigation/NavDropdown';
import Projects from './Projects/Projects';
import Tictactoe from './Projects/Tictactoe/Tictactoe';
import Todo from './Projects/Todo/Todo';
import Problems from './Problems/Problems';
import Leetcode from './Problems/CS/Leetcode';
import Physics from './Problems/Physics/Physics';
import Resume from './Resume/Resume';
import { GiTicTacToe } from 'react-icons/gi';


const App = () => {

  return (
    <div className="app">      
      <Router>
        <header>
          <NavBar>
            <NavItem to="/" title="Home" exact/>
            <NavItem to="/projects" title="Projects">
              <NavDropdown>
                <NavItem to="/projects/tictactoe" title="Tic-Tac-Toe" icon={<GiTicTacToe/>}/>
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
        </header>

        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>

            <Route path="/projects/tictactoe">
              <Tictactoe/>
            </Route>
            <Route path="/projects/todo">
              <Todo/>
            </Route>
            <Route path="/projects/battlefield">
              <Projects/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>

            <Route path="/problems/leetcode">
              <Leetcode/>
            </Route>
            <Route path="/problems/physics">
              <Physics/>
            </Route>
            <Route path="/problems">
              <Problems/>
            </Route>

            <Redirect to="/"/>
          </Switch>
        </main>

      </Router>
    </div>
  );
}

export default App;
