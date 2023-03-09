import { SettingsPhoneOutlined } from "@mui/icons-material"
import React, { useState } from "react"

function EmployeeForm(
    {
      employees,
      setEmployees,
      addresses,
      setAddresses,
      zips,
      setZips,
      skills,
      setSkills,
      onSubmitNewEmployee,
      onSubmitNewAddress,
      onSubmitNewSkills
    }
) {

  // Employee POST
  const [employee, setEmployee] = useState("")
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [suffix, setSuffix] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [addressId, setAddressId] = useState(0)
  const [taxNumber, setTaxNumber] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [skillId, setSkillId] = useState(0)
  const [startDate, setStartDate] = useState(Date)
  const [hourlyOrSalary, setHourlyOrSalary] = useState("") // default will be Hourly
  const hS = ["Hourly", "Salary"] // Array for mapping hourlyOrSalary options
  const [hourlyRate, setHourlyRate] = useState(0)
  const [annualSalary, setAnnualSalary] = useState(0)
  const [ptoPolicy, setPtoPolicy] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [notes, setNotes] = useState("")

  // Address POST
  const [address, setAddress] = useState("")
  const [line1, setLine1] = useState("")
  const [line2, setLine2] = useState("")
  const [zipId, setZipId] = useState(0)

  // Skills POST
  const [skill, setSkill] = useState("")
  const [skillTitle, setSkillTitle] = useState("")
  const [employeeId, setEmployeeId] = useState(employee.id)
  const [subcontractorId, setSubcontractorId] = useState(0)

  // Zip GET, Search, Filter
  const [zip, setZip] = useState("")


  const findZip = (zipCode) => {
    let selectZip
    const zipCodes = zips.map((zip_code) => {
      if (zip_code.zip_code.includes(zipCode)) {
        selectZip = zip.find(
          (zip) => zip.zip_code === zipCode
        )
      }
      return selectZip
    })
    setZip(selectZip)
  }

  // console.log([hS[0]])


  const handleAddEmployees = (e) => {
    e.preventDefault()
    const employeeDetails = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      suffix: suffix,
      gender: gender,
      emp_phone: phone,
      emp_email: email,
      address_id: addressId,
      tax_number: taxNumber,
      job_title: jobTitle,
      skill_id: skillId,
      start_date: startDate,
      hourly_or_salary: hourlyOrSalary,
      hourly_rate: hourlyRate,
      annual_salary: annualSalary,
      pto_policy: ptoPolicy,
      active: isActive,
      emp_notes: notes,
    }
    fetch("/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeDetails),
    })
      .then(response => {
        if(response.ok) {
          response.json()
          .then(newEmployee => onSubmitNewEmployee(newEmployee))
        }
        alert('Thanks for submitting!')
        // .catch((error) => console.log(error))
      })
    setFirstName("")
    setMiddleName("")
    setLastName("")
    setSuffix("")
    setGender("")
    setPhone("")
    setEmail("")
    setAddressId(0)
    setTaxNumber("")
    setJobTitle("")
    setSkillId(0)
    setStartDate(Date)
    setHourlyOrSalary("")
    setHourlyRate(0)
    setAnnualSalary(0)
    setPtoPolicy("")
    setIsActive(true)
    setNotes("")
  }

  const handleAddAddresses = (e) => {
    e.preventDefault()
    const addressDetails = {
      line_one: line1,
      line_two: line2,
      zip_id: zip.id,
    }
    fetch("/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressDetails),
    })
      .then(response => {
        if(response.ok) {
          response.json()
          .then(newAddress => onSubmitNewAddress(newAddress))
        }
      })
    setLine1("")
    setLine2("")
    setZipId(0)
  }
      
  

  const handleAddSkills = (e) => {
    e.preventDefault()
    const skillsDetails = {
      skill_title: skillTitle,
      employee_id: employee.id,
      subcontractor_id: 0,
    }
    fetch("/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(skillsDetails),
    })
      .then((response) => {
        if(response.ok) {
          response.json()
          .then(newSkill => onSubmitNewSkills(newSkill))
        }
      })
    setSkillTitle("")
    setEmployeeId(0)
    setSubcontractorId(0)
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleAddEmployees}>
          <div className="form-horizontal">
            <label>
              First Name
              <br />
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Middle Name
              <br />
              <input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </label>
            <label>
              Last Name
              <br />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              Suffix
              <br />
              <input
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
              />
            </label>
          </div>

          <br />
          <label>
            Gender:
            <br />
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Phone:
            <br />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Address:
            <br />
            <input
              type="number"
              value={addressId}
              onChange={(e) => setAddressId(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Tax Number:
            <br />
            <input
              type="text"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Job Title:
            <br />
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Skill ID:
            <br />
            <input
              type="number"
              value={skillId}
              onChange={(e) => setSkillId(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Start Date:
            <br />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Hourly or Salary:
            <br />
            <input
              type="text"
              value={hourlyOrSalary}
              onChange={(e) => setHourlyOrSalary(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Hourly Rate:
            <br />
            <input
              type="number"
              step="0.01"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Annual Salary:
            <br />
            <input
              type="number"
              step="0.01"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            PTO Policy:
            <br />
            <input
              type="text"
              value={ptoPolicy}
              onChange={(e) => setPtoPolicy(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Active?:
            <br />
            <input
              type="checkbox"
              checked={isActive}
            //   unchecked={!isActive}
              onChange={(e) => setIsActive(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Notes:
            <br />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit" value="Submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  )
}

export default EmployeeForm
