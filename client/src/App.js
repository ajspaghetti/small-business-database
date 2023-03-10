import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/pages/LoginForm";
import Home from "./components/pages/Home";
import NavBar from "./components/pages/NavBar";
import User from "./components/User";
import RegisterForm from "./components/pages/RegisterForm";
import Employee from "./components/Employee";
import Employees from "./components/Employees";
import Subcontractor from "./components/Subcontractor";
import Subcontractors from "./components/Subcontractors";
import Skill from "./components/Skill";
import Skills from "./components/Skills";
import Contract from "./components/Contract";
import Contracts from "./components/Contracts";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Company from "./components/Company";
import Companies from "./components/Companies";
import Client from "./components/Client";
import Clients from "./components/Clients";
import Address from "./components/Address";
import Addresses from "./components/Addresses";
import Matrix from "./components/pages/Matrix";
import Hris from "./components/pages/Hris";
import Management from "./components/pages/Management";
import UserContracts from "./components/UserContracts";
import UserProvider from './components/pages/UserProvider.js'
import { UserContext } from "./components/pages/UserProvider";
import WelcomeMessage from "./components/pages/WelcomeMessage";

function App() {

  // const { user, setUser } = useContext(UserContext)



  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");
  //


  // Addresses
  const [addresses, setAddresses] = useState([]);
  const [showAddressForm, setShowAddressForm] = useState(false);
  useEffect(() => {
    fetch("/addresses")
      .then((r) => r.json())
      .then((addresses) => setAddresses(addresses));
  }, []);

  function toggleAddressForm() {
    setShowAddressForm(!showAddressForm);
  }

  function onSubmitNewAddress(newAddress) {
    setAddresses([...addresses, newAddress]);
    // toggleAddressForm();
  }
  //

  // Skills
  const [skills, setSkills] = useState([]);
  const [showSkillForm, setShowSkillForm] = useState(false);
  useEffect(() => {
    fetch("/skills")
      .then((r) => r.json())
      .then((skills) => setSkills(skills));
  }, []);

  function toggleSkillForm() {
    setShowSkillForm(!showSkillForm);
  }

  function onSubmitNewSkill(newSkill) {
    setSkills([...skills, newSkill]);
    toggleSkillForm();
  }
  //

  // Clients
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("/clients")
      .then((r) => r.json())
      .then((clients) => setClients(clients));
  }, []);
  //

  // Companies
  const [client_companies, setClientCompanies] = useState([]);
  useEffect(() => {
    fetch("/client_companies")
      .then((r) => r.json())
      .then((client_companies) => setClientCompanies(client_companies));
  }, []);
  //

  // Contracts
  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    fetch("/contracts")
      .then((r) => r.json())
      .then((contracts) => setContracts(contracts));
  }, []);
  //

  // Employees
  const [employees, setEmployees] = useState([]);
  const [showEmployeeForm, setShowEmployeeForm] = useState(false);
  useEffect(() => {
    fetch("/employees")
      .then((r) => r.json())
      .then((employees) => setEmployees(employees));
  }, []);

  function toggleEmployeeForm() {
    setShowEmployeeForm(!showEmployeeForm);
  }

  function onSubmitNewEmployee(newEmployee) {
    setEmployees([...employees, newEmployee]);
    toggleEmployeeForm();
  }

  //

  // Projects
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  useEffect(() => {
    fetch("/projects")
      .then((r) => r.json())
      .then((projects) => setProjects(projects));
  }, []);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function onSubmitNewProject(newProject) {
    setProjects([...projects, newProject]);
    toggleProjectForm();
  }
  //

  // Subcontractors
  const [subcontractors, setSubcontractors] = useState([]);
  const [showSubForm, setShowSubForm] = useState(false);
  useEffect(() => {
    fetch("/subcontractors")
      .then((r) => r.json())
      .then((subcontractors) => setSubcontractors(subcontractors));
  }, []);

  function toggleSubForm() {
    setShowSubForm(!showSubForm);
  }

  function onSubmitNewSub(newSub) {
    setSubcontractors([...subcontractors, newSub]);
    toggleSubForm();
  }
  //

  // Zips
  const [zips, setZips] = useState([]);
  useEffect(() => {
    fetch("/zips")
      .then((r) => r.json())
      .then((zips) => setZips(zips));
  }, []);

  //

  return (
    <UserProvider 
      // value={{ user, setUser }}
    >
    <div className="App">
      
        <NavBar 
          // onLogOut={onLogOut} 
        />
        <WelcomeMessage />
      
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home 
                // user={user} 
              />
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
                addresses={addresses}
                setAddresses={setAddresses}
                zips={zips}
                setZips={setZips}
                skills={skills}
                setSkills={setSkills}
                onSubmitNewEmployee={onSubmitNewEmployee}
                onSubmitNewSkill={onSubmitNewSkill}
                onSubmitNewAddress={onSubmitNewAddress}
              />
            </Route>

            {employees.map((employee) => (
              <Route
                exact
                path={`/hris/employees/${employee.id}`}
                key={employee.id}
              >
                <Employee employee={employee} />
              </Route>
            ))}

            <Route exact path="/hris/subcontractors">
              <Subcontractors
                subcontractors={subcontractors}
                setSubcontractors={setSubcontractors}
                addresses={addresses}
                setAddresses={setAddresses}
                zips={zips}
                setZips={setZips}
                skills={skills}
                setSkills={setSkills}
                // onShowDetails={onShowDetails}
              />
            </Route>
            {subcontractors.map((subcontractor) => (
              <Route
                exact
                path={`/hris/subcontractors/${subcontractor.id}`}
                key={subcontractor.id}
              >
                <Subcontractor subcontractor={subcontractor} />
              </Route>
            ))}

            <Route exact path="/matrix/skills">
              <Skills
                skills={skills}
                setSkills={setSkills}
                employees={employees}
                setEmployees={setEmployees}
                subcontractors={subcontractors}
                setSubcontractors={setSubcontractors}
              />
            </Route>

            {skills.map((skill) => (
              <Route exact path={`/matrix/skills/${skill.id}`} key={skill.id}>
                <Skill skill={skill} />
              </Route>
            ))}

            <Route exact path="/management/contracts">
              <Contracts
                contracts={contracts}
                setContracts={setContracts}
                projects={projects}
                setProjects={setProjects}
                client_companies={client_companies}
                setClientCompanies={setClientCompanies}
                clients={clients}
                setClients={setClients}
                employees={employees}
                setEmployees={setEmployees}
                subcontractors={subcontractors}
                setSubcontractors={setSubcontractors}
                // user={user}
              />
            </Route>

            {contracts.map((contract) => (
              <Route
                exact
                path={`/management/contracts/${contract.id}`}
                key={contract.id}
              >
                <Contract contract={contract} />
              </Route>
            ))}

            <Route exact path="/management/projects">
              <Projects
                projects={projects}
                setProjects={setProjects}
                addresses={addresses}
                setAddresses={setAddresses}
                zips={zips}
                setZips={setZips}
                // user={user}
              />
            </Route>

            {projects.map((project) => (
              <Route
                exact
                path={`/management/projects/${project.id}`}
                key={project.id}
              >
                <Project project={project} />
              </Route>
            ))}

            <Route exact path="/management/client_companies">
              <Companies
                client_companies={client_companies}
                setCompanies={setClientCompanies}
                addresses={addresses}
                setAddresses={setAddresses}
                zips={zips}
                setZips={setZips}
              />
            </Route>

            {client_companies.map((client_company) => (
              <Route
                exact
                path={`/management/client_companies/${client_company.id}`}
                key={client_company.id}
              >
                <Company client_companies={client_companies} />
              </Route>
            ))}
            <Route exact path="/management/clients">
              <Clients
                clients={clients}
                setClients={setClients}
                client_companies={client_companies}
                setClientCompanies={setClientCompanies}
              />
            </Route>

            {clients.map((client) => (
              <Route
                exact
                path={`/management/clients/${client.id}`}
                key={client.id}
              >
                <Client client={client} />
              </Route>
            ))}

            <Route exact path="/regional/addresses">
              <Addresses
                addresses={addresses}
                setAddresses={setAddresses}
                zips={zips}
                setZips={setZips}
                onSubmitNewAddress={onSubmitNewAddress}
              />
            </Route>
            {addresses.map((address) => (
              <Route
                exact
                path={`/regional/addresses/${address.id}`}
                key={address.id}
              >
                <Address address={address} />
              </Route>
            ))}

            <Route exact path={`/users`}>
              <User
                // onShowDetails={onShowDetails}
                // user={user}
                // onDestroyUser={onDestroyUser}
              />
            </Route>

            {/* <Route exact path={`/users/${user.id}/contracts`}>
              <UserContracts />
            </Route> */}

            <Route exact path="/login">
              <LoginForm 
                // setUser={setUser}
                />
            </Route>

            <Route exact path="/register">
              <RegisterForm 
                // setUser={setUser}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    </UserProvider>
  );
}

export default App;
