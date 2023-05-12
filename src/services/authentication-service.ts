export default class AutheticationService{

    static isAuthenticated: boolean = false;

    static login(username: string, password: string): Promise<boolean>{
        const isAuthenticated = (username === 'muriel' && password ==='AllahSeul');

        return new Promise((resolve) => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated);
            }, 1000);
        });
    }
}