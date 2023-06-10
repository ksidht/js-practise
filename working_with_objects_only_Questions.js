

const func = (function (age){
  console.log(age)
  delete age
  return age;
})(4);


