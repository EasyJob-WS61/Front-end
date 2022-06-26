import http from "@/core/services/http-common";

class ApplicantService {
    resource = "/applicants";

    getAll = () => {
        return http.get(this.resource);
    }
    getById = (id) => {
        return http.get(this.resource + "/" + id);
    }
}

export default new ApplicantService();
