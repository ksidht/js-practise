export default function PromiseStudy() {

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

  newPromise
  .then((result) => {
    console.log('Result from then:', result)
    return "New result from first then to second then"
  })
  .then(newresult => {
    console.log('From chain result', newresult)
  })
  .catch(error => {
    console.log('Error from new promise:', error)
    return "New erroe from first then"
  })
  .catch(error => {
    console.log('Error from last catch:', error)
  })

  console.log(newPromise);


}

export function OldPromise() {
  // * Using async
  async function sidFetch(params) {
    function fetchData(URL) {
      return axios
        .get(URL)
      // .then(function(response) {
      //   return {
      //     success: true,
      //     data: response.data
      //   };
      // })
      // .catch(function(error) {
      //   return { success: false };
      // });
    }

    const sid = fetchData('https://jsonplaceholder.typicode.com/posts/1')

    console.log(sid)
  }
  sidFetch()

  // * Using Promise

  function sidFetchPromise(params) {

    function fetchData(URL) {
      return axios
        .get(URL)
        .then(function (response) {
          return {
            success: true,
            data: response.data
          };
        })
        .catch(function (error) {
          return { success: false };
        });
    }

    const sid = fetchData('https://jsonplaceholder.typicode.com/posts/1')
    sid.then(res => {
      console.log(res)
    })

    console.log(sid)

    const sidAll = Promise.all([fetchData('https://jsonplaceholder.typicode.com/posts/1')])
    console.log(sidAll)
    sidAll.then(all => console.log(all))

  }
  // sidFetchPromise()


  // Multiple url at a time
  function sidFetchMultiple() {


    let URLs = ["https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2", "https://jsonplaceholder.typicode.com/posts/3"]

    console.log(URLs.map(fetchData))

    function getAllData(URLs) {
      return Promise.all(URLs.map(fetchData));
    }

    function fetchData(URL) {
      return axios
        .get(URL)
        .then(function (response) {
          return {
            success: true,
            data: response.data
          };
        })
        .catch(function (error) {
          return { success: false };
        });
    }

    getAllData(URLs).then(resp => { console.log(resp) }).catch(e => { console.log(e) })
  }


  function sidPromise() {
    const vanilaPromise = new Promise((resolve, reject) => {
      resolve({ data: "Database Here", message: 'True' })
      reject({ data: "No Data", message: 'False' })
    })

    const newVP = vanilaPromise.then(value => {
      return {
        ...value,
        isCustomised: 'yes'
      }
    })

    console.log(vanilaPromise)
    console.log(newVP)


  }
  sidPromise()
}