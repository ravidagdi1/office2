import requests from "./httpService";

const LocationServices = {

    getStore: async() => {
        return requests.get(`/store`)
    },
    addStore: async(body) => {
        return requests.post(`/store`, body)
    },
    updateStore: async(id,body) =>{
        return requests.put(`/store/${id}`,body)
    }

}

export default LocationServices;