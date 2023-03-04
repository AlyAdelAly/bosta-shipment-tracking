import axios from 'axios';

export const getShipmentDataApi = async (id: any) => {
  try {
    const response = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
    if (response.status === 200 && response.data) {
      return response;
    } else {
      throw new Error('Invalid response from server');
    }
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error('No response received from server');
    } else {
      throw new Error(error.message);
    }
  }
};