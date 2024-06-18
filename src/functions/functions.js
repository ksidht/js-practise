export function firstFunction() {
  console.log('firstFunction', this)

  function firsttwo(params) {
    console.log('firsttwo', this)
  }

  firsttwo()
}

export function firstClassFunction() {

  function square(num) {
    return num * num
  }

  function displaySquare(fn) {
    console.log('output of fn ' + fn(2))
  }

  displaySquare(square)

}

export function iife() {

  // ()()
  // (function square(num) {
  //   console.log(num * num)
  // })(10)

  (function(x){
    return (function(y){
      console.log(x)
    })(2)
  })(1)

}