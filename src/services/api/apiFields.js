import api from './index';

export async function saveField(data) {
  try {
    const response = await api.post('/fields', data);
    return response.data;
  } catch (err) {
    throw new Error(
      'An error ocurred trying to save a field. Please, try again.'
    );
  }
}

export async function searchFieldByCode(code) {
  try {
    const response = await api.get(`/fields?code=${code}`);
    console.log(response.data);
    return response.data.field;
  } catch (err) {
    throw new Error(
      'An error ocurred trying to get a field. Please, try again.'
    );
  }
}
