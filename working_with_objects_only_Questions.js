

const func = (function (age){
  console.log(age)
  delete age
  return age;
})(4);


/* 
*  Q.2 Sum all the population by looping through so we know the total population
*/

/* 
const population = {
  male: 4,
  female: 93,
  others: 10
};

let totalPopulation = 0;
let genders = Object.keys(population);

genders.forEach((gender) => {
  totalPopulation += population[gender];
});

console.log(totalPopulation); // 107
 */



