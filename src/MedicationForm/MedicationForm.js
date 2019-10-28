import React from 'react'
import Item from '../Item/Item'

const MedicationForm = ({medication, setMedication, allMedications, setAllMedications}) => {

  const handleChange = (e) => setMedication(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllMedications([...allMedications, medication])
    setMedication("")
  }

  const removeMed = (e, id) => {
    e.preventDefault();
    let updatedMeds = allMedications.filter(med => med.id !== id)
    setAllMedications([updatedMeds])
  }

  const allMeds = allMedications.map((medication, index) => {
    return (
      <Item
      key={index +1}
      id={index + 1}
      medication={medication}
      removeMed={removeMed}
      />
    )
  })

  return (
    <form className="MedicationForm">
      <h1 id="medications-header">Medications:</h1>
      <article id="medications-input-container">
      <input id="med-info" placeholder="Medication Name" name="name" value={medication} onChange={handleChange}/>
      {/* <input id="dose-info" placeholder="How Much?" name="dose" value={medication.dose} onChange={handleChange} />
      <input id="when-info" placeholder="Taken How Often?" name="takeWhen" value={medication.takeWhen} onChange={handleChange}/>
      <input id="perscriber-info" placeholder="Perscribed By Whom?" name="perscriber" value={medication.perscriber} onChange={handleChange}/> */}
      <button type="submit" onClick={e => handleSubmit(e)}>+</button>
      </article>
      <article id="medications-container">
      {allMeds}
      </article>
    </form>
  )
}

export default MedicationForm
