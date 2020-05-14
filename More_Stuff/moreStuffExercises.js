// exercise 3

//console.log(Math.sqrt(37));

//exercise 4

//console.log(Math.max(1, 6, 3, 2));
//console.log(Math.max(-1, -6, -3, -2));
//console.log(Math.max(2, 2));

//exercise 6

let list = ['chiefs', 'raiders', 'chargers', 'broncos'];

function findTeams(teams, pattern) {
  return teams.filter((obj) => pattern.test(obj));
}
console.log(findTeams(list, /chief/));