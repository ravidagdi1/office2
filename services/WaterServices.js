import requests from "./httpService";

const WaterServics = {
  // Fetch all MRVs for a given store by storeId (using path param)
  getMRV: async (storeId) => {
    console.log("Fetching MRV for storeId:", storeId);
    return requests.get(`/water/mrv/${storeId}`);
  },

  // Optional: fetch items for a specific MRV in a store
  getItemsForMRV: async (storeId, mrvId) => {
    console.log(storeId)
    return requests.get(`/water/mrv/${storeId}/${mrvId}`);
  },
};

export default WaterServics;
