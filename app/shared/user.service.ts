// user.service.ts
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

/**
 * User Service Class
 */
@Injectable()
export class UserService {

    //Fields
    private loginUrl = 'api/user/user.json';
    private loggedIn = false;

    /**
     * Constructor
     * @param http
     */
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('access_token');
    }

    /**
     * Login user
     * @param email
     * @param password
     * @returns {Promise<TResult>}
     */
    login(email: string, password: string): Promise<Boolean> {

        return this.http
            .get(this.loginUrl)
            .toPromise()
            .then(res => {
                if(res.ok){
                    localStorage.setItem('access_token', res.json().access_token);
                    this.loggedIn = true;
                }
                return res.ok;
            })
            .catch(this.handleError);
    }


    /**
     * Logout user
     */
    logout():void {
        localStorage.removeItem('access_token');
        this.loggedIn = false;
    }

    /**
     * Verify if user is logged in
     * @returns {boolean}
     */
    isLoggedIn():boolean {
        return this.loggedIn;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}