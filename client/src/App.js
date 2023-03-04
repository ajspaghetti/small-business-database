import { useState, useEffect } from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";


import NavBar from "./components/pages/NavBar"
import Home from "./components/pages/Home"
import User from "./components/User"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
// import SearchSortFilter from "./components/pages/SearchSortFilter"
  // HRIS Data

    // Employees
    import Employee from "./components/Employee"
    import Employees from "./components/Employees"
    import EmployeeForm from "./components/EmployeeForm"
    // Subcontractors
    import Subcontractor from "./components/Subcontractor"
    import Subcontractors from "./components/Subcontractors"
    import SubForm from "./components/SubForm"
    // Skills
    import Skill from "./components/Skill"
    import Skills from "./components/Skills"
    import SkillForm from "./components/SkillForm"
    // 
  // Project Management Data
  // import ProjectManagement from "./components/pages/ProjectManagement"
    // Contracts
    import Contract from "./components/Contract"
    import Contracts from "./components/Contracts"
    import ContractForm from "./components/ContractForm"
    // Projects
    import Project from "./components/Project"
    import Projects from "./components/Projects"
    import ProjectForm from "./components/ProjectForm"
    // Companies
    import Company from "./components/Company"
    import Companies from "./components/Companies"
    import CompanyForm from "./components/CompanyForm"
    // Clients
    import Client from "./components/Client"
    import Clients from "./components/Clients"
    import ClientForm from "./components/ClientForm"

import "./styles/App.css"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [displayCard, setDisplayCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user))
      }
    })
  }, [])


  // Login & Logout
  const onLogIn = (loggedInUser) => {
    setCurrentUser(loggedInUser);
  }

  const onLogOut = () => {
    setCurrentUser(null);
  }

  const onShowDetails = (details) => {
    setDisplayCard(details);
  }

  const onDestroyUser = () => {
    setCurrentUser(null);
    setDisplayCard(null);
  }


  // Addresses
  const [addresses, setAddresses] = useState([])
  const [showAddressForm, setShowAddressForm] = useState(false)

  useEffect(() => {
    fetch('/addresses')
    .then (r => r.json())
    .then (addresses => setAddresses(addresses))
  }, [])

  function toggleAddressForm() {
    setShowAddressForm(!showAddressForm)
  }

  function onSubmitNewAddress(newAddress) {
    setAddresses([...addresses, newAddress])
    toggleAddressForm()
  }

  const [zips, setZips] = useState([])

  useEffect(() => {
    fetch('/zips')
    .then (r => r.json())
    .then (zips => setZips(zips))
  }, [])



  // Employees
  const [employees, setEmployees] = useState([])
  const [showEmpForm, setShowEmpForm] = useState(false)

  useEffect(() => {
    fetch('/employees')
    .then (r => r.json())
    .then (employees => setEmployees(employees))
  }, [])

  function toggleEmployeeForm() {
    setShowEmpForm(!showEmpForm)
  }

  function onSubmitNewEmployee(newEmployee) {
    setEmployees([...employees, newEmployee])
    toggleEmployeeForm()
  }


  // Subcontractors
  const [subcontractors, setSubcontractors] = useState([])
  const [showSubForm, setShowSubForm] = useState(false)

  useEffect(() => {
    fetch('/subcontractors')
    .then (r => r.json())
    .then (subcontractors => setSubcontractors(subcontractors))
  }, [])

  function toggleSubForm() {
    setShowSubForm(!showSubForm)
  }

  function onSubmitNewSub(newSubcontractor) {
    setSubcontractors([...subcontractors, newSubcontractor])
    toggleSubForm()
  }

  
  // Companies
  const [companies, setCompanies] = useState([])
  const [showCompanyForm, setShowCompanyForm] = useState(false)

  useEffect(() => {
    fetch('/companies')
    .then (r => r.json())
    .then (companies => setCompanies(companies))
  }, [])

  function toggleCompanyForm() {
    setShowCompanyForm(!showCompanyForm)
  }

  function onSubmitNewCompany(newCompany) {
    setCompanies([...companies, newCompany])
    toggleCompanyForm()
  }
  
  // Clients
  const [clients, setClients] = useState([])
  const [showClientForm, setShowClientForm] = useState(false)

  useEffect(() => {
    fetch('/clients')
    .then (r => r.json())
    .then (clients => setClients(clients))
  }, [])

  function toggleClientForm() {
    setShowClientForm(!showClientForm)
  }

  function onSubmitNewClient(newClient) {
    setClients([...clients, newClient])
    toggleClientForm()
  }

  // Projects
  const [projects, setProjects] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  useEffect(() => {
    fetch('/projects')
    .then (r => r.json())
    .then (projects => setProjects(projects))
  }, [])

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm)
  }

  function onSubmitNewProject(newProject) {
    setProjects([...projects, newProject])
    toggleProjectForm()
  }

  // Contracts
  const [contracts, setContracts] = useState([])
  const [showContractForm, setShowContractForm] = useState(false)

  useEffect(() => {
    fetch('/contracts')
    .then (r => r.json())
    .then (contracts => setContracts(contracts))
  }, [])

  function toggleContractForm() {
    setShowContractForm(!showContractForm)
  }

  function onSubmitNewContract(newContract) {
    setContracts([...contracts, newContract])
    toggleContractForm()
  }

  // Skills
  const [skills, setSkills] = useState([])
  const [showSkillForm, setShowSkillForm] = useState(false)

  useEffect(() => {
    fetch('/skills')
    .then (r => r.json())
    .then (skills => setSkills(skills))
  }, [])

  function toggleSkillForm() {
    setShowSkillForm(!showSkillForm)
  }

  function onSubmitNewSkill(newSkill) {
    setSkills([...skills, newSkill])
    toggleSkillForm()
  }


  

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser}
        onLogOut={onLogOut}
      />
      <BrowserRouter>

          <Switch>

            <Route 
              exact 
              path="/"
              element={
                <Home 
                  currentUser={currentUser}
                />
              }
            />



            <Route 
              exact
              path="/hris/employees"
              element={
                <Employees 
                  employees={employees}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/hris/employees/:id"
              element={
                <Employee 
                  employees={employees}
                />
              }
            />

            <Route 
              exact
              path="/hris/new-employee"
              element={
                <EmployeeForm 
                  employees={employees}
                  setEmployees={setEmployees}
                  addresses={addresses}
                  setAddresses={setAddresses}
                  zips={zips}
                  setZips={setZips}
                  skills={skills}
                  setSkills={setSkills}
                />
              }
            />

            <Route 
              exact
              path="/hris/subcontractors"
              element={
                <Subcontractors 
                  subcontractors={subcontractors}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/hris/subcontractors/:id"
              element={
                <Subcontractor 
                  subcontractors={subcontractors}
                />
              }
            />

            <Route 
              exact
              path="/hris/new-subcontractor"
              element={
                <SubForm 
                  subcontractors={subcontractors}
                  setSubcontractors={setSubcontractors}
                  addresses={addresses}
                  setAddresses={setAddresses}
                  zips={zips}
                  setZips={setZips}
                  skills={skills}
                  setSkills={setSkills}
                />
              }
            />

            <Route 
              exact
              path="/hris/skills-matrix"
              element={
                <Skills 
                  skills={skills}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/hris/skills/:id"
              element={
                <Skill
                  skills={skills}
                />
              }
            />

            <Route 
              exact
              path="/hris/new-skill"
              element={
                <SkillForm 
                  skills={skills}
                  setSkills={setSkills}
                />
              }
            />

            <Route 
              exact
              path="/project-management/contracts"
              element={
                <Contracts
                  contracts={contracts}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/project-management/contracts/:id"
              element={
                <Contract
                  contracts={contracts}
                />
              }
            />

            <Route 
              exact
              path="/project-management/new-contract"
              element={
                <ContractForm 
                  contracts={contracts}
                  setContracts={setContracts}
                  companies={companies}
                  setCompanies={setCompanies}
                  clients={clients}
                  setClientss={setClients}
                  employees={employees}
                  setEmployees={setEmployees}
                  subcontractors={subcontractors}
                  setSubcontractors={setSubcontractors}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              }
            />

            <Route 
              exact
              path="/project-management/projects"
              element={
                <Projects
                  projects={projects}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/project-management/projects/:id"
              element={
                <Project
                  projects={projects}
                />
              }
            />

            <Route 
              exact
              path="/project-management/new-project"
              element={
                <ProjectForm 
                  projects={projects}
                  setProjects={setProjects}
                  contracts={contracts}
                  setContracts={setContracts}
                  companies={companies}
                  setCompanies={setCompanies}
                  clients={clients}
                  setClientss={setClients}
                  employees={employees}
                  setEmployees={setEmployees}
                  subcontractors={subcontractors}
                  setSubcontractors={setSubcontractors}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                  addresses={addresses}
                  setAddresses={setAddresses}
                  zips={zips}
                  setZips={setZips}
                />
              }
            />
            
            <Route 
              exact
              path="/project-management/companies"
              element={
                <Companies
                  companies={companies}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/project-management/companies/:id"
              element={
                <Company
                  companies={companies}
                />
              }
            />

            <Route 
              exact
              path="/project-management/new-company"
              element={
                <CompanyForm 
                  contracts={contracts}
                  setContracts={setContracts}
                  projects={projects}
                  setProjects={setProjects}
                  companies={companies}
                  setCompanies={setCompanies}
                  clients={clients}
                  setClientss={setClients}
                  employees={employees}
                  setEmployees={setEmployees}
                  subcontractors={subcontractors}
                  setSubcontractors={setSubcontractors}
                  addresses={addresses}
                  setAddresses={setAddresses}
                  zips={zips}
                  setZips={setZips}
                />
              }
            />
                
            <Route 
              exact
              path="/project-management/clients"
              element={
                <Clients
                  clients={clients}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              }
            />

            <Route 
              exact
              path="/project-management/clients/:id"
              element={
                <Client
                  clients={clients}
                />
              }
            />

            <Route 
              exact
              path="/project-management/new-client"
              element={
                <ClientForm 
                  contracts={contracts}
                  setContracts={setContracts}
                  projects={projects}
                  setProjects={setProjects}
                  companies={companies}
                  setCompanies={setCompanies}
                  clients={clients}
                  setClientss={setClients}
                />
              }
            />

            <Route 
              exact
              path="/users/:id"
              element={
                <User
                  onShowDetails={onShowDetails}
                  displayCard={displayCard}
                  currentUser={currentUser}
                  onDestroyUser={onDestroyUser}
                />
              }
            />
            
            <Route
              exact
              path="/login"
              element={
                <Login
                  onLogIn={onLogIn}
                />
              }
            />

            <Route
              exact
              path="/register"
              element={
                <Register
                  onLogIn={onLogIn}
                />
              }
            />

          </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
