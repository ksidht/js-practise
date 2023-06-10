
export function map_reduce_filter() {

  const nums = [1, 2, 3, 4, 5];

  const newNum = nums.map((num, index) => {
    return num > 2
  })

  console.log(newNum)


  const filterNum = nums.filter((num, index) => num > 2)

   nums[2] = 2;

  console.log(filterNum)

  console.log(nums)

  

}

