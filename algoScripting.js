function reverseArray(arr){
let newArray=[];

for(let i=arr.length-1;i>=0;i--){
    newArray.push(arr[i]);
    
}
return newArray;
}
console.log(reverseArray(['hello','world']));
let toReverse=['array','reverse']
console.log(reverseArray(toReverse));

function reverseString(str) {
    let newString="";
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    return newString;
}
reverseString("hello");

function reverseStringArray(arr){
    let str='';
    let newString='';
    let newArray=[]
    for(let i=arr.length-1;i>=0;i--){
        str=arr[i];
        for(let j=str.length-1;j>=0;j--){
            newString+=str[j];
        }
        newArray.push(newString);
        newString='';
    }
    return newArray;
}
console.log(reverseStringArray(['string','array','reverse']))

function convertCtoF(celsius) {
    let fahrenheit=(celsius*(9/5))+32;
    return fahrenheit;
  }
  
  convertCtoF(30);

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

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

function findLongestWord(str){
    let longestWord='';
    let currentWord='';
    for(let i=0;i<str.length;i++){
        currentWord+=str[i];
        if(str[i]==" "||str[i]==="."){
            //console.log(currentWord.length)
            //currentWord.length-=1;
           
            //Need to think code for removing the space and punctuation in the string

            // for(let j=currentWord.length-1;j<currentWord.length;j++){
            //     let newcurrentWord;
            //     newcurrentWord-=currentWord[j];
            //     console.log(newcurrentWord)
            // }
            if(currentWord.length>longestWord.length){
                console.log(longestWord=currentWord);
            }
            currentWord='';
        } 
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dogeeeeeee."));
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

function longestWord(str){
    let splittedString=str.split(' ');
    let longestWord='';

    for(let i=0;i<splittedString.length;i++){
        let currentWord=splittedString[i];
        if(currentWord.length>longestWord.length){
            longestWord=currentWord;
        }
    }
    //need a code to remove if there's a punctuation after the longest word
    //this is the code for removing punctuation
    if(longestWord.slice(-1)==="."||longestWord.slice(-1)==="?"
    ||longestWord.slice(-1)===","){
        let lastIndex=longestWord.length-1;
        longestWord=longestWord.substring(0,lastIndex);
    }
    return longestWord;
    
}
console.log(longestWord("What if we try a super-long word such as otorhinolaryngology,"));

function largestOfFour(arr) {
    let newArray=[];
    let largestNum;
    let currentNum=0;
    for(let i=0;i<arr.length;i++){
      largestNum=arr[i][0];
      for(let j=0;j<arr[i].length;j++)  {
        currentNum=arr[i][j];
        if(currentNum>largestNum){
          largestNum=currentNum;
        }
      }
      newArray.push(largestNum);
    }
    return newArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); //should return [25, 48, 21, -3]

  function confirmEnding(str, target) {
    // return str.slice(-target.length)=== target;
    //return str.slice(str.length - target.length) === target;
    //return str.endsWith(target);
   if(str.slice(-target.length)===target){
    return true;
   }else { return false;}
  }
  
  console.log(confirmEnding("Bastian", "n"));

  function repeatStringNumTimes(str, num) {
    let repeated='';
  
    for(let i=0;i<num;i++){
      repeated+=str;
    }
    return repeated; //return repeated=str.repeat(num);
  }
  
  repeatStringNumTimes("abc", 3);

  function truncateString(str, num) {
    if (str.length > num) {
     return str.slice(0, num) + "...";
   } else {
     return str;
   }
 }
 
 truncateString("A-tisket a-tasket A green and yellow basket", 8);
 truncateString("A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length); 
 //should return the string A-tisket a-tasket A green and yellow basket.

 function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);

  function booWho(bool) {
    if(bool===true||bool===false){
      return true;
    }else return false;
  }
  
  booWho(null);