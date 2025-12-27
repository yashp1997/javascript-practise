#!/bin/node

// adding variables for current funds
let equity;
let consHybrid;
let silver;
let gold;

equity = 71400;
consHybrid = 71200;
silver = 41550;
gold = 37700;

let currentTotal = equity + consHybrid + silver + gold;
console.log("Portfolio Value Before Rebalance: " + currentTotal);

function updatePortfolio(lumpsum) {
	let newTotal = currentTotal + lumpsum;
	console.log("Portfolio Value After Update: " + newTotal)
	let eqhb = newTotal * 33 / 100;
	let gs = newTotal * 17 / 100;
	let newEquity = eqhb - equity;
	let newHybrid = eqhb - consHybrid;
	let newSilver = gs - silver;
	let newGold = gs - gold;
	console.log("Equity: " + newEquity);
	console.log("Conservative Hybrid: " + newHybrid);
	console.log("Silver: " + newSilver);
	console.log("Gold: " + newGold);
}

updatePortfolio(100000);


