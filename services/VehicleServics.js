import requests from "./httpService";

const VehicleServics = {

    AddCategory: async (body) => {
        console.log(body)
        return requests.post(`/vehiclecat`, body);
    },

    getAllCategory: async () => {
        return requests.get(`/vehiclecat`);
    },


    UpdateCategory: async (id, body) => {
        return requests.put(`/vehiclecat/${id}`, body);
    },
    deleteCategory: async (id) => {
        return requests.delete(`/vehiclecat/${id}`);
    },
    getVehicle: async () => {
        return requests.get(`/vehicle`);
    },
    getVehicleByStatus: async (filters) => {
        return requests.post(`/vehicle/filter`, filters);
    },
    getStoreVehicle: async (id) => {
        console.log(id)
        return requests.get(`/vehicle/store/${id}`);
    },
    updateVehicle: async (id, body) => {
        return requests.put(`/vehicle/${id}`, body);
    },
    addVehicle: async (body) => {
        console.log(body)
        return requests.post(`/vehicle`, body);
    },
    deleteVehicle: async (id) => {
        return requests.delete(`/vehicle/${id}`);
    },

}
export default VehicleServics;