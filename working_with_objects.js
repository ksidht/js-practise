

// SEE ALSO

 
/* 
   1. delete keyword
   2. configuable object
   3. super
   4. Object initializer
   5. for..in and for..of
   6. static methods
   7. Enumerability and ownership of properties

*/

export default function working_with_objects() {


  function hello() {
    console.log("sid from working_with_objects")
  }
  
  hello()



  const obj = {
    name: "Siddharth", // property name may be an identifier
    age: 24, // or a number
    "spaced propetry": "Something different",
  };


  const property = "firstName"

  const value = "Siddharth"


  const person = {
    [property]: value
  }

  // for (const key in object) {
  //   if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
      
  //   }
  // }

  for (const key in obj) {
    console.log("SIDD", key, obj[key])
  }

  

  console.log(obj)
  console.log(Object.keys(obj))
  console.log(Object.values(obj))
  console.log(Object.entries(obj))




}
