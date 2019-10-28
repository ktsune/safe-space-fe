import React, { useState } from 'react'
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm'
import NeedsForm from '../NeedsForm/NeedsForm'
import MedicationForm from  '../MedicationForm/MedicationForm'
import EmergencyContactForm from '../EmergencyContactForm/EmergencyContactForm'
import ButtonForm from '../ButtonForm/ButtonForm'
import './CheckInForm.css'

const CheckInForm = () => {
    const [basicInfo, setBasicInfo] = useState({
        name: "",
        age: "",
        phone: ""
    })
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

    const [emergencyInfo, setEmergencyInfo] = useState({
        name: "",
        phone: "",
        relationship: ""
    })

    return (
        <section className="CheckInForm">
            <BasicInfoForm basicInfo={basicInfo} setBasicInfo={setBasicInfo}/>
            <NeedsForm items={items} setItems={setItems} />
            <MedicationForm medication={medication} setMedication={setMedication} allMedications={allMedications} setAllMedications={setAllMedications}/>
            <EmergencyContactForm emergencyInfo={emergencyInfo} setEmergencyInfo={setEmergencyInfo}/>
            <ButtonForm /> 
        </section>
    )
}

export default CheckInForm;
