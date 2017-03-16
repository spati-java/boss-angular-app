export  class Policy {
    name:string;
    description:string;
    priority:number;
    target:string;
    condition:string;


    constructor(name:string, description:string, priority:number, target:string, condition:string) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.target = target;
        this.condition = condition;
    }
}