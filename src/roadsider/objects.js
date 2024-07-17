var sid = "Objects";

export function objectCreation() {
/* 
* 
* Dyanamic properties (Variable as key/value)
*/
  

  const property = 'firstName'
  const firstName = 'Siddharth'

  const car = {
    name: "Honda",
    age: 30,
    ['like this video']: 'yes',
    [property]: firstName
  }

  car.name = "Sid"
  delete car.age
  console.log(car)

  const func = (function(a) {
    // delete a;
    return a;
  })(5);

  console.log(func)


  /* Looping through object */

  const inChecking = property in car;
  console.log('inChecking', inChecking)

  for (let key in car) {
    console.log('key', key)
    console.log('value', car[key])

  }



//  const objectKeyword = new Object()
//  objectKeyword.name = "Hero"

//  console.log(objectKeyword)

 
//   function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName;
//     };
//   }

//   Person.prototype.newName = 'Sid';

//   Person.noName = 'Sid';

//   const objectContructor = new Person('Ford', 'Figo')

//   console.log(objectContructor)

//   console.log(objectContructor.__proto__.__proto__)




}

export function question1() {
  const obj = {
    a: 'one',
    b: 'two',
    a: 'three'
  }

  console.log(obj)
}

export function question2() {
  const obj =  {
    a: 100,
    b: 200,
    title: 'hey'
  }

  console.log(obj)
  console.log(multipleNumeric(obj))
  console.log(obj)

  function multipleNumeric(object) {
    for(let key in object) {
      let num = object[key]
      if(typeof num == 'number') {
        object[key] = num * 2
      }
      // console.log(typeof typeof object[key])
    }

    return object;
  }

}

export function question3() {
  /* Object as key in object */
  const a = {}
  const b = { key: "b" }
  const c = { key: "c" }
  const d = 'd-key'

  a[b] = 123; // object Object
  a[c] = 456; // object Object
  a[d] = 'string key';

  console.log(a)
  console.log(a[b])
}

export function question4() {
  /* What is JSON.stringify vs JSON.prase */

  const sid = {
    name: "sid",
    age: 30
  }

  const strObj = JSON.stringify(sid)

  const backToObject = JSON.parse(strObj)

  console.log(strObj)
  console.log(backToObject)

}

export function question5() {
  /* Spread operetor */
  console.log([..."Lydia"])
}

export function question6() {
  const user = { name: "Lydia", age: 21}
  const admin = { admin: true, ...user}

  console.log(admin)
}

export function question7() {
  const settings = { username: 'lydiahallie', level: 19, health: 90, };
  const data = JSON.stringify(settings, ['level', 'health']);
  console.log(data);
}

export function question8() {
  const shape = {
    radius: 10,
    diameter() {
      console.log(this.radius * 2)
    },
    perimeter: () => {
      console.log(this.radius)
      console.log(2 * Math.PI * this.radius)
    }
  }

  shape.diameter()

  shape.perimeter()

}

/* Dis */
export function question9() {
  let user = {
    name: "Siddharth",
    age: 30,
    fullName: {
      firstName: "S",
      lastName: "K"
    }
  }

  let name = "sid";


   let { name:sid, fullName:{firstName} } = user



  console.log(firstName)

}


/*  */
export function question10() {
  function getItems(fruitList, favoriteFruit, ...agrs) {
    console.log(agrs)
    return [...fruitList, ...agrs, favoriteFruit]
  }

  console.log(getItems(['apple', 'banana'], 'pear', 'orange', 'papaya'))

}

export function question11() {
  let c = { greeting: 'Hey!' };
  let d;

  d = c;
  c.greeting = 'Hello';
  console.log(d); // Hello
  console.log(c==d); // Hello
  console.log(c===d); // Hello

}

export function question12() {
  console.log({a:1} == {a:1});
  console.log({a:1} === {a:1});
}

export function question13() {
  let person = { name: 'Lydia' };
  const members = [person];
  person = null;
  
  console.log(members);
}

export function question14() {

}

export function question15() {
  const value = { number: 10 };

  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply();
  multiply();
  multiply(value);
  console.log('from out log', value)
  multiply(value);
}

export function question16() {
  function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
  }

  const personObj1 = {
      name: 'Alex',
      age: 30
  };

  const personObj2 = changeAgeAndReference(personObj1);

  console.log(personObj1); // -> ?
  console.log(personObj2); // -> ?
}