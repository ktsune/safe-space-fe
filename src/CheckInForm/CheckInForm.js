import React, { useState } from 'react'
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm'
import NeedsForm from '../NeedsForm/NeedsForm'
import MedicationForm from  '../MedicationForm/MedicationForm'
import EmergencyContactForm from '../EmergencyContactForm/EmergencyContactForm'
import ButtonForm from '../ButtonForm/ButtonForm'
import './CheckInForm.css'

const CheckInForm = () => {
    const [personName, setPersonName] = useState("")
    const [personAge, setPersonAge] = useState("")
    const [personPhone, setPersonPhone] = useState("")

    const [items, setItems] = useState([
        "diapers",
        "baby wipes",
        "breastfeeding supplies",
        "infant formula",
        "feminine products",
        "phone charger (iphone)",
        "phone charger (android)",
        "medications",
        "add item"
    ])
    
    const [medication, setMedication] = useState("")
    const [allMedications, setAllMedications] = useState([])

    const [emergencyName, setEmergencyName] = useState("")
    const [emergencyPhone, setEmergencyPhone] = useState("")
    const [emergencyRelationship, setEmergencyRelationship] = useState("")

    const [personData, setPersonData] = useState({
        name: personName,
        age: personAge,
        phone: personPhone,
        needs: items,
        medications: allMedications,
        emergencyName: emergencyName,
        emergencyPhone: emergencyPhone,
        emergencyRelationship : emergencyRelationship
    })

    return (
        <section className="CheckInForm">
            <BasicInfoForm 
            personName={personName} setPersonName={setPersonName} 
            personAge={personAge} setPersonAge={setPersonAge}
            personPhone={personPhone} setPersonPhone={setPersonPhone}
            />
            <NeedsForm items={items} setItems={setItems} />
            <MedicationForm items={items} setItems={setItems} medication={medication} setMedication={setMedication} allMedications={allMedications} setAllMedications={setAllMedications}/>
            <EmergencyContactForm 
            emergencyName={emergencyName} setEmergencyName={setEmergencyName}
            emergencyPhone={emergencyPhone} setEmergencyPhone={setEmergencyPhone}
            emergencyRelationship={emergencyRelationship} setEmergencyRelationship={setEmergencyRelationship}
            />
            <ButtonForm personData={personData} setPersonData={setPersonData}/> 
        </section>
    )
}

export default CheckInForm;
