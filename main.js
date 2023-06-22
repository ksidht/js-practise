import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { substring } from "./substring.js";
import { map_reduce_filter } from "./src/map_reduce_fliter";
import working_with_objects from "./working_with_objects";
import this_keyword from './this_keyword';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`


// working_with_objects()

this_keyword()

console.log(this)


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