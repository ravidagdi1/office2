import requests from "./httpService";

const AssestVechileServices = {

 // createAssest vechle with the operatore
  createAssetVehicle: async (body) => {
    return requests.post(`/assetVehicles/createAssetVehicle`,body);
  },

  //show all assestvechile or allocated vechile 

   getAllAssetVehicles: async () => {
    return requests.get(`/assetVehicles/getAllAssetVehicles`);
  },

 updateAssetVehicle: async (id, body) => {
  return requests.patch(`/assetVehicles/${id}`, body);
}
}

export default AssestVechileServices;