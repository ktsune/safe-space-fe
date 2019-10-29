export const getItems = async reliefCenter => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `query {itemsAtCenter(centerId: ${reliefCenter.id}) {id name quantity}}`;

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error getting your items");
    }

    let data = await resp.json();
    return data.data.itemsAtCenter;
  } catch (error) {
    throw error;
  }
};

export const addItem = async (item, centerId) => {
  console.log(item)
  console.log(centerId)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {createItem(name: "${item.name}", quantity: ${item.quantity}, consumable: ${item.consumable}, centerId: ${centerId}) {item {id name quantity}}}`;

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an adding that item");
    }

    let data = await resp.json();
    return data
  } catch (error) {
    throw error;
  }
};

export const patchItem = async (item, reliefCenter) => {
  console.log(item)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {editItem(id: ${item.id}, centerId: ${reliefCenter.id}, quantity: ${item.quantity}) {item {quantity}}}`;

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error editing your item");
    }

    let data = await resp.json();
    return data.data.editItem.item;
  } catch (error) {
    throw error;
  }
};

export const postNewUser = async (personData, center) => { 
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {createUser (name: "${personData.name}", age: "${personData.age}", phone: "${personData.phone}", centerId: ${center.id}) {user {id}}}`;
  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error posting that user");
    }

    let data = await resp.json();
    return data.data.createUser.user.id;
  } catch (error) {
    throw error;
  }
};

export const postEmergencyContacts = async (userId, personData) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {createContact (name: "${personData.emergencyName}", phone: "${personData.emergencyPhone}", userId: ${userId}, notify: ${personData.notify}) {contact {id name phone userId}}}`;
  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error posting that emergency contact");
    }

    let data = await resp.json();
    return data
  } catch (error) {
    throw error;
  }
};

export const postNeeds = async (userId, needs) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  needs.map(async need => {
    let queryParams = `mutation {createNeed (name: "${need}" userId: ${userId}) {need {id name userId}}}`;
    let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

    try {
      let resp = await fetch(url, options);
  
      if (!resp.ok) {
        throw new Error("There was an error posting that need");
      }
  
      let data = await resp.json();
      return data;
    } catch (error) {
      throw error;
    }
  })
};

export const deleteUserFromDB = async (id) => {
  console.log(typeof parseInt(id))
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {deleteUser(id: ${id}) {user {id name}}}`

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error deleting the user')
    }
    let data = await resp.json();
    return data

  } catch (error) {
    throw error
  }
}  