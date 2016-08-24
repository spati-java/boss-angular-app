"use strict";
var LineItem = (function () {
    function LineItem(invoiceId, startDate, endDate, type, description, quantity, unit, amount, hold) {
        this.invoiceId = invoiceId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.description = description;
        this.quantity = quantity;
        this.unit = unit;
        this.amount = amount;
        this.hold = hold;
    }
    return LineItem;
}());
exports.LineItem = LineItem;
//# sourceMappingURL=line-item.model.js.map