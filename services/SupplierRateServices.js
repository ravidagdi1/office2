import requests from "./httpService";

const SupplierRateServices = {


 getAllSupplierRatesByStatus: async (status) => {
  return requests.get(`/supplierRate?status=${status}`);
},


}




export default SupplierRateServices;