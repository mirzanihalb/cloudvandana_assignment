function merge(left,right){
    let temp = []
    let i = 0
    let j = 0
    let ln = left.length
    let rn = right.length
    while(i<ln && j<rn){
        if(left[i]>=right[j]){
            temp.push(left[i])
            i+=1
        }
        else{
            temp.push(right[j])
            j+=1
        }
    }
    while(i<ln){
        temp.push(left[i])
        i+=1
    }
    while(j<rn){
        temp.push(right[j])
        j+=1
    }
    return temp
    
}
function mergesort(arr){
    let n = arr.length
    if(n<=1){
        return arr
    }
    let mid = Math.floor(n/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    let left_arr = mergesort(left)
    let right_arr = mergesort(right)
    let temp = merge(left_arr,right_arr)
    return temp
    
    
    
}
const readlineSync = require('readline-sync');
let n = readlineSync.question("enter a size of array: ")
n = parseInt(n)
let arr = []
for(i =0 ;i<n;i++){
    val=parseInt(readlineSync.question(`enter number at index ${i} :`))
    arr.push(val)
}
console.log(`The Inputed array ${arr}`)
temp = mergesort(arr)
console.log(`after performing sorting in decresing order : ${temp}`)



