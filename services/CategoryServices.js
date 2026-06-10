import requests from "./httpService";

const CategoryServices = {
    getCategory: async () =>{
        return requests.get(`/category`);
    },
    updateCategory : async (id,body) =>{
        return requests.put(`/category/${id}`,body);
    },
    createCategory : async (body) =>{
        console.log(body)
        return requests.post(`/category`,body);
    },
    deleteCategory : async (id) =>{
        return requests.delete(`/category/${id}`);
    },
  
    getUnit: async  () =>{
        return requests.get(`/unit`);
    },

    updateUnit: async  (id,body) =>{
        return requests.put(`/unit/${id}`,body);
    },

    createUnit: async (body) => {
        return requests.post(`/unit`,body);
    },
    deleteUnit: async(id,body) =>{
        return requests.delete(`/unit/${id}`)
    }
}
export default CategoryServices;