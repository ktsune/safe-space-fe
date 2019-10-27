export const getItems = async (reliefCenter) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `query {itemsAtCenter(centerId: ${reliefCenter.id}) {id name quantity}}`

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error getting your items')
    }

    let data = await resp.json();
    return data.data.itemsAtCenter

  } catch (error) {
    throw error
  }
} 

export const patchItem = async (item, reliefCenter) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `mutation {editItem(id: ${item.id}, centerId: ${reliefCenter.id}, quantity: ${item.quantity}) {item {quantity}}}`

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error editing your item')
    }

    let data = await resp.json();
    return data.data.editItem.item

  } catch (error) {
    throw error
  }
}    