import React, {useState} from "react"

function AddressForm(
    {
        addresses,
        setAddresses,
        zips,
        setZips,
        onSubmitNewAddress
    }
) {
    const [lineOne, setLineOne] = useState('');
    const [lineTwo, setLineTwo] = useState('');
    const [zipCode, setZipCode] = useState();
    // const [zipData, setZipData] = useState(null);
  

    const handleLineOneChange = (e) => setLineOne(e.target.value);
    const handleLineTwoChange = (e) => setLineTwo(e.target.value);
    const handleZipCodeChange = (e) => setZipCode(e.target.value)

    const handleSubmit = (e) => {
      e.preventDefault();
        const addressInput= {
            line_one: lineOne,
            line_two: lineTwo,
            zip_id: zipCode.id,
        }
        fetch('/addresses', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(addressInput)
        })
            .then(r => {
                if(r.ok) {
                    r.json()
                    .then(newAddress => onSubmitNewAddress(newAddress))
                }
                alert('Thanks for posting')
            })
        setLineOne('')
        setLineTwo('')
        setZipCode(0)

    };
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lineOne">Address:</label>
                    <input type="text" id="lineOne" value={lineOne} onChange={handleLineOneChange} />
                </div>
                <div>
                    <label htmlFor="lineTwo">Unit or Apartment:</label>
                    <input type="text" id="lineTwo" placeholder="(optional)" value={lineTwo} onChange={handleLineTwoChange} />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input type="number" id="zipCode" placeholder="Zip Code" value={zipCode} onChange={handleZipCodeChange} />
                </div>
                <br/>
                    <button type="submit">Submit</button>
            </form>
        </div>
      
    );
  }

  export default AddressForm