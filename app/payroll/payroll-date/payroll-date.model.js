"use strict";
var PayrollDate = (function () {
    function PayrollDate(id, date, cutoff, note, options) {
        this.id = id;
        this.date = date;
        this.cutoff = cutoff;
        this.note = note;
        this.options = options;
    }
    return PayrollDate;
}());
exports.PayrollDate = PayrollDate;
//# sourceMappingURL=payroll-date.model.js.map