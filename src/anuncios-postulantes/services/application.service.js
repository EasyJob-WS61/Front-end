import http from "@/core/services/http-common";

class ApplicationService {
    resource = "/applications";

    getAll = () => {
        return http.get(this.resource);
    }
    create(dtoApplicant) {
        return http.post(this.resource, dtoApplicant);
    }
    getByPostulantAndAnnouncementId(postulantId, announcementId) {
        return http.get(this.resource+ "?postulantId="+postulantId+"&announcementId="+announcementId);
    }
}

export default new ApplicationService();
