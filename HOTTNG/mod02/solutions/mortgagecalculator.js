"use strict"

let calculateMonthlyPmt= (loanAmount, annualRate, loanLength)=>{
  const monthlyRate = annualRate / 1200;
  const numPayments = loanLength * 12;

  const pmt = ((loanAmount * monthlyRate) / (1-Math.pow(1+monthlyRate, - numPayments))).toFixed(2);
  return pmt;
};

let mPmt = calculateMonthlyPmt(53000, 7.625, 15);

console.log(`A loan of ${amt} at ${annualRate}% over ${loanLength} years
  will have a monthly payment of ${mPmt}`);
