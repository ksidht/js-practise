
// "India is my country"
// "is"
// Check if current string is in main string

export function substring(string, substring) {

  for(let i = 0; i < string.length; i++) {

    let j;
    
    for(j = 0; j < substring.length; j++) {

      if(string[i + j] != substring[j]) {
        break
      }
    }

    if (substring.length == j) {
      return i
    }
  }

  return -1;

}