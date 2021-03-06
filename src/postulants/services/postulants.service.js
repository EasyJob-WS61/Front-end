import http from '../../core/services/http-common'
class PostulantsService{
    getAll(){
        return http.get("/postulants");
    }
    getById(id) {
        return http.get(`/postulants/${id}`);
    }
    getByEmail(email) {
        return http.get(`/postulants?email=${email}`);
    }
    create(data) {
        return http.post("/postulants", data);
    }

    update(id, data) {
        return http.patch(`/postulants/${id}`, data);
    }

    delete(id) {
        return http.delete(`/postulants/${id}`);
    }
}


export default new PostulantsService();