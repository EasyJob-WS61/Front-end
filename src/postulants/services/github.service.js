import http from '../../core/services/http-common'
class GitHubService{
    endPoint = "https://api.github.com/users";
    getRepositories(userName) {
        return http.get(`${this.endPoint}/${userName}/repos`);
    }
}

export default new GitHubService();
