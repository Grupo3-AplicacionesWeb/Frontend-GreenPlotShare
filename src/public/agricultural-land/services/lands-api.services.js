import http from "../../../shared/services/http-common.js";
export class LandsApiService {
    getAll() {
        return http.get('/lands');
    }



}