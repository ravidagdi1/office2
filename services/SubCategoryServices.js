import requests from "./httpService";

const SubCategoryServices = {
    getSubCategory: async () => {
        return requests.get(`/subcategory`);
    },
    getCategoryById: async (id) => {
        return requests.get(`/subcategory/${id}`);
    },
    updateSubCategory: async (id, body) => {
        return requests.put(`/subcategory/${id}`, body);
    },
        createSubCategory : async (body) => {
            console.log(body)
            return requests.post(`/subcategory`, body);
        },
            deleteSubCategory : async (id) => {
                return requests.delete(`/subcategory/${id}`);
            },
  
    
}
export default SubCategoryServices;