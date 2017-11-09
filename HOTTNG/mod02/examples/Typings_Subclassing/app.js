var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseAccount = (function () {
    function BaseAccount(id, owner, startBalance) {
        this._id = id;
        this._owner = owner;
        this._balance = startBalance;
    }
    BaseAccount.prototype.getId = function () {
        return this._id;
    };
    BaseAccount.prototype.getOwnerName = function () {
        return this._owner;
    };
    BaseAccount.prototype.getBalance = function () {
        return this._balance;
    };
    BaseAccount.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    BaseAccount.prototype.withdraw = function (amount) {
        this._balance -= amount;
    };
    BaseAccount.prototype.toString = function () {
        return "<span>" + this._id + " - " + this._owner + " - " + (this._balance + 33333) + "</span>";
    };
    return BaseAccount;
}());
var Savings = (function (_super) {
    __extends(Savings, _super);
    function Savings() {
        _super.apply(this, arguments);
    }
    Savings.prototype.toString = function () {
        return "<div>[Savings] " + _super.prototype.toString.call(this) + "</div>";
    };
    return Savings;
}(BaseAccount));
var Checking = (function (_super) {
    __extends(Checking, _super);
    function Checking() {
        _super.apply(this, arguments);
    }
    Checking.prototype.toString = function () {
        return "<div>[Checking] " + _super.prototype.toString.call(this) + "</div>";
    };
    return Checking;
}(BaseAccount));
var Product = (function () {
    function Product(idValue, nameValue, priceValue) {
        this.idValue = idValue;
        this.nameValue = nameValue;
        this.priceValue = priceValue;
        //no other code needed inside constructor body
    }
    Product.prototype.getTotalCharges = function () {
        return this.unitPrice;
    };
    Object.defineProperty(Product.prototype, "id", {
        get: function () { return this.idValue; },
        set: function (value) { this.idValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () { return this.nameValue; },
        set: function (value) { this.nameValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "unitPrice", {
        get: function () { return this.priceValue; },
        set: function (value) { this.priceValue = value; },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var SpecialityProduct = (function (_super) {
    __extends(SpecialityProduct, _super);
    function SpecialityProduct(id, name, price, tariffValue) {
        _super.call(this, id, name, price);
        this.tariffValue = tariffValue;
    }
    Object.defineProperty(SpecialityProduct.prototype, "tariff", {
        get: function () {
            return this.tariffValue;
        },
        set: function (value) {
            this.tariffValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SpecialityProduct.prototype.getTotalCharges = function () {
        return _super.prototype.getTotalCharges.call(this) * this.tariff;
    };
    return SpecialityProduct;
}(Product));
var accounts = new Array();
accounts.push(new Checking(1, "Alice", 1000.0));
accounts.push(new Savings(2, "Alice", 500.0));
for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
    var item = accounts_1[_i];
    document.writeln(item.toString() + "<br/>");
}
//# sourceMappingURL=app.js.map