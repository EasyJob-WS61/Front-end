import http from "@/core/services/http-common";

class AnnouncementService{
    resource = "/announcements";
    create(createUtilityDto){
        return http.post(this.resource, createUtilityDto);
    }
    getAll = () => {
        return http.get(this.resource);
    }
    getById = (id) => {
        return http.get(this.resource + "/" + id);
    }
}

export default new AnnouncementService();