import http from '../../core/services/http-common'
class ProjectsService{
    getById(id) {
        return http.get(`/projects/${id}`);
    }
    getEvidences(id) {
        return http.get(`/evidences?project_id=${id}`);
    }
}

export default new ProjectsService();
