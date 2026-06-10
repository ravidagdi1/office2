import requests from "./httpService";
import axios from "axios";

const POServices = {
  // Fetch all MRVs for a given store by storeId (using path param)
  createNewSupplier: async (body) => {
    return requests.post(`/po`, body);
  },

  // Fetch all active suppliers
  activeSuppliers: async () => {
    return requests.get(`/po`,);
  },

  //get all Items with request sttaus 'po pending'
  pendingPo: async () => {
    return requests.get(`/po/pendingPo`,);
  },

    //get all Items with request sttaus 'po pending'
  getPOItemsByRequestId: async (requestId) => {
    return requests.get(`/po/po-items/${requestId}`,);
  },

  //Update PO
  updatePO: async (id, data) => {
    console.log("heloooo", 'updating....')
    return requests.put(`/po/purchase-orders/${id}`, data);
  },

  //approvePO

  approvePO: async (body) => {
    return requests.post(`/po/approvePO`, body);
  },

  //superAdminbillingapprove

  superAdminBillingAction: async (body) => {
    return requests.patch(`/po/superadmin/billing-action`, body);
  },

  //bulkapprove
  bulkApprovePO: async (body) => {
    return requests.patch(`/po/superadmin/billing-bulk`, body);
  },

  report: async (body) => {
    return requests.post(`/po/report/by-created-date`, body)//requistion report
  },


  inactiveSuppliers: async () => {
    return requests.get(`/po/inactive`,);
  },

  //update suppliers by id

  updateSupplier: async (id, body) => {
    return requests.put(`/po/${id}`, body);
  },

  deleteSupplier: async (id) => {
    return requests.delete(`/po/${id}`);
  },

  PurchaseOrder: async (data) => {
    console.log("data", data)
    return requests.post('/po/PurchaseOrder', data);
  },
  AllPurchaseOrder: async () => {
    return requests.get('/po/PurchaseOrder');
  },
  AllPOByStatus: async (status) => {
    return requests.get(`/po/PurchaseOrder/status?query=${status}`);
  },

  AllPOItemsByStatus: async (status) => {
    console.log("postatus", status)
    return requests.get(`/po/report/po-by-status?status=${status}`);
  },


  AllItemsByPoId: async (id) => {
    return requests.get(`/po/po-items?poId=${id}`);
  },

  // ✅ DASHBOARD PO DATA (FAST)
  dashboardPO: async () => {
    return requests.get(`/po/dashboardPoData`);
  },


  downloadPOReport: async (data) => {
  return axios.post(
    "/api/v1/po/report/download", // ✅ your route
    data,
    {
      responseType: "blob", // ✅ IMPORTANT for Excel
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
},

  getQuotationByRequisition(requisitionId) {
    return requests.get(`quatation/by-requisition/${requisitionId}`);
  },

  getPOById(poId) {
    return requests.get(`/po/po-by-id/${poId}`);
  },

  // 🔹 Send quotation via WhatsApp
  sendQuotationWhatsApp: async (payload) => {
    return requests.post(`/quatation/send-whatsapp`, payload);
  }


}


export default POServices;