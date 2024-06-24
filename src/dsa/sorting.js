export default function Sorting() {
    bubbleSort()
}

export function bubbleSort () {
    console.log('sid form bubble sort')
    let data = [6, 0, 4, 2];

    console.log(data.length - 1)

    for (let o = 0; o < data.length; o++) {

        for (let i = 0; i < data.length - 1 ; i++) {
        
            console.log(data[i] > data[i + 1])
    
            if (data[i] > data[i + 1]) {
                let temp = data[i]
                data[i] = data[i + 1]
                data[i + 1] = temp
            }
    
            
        }
    }
    console.log(data)

}

export function bubbleSortOptimise() {
  let data = [6, 0, 4, 2];
  let isSwap;
  do {
    isSwap = false;
    for(let i = 0; i < data.length -1; i++) {
      if(data[i] > data[i + 1]) {
        let temp = data[i + 1]
        data[i + 1] = data[i]
        data[i] = temp

        isSwap = true
      }
    }

  } while (isSwap);

  console.log(data)

}

export function bubbleSortPractise() {
  const ary = [0, 3, 2, 1, 5, 4]

  let isSwaped

  do {
    isSwaped = false

    for(let i = 0; i < ary.length - 1; i++) {
      console.log('run')
      if (ary[i] > ary[i+1]) {
        const temp = ary[i+1]
        ary[i+1] = ary[i]
        ary[i] = temp

        isSwaped = true
      }
    }

  } while (isSwaped);
  
  console.log(ary)
  
}