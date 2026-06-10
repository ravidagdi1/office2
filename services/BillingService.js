import requests from "./httpService";

const BillingServices = {
  

  // Fetch all active billing Address
  activeSuppliersState: async (state) => {
    console.log("tatte",state)
    return requests.get(`/billing/${state}`,);
  },

  

}


export default BillingServices;