export default function AdvancePromise() {
    /*  Using async */
    // sidFetch()
  
    // /*  */
    // sidFetchPromise()
  
    // /*  */
    // sidPromise()

    /*  */
    sidFetchMultiple()
  }

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

// Multiple url at a time
function sidFetchMultiple() {


  let URLs = [
    "https://jsonplaceholder.typicode.com/posts/1", 
    "https://jsonplaceholder.typicode.com/posts/0",
    "https://jsonplaceholder.typicode.com/posts/2", 
    "https://jsonplaceholder.typicode.com/posts/3"
  ]

  console.log(URLs.map(fetchData))

  function getAllData(URLs) {
    return Promise.allSettled(URLs.map(fetchData));
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