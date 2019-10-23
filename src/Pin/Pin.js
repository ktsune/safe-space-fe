import React, { useContext } from 'react';
import { CurrentCenterContext } from '../CurrentCenterContext';
import './Pin.css';

const Pin = ({ selectPin, center }) => {
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);


  return(
    <img onClick={() => setreliefCenter(center)} className="Pin_img" src={'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png'} alt="hello"/>
  )
}

export default Pin;