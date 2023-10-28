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

//   function titleCase(str) {
//     let word=str.split(' ');
//     let updatedWord=[];
//     for(let i=0;i<word.length;i++){
//       str=word[i][0].toUpperCase()+word[i].slice(1).toLowerCase();
  
//     }
//     return str.join(' ');
//   }
  
//   titleCase("I'm a little tea pot");

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");

  function frankenSplice(arr1, arr2, n) {
    let copyArr2=arr2.slice();
    for(let i=0;i<arr1.length;i++){
      copyArr2.splice(n, 0, arr1[i]);
      n++;
    }
    return copyArr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) 
  //should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
  frankenSplice([1, 2, 3, 4], [], 0) //should return [1, 2, 3, 4].

  function bouncer(arr) {
    let newArray=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
  
  bouncer([7, "ate", "", false, 9]);
  bouncer([false, null, 0, NaN, undefined, ""]) //should return []

  function getIndexToIns(arr, num) {
    // for(let i=0;i<arr.length;i++){
    //   if(arr[i]>=num){
    //     return i;
    //   }
    // }
    // return arr.length;
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) return i;
    }
  
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([5, 3, 20, 3], 5) //should return 2.
  getIndexToIns([], 1)// should return 0. ???

  function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) //should return true.
  Passed:mutation(["Mary", "Army"]) //should return true.
  mutation(["Mary", "Aarmy"]) //should return true.
  mutation(["ate", "date"]) //should return false.
  
  function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  //should return [["a", "b"], ["c", "d"]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) //should return [[0, 1], [2, 3], [4, 5]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) //should return [[0, 1, 2, 3], [4, 5]].
  
  