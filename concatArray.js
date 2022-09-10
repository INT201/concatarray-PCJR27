const { template } = require('@babel/core')

function concatArray(array1, array2) {
 if(array1 === null ||array1 === undefined && array2 ===null || array2 ===undefined ){
  return undefined
 }else if(array1===[] && array2 === []){
    return array1
   } else if(array2 === []||array2===null||array2===undefined){
    return array1
}
 else if(array1=== []||array1 === null || array1=== undefined){
    return array2
 }

else 
return array1.concat(array2)


}
console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
console.log(concatArray(undefined, [2, 4, 6, 7]))
console.log(concatArray([2, 4, 6, 7], null))
console.log(concatArray(undefined, [2, 4, 6, 7]))
module.exports = concatArray
