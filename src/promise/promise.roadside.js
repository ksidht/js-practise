
export default function PromiseStudy() {

  // callbackImplementation()

  // simplePromise()

  simplePromiseByRoad()


}

function callbackImplementation() {

  function firstToRun(cb) {
    
    setTimeout(() => {
      console.log('firstToRun');

      cb();

    }, 1000)
  }

  function secondRun(cb) {
    console.log('secondRun')
  }

  firstToRun(function() {
    console.log('from callback')
    secondRun()
  })


  function doStep1(num, cb) {
    const result = num + 1;
    cb(result)
  }

  function doStep2(num, cb) {
    setTimeout(() => {
      const result = num + 2;
      cb(result)
    })
  }

  function doStep3(num, cb) {
    const result =  num + 3;
    cb(result)
  }

  function doStep4(num, cb) {
    const result = num + 4;
    cb(result)
  }

  function doOperation () {
    let result = 0;
    doStep1(result, (result1) => {
      console.log('console log from',result1)
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          doStep4(result3, (result4) => {
            console.log('log from 4', result4)
          })
        })
      })
    })

    // result = doStep2(result)
    // console.log('doStep2', result);
    // result = doStep3(result)
    // result = doStep4(result)
    // console.log(result)
  }

  doOperation()
}

function simplePromise() {

  console.log('before promise')

  const newPromise = new Promise((resolve, reject) => {
    console.log('in promise')
    let result = false;
    if (result) {
      resolve('IT a sucessfull')
    }

    reject('sid_PROMISE REJECT')
  })

  console.log('after promise')

  const newPromise2 = newPromise
  .then((result) => {
    console.log('Result from then:', result)
    return "New result from first then to second then"
  })
  .then(newresult => {
    console.log('From chain result', newresult)
  })
  .catch(error => {
    console.log('Error from new promise:', error)
    return {message: "New erroe from first then"}
  })
  .then(error => {
    console.log('Error from last catch:', error)
  })

  newPromise2.then(result => {
    console.log(result)
  })


  console.log(newPromise);
  console.log(newPromise2);
}

function simplePromiseByRoad() {
  console.log('srtart simplePromiseByRoad')

  const simplePromise = new Promise((resolve, reject) => {
    console.log('inside simplePromiseByRoad')
    setTimeout(() => {
      console.log('inside setTimeout simplePromiseByRoad')
      const isOkay = false;
      if (isOkay) {
        resolve('It is resolve')
      }
  
      reject('it is reject')
    })

  })



  console.log(simplePromise)


  simplePromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error))

  console.log('end simplePromiseByRoad')

  const staticPromise = Promise.resolve('THis is resolve using static methods')

  staticPromise.then((value) =>  console.log(value))
  console.log(staticPromise)

}