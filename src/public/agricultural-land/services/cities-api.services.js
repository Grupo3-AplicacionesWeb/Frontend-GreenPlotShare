import http from "../../../shared/services/http-common.js";
export class CitiesApiServices{
    getAll() {
        return http.get('/cities');
    }
}