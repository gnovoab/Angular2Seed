
//Imports
import {PipeTransform, Pipe} from "@angular/core";
import {Team} from "./team";

/**
 * Team filter class
 */
@Pipe({
    name: 'teamFilter'
})
export class TeamFilterPipe implements PipeTransform {

    transform(value: Team[], filter: string): Team[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((team: Team) =>
            team.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
