import http from "../../../shared/services/http-common.js";
export class CategoriesApiService {
    getAll() {
        return http.get('/land_categories');
    }
}