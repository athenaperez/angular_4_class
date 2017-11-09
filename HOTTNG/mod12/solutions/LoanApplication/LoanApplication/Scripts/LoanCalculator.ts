
export class LoanCalculator {
    public constructor(private _loan: number, private _rate: number, private  _years: number) {
        if (_loan <= 0) throw new Error();
        else if (_years <= 0) throw new Error();
    }

    get loan():number{
        return this._loan;
    }

    get rate(): number {
        return this._rate;
    }

    get years(): number {
        return this._years;
    }

    set loan(val:number){
        this._loan=val;
    }

    set rate(val:number) {
        this._rate=val;
    }

    set years(val:number) {
        this._years=val;
    }

    get months(): number {
        return this.years * 12;
    }
    get mRate(): number {
        return this.rate / 1200;
    }

    get payment(): number {
        if (this.mRate == 0) return this.loan / this.months;
        else return this.loan * this.mRate / (1.0 - Math.pow(1.0 + this.mRate, -this.months));
    }
}