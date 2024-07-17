export function countDown() {

  function countDown(number) {
    if (number <= 0) {
      console.log('Number is low', number)
      return 0
    }

    console.log('Number is', number)
    countDown(number - 1)

  }

  countDown(5)

  //5,4,3,2,1

}

export function sumUp() {

  function sumUp(number) {

    console.log(number)
    if (number <= 1) {
      return number
    }

    return number + sumUp(number - 1)

  }

  console.log(sumUp(5))

}

export function reverseString() {
  function reverseString(message) {

    if (message == "") {
      return message
    }

    return reverseString(message.slice(1)) + message[0]

  }

  console.log(reverseString('Hello'))
}