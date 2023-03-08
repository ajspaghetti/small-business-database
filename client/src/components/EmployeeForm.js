import React, { useState } from "react"

function EmployeeForm(
    {
        employees,
        setEmployees
    }
) {
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastName, setLastName] = useState("")
  const [suffix, setSuffix] = useState("")
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [addressId, setAddressId] = useState("")
  const [taxNumber, setTaxNumber] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [skillId, setSkillId] = useState("")
  const [startDate, setStartDate] = useState("")
  const [hourlyOrSalary, setHourlyOrSalary] = useState("")
  const [hourlyRate, setHourlyRate] = useState("")
  const [annualSalary, setAnnualSalary] = useState("")
  const [ptoPolicy, setPtoPolicy] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [notes, setNotes] = useState("")

    const hS = ["Hourly", "Salary"]

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    })
      .then((response) => response.json())
      .then((newEmployee) => {
        console.log(newEmployee)
        // setEmployees([...employees, newEmployee])
            // reset form values
            setFirstName("")
            setMiddleName("")
            setLastName("")
            setSuffix("")
            setGender("")
            setPhone("")
            setEmail("")
            setAddressId(parseInt(""))
            setTaxNumber("")
            setJobTitle("")
            setSkillId(parseInt(""))
            setStartDate(Date)
            setHourlyOrSalary("")
            setHourlyRate(parseInt(""))
            setAnnualSalary(parseInt(""))
            setPtoPolicy("")
            setIsActive(false)
            setNotes("")
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
            Address ID:
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
