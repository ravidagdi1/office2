import requests from "./httpService";

const UniversalSearchServices = {
 universalSearch: async (data) => {
    console.log("search request", data);
    return requests.post("/universal/universal-search", data);
  },

}


export default UniversalSearchServices;