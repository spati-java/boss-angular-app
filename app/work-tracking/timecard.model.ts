import {TimeEntry} from "./time-entry.model";
export class WorkTracking{
    private  id:number;
    public mboId:string;
    private projectId:string;


    constructor(id:number, mboId:string, projectId:string) {
        this.id = id;
        this.mboId = mboId;
        this.projectId = projectId;
    }
}