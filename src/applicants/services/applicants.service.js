import http from '../../core/services/http-common'

class ApplicantsService{
    resource = '/applicants';

    getAll() {
        return http.get(this.resource);
    }
    getById(id) {
        return http.get(`${this.resource}/${id}`);
    }
    getByEmail(email) {
        return http.get(`${this.resource}?email=${email}`);
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

export default new ApplicantsService()