describe('Loan Tests', function () {
   
    it('0 length loans must throw', function () {
        expect(function () { loan = new LoanCalculator(12000, 0, 0) }).toThrow();
    });

    it('0 amount loans must throw', function () {
        expect(function () { loan = new LoanCalculator(0, 0, 10) }).toThrow();
    });
   
    describe('payment', function () {
        var calc = new LoanCalculator(12000, 0.0, 1);
        it('zero interest payment',function () {expect(calc.payment).toEqual(1000.0) });
    });

   
    describe('months', function () {
        var calc = new LoanCalculator(12000, 0.0, 1);
        it('1 year=12 months', function () { expect(calc.months).toEqual(12) });
    });

    describe('payment', function () {
        calc = new LoanCalculator(53000, 7.625, 15);
        it('non zero interest payment', function () { expect(calc.payment).toBeCloseTo(495.09,2) });
    });

});