import http from "@/core/services/http-common";

class ApplicantsService{
    resource = '/applicants';

    getAll() {
        return http.get(this.resource);
    }
    getById(id) {
        return http.get(`${this.resource}/${id}`);
    }
    create(createApplicantDto) {
        return http.post(this.resource, createApplicantDto);
    }
    update(id, updateApplicantDto) {
        return http.put(`${this.resource}/${id}`, updateApplicantDto);
    }
    delete(id) {
        return http.delete( `${this.resource}/${id}`);
    }
}

export default new ApplicantsService();

