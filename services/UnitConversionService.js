import requests from "./httpService";


const UnitConversionServices = {
    getAllUnit: async () => {
        return requests.get(`/unitConversion`);
    },

    createConversion: async (body) => {
        return requests.post(`/unitConversion`, body);
    },

    byPartAndUnit: async (body) => {
        return requests.get(`/unitConversion/byPartAndUnit`, {
            params: body, // Axios automatically encodes this as ?masterPart=...&fromUnit=...
        });
    },

    deleteConversion: async (id) => {
        return requests.delete(`/unitConversion/${id}`);
    },

}

export default UnitConversionServices;