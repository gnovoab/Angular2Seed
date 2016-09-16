
//Imports
import {Component, OnInit} from "@angular/core";
import {Team} from "./team";
import {Router} from "@angular/router";
import {TeamService} from "./team.service";

/**
 * Team class
 */
@Component({
    templateUrl: 'app/components/teams/teams.component.html'
})
export class TeamsComponent implements OnInit{

    //Fields
    listFilter: string = '';
    errorMessage: string;

    teams: Team[];
    selectedTeam: Team;


    /**
     * Constructor
     * @param router
     * @param teamService
     */
    constructor(private router: Router, private teamService: TeamService) { }


    /**
     * Init method
     */
    ngOnInit(): void {
        this.teamService.findAll()
            .subscribe(
                teams => this.teams = teams,
                error =>  this.errorMessage = <any>error);
    }

    editItem(team: Team):void{
        console.log(team);
    }


}
