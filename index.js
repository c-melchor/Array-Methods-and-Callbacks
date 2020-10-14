import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


// problem a

let thisYear = fifaData.filter((v) => { 
    return v.Year === 2014 && v.Stage === 'Final';
})

console.log(thisYear);
console.log(thisYear[0]['Home Team Name']);

// problem b

console.log(thisYear[0]['Away Team Name']);

//problem c

console.log(thisYear[0]['Home Team Goals']);

//problem d

console.log(thisYear[0]['Away Team Goals']);

// problem e

console.log(thisYear[0]['Win conditions']);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const allFinals = data.filter(d => d.Stage === 'Final');
    return allFinals;
};


console.log(getFinals(fifaData));





/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(data, callback) {
//     return callback(data).map(item => item.Year);    
// }

// console.log(getYears(fifaData,getFinals));

function getYears(data, callback){
let years = callback(data).map(function(team){
    return team.Year;
})
return years;
}
console.log(getYears(fifaData, getFinals));



/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 



function getWinners(data, getFinalscb){
    let filteredArrayHome = getFinalscb(data).filter(item => {
        return item['Home Team Goals'] > item['Away Team Goals']; 
    });
    let filteredArrayAway = getFinalscb(data).filter(item => {
        return item['Away Team Goals'] > item['Home Team Goals'];
    });
    console.log (filteredArrayHome);
    console.log(filteredArrayAway);

    let winnerNamesHome = filteredArrayHome.map(item => {
        return item['Home Team Name']; 
    });
    let winnerNamesAway = filteredArrayAway.map(item => {
        return item['Away Team Name'];
    });
      console.log(winnerNamesAway);
      console.log(winnerNamesHome);
      let winnersArray = [];
      winnersArray.push(winnerNamesAway, winnerNamesHome);
      console.log(winnersArray);
}
        getWinners(fifaData, getFinals);
        

       

        






/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


//  function getWinnersByYear(data, getWinnerscb, getYearscb){
//     let winnersByYear = getWinnerscb(data).map(function (item,index){
//         if(item['Home Team Goals'] > item['Away Team Goals']){
//         return `In ${getYearscb(data)[index].Year}, ${getWinnerscb(data)[index]['Home Team Name']} won the World Cup!`;
//         } else {
//         return `In ${getYearscb(data)[index].Year}, ${getWinnerscb(data)[index]['Away Team Name']} won the World Cup!`;
//         };
// });
//         return winnersByYear;
//  }

//  console.log(getWinnersByYear(fifaData, getWinners, getYears));

    // console.log(getWinnersByYear(fifaData, getWinners(data, getFinals(data), getYears(fifaData, getFinals(fifaData)))));

// getWinnersByYear();







/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// function getAverageGoals() {
// let home = data.reduce((acc, item) => (acc += item['Home Team Goals']),0); /data.length 
// let away = data.reduce((acc, item) => (acc += item['Away Team Goals']),0); /data.length

// let avgTeamScore = {
//     home:home,
//     away:away,
// }
// return avgTeamScore;
// };

// getAverageGoals();




/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */