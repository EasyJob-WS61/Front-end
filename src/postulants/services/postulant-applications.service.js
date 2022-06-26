import http from "../../core/services/http-common.js"

class PostulantApplicationsService {
    constructor() {
        this.endPoint = '/applications'
    }
    getByPostulantId(postulantId) {
        return http.get(`${this.endPoint}?postulantId=${postulantId}&_expand=announcement`)
    }
}

export default new PostulantApplicationsService();
