import requests from "./httpService";

const PaymentWorkflowService = {

  // =========================
  // 🔥 BILLING APPROVE
  // =========================
  billingApprove: async (data, onUploadProgress) => {
    return requests.post(`/payment/billing-approve`, data, {
      onUploadProgress
    });
  },

  // =========================
  // 🔥 UPDATE BILLING DETAILS
  // =========================
  updateBillingDetails: async (data) => {
    return requests.patch(`/payment/update-billing`, data);
  },

  getBillingHistory: async (poId) => {
    return requests.get(`/payment/history/${poId}`);
  },


  // =========================
  // ✅ PO SEND BACK
  // =========================
  poSendBack: async (data) => {
    return requests.patch(
      `/payment/po-send-back`,
      data
    );
  },

  // =========================
  // ✅ PO APPROVE
  // =========================
  poApprove: async (data) => {
    return requests.patch(
      `/payment/po-approve`,
      data
    );
  },

  // =========================
  // ✅ HO SEND BACK (SINGLE + BULK)
  // =========================
  hoSendBack: async (data, id = null) => {
    return requests.patch(
      id
        ? `/payment/ho-send-back/${id}`
        : `/payment/ho-send-back`,
      data
    );
  },

  // =========================
  // ✅ HO APPROVE (SINGLE + BULK)
  // =========================
  hoApprove: async (data, id = null) => {
    return requests.patch(
      id
        ? `/payment/ho-approve/${id}`
        : `/payment/ho-approve`,
      data
    );
  },

  // =========================
  // 🔁 ACCOUNTS SEND BACK
  // =========================
  accountsSendBack: async (data) => {
    return requests.patch(
      `/payment/accounts-send-back`,
      data
    );
  },

  // =========================
  // 💰 ACCOUNTS PAYMENT
  // =========================
  markPaymentPaid: async (data) => {
    return requests.patch(
      `/payment/mark-payment-paid`,
      data
    );
  },

  // =========================
  // 🔍 SEARCH / LIST (OPTIONAL - LIKE ACCOUNT SERVICE)
  // =========================
  getPaymentWorkflowBySearch: async (filters = {}) => {

    return requests.post(`/payment/search`, {

      // ✅ PO
      poNumber: filters.po?.trim() || "",

      // ✅ SUPPLIER
      supplier: filters.supplier || "",

      // ✅ STATUS
      status: filters.status || "",

      // ✅ DATE RANGE
      fromDate: filters.fromDate || "",
      toDate: filters.toDate || "",

      // ✅ AMOUNT
      amount: filters.amount || "",
      amountCriteria: filters.amountCriteria || "",

      // ✅ BILL NO
      billNo: filters.billNo?.trim() || ""

    });
  }

};

export default PaymentWorkflowService;