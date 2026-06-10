import requests from "./httpService";

const RepairPOServices = {
  

  //get all Items with request sttaus 'po pending'
  pendingPoList: async () => {
    return requests.get(`/repairpo/pendingPoList`,);
  },

  CreateRepairOrder: async (data) => {
    return requests.post('/repairpo/RepairOrder', data);
  },

  AllPOByStatus: async (status) => {
    console.log("allposttaus",status)
    return requests.get(`/repairpo/PurchaseOrder/status?query=${status}`);
  },

    //approvePO

  approvePO: async (body) => {
    return requests.post(`/repairpo/approvePO`, body);
  },

  //Update PO
  updatePO: async (id, data) => {
    return requests.put(`/repairpo/purchase-orders/${id}`, data);
  },

  AllItemsByPoId: async (id) => {
    return requests.get(`/repairpo/po-items?poId=${id}`);
  },

 


}


export default RepairPOServices;