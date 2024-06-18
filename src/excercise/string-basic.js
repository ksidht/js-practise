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