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

export const patchItem = async (item, reliefCenter) => {
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
  console.log(personData);
  console.log(center);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {createUser (name: "${personData.name}", age: "${personData.age}", phone: "${personData.phone}", centerId: ${center.id}) {user {id}}}`;
  console.log(queryParams);
  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error posting that user");
    }

    let data = await resp.json();
    console.log(data.data.createUser.user.id);
    return data.data.createUser.user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postEmergencyContacts = async (userId, personData) => {
  console.log(userId);
  console.log(personData);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `mutation {createContact (name: "${personData.emergencyName}", phone: "${personData.emergencyPhone}" userId: ${userId}) {contact {id name phone userId}}}`;
  console.log(queryParams);
  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error posting that emergency contact");
    }

    let data = await resp.json();
    return data.data.createContact.contact.id;
  } catch (error) {
    throw error;
  }
};

export const postNeeds = async (userId, needs) => {
  console.log(userId);
  console.log(needs);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  needs.map(async need => {
    let queryParams = `mutation {createNeed (name: "${need}" userId: ${userId}) {need {id name userId}}}`;
    console.log(queryParams);
    let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

    try {
      let resp = await fetch(url, options);
  
      if (!resp.ok) {
        throw new Error("There was an error posting that need");
      }
  
      let data = await resp.json();
      console.log('needs', data)
      return data;
    } catch (error) {
      throw error;
    }

  })
};