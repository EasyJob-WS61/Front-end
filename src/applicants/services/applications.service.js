import http from "@/core/services/http-common";

class ApplicationsService {
    resource = "/applications";

    getAll() {
        return http.get(this.resource);
    }
    getById(id) {
        return http.get(`${this.resource}/${id}`);
    }
    getByApplicantAndAnnouncementId(applicantId, announcementId) {
        return http.get(`${this.resource}?applicantId=${applicantId}&announcementId=${announcementId}&_expand=postulant`);
    }
    create(createApplicationDto) {
        return http.post(this.resource, createApplicationDto);
    }
    update(id, updateApplicationDto) {
        return http.put(`${this.resource}/${id}`, updateApplicationDto);
    }
    delete(id) {
        return http.delete( `${this.resource}/${id}`);
    }
}

export default new ApplicationsService();
