import { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/pages/Login"
import Home from "./components/pages/Home"
import NavBar from "./components/pages/NavBar"
import User from "./components/User"
import RegisterForm from "./components/pages/RegisterForm"
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
import Matrix from './components/pages/Matrix'
import Hris from './components/pages/Hris'
import Management from './components/pages/Management'

// import { UserContext } from "./components/pages/UserContext"
// import WelcomeMessage from './components/pages/WelcomeMessage';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [displayCard, setDisplayCard] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
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
        user={user} 
        onLogOut={onLogOut}
      />
      <div>

      {/* <UserContext.Provider 
       value={{ currentUser }}
      >
        <WelcomeMessage />
      </UserContext.Provider> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home user={user}/>
          </Route>

          <Route exact path="/matrix">
            <Matrix />

          </Route>

          <Route exact path="/hris">
            <Hris />
          </Route>

          <Route exact path="/management">
            <Management />
          </Route>


          <Route exact path="/hris/employees">
            <Employees />
          </Route>

          <Route exact path="/hris/employees/:id">
            <Employee />
          </Route>


          <Route exact path="/hris/subcontractors">
            <Subcontractors />
          </Route>

          <Route exact path="/hris/subcontractors/:id">
            <Subcontractor />
          </Route>

          <Route exact path="/matrix/skills">
            <Skills />
          </Route>
          
          <Route exact path="/matrix/skills/:id">
            <Skill />
          </Route>

          <Route exact path="/management/contracts">
            <Contracts />
          </Route>

          <Route exact path="/management/contracts/:id">
            <Contract />
          </Route>

          <Route exact path="/management/projects">
            <Projects />
          </Route>
               
          <Route exact path="/management/projects/:id">
            <Project />
          </Route>

          <Route exact path="/management/client_companies">
            <Companies />
          </Route>

          <Route exact path="/management/client_companies/:id">
            <Company />
          </Route>

          <Route exact path="/management/clients">
            <Clients />
          </Route>

          <Route exact path="/management/clients/:id">
            <Client />
          </Route>

          <Route exact path="/regional/addresses">
            <Addresses />
          </Route>

          <Route exact path="/regional/addresses/:id">
            <Address />
          </Route>

          <Route exact path="/users">
            <Users 
              user={user}
            />
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
            <RegisterForm
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
