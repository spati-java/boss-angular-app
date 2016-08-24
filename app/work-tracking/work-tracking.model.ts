export class WorkTracking{
    id:number;
    projectId:string;
    mboId:string;

    constructor(id:number,projectId:string, mboId:string) {
        this.id=id;
        this.projectId = projectId;
        this.mboId = mboId;
    }
}