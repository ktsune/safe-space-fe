import { getItems, patchItem } from './apiCalls';

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

  it('should return an array of all projects', () => {
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