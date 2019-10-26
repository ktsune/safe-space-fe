import React, {useContext } from 'react';
import { CurrentCenterContext } from '../Contexts/CurrentCenterContext';
import { ItemsContext } from '../Contexts/ItemsContext';



const SuppliesForm = () => {
  const { reliefCenter, setreliefCenter } = useContext(CurrentCenterContext);
  const { currentItems, setCurrentItems } = useContext(ItemsContext);

  console.log(currentItems)

  return (
    <section>
      <h1>Heyo!</h1>
      <h3>Inventory for {reliefCenter.name}</h3>
    </section>
  )
}

export default SuppliesForm
