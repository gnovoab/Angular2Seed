
//Imports
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import {Team} from "./team";

/**
 * Class that handles team operations
 */
@Injectable()
export class TeamService {

    //Fields
    private teamUrl = 'api/teams/teams.json';

    /**
     * Constructor
     * @param _http
     */
    constructor(private _http: Http) { }

    /**
     * Retrieve teams
     * @returns teams
     */
    findAll(): Observable<Team[]> {
        return this._http.get(this.teamUrl)
            .map((response: Response) => <Team[]> response.json())
            // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    /**
     * Returns team by code given
     * @param code
     * @returns team
     */
    findById(code: string): Observable<Team> {
        return this.findAll()
            .map((teams: Team[]) => teams.find(t => t.code === code));
    }

    /**
     * Error handler
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}