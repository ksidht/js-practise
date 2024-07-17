import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { substring } from "./substring.js";
import { map_reduce_filter } from "./src/map_reduce_fliter";
import working_with_objects from "./working_with_objects";
import this_keyword from './this_keyword';
import PromiseStudy from "./src/promise/promise.roadside.js";
import AdvancePromise from "./src/promise/advance.promise.js";

import {Sorting, Search, MergeSort} from './src/dsa/index.js';
import { StringBasic, Amla } from "./src/excercise/index.js";
import { Functions } from "./src/functions/index.js";

import { Objects } from './src/roadsider/index.js';

import { TraversyRecurssion } from "./src/traversy/index.js";


document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vorld</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// AdvancePromise()
// PromiseStudy()

// StringBasic.flatternArray()

// Sorting.bubbleSortOptimise()

// StringBasic.objectSort()

// MergeSort.mergeSort()

Amla.uniqueArray()

// TraversyRecurssion.reverseString()



// working_with_objects()

// this_keyword()

// console.log(this)


/* map_reduce_filter()


console.log(substring('India is my country', 'my country'))

setupCounter(document.querySelector('#counter'))


console.log(name);
var name;
console.log(name)
name = "Siddharth";
console.log(name);





// var sid = "Hello" 

function sidFunc() { 

  console.log("sidFUNC", sid) 

  var sid = "World" 

} 



sidFunc() 

console.log("sid", sid) */



