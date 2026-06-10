import requests from "./httpService";

const AccessoriesService = {
  createAccessories: async (body) => {
    return requests.post(`/accessories`, body);
  },

  getAllAssets: async () => {
    return requests.get(`/accessories`);
  },

  getAllAssetsById: async (selectedStore) => {
    console.log("hh",selectedStore)
    return requests.get(`/accessories`);
  },

  addAttachmentToAsset: async (assetId, attachmentId) => {
    return requests.patch(`/assets/${assetId}/attachments`, { attachmentId });
  },
};

export default AccessoriesService;
