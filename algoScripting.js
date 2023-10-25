function reverseArray(arr){
let newArray=[];
let newString='';
for(let i=arr.length-1;i>=0;i--){
    // newArray.push(arr[i]);
    for(let j=0;j<arr[i].length;j++){
        newString+=arr[i];
    }
    
    newArray.push(newString);
}
return newArray;
}

console.log(reverseArray(['hello','world']));
let toReverse=['hello']
console.log(reverseArray(toReverse));

function convertCtoF(celsius) {
    let fahrenheit=(celsius*(9/5))+32;
    return fahrenheit;
  }
  
  convertCtoF(30);

function reverseString(str) {
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}

reverseString("hello");
  
function factorialize(num) {
    if(num===1||num===0){ return 1;}
    for(let i=num-1;i>=1;i--){
      num*=i;
    }
    return num;
  }
  
  factorialize(5);

function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        if (currentLength > longestLength) {
        longestLength = currentLength;
        }
        currentLength = 0;
    } else {
        currentLength++;
    }
    }
    if (currentLength > longestLength) {
    longestLength = currentLength;
    }

    return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");