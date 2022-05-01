import http from "@/core/services/http-common";

class UtilitiesService {
    resource = "/abilities";

    getAll() {
        return http.get(this.resource);
    }
    getById(id) {
        return http.get(`${this.resource}/${id}`);
    }
    create(createUtilityDto) {
        return http.post(this.resource, createUtilityDto);
    }
    update(id, updateUtilityDto) {
        return http.put(`${this.resource}/${id}`, updateUtilityDto);
    }
    delete(id) {
        return http.delete( `${this.resource}/${id}`);
    }
}

export default new UtilitiesService();
