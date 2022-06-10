import http from '../../core/services/http-common'

class PostulantProfileService{
    getPostulantProfile(id){
        return http.get(`/postulants/${id}`);
    }
    getProjectsByPostulant(id){
        return http.get(`/projects/?postulant_id=${id}`);
    }
    deleteProjectByPostulant(id) {
        return http.delete(`/projects/${id}`);
    }
    update(id, data) {
        return http.patch(`/postulants/${id}`, data);
    }
}

export default new PostulantProfileService();
