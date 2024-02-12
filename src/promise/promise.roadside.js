
export default function PromiseStudy() {

  // callbackImplementation()

  // simplePromise()

  // simplePromiseByRoad()

  // callbackToPromise()

  outPutQuestions()


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
    }, 2000)
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
      console.log('1 -- console log from')
      doStep2(result1, (result2) => {
        console.log('2 -- console log from')
        doStep3(result2, (result3) => {
          console.log('3 -- console log from')
          doStep4(result3, (result4) => {
            console.log('4 -- log from 4', result4)
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

function callbackToPromise() {
  function doStep1(num) {
    return new Promise((resolve, reject) => {
      resolve(num + 1)
    })
  }

  function doStep2(num) {
    return new Promise((resolve, reject) => {
      resolve(num + 1)
    })
  }  

  function doStep3(num) {
    return new Promise((resolve, reject) => {
      resolve(num + 1)
    })
  }    

  function doStep4(num) {
    return new Promise((resolve, reject) => {
      resolve(num + 1)
    })
  }    

  doStep1(1).then(result => {
    console.log(result)

    doStep2(result).then((result) => {
      console.log(result)

      doStep3(result).then(result => {
        console.log(result)

        doStep4(result).then(result => {
          console.log(result)
        })
      })
    })
  })

  doStep1(10).then( result => {
    console.log(result)
    return doStep2(result)
  }).then(result => {
    console.log(result)
    return doStep3(result)
  }).then(result => {
    console.log(result)
    return doStep3(result)
  }).then(result => {
    console.log(result)
  })

}

function outPutQuestions() {
  function question1() {
    console.log('start')

    const promise1 = new Promise((resolve, reject) => {
      console.log(1);
      resolve(2)
    })

    promise1.then((res) => {
      console.log(res)
    })

    console.log('end')

    /* 
    * start, 1, end, 2
    */
  }

  /* 
  * console log after resolve
  * resolve after resolve 
  * no resolve or reject 
  * use of return in promise callback
  */
  function question2() {
    console.log('start')

    const promise1 = new Promise((resolve, reject) => {
      console.log(1);
      resolve(2)
      console.log(3)
      // reject('resolve'+4)
      return 'sid'
    })

    promise1.then((res) => {
      console.log('Res', res)
    })
    .then((res) => {
      console.log('Res2', res)
    })
    .then((res) => {
      console.log('Res3', res)
    })
    .catch((error) => {
      console.log('error', error)
    })
    .then((res) => {
      console.log('Res4', res)
    })    
    .then((res) => {
      console.log('Res5', res)
    })      
    console.log('end')

    /* 
    * start, 1, end, 2
    */
  }  


  

  // question1()
  question2()
}