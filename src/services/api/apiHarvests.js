import api from './index';

export async function createHarvest(data) {
  try {
    const response = await api.post('/harvests', data);
    return response.data.harvest;
  } catch (err) {
    console.log(err);
    throw new Error('An error occured trying save harvest');
  }
}

export async function searchHarvest(filters) {
  try {
    const filterKeys = Object.keys(filters);
    const filterStringURL = filterKeys.reduce((pv, cv) => {
      return `${pv}${cv}=${filters[cv]}&`;
    }, '?');

    const response = await api.get(`/harvests${filterStringURL.slice(0, -1)}`);
    console.log(response.data.harvests);
    return response.data.harvests;
  } catch (err) {
    console.log(err);
    throw new Error('An error occured trying save harvest');
  }
}
