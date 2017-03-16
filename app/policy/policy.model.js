"use strict";
var Policy = (function () {
    function Policy(name, description, priority, target, condition) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.target = target;
        this.condition = condition;
    }
    return Policy;
}());
exports.Policy = Policy;
//# sourceMappingURL=policy.model.js.map