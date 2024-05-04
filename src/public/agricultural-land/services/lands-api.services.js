import http from "../../../shared/services/http-common.js";
export class LandsApiService {
    getAll() {
        return http.get('/lands');
    }
    getById(id){
        return http.get(`/lands/${id}`);
    }
    getByUbication(ubicacion){
        return http.get(`/lands?ubicacion=${ubicacion}`);
    }



}