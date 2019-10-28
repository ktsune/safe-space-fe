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

  it.skip('should return an array of all projects', () => {
    expect(getAllProjects()).resolves.toEqual(mockProjects);
  });

  it.skip('should return an error if the promise resolves but the property ok isn\'t true', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })

    expect(getAllProjects()).rejects.toEqual(Error('There was an issue getting your projects'))
  });

  it.skip('should return an error if the promise rejects', () => {
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.reject(Error('Failed to fetch projects'))
      })

    expect(getAllProjects()).rejects.toEqual(Error('Failed to fetch projects'))
  });
});