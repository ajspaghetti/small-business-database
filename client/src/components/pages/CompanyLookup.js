import React from 'react'

function CompanyLookup() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9a313aa39dmshbfe7d0ff4975eaap1eeae5jsnc46ff42a7a5c',
            'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
        }
    };

    fetch('https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=%3CREQUIRED%3E', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <div>

        </div>
    )

}

export default CompanyLookup