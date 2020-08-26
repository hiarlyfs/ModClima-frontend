import api from './index';

export async function createMill(data) {
  try {
    const mill = await api.post('/mills', data);
    return mill;
  } catch (err) {
    throw new Error('An error occurred trying to save the mill');
  }
}
