import http from "../../../shared/services/http-common.js";
export class typeApiServices {
    getAll() {
        return http.get('/types');
    }
}