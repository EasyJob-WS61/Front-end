import http from '../../core/services/http-common'
class ProjectsService{
    getById(id) {
        return http.get(`/projects/${id}`);
    }
    getEvidences(id) {
        return http.get(`/evidences?project_id=${id}`);
    }
    addProject(project) {
        return http.post('/projects', project);
    }
    addEvidence(evidence) {
        return http.post('/evidences', evidence);
    }
}

export default new ProjectsService();
