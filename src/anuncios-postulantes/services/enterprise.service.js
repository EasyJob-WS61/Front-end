import http from "@/core/services/http-common";

class EnterpriseService {
    resource = "/enterprises";
    create(createUtilityDto){
        return http.post(this.resource, createUtilityDto);
    }
    getAll = () => {
        return http.get(this.resource);
    }
    getByApplicantId = (id) => {
        return http.get(this.resource + "?applicantId=" + id);
    }
}

export default new EnterpriseService();
