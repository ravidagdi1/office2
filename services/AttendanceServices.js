import { data } from "jquery";
import requests from "./httpService";

const AttendanceServices = {
    checkIn: async (data) =>{
        return requests.post(`/attendance/checkIn`,data);
    },
    checkOut: async (data) =>{
        return requests.post(`/attendance/checkOut`,data);
    },
    desileFillUp: async (data) =>{
        return requests.post(`/attendance/desilefileUp`,data);
    },
    updateVehicle : async (id,body) =>{
        return requests.put(`/vehicle/${id}`,body);
    },
    addVehicle : async (body) =>{
        console.log(body)
        return requests.post(`/vehicle`,body);
    },
    deleteVehicle : async (id) =>{
        return requests.delete(`/vehicle/${id}`);
    },
    getAttendaceByDriveId : async (id) =>{
        return requests.get(`/attendance/driver/${id}`);
    },
    myAttendance : async () =>{
        return requests.get(`/attendance/my/attendance`);
    },
    attendenceReport : async (body) =>{
        console.log(body)
        return requests.post(`/attendance/report`,body);
    },
      pdfReport : async (body) =>{
        console.log(body)
        return requests.post(`/attendance/pdfreport`,body);
    },

   

  
}
export default AttendanceServices;