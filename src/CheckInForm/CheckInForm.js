import React from 'react'
import BasicInfoForm from '../BasicInfoForm/BasicInfoForm'
import NeedsForm from '../NeedsForm/NeedsForm'
import EmergencyContactForm from '../EmergencyContactForm/EmergencyContactForm'
import ButtonForm from '../ButtonForm/ButtonForm'
import './CheckInForm.css'

const CheckInForm = () => {
    return (
        <section className="CheckInForm">
            <BasicInfoForm />
            <NeedsForm />
            <EmergencyContactForm />
            <ButtonForm /> 
        </section>
    )
}

export default CheckInForm;
