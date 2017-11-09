"use strict";
var LoanCalculator = (function () {
    function LoanCalculator(_loan, _rate, _years) {
        this._loan = _loan;
        this._rate = _rate;
        this._years = _years;
        if (_loan <= 0)
            throw new Error();
        else if (_years <= 0)
            throw new Error();
    }
    Object.defineProperty(LoanCalculator.prototype, "loan", {
        get: function () {
            return this._loan;
        },
        set: function (val) {
            this._loan = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanCalculator.prototype, "rate", {
        get: function () {
            return this._rate;
        },
        set: function (val) {
            this._rate = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanCalculator.prototype, "years", {
        get: function () {
            return this._years;
        },
        set: function (val) {
            this._years = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanCalculator.prototype, "months", {
        get: function () {
            return this.years * 12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanCalculator.prototype, "mRate", {
        get: function () {
            return this.rate / 1200;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoanCalculator.prototype, "payment", {
        get: function () {
            if (this.mRate == 0)
                return this.loan / this.months;
            else
                return this.loan * this.mRate / (1.0 - Math.pow(1.0 + this.mRate, -this.months));
        },
        enumerable: true,
        configurable: true
    });
    return LoanCalculator;
}());
exports.LoanCalculator = LoanCalculator;
//# sourceMappingURL=LoanCalculator.js.map