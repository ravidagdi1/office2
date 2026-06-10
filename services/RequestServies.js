import requests from "./httpService";
import axios from "axios";

const RequestServies = {

    createRequest: async (body) => {
        return requests.post(`/request`, body)
    },
    getRequest: async (store, status) => {
        return requests.get(`/request?query=${store}&status=${status}`)
    },

    getAllRequestDashboradData: async () => {
        return requests.get(`/request/dashboard-data`)
    },
    updateRequest: async (id, body) => {
        return requests.patch(`/request/${id}`, body);
    },
    createItem: async (body) => {
        return requests.post(`/item`, body);
    },
    updateItemQty: async (id, body) => {
        return requests.put(`item/qty/${id}`, body)
    },


    createTransfer: async (body) => {
        return requests.post(`/transfer`, body);
    },
    getTrasfer: async (store, status) => {
        return requests.get(`/transfer?query=${store}&status=${status}`)
    },
    submitTransfer: async (body) => {

        return requests.post(`/transfer/submit`, body)
    },
    getAllItem: async (reqNo, status, store, poStatus) => {
        return requests.get(`/item?reqNo=${reqNo}&status=${status}&store=${store}&poStatus=${poStatus}`);
    },
    getItemsByRequisitionNo: async (requisitionId) => {

        return requests.get(`/item/request/${requisitionId}`);
    },

    getAllItemApproval: async (reqNo) => {
        console.log(reqNo)
        return requests.get(`/item/getallitem/item?reqNo=${reqNo}`);
    },
    getDesileItem: async (status, store) => {
        return requests.get(`/item/desile/item?status=${status}&store=${store}`);
    },
    updateItem: async (id, body) => {
        return requests.patch(`/item/${id}`, body);
    },

    CancelItem: async (id,data) => {
        return requests.patch(`/item/${id}/cancel-remaining`, data);
    },
    report: async (body) => {
        return requests.post(`/item/report`, body)//requistion report
    },

    downloadRequisitionReport: async (data) => {
        return axios.post(
            //"http://localhost:3001/api/v1/transferItem/report/download",
            "/api/v1/item/report/download",
            data,
            {
                responseType: "blob", // ✅ REQUIRED for Excel
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`, // ✅ FIXED
                },
            }
        );
    },
    reportUsedItems: async (body) => {
        return requests.post(`/useditem/report`, body)//MIV Report
    },
    downloadMIVReport: async (data) => {
  return axios.post(
    "/api/v1/useditem/report/download", // ✅ your route
    data,
    {
      responseType: "blob", // ✅ IMPORTANT for Excel
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
},
    reportTransferItems: async (body) => {
        return requests.post(`/transferItem/report`, body)//Transfer Report
    },


    downloadTransferReport: async (data) => {
        return axios.post(
            //"http://localhost:3001/api/v1/transferItem/report/download",
            "/api/v1/transferItem/report/download",
            data,
            {
                responseType: "blob", // ✅ REQUIRED for Excel
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`, // ✅ FIXED
                },
            }
        );
    },
    reportGroupRequistion: async (body) => {
        return requests.post('/item/itemreport', body)// Reqiuistion Summary
    },
    reportGroupItems: async (body) => {
        return requests.post(`/useditem/itemreport`, body)//MIV Summary
    },

    submitRequisition: async (body) => {

        return requests.post(`/request/submitrequisition`, body)
    },
    newSubmitRequisition: async (body) => {

        return requests.post(`/request/newSubmitrequisition`, body)
    },

    newSubmitRequistBySuperAdmin: async (body) => {

        return requests.post(`/request/superadmin/create-priority-requisition`, body)
    },

    submitfordesile: async (body) => {

        return requests.post(`/desile`, body)
    },
    submitfordesileUsed: async (body) => {

        return requests.post(`/desile`, body)
    },
    submitMiv: async (body) => {
        console.log(body)
        return requests.post(`/miv/submitmiv`, body)
    },
    newsubmitMiv: async (body) => {
        console.log(body)
        return requests.post(`/miv/newsubmitmiv`, body)
    },
    submitMrv: async (body) => {
        return requests.post(`/mrv/submitmrv`, body)
    },
    localsubmitMrv: async (body) => {
        return requests.post(`/mrv/localsubmitmrv`, body)
    },

    getMrvByBillingNos: async (billingNos) => {
        return requests.post(`/mrv/mrv-by-billing`, { billingNos });
    },

    getSingleMrv: async (id) => {
        return requests.get(`/mrv/${id}`);
    },


    submitDesile: async (body) => {
        return requests.post(`/mrv/desile/submitmrv`, body)
    },
    submitTransferMrv: async (body) => {
        return requests.post(`/mtn/submitTransferMrv`, body)
    },
    createMrv: async (body,onUploadProgress) => {
        return requests.post(`/mrv`, body,{onUploadProgress})
    },
    createMtn: async (body) => {
        return requests.post(`/mtn`, body)
    },
    getMrv: async (store) => {
        return requests.get(`/mrv?query=${store}`)
    },
    getMtn: async (store) => {
        return requests.get(`/mtn?query=${store}`)
    },
    createMiv: async (body) => {
        return requests.post(`/miv`, body)
    },
    // getMiv : async() => {
    //     return requests.get(`/miv`)
    // },
    getMiv: async (store, status) => {
        return requests.get(`/miv?query=${store}&status=${status}`)
    },
    createUsedItem: async (body) => {
        return requests.post(`/useditem`, body)
    },
    getAllUsedItem: async () => {
        return requests.get(`/useditem`)
    },
    getUsedItemByMiv: async (mivId) => {
        return requests.get(`useditem/miv/${mivId}`)
    },
    updateUsedItem: async (id, body) => {
        return requests.patch(`/useditem/${id}`, body);
    },


    getTransferAllItem: async (store, status) => {
        return requests.get(`/transferItem?query=${store}&status=${status}`);
    },
    getTransferedItem: async (store, status) => {
        return requests.get(`/transferItem/to?query=${store}&status=${status}`);
    },
    getFabrication: async (store, status) => {
        return requests.get(`/fabrication?storeId=${store}&status=${status}`)

    },
    submitFabrication: async (body) => {

        return requests.post(`/fabrication`, body)
    },
    submitCompleteFabrication: async (body) => {

        return requests.post(`/fabrication/trade/recived`, body)
    },
    reportFabrication: async (body) => {
        console.log(body)
        return requests.post(`/fabrication/report`, body)//Fabiraction Report
    },
    getdocumetwithitems: async (body) => {

        return requests.post(`/dashboard/getitem`, body)
    },
}

export default RequestServies;