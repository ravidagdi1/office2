import requests from "./httpService";

const UserServices = {

    getAllUser : async () =>{
   
        return requests.get(`/users/`);
    },
    getMyProfile : async () => {
        return requests.get('/users/me')
    },
    
    updateUser : async (id,body) =>{
        return requests.put(`/users/${id}`,body);
    },   

    getContactDetail : async () =>{
        return requests.get(`/app/contact`);
    },
    updateContactDetail : async (body) =>{
        return requests.patch(`/app/contact`,body);
    },
    deleteUser : async (id) =>{
        return requests.delete(`/users/${id}`)
    },
    
    getStoreDriver: async(id) => {
        return requests.get(`/users/store/${id}`)
    },


}

export default UserServices;