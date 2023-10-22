let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
//The console.log call displays 7.

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1]='ball';
// Only change code above this line
console.log(myArray);//["a", "ball", "c", "d"];

function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I',2, 'three');
  arr.push(7, 'VIII',9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));//['I',2, 'three,'IV', 5, 'six', 7, 'VIII',9]

  function popShift(arr) {
    let popped=arr.pop(); // Change this line
    let shifted=arr.shift(); // Change this line
    return [shifted, popped];//returns challenge, complete
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));
  
  const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);//[2, 5, 2, 1]

const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);//[10, 11, 12, 13, 14, 15]
//The second occurrence of 12 is removed, and we add 13 and 14 at the same index.

function htmlColorNames(arr) {
    // Only change code below this line
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
//  ['DarkSalmon', 'BlanchedAlmond', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']

function forecast(arr) {
    // Only change code below this line
   arr=arr.slice(2,4);
    return arr;//['warm','sunny']
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
  
  function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);//pushes all inside the array 2x
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));
  
  function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence=['learning',...fragment,'is','fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());//['learning', 'to', 'code', 'is', 'fun']

  let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
/*indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears')
 returns 1 (the first index at which each element exists).*/

 function quickCheck(arr, elem) {
    // Only change code below this line
  if(arr.indexOf(elem)>=0){//!==-1 also applicable
    return true;
  }else{
    return false;
  }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;//returned a new array, [12, 14, 80]
  }
  
  greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
  for(let i=0;i<arr.length;i++){
    if(arr[i].indexOf(elem)==-1){
      newArr.push(arr[i]);
    }
  }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['deepest']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];
  console.log(nestedArray[2][1][0][0][0]);

  let myNestedArray = [
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
    [
      ['deep',
        ['deeper',
          ['deepest']
        ]
      ]
    ]
  
    // Only change code above this line
  ];
  console.log(myNestedArray[5][0][1]);

  const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };
  tekkenCharacter.origin = 'South Korea';
  tekkenCharacter['hair color'] = 'dyed orange';
  const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);

let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  nestedObject.data.onlineStatus.busy = 10;
  console.log(nestedObject);

  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  
    return foods[scannedItem];
  
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  // Only change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// Only change code above this line

console.log(foods);

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    return userObj.hasOwnProperty('Alan')&&
    userObj.hasOwnProperty('Jeff')&&
    userObj.hasOwnProperty('Sarah')&&
    userObj.hasOwnProperty('Ryan');
  
   //return 'Alan'in userObj && 'Jeff'in userObj && 'Sarah' in userObj && 'Ryan'in userObj;
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
  
  const users2 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
    let result = 0;
    for (let user in allUsers) {
      if (allUsers[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users2));

  function getArrayOfUsers(obj) {
    // Only change code below this line
  return Object.keys(obj);
    // Only change code above this line
  }
  
  console.log(getArrayOfUsers(users));

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
  userObj.data.friends.push(friend);
    return userObj.data.friends;
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));