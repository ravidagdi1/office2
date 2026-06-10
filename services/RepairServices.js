import requests from "./httpService";

const RepairServices = {
  newSubmitRepairRequest: (body) =>
    requests.post(`/repair/newSubmitRepairRequest`, body),

  getRequest: (store, status) =>
    requests.get(`/repair?query=${store}&status=${status}`),

  getAllItem: (reqNo, status, store,poStatus) =>
    requests.get(`/repairItem?reqNo=${reqNo}&status=${status}&store=${store}&poStatus=${poStatus}`),

  updateItem: (id, body) =>
    requests.patch(`/repairItem/${id}`, body),


 CreateMrv : (body) => {
    return requests.post(`/repairmrv/repair-mrv`,body);
  },

  getMrv: async (store) => {
        return requests.get(`/repairmrv/repairmrv?query=${store}`)
    },

    localsubmitmrv: async (body) => {
        return requests.post(`/repairmrv/localsubmitmrv`, body)
    },
    submitMrv: async (body) => {
        return requests.post(`/repairmrv/submitmrv`, body)
    },

};



export default RepairServices;
