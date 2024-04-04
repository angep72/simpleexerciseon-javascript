function invert(array) {
   const newArray = [];
   for (let i = 0 ; i<array.length;i++){
    newArray.push(-array[i])
   }
   return newArray
  }
  console.log (invert([12,23,45]))