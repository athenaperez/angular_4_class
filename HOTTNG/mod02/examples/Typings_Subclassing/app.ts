interface Account {
    getId(): number;
    getOwnerName(): string;
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

class BaseAccount implements Account {
    private _id: number;
    private _owner: string;
    private _balance: number;

    constructor(id: number, owner: string, startBalance: number) {
        this._id = id;
        this._owner = owner;
        this._balance = startBalance;
    }

    getId(): number {
        return this._id;
    }
    getOwnerName(): string {
        return this._owner;
    }
    getBalance(): number {
        return this._balance;
    }
    deposit(amount: number): void {
        this._balance += amount;
    }
    withdraw(amount: number): void {
        this._balance -= amount;
    }
    toString(): string {
        return `<span>${this._id} - ${this._owner} - ${this._balance + 33333}</span>`;
    }
}
class Savings extends BaseAccount{
    ''
    toString() {
        return "<div>[Savings] " + super.toString() + "</div>";
    }
}
class Checking extends BaseAccount {
    toString() {
        return "<div>[Checking] " + super.toString() + "</div>";
    }
}

class Product {
    constructor(private idValue: number,
        private nameValue: string,
        private priceValue: number) {
        //no other code needed inside constructor body
    }
    getTotalCharges(): number {
        return this.unitPrice;
    }
   get id() { return this.idValue; }
   get name() { return this.nameValue; }
   get unitPrice() { return this.priceValue; }
   set id(value: number) { this.idValue = value; }
   set name(value: string) { this.nameValue = value; }
   set unitPrice(value: number) { this.priceValue = value;}
}

class SpecialityProduct extends Product {
    constructor(id: number, name: string, price: number, private tariffValue: number) {
        super(id, name, price);
    }
    get tariff(): number {
        return this.tariffValue;
    }
    set tariff(value: number) {
        this.tariffValue = value;
    }
    getTotalCharges() {
        return super.getTotalCharges() * this.tariff;
    }
}

var accounts = new Array<BaseAccount>();
accounts.push(new Checking(1, "Alice", 1000.0));
accounts.push(new Savings(2, "Alice", 500.0));
for (var item of accounts) {
    document.writeln(item.toString() + "<br/>");
}

