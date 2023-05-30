export default class AuthService {
    static logged = false
    static userId
    static userRole

    static loginLogout() {
        this.logged = !this.logged
    }

    static isLogged() {
        return this.logged
    }

    static logout() {
        localStorage.removeItem('jwt')
        this.userId = null
        this.loginLogout()
    }

    static saveUserId(id) {
        this.userId = id
    }

    static getUserId() {
        return this.userId
    }

    static saveUserRole(role) {
        this.userRole = role
    }

    static getUserRole() {
        return this.userRole
    }

    static getAuthHeader() {
        const jwt = JSON.parse(localStorage.getItem('jwt'))
        if (jwt) {
            return { Authorization: 'Bearer ' + jwt.toString() }
        } else {
            return {}
        }
    }

    static getJwt() {
        return 'Bearer ' + localStorage.getItem('jwt').toString()
    }
}
