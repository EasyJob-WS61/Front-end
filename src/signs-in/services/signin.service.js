import http from "@/core/services/http-common";

class RegisterService{
    resource = "/sigin/solicitante";
    create(createUtilityDto){
        return http.post(this.resource, createUtilityDto);
    }
}

export default new RegisterService();