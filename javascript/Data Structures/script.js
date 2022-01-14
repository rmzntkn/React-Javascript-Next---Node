'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be in ${address} on ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: '1148 Golden Pond Ct',
  starterIndex: 1,
  mainIndex: 2,
});

const newMenu = [...restaurant.mainMenu, 'Gnocci', ...restaurant.starterMenu];
console.log(newMenu);
const ramazan = 'ramazan';
const tekin = [...ramazan, 'tekin'];
console.log(tekin);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //[] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //23 7

//nested
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //11 23

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {
  foundedIn: 1998,
  restaurant,
  founder: 'Tutergiella',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Rekinalla';

console.log(restaurantCopy.name);
console.log(restaurant.name);

// const arr = [2, 3, 4];
// //arr = [5, 6, 7];   // changes values
// const a = arr[0];
// console.log(a);
// const b = arr[1];
// console.log(b);
// const c = arr[2];
// console.log(c);
// //arr = [5, 6, 7];   // NOT change values

// const [x, y, z] = arr;
// console.log(x, y, z); // 2 3 4
// console.log(arr); //[2,3,4]

// const [first, , second] = restaurant.categories;
// // console.log(first, second); //Italian Vegetarian

// let [main, , secondary] = restaurant.categories;
// console.warn(main, secondary);

// // SWITCH VALUES
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.warn(main, secondary); // Vegeterian Italian
// //OR
// [main, secondary] = [secondary, main];
// console.log;

// const [starter, mainCourse] = restaurant.order(2, 2);
// console.log(starter, '-', mainCourse);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

//task 1
const [players1, players2] = game.players;
// console.log(players1, players2);

//task2
const [gk1, ...fieldPlayers] = players1;
console.log(gk1);
console.log(fieldPlayers);

//task3
const allPlayers = [...players1, players2];
console.log(allPlayers);

//task4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//task5
const {
  odds: { team1, x: drew, team2 },
} = game;
console.log(team1);

//task6
const printGoals = function (...players) {
  console.log(`${players.length} players were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//task6
team1 < team2 && console.log('Team 1 is more likely to win');
team2 < team1 && console.log('Team 2 is more likely to win');
