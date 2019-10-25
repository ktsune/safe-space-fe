import React, {useContext } from 'react';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';


const SuppliesForm = () => {
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);

  return (
    <section>
      <h1>Heyo!</h1>
      <h3>{reliefCenter.name}</h3>
    </section>
  )
}

export default SuppliesForm
