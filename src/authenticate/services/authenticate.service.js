import http from "@/core/services/http-common";

class AuthenticateService {
    signUp(userDto) {
        return http.post("/signup", userDto);
    }
    signIn(userDto) {
        return http.post("/login", userDto);
    }
}

export default new AuthenticateService();
