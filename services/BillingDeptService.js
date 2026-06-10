import requests from "./httpService";

const BillingDeptServices = {
  // Fetch all MRVs for a given store by storeId (using path param)
  createNewBillingRecord: async (body) => {
    console.log("suppliers new", body);
    return requests.post(`/billingDept`,body);
  },

  getBillingDeatilswithPO:async(status) => {
    return requests.get(`/billingDept/${status}`);
  },

  billingApproval:async(id,body) => {
    return requests.put(`/billingDept/${id}`,body);
  },

  getBillingDetailsByPoId:async(id,body) => {
    console.log("ddgdgf",id)
    return requests.get(`/billingDept/billing/${id}`);
  },



}


export default BillingDeptServices;