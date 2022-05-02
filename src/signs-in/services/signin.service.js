import http from "@/core/services/http-common";

class RegisterService{
    resource = "/announcements";
    create(createUtilityDto){
        return http.post(this.resource, createUtilityDto);
    }
}

export default new RegisterService();