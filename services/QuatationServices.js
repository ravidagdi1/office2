import requests from "./httpService";

const QuatationServices = {


  getRepliesByStatus: async (status) => {
    return requests.get(`/quatation/replies?status=${status}`);
  },

  getGroupedApprovedReplies: async (page = 1, limit = 15) => {
  return requests.get(`/quatation/replies-grouped?page=${page}&limit=${limit}`);
},

approveGrouped: async (payload) => {
  return requests.patch(`/quatation/approve-quote`, payload);
},

/* 🆕 BULK APPROVAL */
  approveGroupedBulk: async (payload) => {
    return requests.patch(`/quatation/approve-quote-bulk`, payload);
  },

getApprovalLogs: async(partNo) =>{
   return requests.get(`/quatation/quotation-logs/${partNo}`);

},


addManualRate :async (data) => {
  return requests.post(`/quatation/manual-rate`, data);
},



forceExpireRate: async(data) =>{
    return requests.post(`/quatation/force-expire`, data);
},

reactivateRate: async(data) =>{
    return requests.post(`/quatation/reactivate-rate`, data);
},



}




export default QuatationServices;