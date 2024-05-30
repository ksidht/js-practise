export default function Sorting() {
    bubbleSort()
}

function bubbleSort () {
    console.log('sid form bubble sort')
    let data = [6, 0, 4, 2];

    console.log(data.length - 1)
    for (let i = 0; i < data.length - 1 ; i++) {
        
        console.log(data[i] > data[i + 1])

        if (data[i] > data[i + 1]) {
            let temp = data[i]
            data[i] = data[i + 1]
            data[i + 1] = temp
        }

        
    }

    console.log(data)


}