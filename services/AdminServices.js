import requests from "./httpService";

const AdminServices = {

    getMyProfile: async () => {
        return requests.get(`/admin/profile`);
    },
    updateMe: async (body) => {
        return requests.patch(`/admin/updateMe`, body);
    },
    createAdmin: async (body) => {
        console.log(body)
        return requests.post(`/admin/`, body);
    },
    //dashboard : async () =>{
    //return requests.get(`/admin/dashboard`);
    //},
    getAllAdmin: async () => {
        return requests.get(`/admin`);
    },
    login: async (body) => {
        return requests.post(`/users/login`, body);
    },
    signUp: async (body) => {
        return requests.post(`/users/signup`, body);
    },
    logOut: async () => {
        return requests.get(`/users/logout`);
    },
    updateUser: async (id, body) => {
        return requests.put(`/users/${id}`, body);
    },
    deleteAdmin: async (id, body) => {
        return requests.delete(`/users/${id}`, body);
    },
    updatePassword: async (body) => {
        return requests.patch(`/users/updateMyPassword`, body);
    },
    getUsersByStores: (storeIds) => {
        console.log("getuserssss")
        return requests.post(`/users/users-by-stores`, { storeIds });
    },

    dashboard: async () => {
        return requests.get(`/dashboard`)
    },
    dashboardPO: async () => {
        return requests.get(`/dashboard/PO`)
    },

    sendPasswordOtp: async (body) => {
        return requests.post(`/users/send-otp`, body)
    },

    resetPasswordByOtp: async (body) => {
        return requests.post(`/users/verify-otp-password`, body)
    }

}


export default AdminServices;