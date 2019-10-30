import { getItems, addItem, patchItem, postNewUser, postEmergencyContacts, postNeeds, deleteUserFromDB } from './apiCalls';

describe('getItems', () => {
  let mockItems;
  let mockCenter;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockCenter = {
      name: 'Turing Relief',
      id: 2
    }
    mockItems = [
      {
        id: 1,
        name: 'diapers',
        quantity: 5
      },
      {
        id: 2,
        name: 'insulin',
        quantity: 3
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockItems)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    getItems(mockCenter);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=query {itemsAtCenter(centerId: 2) {id name quantity}}', options);
  });

  it('should return an array of all projects', () => {
    expect(getItems(mockCenter)).resolves.toEqual(mockItems);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(getItems(mockCenter)).rejects.toEqual(Error('There was an error getting your items'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to fetch items'))
      })

    expect(getItems(mockCenter)).rejects.toEqual(Error('Failed to fetch items'))
  });
});

describe('addItem', () => {
  let mockItem;
  let mockCenterId;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockCenterId = 2;

    mockItem = {
      id: 1,
      name: 'diapers',
      quantity: 5,
      consumable: true
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockItem)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    addItem(mockItem, mockCenterId);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {createItem(name: "diapers", quantity: 5, consumable: true, centerId: 2) {item {id name}}}', options);
  });

  it('should return an item', () => {
    expect(addItem(mockItem, mockCenterId)).resolves.toEqual(mockItem);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(addItem(mockItem, mockCenterId)).rejects.toEqual(Error('There was an issue adding that item'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to add item'))
      })

    expect(addItem(mockItem, mockCenterId)).rejects.toEqual(Error('Failed to add item'))
  });
});

describe('patchItem', () => {
  let mockItem;
  let mockCenter;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockCenter = {
      name: 'Turing Relief',
      id: 2
    }
    mockItem = {
        id: 1,
        name: 'diapers',
        quantity: 5
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockItem)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    patchItem(mockItem, mockCenter);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {editItem(id: 1, centerId: 2, quantity: 5) {item {quantity}}}', options);
  });

  it('should return an item', () => {
    expect(patchItem(mockItem, mockCenter)).resolves.toEqual(mockItem);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(patchItem(mockItem, mockCenter)).rejects.toEqual(Error('There was an error editing your item'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to edit item'))
      })

    expect(patchItem(mockItem, mockCenter)).rejects.toEqual(Error('Failed to edit item'))
  });
});

describe('postNewUser', () => {
  let mockPersonData;
  let mockCenter;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockCenter = {
      name: 'Turing Relief',
      id: 2
    }
    mockPersonData = {
      name: 'Jacob',
      age: '26',
      phone: '5555555',
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPersonData)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    postNewUser(mockPersonData, mockCenter);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {createUser (name: "Jacob", age: "26", phone: "5555555", centerId: 2) {user {id}}}', options);
  });

  it('should return the user data', () => {
    expect(postNewUser(mockPersonData, mockCenter)).resolves.toEqual(mockPersonData);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(postNewUser(mockPersonData, mockCenter)).rejects.toEqual(Error('There was an error posting that user'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to add user'))
      })

    expect(postNewUser(mockPersonData, mockCenter)).rejects.toEqual(Error('Failed to add user'))
  });
});

describe('postEmergencyContacts', () => {
  let mockPersonData;
  let mockUserId;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockUserId = 2;
    mockPersonData = {
      emergencyName: 'Jacob',
      emergencyPhone: '5555555',
      notify: false
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPersonData)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    postEmergencyContacts(mockUserId, mockPersonData);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {createContact (name: "Jacob", phone: "5555555", userId: 2, notify: false) {contact {id name phone userId}}}', options);
  });

  it('should return the emergency contact data', () => {
    expect(postEmergencyContacts(mockUserId, mockPersonData)).resolves.toEqual(mockPersonData);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(postEmergencyContacts(mockUserId, mockPersonData)).rejects.toEqual(Error('There was an error posting that emergency contact'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to post contacts'))
      })

    expect(postEmergencyContacts(mockUserId, mockPersonData)).rejects.toEqual(Error('Failed to post contacts'))
  });
});

describe('postNeeds', () => {
  let mockUserId;
  let mockNeeds;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockUserId = 2;
    mockNeeds = ['insulin', 'diapers'];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true, 
        json: () => Promise.resolve(mockNeeds)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    postNeeds(mockUserId, mockNeeds);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {createNeed (name: "insulin" userId: 2) {need {id name userId}}}', options);
    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {createNeed (name: "diapers" userId: 2) {need {id name userId}}}', options);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(postNeeds(mockUserId, mockNeeds)).rejects.toEqual(Error('There was an error posting that need'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to post needs'))
      })

    expect(postNeeds(mockUserId, mockNeeds)).rejects.toEqual(Error('Failed to post needs'))
  });
});

describe('deleteUserFromDB', () => {
  let mockUserId;
  let options;

  beforeEach(() => {
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    mockUserId = 2;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserId)
      })
    })
  });

  it('should call fetch with the correct url', () => {
    deleteUserFromDB(mockUserId);

    expect(window.fetch).toHaveBeenCalledWith('https://safe-space-be.herokuapp.com/graphql?query=mutation {deleteUser(id: 2) {user {id name}}}', options);
  });

  it('should return the deleted id', () => {
    expect(deleteUserFromDB(mockUserId)).resolves.toEqual(mockUserId);
  });

  it('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(deleteUserFromDB(mockUserId)).rejects.toEqual(Error('There was an error deleting the user'))
  });

  it('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to delete user'))
      })

    expect(deleteUserFromDB(mockUserId)).rejects.toEqual(Error('Failed to delete user'))
  });
});