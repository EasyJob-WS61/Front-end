import http from '../../core/services/http-common'

class NotificationService{
    getAll(){
        return http.get("/notifications");
    }
    getById(id) {
        return http.get(`/notifications/${id}`);
    }

    getByCustomerIdAndTypeNotification(id) {
        return http.get(`/notifications?type=postulant&customerId=${id}`);
    }

    create(data) {
        return http.post("/notifications", data);
    }

    update(id, data) {
        return http.put(`/notifications/${id}`, data);
    }

    delete(id) {
        return http.delete(`/notifications/${id}`);
    }
}

export default new NotificationService();
