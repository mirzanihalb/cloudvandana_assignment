const readlineSync = require('readline-sync');
let st = readlineSync.question("enter a string : ")
arr = st.split(" ")
result = ""
for(i in arr){
    word = arr[i]

    temp =""
    ln = word.length-1
    for(i =ln;i>=0;i--){
        temp+=word[i]
    }
    result+=temp
    result+=" "
}
console.log(result)