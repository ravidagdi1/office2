import requests from "./httpService";

const CastingServics = {
    
    AddCasting : async (body) =>{
        console.log(body)
        return requests.post(`/casting`,body);
    },
    CastingReport : async (body) =>{
        console.log("castingbody",body)
        return requests.post(`/casting/report`,body);
    },
    CastingDigitalReport : async (body) =>{
        console.log("castingbody",body)
        return requests.post(`/casting/digitalreport`,body);
    },

    RequistionImages:async () =>{
        console.log("castingbody","wroking imageee")
        return requests.get(`/casting/report`);
    },

    RequistionDeleteImages: async (filename) => {

        return requests.delete(`/casting/report/${filename}`);
      },

      RequstionImageDownload: async () => {
        console.log("Requisition download API called...");
        return await requests.get('/casting/report/download-images', {
          responseType: 'blob'
        });
      },

     
  
}
export default CastingServics;