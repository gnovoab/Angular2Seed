// user.service.ts
import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private loginUrl = 'api/user/user.json';
    private loggedIn = false;


    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

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


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



    //
    // login(email, password) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //
    //     return this.http
    //         .post(
    //             '/login',
    //             JSON.stringify({ email, password }),
    //             { headers }
    //         )
    //         .map(res => res.json())
    //         .map((res) => {
    //             if (res.success) {
    //                 localStorage.setItem('auth_token', res.auth_token);
    //                 this.loggedIn = true;
    //             }
    //
    //             return res.success;
    //         });
    // }
    //
    // // login2(username, password) {
    // //     let headers = new Headers();
    // //     headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // //     headers.append("Authorization", 'Basic ' + btoa(username + ":" + password));
    // //
    // //     // Parameters obj-
    // //     let params: URLSearchParams = new URLSearchParams();
    // //     params.set('username', username);
    // //     params.set('password', password);
    // //     params.set('grant_type', 'password');
    // //
    // //
    // //     return this.http.get('/login', {
    // //         headers: headers,
    // //         search: params
    // //     })
    // //         .map(res => res.json())
    // //         .map((res) => {
    // //             if (res.success) {
    // //                 localStorage.setItem('auth_token', res.auth_token);
    // //                 this.loggedIn = true;
    // //             }
    // //
    // //             return res.success;
    // //         });
    // //
    // //
    // //
    // //
    // // }


    logout() {
        localStorage.removeItem('access_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

}