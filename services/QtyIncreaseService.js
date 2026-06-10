import requests from "./httpService";

const QtyIncreaseService = {

   // ✅ CREATE QTY INCREASE REQUEST
    createQtyIncreaseRequest: async (data) => {
        return requests.post(
            `/qtyIncreaseRequest/create`,
            data
        );

    },


    // ✅ GET QTY REQUESTS BY STATUS
    getQtyIncreaseRequestsByStatus: async (status) => {

        return requests.get(
            `/qtyIncreaseRequest/dataByStatus?status=${status}`
        );

    },

    // ✅ APPROVE / REJECT SINGLE OR BULK
    processQtyIncreaseRequest: async (data) => {

        return requests.patch(
            `/qtyIncreaseRequest/process`,
            data
        );

    },


};

export default QtyIncreaseService;