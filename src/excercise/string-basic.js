export function occuranceOfEachCharacter() {
  console.log('occuranceOfEachCharacter')
}

export function flatternArray() {

  let ary = [1, 2, [3, 4], [5], 6,[7, [8, [9]]]]
  let flatAry = []

  function flatten(arrayToFlat) {

    for (const item of arrayToFlat) {
      if (Array.isArray(item) ) {
        flatten(item)
      } else {
        flatAry.push(item)
      }

    }

  }

  flatten(ary)
  console.log(flatAry)

}

export function objectSort() {
  console.log('object Sort')

  
const fruits = [ { fruit : "Oranage" }, { fruit : "Apple" }, { fruit : "Jackfruit" }, { fruit : "Banana" }]

// let fruitsAry = []

// for(let fruit of fruits) {
//   fruitsAry.push(fruit.fruit)
// }

// const sortFruitsAry = fruitsAry.sort()

// const sortedFruits = []

// for(let sfruit of fruitsAry) {
//   sortedFruits.push({
//     fruit: sfruit
//   })
// }

// console.log(sortedFruits)


fruits.sort((a, b) => {
  console.log(a.fruit, b)
  console.log(a.fruit.localeCompare(b.fruit))
})




}