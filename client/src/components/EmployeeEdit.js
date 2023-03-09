import React, { useEffect, useState } from "react"
import { useParams, useHistory } from 'react-router-dom'

function EmployeeEdit(
    {
        employees,
        setEmployees,
        addresses,
        setAddresses,
        zips,
        setZips,
        skills,
        setSkills,
        onShowDetails,
        displayCard,
        setDisplayCard
    }
) {
    let { id } = useParams()
    let history = useHistory()
    const [isEditing, setIsEditing] = useState(false)
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

    useEffect(() => {
        fetch(`/employees/${id}`)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(oneEmployee => onShowDetails(oneEmployee))
            }
        })
    }, [id])

    function handleEmployeeEdit() {
        setIsEditing(!isEditing)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        let updateInput = {
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
        fetch(`/employees/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateInput),
    })
        .then((response) => {
            if(response.ok) {
                response.json()
                .then((updatedEmployee) => onShowDetails(updatedEmployee))
                .then(handleEmployeeEdit)
            }
        alert('Employee successfully updated!')
        })
    }

        function handleEmployeeDelete(currentEmployee) {
            if(window.confirm('Are you sure you want to delete this Employee from the database?')) {
                fetch(`/employees/${id}`)
            }
            console.log(id)
        }

    return (
        <div>

        </div>
    )
}

