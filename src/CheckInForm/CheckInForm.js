import React, { useState } from 'react'
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm'
import NeedsForm from '../NeedsForm/NeedsForm'
import EmergencyContactForm from '../EmergencyContactForm/EmergencyContactForm'
import ButtonForm from '../ButtonForm/ButtonForm'
import './CheckInForm.css'

const CheckInForm = () => {
    const [basicInfo, setBasicInfo] = useState({
        name: "",
        age: "",
        phone: ""
    })
    const [needs, setNeeds] = useState([])
    const [emergencyInfo, setEmergencyInfo] = useState({
        name: "",
        phone: "",
        relationship: ""
    })

    



    return (
        <section className="CheckInForm">
            <BasicInfoForm basicInfo={basicInfo} setInfo={setBasicInfo}/>
            <NeedsForm needs={needs} setNeeds={setNeeds}/>
            <EmergencyContactForm emergencyInfo={emergencyInfo} setInfo={setEmergencyInfo}/>
            <ButtonForm /> 
        </section>
    )
}

export default CheckInForm;
