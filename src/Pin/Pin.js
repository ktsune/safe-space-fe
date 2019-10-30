import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { UsersContext } from '../Contexts/UsersContext';
import './Pin.css';

export const Pin = ({ center, selectCenter }) => {
  const [isHovered, updateHoverState] = useState(false);
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);
  const { currentUsers, setCurrentUsers } = useContext(UsersContext)

  let GET_USERS = gql`
    query {
      usersAtCenter(centerId: ${reliefCenter.id}) {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);
  
  const handleHover = () => {
    setreliefCenter(center)
    updateHoverState(!isHovered)
  }
  
  const handleSelectCenter = () => {
    selectCenter(true)
    setCurrentUsers({ ...currentUsers, result: data.usersAtCenter, original: data.usersAtCenter })
  }

  if(!isHovered) {
    return(
      <div onMouseEnter={handleHover}>
        <img className="Pin_img" src={'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png'} alt="hello"/>
      </div>
    )
  } else {
    return(
      <div className='pin-hover' onMouseLeave={handleHover}>
        <img className="relief-center-img" src={'https://oceanservice.noaa.gov/hazards/drc/drc.jpg'} alt="hello"/>
        <div onClick={handleSelectCenter}>
          <p className="pin-title">{reliefCenter.name}</p>
          <p>Phone: 720-521-1234</p>
          <p>Capacity: 175/250 people</p>
        </div>
      </div>
    )
  }
}

export default Pin;