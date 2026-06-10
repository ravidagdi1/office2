import requests from "./httpService";

const AccountServices = {

  getAccountDataBySearch: async (filters = {}) => {

    return requests.post(`/accounts/search`, {

      // ✅ PO
      poNumber: filters.po?.trim() || "",

      // ✅ SUPPLIER
      supplier: filters.supplier || "",

      // ✅ STORE
      store: filters.store || "",

      // ✅ CREATED DATE RANGE
      fromDate: filters.fromDate || "",
      toDate: filters.toDate || "",

      // ✅ CREATED RANGE SLIDER
      createdMonthRange: filters.createdMonthRange || 0,

      // ✅ BILLING RANGE SLIDER
      billingMonthRange: filters.billingMonthRange || 0,

      // ✅ BILLING DATE RANGE
      billingFromDate: filters.billingFromDate || "",
      billingToDate: filters.billingToDate || "",

      // ✅ AMOUNT
      amount: filters.amount || "",

      // ✅ AMOUNT CRITERIA
      amountCriteria: filters.amountCriteria || "",

      // ✅ BILL NO
      billNo: filters.billNo?.trim() || ""

    });
  },

  getBillingDataBySearch: async (filters = {}) => {

    return requests.post(`/accounts/billingsearch`, {

      // ✅ ADD THIS LINE
      viewType: filters.viewType || "",

      poNumber: filters.po?.trim() || "",
      supplier: filters.supplier || "",
      store: filters.store || "",
      fromDate: filters.fromDate || "",
      toDate: filters.toDate || "",
      createdMonthRange: filters.createdMonthRange || 0,
      billingMonthRange: filters.billingMonthRange || 0,
      billingFromDate: filters.billingFromDate || "",
      billingToDate: filters.billingToDate || "",
      amount: filters.amount || "",
      amountCriteria: filters.amountCriteria || "",
      billNo: filters.billNo?.trim() || ""
    });
  },

  getMRVDataByTheMRVId: async (mrvIds) => {
    return requests.post(`/accounts/items-by-mrv`, {
      mrvIds
    });
  },

  getItemsByRequisitionId: async (requisitionId) => {
    return requests.post(`/accounts/items-by-requisition`, {
      requisitionId
    });
  },

  getAllPOPaymentDataBySearch: async (filters = {}) => {

  return requests.post(`/accounts/all-po-payment-table`, {

     search: filters.search || "",

    page: filters.page || 1,
    limit: filters.limit || 50,

    viewType: filters.viewType || "",
    poStatus: filters.poStatus || "",

    poNumber: filters.po?.trim() || "",

    supplier: filters.supplier || "",
    store: filters.store || "",

    fromDate: filters.fromDate || "",
    toDate: filters.toDate || "",

    createdMonthRange: filters.createdMonthRange || 0,

    billingMonthRange: filters.billingMonthRange || 0,

    billingFromDate: filters.billingFromDate || "",
    billingToDate: filters.billingToDate || "",

    amount: filters.amount || "",
    amountCriteria: filters.amountCriteria || "",

    billNo: filters.billNo?.trim() || ""
  });
},

}


export default AccountServices;

