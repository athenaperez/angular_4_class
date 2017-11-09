"use strict"

function calculateMonthlyPmt(loanAmount, annualRate, loanLength){
  var monthlyRate = annualRate / 1200;
  var numPayments = loanLength * 12;

  var pmt = ((loanAmount * monthlyRate) / (1-Math.pow(1+monthlyRate, - numPayments))).toFixed(2);
  return pmt;
}

var amt = 53000;
var annualRate = 7.625;
var loanLength = 15;

var monthlyPmt = calculateMonthlyPmt(53000, 7.625, 15);


console.log('A loan of ' + amt + ' at ' + annualRate + '% over ' + loanLength + ' years will have a monthly payment of ' + monthlyPmt);