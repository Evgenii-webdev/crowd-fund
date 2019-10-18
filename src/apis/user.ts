
interface UserApi {
    Login: (user: string, pwd: string) => Promise<any>;
}

const apis: UserApi = {
    Login: async (username: string, password: string) => {
        setTimeout(() => {
            if (!username || !password) throw ('username or password is incorrect');
            console.log(username, password);
            return {};
        }, 10);
    }
}

export default apis;