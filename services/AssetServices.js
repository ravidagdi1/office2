import requests from "./httpService";

const AssetServices = {
  createAsset: async (body) => {
    return requests.post(`/assets`, body);
  },

  getAllAssets: async () => {
    return requests.get(`/assets`);
  },

 getAssetsByStore: async (storeId) => {
  // If storeId is provided, append it as a query param
  const endpoint = storeId ? `/assets/by-store?store=${storeId}` : `/assets/by-store`;
  return requests.get(endpoint);
},

getAvailableAssets: async (storeId) => {
  if (storeId) {
    return requests.get(`/assets/available-assets?store=${storeId}`);
  } else {
    return requests.get(`/assets/available-assets`);
  }
},



 getAssestbyInventoryId: async (inventoryId) => {
  console.log("📦 Fetching assets for inventory:", inventoryId);
  return requests.get(`/assets/inventory/${inventoryId}`);
},


}

export default AssetServices;
