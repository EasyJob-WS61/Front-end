import http from '../../core/services/http-common'
 class postulantsChatService{
     getAll(){
         return http.get("/chats");
     }
     getById(id) {
         return http.get(`/chats/${id}`);
     }
     getByApplicantId(id){
         return http.get(`/chats/?applicant_id=${id}`);
     }
     getByPostulantId(id){
         return http.get(`/chats/?postulant_id=${id}`);
     }
     create(data) {
         return http.post("/chats", data);
     }

     update(id, data) {
         return http.put(`/chats/${id}`, data);
     }

     delete(id) {
         return http.delete(`/chats/${id}`);
     }
 }

export default new postulantsChatService();