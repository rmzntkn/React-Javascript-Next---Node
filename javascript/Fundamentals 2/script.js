"use strict";

// function logger() {
// 	console.log("My name is Ramazan");
// }

// logger();

// function fruitProcessor(apple, orange) {
// 	console.log(apple, orange);
// 	const juice = `${apple} apple and  ${orange} orange are mixed`;
// 	return juice;
// }

// fruitProcessor(3, 5);

// const fruitJuice = fruitProcessor(3, 5);
// console.log(fruitJuice);

//function declaration
// function calcAge(birthYear) {
// 	return 2021 - birthYear;
// }

// const age1 = calcAge(1995);

// //function expression
// const calcAge2 = function (birthYear) {
// 	return 2021 - birthYear;
// };
// const age2 = calcAge2(2001);

// //arrow function
// const calcAge3 = (birthYear) => 2021 - birthYear;
// console.log(calcAge3(1998));

// console.log(age1, age2);

// const yearsLeftRetirement = (birthYear, firstName) => {
// 	const age = 2021 - birthYear;
// 	const leftYear = 65 - age;
// 	return `${firstName} will be retired in ${leftYear} years`;
// };

// console.log(yearsLeftRetirement(1995, "Ramazan"));

// function cutPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
// 	const applePiece = cutPieces(apple);
// 	const orangePiece = cutPieces(orange);

// 	const juice = `${applePiece} apple and  ${orangePiece} orange are mixed`;
// 	return juice;
// }

// console.log(fruitProcessor(3, 5));

// const koalaScore = 280;
// const dolphinScore = 290;

// const calcAverage = (score) => score / 3;

// const koalaAverage = calcAverage(koalaScore);

// const dolphinAverage = calcAverage(dolphinScore);

// function checkWinner() {
// 	if (koalaAverage > dolphinAverage) {
// 		console.log(`Koalas win ${koalaAverage} vs ${dolphinAverage}`);
// 	} else {
// 		console.log(`Dophins win ${dolphinAverage} vs ${koalaAverage}`);
// 	}
// }

// checkWinner();

///////////////           ARRAYS         //////////////////

// const calcAge = (birthYear) => 2021 - birthYear;

// const years = [1995, 1998, 2001];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);

// function calcTip(bill) {
// 	if (bill > 50 && bill < 300) {
// 		const tip = bill * 0.15;
// 		return tip;
// 	} else {
// 		const tip = bill * 0.2;
// 		return tip;
// 	}
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips, bills);

///////////////          OBJECTS         //////////////////

// const ramazan = {
// 	firstName: "Ramazan",
// 	lastName: "Tekin",
// 	age: 2021 - 1995,
// 	job: "web developer",
// 	friend: ["Melo", "Mesut", "Balcavus", "Ali"],

// 	calcBirtyear: function () {
// 		return 2021 - this.age;
// 	},
// };
// console.log(ramazan.calcBirtyear());
// const input = "Name";
// console.log(ramazan["first" + input]);
// console.log(ramazan.lastName);

// const webinput = prompt("Text what do wanna learn");

// console.log(ramazan[webinput]);
// console.log(ramazan.webinput);

// console.log(
// 	`Ramazan's frinds are ${ramazan.friend} and best friend is ${ramazan.friend[3]}`
// );

////////////////    THIS      ////////////
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

// const ramazan = [
// 	"Ramazan",
// 	"Tekin",
// 	2021 - 1995,
// 	"web developer",
// 	["Melo", "Mesut", "Balcavus", "Ali"],
// 	true,
// ];
// const types = [];

// for (let i = 0; i < ramazan.length; i++) {
// 	console.log(ramazan[i]);
// 	//types[i] = typeof ramazan[i];
// 	types.push(typeof ramazan[i]);
// }

// console.log(types);

// console.log("Only String");
// for (let i = 0; i < ramazan.length; i++) {
// 	if (typeof ramazan[i] !== "string") continue;
// 	console.log(ramazan[i]);
// }

// console.log("Numbers");
// for (let i = 0; i < ramazan.length; i++) {
// 	if (typeof ramazan[i] === "number") continue;
// 	console.log(ramazan[i]);
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`WHILE: Lifting weights repetition ${rep}`);
// 	rep++;
// }

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`WHILE: Lifting weights repetition ${rep}`);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}`);
// 	dice = Math.trunc(Math.random() * 6) + 1;
// 	if (dice === 6) console.log("Loop is about to end...");
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
// 	if (bill > 50 && bill < 300) {
// 		return bill * 0.15;
// 	} else {
// 		return bill * 0.2;
// 	}
// };

// for (let i = 0; i < bills.length; i++) {
// 	const tip = calcTip(bills[i]);
// 	tips.push(tip);
// 	totals.push(tip + bills[i]);
// }
// console.log(tips);
// console.log(totals);
const forecasted = [17, 21, 23];

const printForecast = function (arr) {
	var tmp = "";
	for (let i = 0; i < arr.length; i++)
		tmp = tmp + arr[i] + "C in " + (i + 1) + " days ... ";
	console.log(tmp);
};

printForecast(forecasted);
