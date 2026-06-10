import requests from "./httpService";

const RequestServies = {

    createRequest: async (body) => {
        return requests.post(`/request`, body)
    },
    getRequest: async (store, status) => {
        return requests.get(`/request?query=${store}&status=${status}`)
    },
    getRequestmutipleStatus: async (store, status) => {
        const statusString = JSON.stringify(status); // Convert array to JSON string
        return requests.get(`/request/allstatus?query=${store}&status=${encodeURIComponent(statusString)}`);
    },

    bulkApproveByDirector: async (payload) => {
        return requests.patch(`item/director/bulk-approve`, payload)
    },

    updateRequest: async (id, body) => {
        return requests.patch(`/request/${id}`, body);
    },
    returnToAdminByDirector: async (body) => {
        console.log("return requestion...");
        return requests.patch(`/request/return-to-admin`, body);
    },
    getStoresFromRequests: async () => {
        console.log("fetching stores from requests...");
        return requests.get(`/request/stores-from-requests`);
    },
    createItem: async (body) => {
        return requests.post(`/item`, body);
    },
    createTransfer: async (body) => {
        return requests.post(`/transfer`, body);
    },
    getTrasfer: async (store, status) => {
        return requests.get(`/transfer?query=${store}&status=${status}`)
    },

    getAllItem: async (reqNo, status, store) => {
        return requests.get(`/item?reqNo=${reqNo}&status=${status}&store=${store}`);
    },
    getItemsByRequisitionNo: async (requisitionId) => {

        return requests.get(`/item/request/requisitionNo/${requisitionId}`);
    },
    getDesileItem: async (status, store) => {
        return requests.get(`/desile?status=${status}&store=${store}`);
    },
    updateItem: async (id, body) => {
        return requests.patch(`/item/${id}`, body);
    },
    bypassAction:async(id, data)=>{
        console.log('bypass')
        return requests.patch(`/item/bypass/${id}`,data)
    },
    updateStatusByDirector: (id, payload) => {
        return requests.patch(`item/director/update-status/${id}`, payload);
    },
    updateApproveQtyByDirector: (id, payload) => {
        return requests.patch(`item/update-approve-qty/${id}`, payload);
    },
    updateDesileItem: async (id, body) => {
        return requests.patch(`/desile/${id}`, body);
    },
    updateDesileBySuperItem: async (id, body) => {
        return requests.patch(`/desile/adminapproved/desileitem/${id}`, body);
    },
    submitRequisition: async (body) => {

        return requests.post(`/request/submitrequisition`, body)
    },
    submitMiv: async (body) => {
        return requests.post(`/miv/submitmiv`, body)
    },
    submitwaterMiv: async (body) => {
        console.log("waterMiv", body)
        return requests.post(`/miv/submitwatermiv`, body)
    },
    submitMrv: async (body) => {
        return requests.post(`/mrv/submitmrv`, body)
    },
    createMrv: async (body) => {
        return requests.post(`/mrv`, body)
    },
    getMrv: async (store) => {
        return requests.get(`/mrv?query=${store}`)
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

    getMivByStoreAndStatus: async (storeId, status) => {
        return await requests.get(`/miv/byStoreAndStatus?store=${storeId}&status=${status}`);
    },

    createUsedItem: async (body) => {
        return requests.post(`/useditem`, body)
    },
    getAllUsedItem: async (mivNo, status) => {
        console.log(mivNo, status)
        return requests.get(`/useditem?query=${mivNo}&status=${status}`)
    },
    updateUsedItem: async (id, body) => {
        return requests.patch(`/useditem/${id}`, body);
    },

    getTransferAllItem: async (store, status, transfer) => {
        return requests.get(`/transferItem?query=${store}&status=${status}&transfer=${transfer}`);
    },

    updateTransferItem: async (id, body) => {
        return requests.patch(`/transferItem/${id}`, body);
    },
    getTransferedItem: async (store, status) => {
        return requests.get(`/transferItem/to?query=${store}&status=${status}`);
    },
    submitFabrication: async (body) => {

        return requests.post(`/fabrication`, body)
    },
    submitCompleteFabrication: async (body) => {

        return requests.post(`/fabrication/trade/recived`, body)
    },
    getFabrication: async (store, status) => {
        return requests.get(`/fabrication?storeId=${store}&status=${status}`)
    },
    mrvDelete: async (id) => {
        return requests.delete(`/mrv/mrv/${id}`)

    },
    mrvDeatilUpdate: async (id, body) => {
        console.log("mrvdetailuodate")
        return requests.patch(`/mrv/mrv/${id}`, body)

    }
}

export default RequestServies;