import requests from "./httpService";

const ProductServices = {

    AddProduct: async (body) => {
        return requests.post(`/masterlist`, body);
    },

    AddCategory: async (body) => {
        return requests.post(`/category`, body);
    },

    getAllCategory: async () => {
        return requests.get(`/category`);
    },

    UpdateCategory: async (id, body) => {
        return requests.put(`/category/${id}`, body);
    },
    deleteCategory: async (id) => {
        return requests.delete(`/category/${id}`);
    },

    getAllProduct: async () => {
        return requests.get(`/masterlist`);
    },

    getAllProductByCateory: async () => {
        return requests.get(`/masterlist/getMasterListByCategory`);
    },

    getDirectiveReoprtAll: async () => {
        return requests.get(`/masterlist/getDirectiveReoprt`);
    },

    getIndigoReportAll: async ({ page = 1, limit = 50, search = "" } = {}) => {
        return requests.get(`/masterlist/getIndigoReport`, {
            params: { page, limit, search },
        });
    },
    AddInventory: async (body) => {
        console.log(body)
        return requests.post(`/inventory`, body)
    },

    UpdateInventory: async (id, body) => {
        console.log(id, body)
        return requests.put(`/inventory/${id}`, body)
    },

    updateProduct: async (id, body) => {
        return requests.put(`/masterlist/${id}`, body);
    },
    deleteProduct: async (id) => {
        return requests.delete(`/product/${id}`);
    },
    getInventory: async (store) => {
        return requests.get(`/inventory?query=${store}`);
    },
    //getDirectiveReoprt: async =>{
    //return requests.get(`/inventory/getDirectiveReoprt`);
    //},
    getDesileInventory: async (store) => {
        return requests.get(`/inventory/desiel/inventory?query=${store}`);
    },

    getallInventoryByMasterItem: async (masterId) => {
        return requests.get(`/inventory/masterItem?query=${masterId}`);
    },
    getAllStore: async () => {
        return requests.get(`/store`);
    },

    updateStore: async (id, body) => {
        return requests.put(`/store/${id}`, body);
    },

    bulkUpload: async (body) => {
        return requests.post(`/masterlist/import-excel`, body);
    }

}
export default ProductServices;