export function secondHighestLowest() {
  const arry = [1, 2, 3, 4, 5, 6]

  

}

export function getOnlyAplhaString() {
  const str = "@34343fseafsfs@#$$$siddharth"
  const newstr = str.replace(/[^a-z]/g, '')

  console.log(str)
  // console.log(newstr);
  let onlyalpha = "";

  for(let stri of str) {
    // console.log(stri);
    let regex = new RegExp(/[a-z]/)
    const result = regex.test(stri)
    console.log(stri + ' - '+result)
    if (result) {
      onlyalpha += stri
    }
  }

  console.log(onlyalpha)

  // str.split('').map(str => console.log(str))

}

export function arrayFlattern() {
  const arr = [1,2,[2,5],6,7,[[[[[4]]]]],5,]

  function af(arry) {
    let flatArray = []

    for (let ar of arry) {
      console.log(ar);
      if(Array.isArray(ar)) {
        
        flatArray = flatArray.concat(af(ar))
      } else {
        flatArray.push(ar)
      }
    }

    return flatArray;

  }

  const output = af(arr)
  console.log(output);
  console.log(flatArray);


}

export function uniqueArray() {

  const array = [1, 2, 3, 3, 4, 4, 5];

  const unarray = [8, 20, -2, 4, -6];  

  function quickSort(unsortedArray) {

    if (unsortedArray.length < 2) {
      return unsortedArray
    }

    let pivot = unsortedArray[unsortedArray.length - 1]  // Taken pivot Value
    let leftArray = []
    let rightArray = []

    console.log('pivot', pivot)

    for (let index = 0; index < (unsortedArray.length - 1); index++) {

      console.log(index)
      console.log('unsortedArray[index]', unsortedArray[index])      
      if(unsortedArray[index] < pivot) { 
        leftArray.push(unsortedArray[index])
      } else {
        rightArray.push(unsortedArray[index])
      }
      
    }

    console.log('leftArray', leftArray)
    console.log('rightArray', rightArray)
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]

  }

  const sortedArray = (quickSort(array))


  function getUniqueValue(sortedAr) {
    let unArray = []
    for(let i = 0; i < sortedAr.length; i++ ) {

      console.log('condition', sortedAr[i] > sortedAr[i - 1])
      console.log('prevoius index',  sortedAr[i - 1])

      if (sortedAr[i - 1] == undefined) {
        unArray.push(sortedAr[i])
      }

      if (sortedAr[i] > sortedAr[i - 1]) {
        unArray.push(sortedAr[i])
      }
    }
    return unArray;
  }

  console.log(getUniqueValue(sortedArray))

}