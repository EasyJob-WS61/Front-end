import http from '../../core/services/http-common'

class ApplicantNotificationService{
    getAll(){
        return http.get("/notification-applicant");
    }
    getById(id) {
        return http.get(`/notification-applicant/${id}`);
    }
    getByAnnouncementId(id) {
        return http.get(`/notification-applicant/?announcement_id=${id}`);
    }
    create(data) {
        return http.post("/notification-applicant", data);
    }

    update(id, data) {
        return http.put(`/notification-applicant/${id}`, data);
    }

    delete(id) {
        return http.delete(`/notification-applicant/${id}`);
    }
}

export default new ApplicantNotificationService();