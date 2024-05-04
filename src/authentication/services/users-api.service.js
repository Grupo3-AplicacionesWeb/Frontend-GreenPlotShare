import http from "../../shared/services/http-common.js";

export class UserApiService {
    getAll() {
        return http.get('/users');
    }

    getById(id) {
        return http.get(`/users/${id}`);
    }

    create(userData) {
        return http.post('/users', userData);
    }

    update(id, userData) {
        return http.put(`/users/${id}`, userData);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    findByEmail(email) {
        return http.get(`/users?email=${email}`);
    }
}
