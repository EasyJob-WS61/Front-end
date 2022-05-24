import http from '../../core/services/http-common'

class CustomersService {
    resource = '/announcements';

    getAll() {
        return http.get(this.resource);
    }
    getById(id) {
        return http.get(`${this.resource}/${id}`);
    }
    getByApplicantId(id) {
        return http.get(`${this.resource}?applicantId=${id}`);
    }
    create(createAnnouncementDto) {
        return http.post(this.resource, createAnnouncementDto);
    }
    update(id, updateAnnouncementDto) {
        return http.put(`${this.resource}/${id}`, updateAnnouncementDto);
    }
    delete(id) {
        return http.delete( `${this.resource}/${id}`);
    }
}

export default new CustomersService();
