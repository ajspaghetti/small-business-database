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
// import WelcomeMessage from './components/pages/WelcomeMessage'


function App() {

  // Search functionality
    const [searchTerm, setSearchTerm] = useState("")
  //
  
  // User LogIn/LogOut
    const [currentUser, setCurrentUser] = useState(null)
    const [displayCard, setDisplayCard] = useState(null)
    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setCurrentUser(user))
        }
      })
    }, [])
    const onLogIn = (loggedInUser) => {
      setCurrentUser(loggedInUser)
    }
    const onLogOut = () => {
      setCurrentUser(null)
    }
    const onShowDetails = (details) => {
      setDisplayCard(details)
    }
    const onDestroyUser = () => {
      setCurrentUser(null)
      setDisplayCard(null)
    }
  //

  // Addresses
    const [addresses, setAddresses] = useState([])
      useEffect(() => {
          fetch('/addresses')
          .then(r => r.json())
          .then(addresses => setAddresses(addresses))
      }, [])
  //

  // Skills
    const [skills, setSkills] = useState([])
      useEffect(() => {
          fetch('/skills')
          .then(r => r.json())
          .then(skills => setSkills(skills))
      }, [])
  //

  // Clients
    const [clients, setClients] = useState([])
    useEffect(() => {
        fetch('/clients')
        .then(r => r.json())
        .then(clients => setClients(clients))
    }, [])
  //

  // Companies
    const [client_companies, setClientCompanies] = useState([])
    useEffect(() => {
        fetch('/client_companies')
        .then(r => r.json())
        .then(client_companies => setClientCompanies(client_companies))
    }, [])
  //
  
  // Contracts
    const [contracts, setContracts] = useState([])
      useEffect(() => {
          fetch('/contracts')
          .then(r => r.json())
          .then(contracts => setContracts(contracts))
      }, [])
  //

  // Employees
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('/employees')
        .then(r => r.json())
        .then(employees => setEmployees(employees))
    }, [])
  //

  // Projects
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects')
        .then(r => r.json())
        .then(projects => setProjects(projects))
    }, [])
  //

  // Subcontractors
    const [subcontractors, setSubcontractors] = useState([])
    useEffect(() => {
        fetch('/subcontractors')
        .then(r => r.json())
        .then(subcontractors => setSubcontractors(subcontractors))
    }, [])
  //

  // Zips
    const [zips, setZips] = useState([])
    useEffect(() => {
        fetch('/zips')
        .then(r => r.json())
        .then(zips => setZips(zips))
    }, [])
  //


  return (
    <div className="App">
      <NavBar 
        user={currentUser} 
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
            <Home user={currentUser}/>
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
            <Employees 
              employees={employees}
              setEmployees={setEmployees}
            />
          </Route>

          <Route exact path="/hris/employees/:id">
            <Employee />
          </Route>


          <Route exact path="/hris/subcontractors">
            <Subcontractors 
              subcontractors={subcontractors}
              setSubcontractors={setSubcontractors}
            />
          </Route>

          <Route exact path="/hris/subcontractors/:id">
            <Subcontractor />
          </Route>

          <Route exact path="/matrix/skills">
            <Skills 
              skills={skills}
              setSkills={setSkills}
            />
          </Route>
          
          <Route exact path="/matrix/skills/:id">
            <Skill />
          </Route>

          <Route exact path="/management/contracts">
            <Contracts 
              contracts={contracts}
              setContracts={setContracts}
            />
          </Route>

          <Route exact path="/management/contracts/:id">
            <Contract />
          </Route>

          <Route exact path="/management/projects">
            <Projects 
              projects={projects}
              setProjects={setProjects}
            />
          </Route>
               
          <Route exact path="/management/projects/:id">
            <Project />
          </Route>

          <Route exact path="/management/client_companies">
            <Companies 
              companies={client_companies}
              setCompanies={setClientCompanies}
            />
          </Route>

          <Route exact path="/management/client_companies/:id">
            <Company />
          </Route>

          <Route exact path="/management/clients">
            <Clients 
              clients={clients}
              setClients={setClients}
            />
          </Route>

          <Route exact path="/management/clients/:id">
            <Client />
          </Route>

          <Route exact path="/regional/addresses">
            <Addresses 
              addresses={addresses}
              setAddresses={setAddresses}
            />
          </Route>

          <Route exact path="/regional/addresses/:id">
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
            <RegisterForm
              onLogIn={onLogIn}
            />

          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
