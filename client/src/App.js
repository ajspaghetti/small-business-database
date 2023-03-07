import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import NavBar from "./components/pages/NavBar"
import User from "./components/User"
import Register from "./components/pages/RegisterForm"
import Employee from "./components/Employee"
import Employees from "./components/Employees"
import Subcontractor from "./components/Subcontractor"
import Subcontractors from "./components/Subcontractors"
import Skill from "./components/Skill"
import Skills from "./components/Skills"
import Contract from "./components/Contract"
import Contracts from "./components/Contracts"
import Project from "./components/Project"
import Projects from "./components/Projects"
import Company from "./components/Company"
import Companies from "./components/Companies"
import Client from "./components/Client"
import Clients from "./components/Clients"
import Address from "./components/Address"
import Addresses from "./components/Addresses"
import { UserContext } from "./components/pages/UserContext"


function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [displayCard, setDisplayCard] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  const onLogIn = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  };

  const onLogOut = () => {
    setCurrentUser(null);
  };

  const onShowDetails = (details) => {
    setDisplayCard(details);
  };

  const onDestroyUser = () => {
    setCurrentUser(null);
    setDisplayCard(null);
  };
  

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser} 
        onLogOut={onLogOut}
      />
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home currentUser={currentUser}/>
          </Route>

          <Route exact path="/employees">
            <Employees 
            />
          </Route>

          <Route exact path="/employees/:id">
            <Employee />
          </Route>


          <Route exact path="/subcontractors">
            <Subcontractors />
          </Route>

          <Route exact path="/subcontractors/:id">
            <Subcontractor />
          </Route>

          <Route exact path="/skills">
            <Skills />
          </Route>
          
          <Route exact path="/skills/:id">
            <Skill />
          </Route>

          <Route exact path="/contracts">
            <Contracts />
          </Route>

          <Route exact path="/contracts/:id">
            <Contract />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>
               
          <Route exact path="/projects/:id">
            <Project />
          </Route>

          <Route exact path="/client_companies">
            <Companies />
          </Route>

          <Route exact path="/client_companies/:id">
            <Company />
          </Route>

          <Route exact path="/clients">
            <Clients />
          </Route>

          <Route exact path="/clients/:id">
            <Client />
          </Route>

          <Route exact path="/addresses">
            <Addresses />
          </Route>

          <Route exact path="/addresses/:id">
            <Address />
          </Route>

          <Route exact path="/users/:id">
            <User
              onShowDetails={onShowDetails}
              displayCard={displayCard}
              currentUser={currentUser}
              onDestroyUser={onDestroyUser}
            />
          </Route>

          <Route exact path="/login" >
            <Login
              onLogIn={onLogIn}
            />
          </Route>

          <Route exact path="/register">
            <Register 
              onLogIn={onLogIn}
            />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
