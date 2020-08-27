import api from './index';

export async function createMill(data) {
  try {
    const mill = await api.post('/mills', data);
    return mill;
  } catch (err) {
    throw new Error('An error occurred trying to save the mill');
  }
}

export async function searchMillsByName(name) {
  try {
    const { data } = await api.get(`/mills?name=${name}`);
    return data.mills;
  } catch (err) {
    throw new Error('An error occurred trying to get the mills');
  }
}
