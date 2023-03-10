# README

### urDB - Employee and Project Management Database for Small Businesses

# Sections Index
[intro] - App Purpose & Functionality
[1] - Ruby Version
[2] - System Dependencies
[3] - Configuration
[4] - Database creation
[5] - Database initialization
[6] - How to run the test suites
[7] - Services
[8] - Deployment instructions
[9] - Project Objectives


[intro]

urDB is an Application made with small businesses in mind. 

Small businesses struggle with digitalization because they don't have the typical resources that a large company has, whether it be financially or lack of time, personnel, or knowledge.

What these businesses don't realize is that so many important things fall through the cracks when they don't have readily accessible documentation on their employees.

This tool is meant to be a simple, quick, and painless way for small businesses to manage their workforce and all their data in a secure, easy-to-use suite.

It handles:

HRIS

    - Employees
    - Subcontracted Workers

Project Management

    - Contracts (can have multiple Employees/Subcontracted Workers)
    - Projects (can have multiple Contracts)
    - Clients (belong to Companies)
    - Companies (can have multiple Contracts, Clients, and Projects (through Contracts))

Matrix

    - Skills
    - Performance (tba)

[1] Ruby Versions

    ruby 2.6.10p210 (2022-04-12 revision 67958)
    ruby 2.7.4

[2] Dependencies

    "rails": "^7.0.4"
    "postgreSQL": "^1.1"
    "bcrypt": "^3.1.7"
    "active_model_serializers": "^0.1.13"
    "puma": "^5.0"
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.3.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-native": "^0.71.3",
    "react-router-dom": "^5.3.4",
    "react-scripts": "^5.0.1",
    "warden": "^0.1.1",
    "web-vitals": "^2.1.4"

[3] - Configuration

    Backend: Ruby on Rails
    Frontent: React.js
    
Component Breakdown:

    [App.js]
        NavBar
        WelcomeMessage
        Home (Login)
            HRIS
                Employees
                    Employee
                    EmployeeForm
                    EmployeeEdit
                Subcontractors
                    Subcontractor
                    SubcontractorForm
                    SubcontractorEdit
            Management
                Account
                    UserContracts (assigned contracts to specific users)
                Contracts
                    Contract
                    ContractForm
                    ContractEdit
                Projects
                    Project
                    ProjectForm
                    ProjectEdit
                Companies
                    Company
                    CompanyForm
                    CompanyEdit
                Clients
                    Client
                    ClientForm
                    ClientEdit
            Matrix
                Skills
                    Skill
                    SkillForm
                    SkillEdit
            Regional
                Addresses
                    Address
                    AddressForm
                    AddressEdit
                    Zips
                        Zip

[4] Database creation

    See the following breakdown of the database relationships:
        - ![database-graph](employee-database/client/src/assets/database-graph.png)

    This app's database is the most robust feature in this application as it is what most small-businesses need. Having several `many_to_many` relationships and `has_many through` relationships is not possible in a typical spreadsheet suite, and many features that business owners need to properly visualize critical data for decision-making are only served through a database. 

    Databases also have different plugins where you can export tables and filter through the data as-needed in Excel which is important when manipulating and sharing information outside the organization with external stakeholders.

[5] Database initialization

    Database can be reset by following these steps in the console:
        rails db:drop:all
        rails db:create:all
        rails db:migrate 
            *(this will take a lot of time with the external `zips` populating)
        rails db:seed

    - Do not attempt to overpopulate the seed data, add data in once seeded and the database is running



[6] How to run test suites

    - Test data in Postman by using these parameters:

        Auth: digestAuth
            username: admin
            password: password

        http://localhost:3000/users/ - should return error message

        http://localhost:3000/users/1 - should return current (admin, password) user information

        http://localhost:3000/users/1/contracts - should return current (admin, password) assigned contracts.

        http://localhost:3000/contracts/
        http://localhost:3000/contracts/1
        *repeat the above steps with each model class

[7] Services

    {intro}

[8] Deployment Instructions
    
    1. Go to [GitHub](https://github.com/coolcoolcoolyo/small-business-database)

    2. Grab SSH for repository [small-business-database](https://github.com/coolcoolcoolyo/small-business-database.git)

    3. Clone into the desired folder your terminal:
        `git clone https://github.com/coolcoolcoolyo/small-business-database.git`

    4. `cd ` into the folder in your terminal, the run `code .` once in the project folder

    5. Make sure app is opened in VS Code/preferred IDE

    6. Open terminal in VSCode/IDE, run `bundle install` in main folder

    7. If you want to start with a fresh database, run {step [5]} processes.

    8. In your terminal in VSCode/IDE, run `rails s` to initialize the server

    9. In a separate terminal window, enter the following code: 
        `cd client` --takes you to the right folder to start frontend
        `npm install` --installs necessary dependencies
        `npm start` --starts your frontend

    10. Log in to the app either using the base credentials or Register for a new account to browse the app's functionality!


[9] Project Objectives

# 1. Database should be Postgresql ✅
# 2. Full CRUD on at least two resources ✅
    Functional:
        - Employees
        - Addresses
# Validations AND display validation errors in the frontend ✅
# Authentication ✅
# Authorization ✅
# At least 1 API that is not your Rails backend ( connect to the API using your Rails server if possible!!! ) ✅
    See the following blog post I wrote explaining how I set it up: 
        [https://medium.com/@alexjspagnoli_21881/using-an-existing-db-json-to-seed-your-ruby-on-rails-database-d7ebfdb5ff36]
# Multiple has_many_through relationships (minimum 2) ✅
# Custom controller & model methods ✅
# Custom routes ✅

# What I would like to complete before presenting to potential clients:
    * Deployment
    * Complete search functionality for each feature, especially skills matrix
    * Complete CRUD for each feature
    * Admin and Manager tiers for users
    * More comprehensive and useful controller/model methods
    * Programming a 9-Box tool for employee performance management


~Created by Alexander Spagnoli for Final Project at Flatiron School