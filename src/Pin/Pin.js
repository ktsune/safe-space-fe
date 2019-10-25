import React, { useContext, useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { UsersContext } from '../Contexts/UsersContext';
import './Pin.css';

const Pin = ({ selectPin, center, selectCenter }) => {
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
        <h3>{reliefCenter.name}</h3>
        <p>{reliefCenter.addressPrint}</p>
        <p>{reliefCenter.website}</p>
        <p>{reliefCenter.email}</p>
        <p>{reliefCenter.phone}</p>
        <button onClick={handleSelectCenter}>Go to Center!</button>
      </div>
    )
  }
}

export default Pin;