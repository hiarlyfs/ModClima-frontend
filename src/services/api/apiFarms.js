import api from './index';

export async function createFarm(data) {
  try {
    const response = await api.post('/farms', data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred while creating a new farm');
  }
}

export async function searchFarms(filterOption, filterValue) {
  try {
    const { data } = await api.get(`/farms?${filterOption}=${filterValue}`);
    return data.farms;
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred while trying to search farms');
  }
}
