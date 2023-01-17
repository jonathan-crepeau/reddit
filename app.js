// console.log('app.js reporting for duty..');
// NOTE - Array.isArray(value):

// SECTION - Arrays:

const usersArray = [
    {id: 7, name: "Cinnamon"},    
    {id: 1, name: "Jeremy"},
    {id: 5, name: "Michele"},    
    {id: 2, name: "Luna"},
    {id: 3, name: "Ryan"},
    {id: 0, name: "Jonathan"},
    {id: 4, name: "Bruce"},
    {id: 6, name: "Kristen"},
];

const foodPreferences = [
    {user_id: 4, food: "Avocado"},
    {user_id: 3, food: "Baked Potato"},
    {user_id: 7, food: "Beef"},
    {user_id: 5, food: "Mexican"},    
    {user_id: 1, food: "Pho"},
    {user_id: 0, food: "Ravioli"},
    {user_id: 6, food: "Smoothie"},
    {user_id: 2, food: "Tuna"}
]

// NOTE sort usersArray by id integers:
// const sortedUsersById = [...usersArray].sort((a, b) => a.id - b.id);
// console.log(sortedUsersById);

// NOTE - sort array, return as indexed object:
const createIndexedObj = (usersArr, foodArr) => {
    const sortedArr = [...usersArr].sort((a, b) => a.id - b.id);
    const newObj = {};
    for (let i = 0; i < sortedArr.length; i++) {
        newObj[i] = sortedArr[i];
    }
    for (let i = 0; i < foodArr.length; i++) {
        let selectedUser = newObj[foodArr[i].user_id];
        selectedUser.foodPref = foodArr[i].food;
    }
    return newObj;
}

const orderedUsers = createIndexedObj(usersArray, foodPreferences);
console.log(orderedUsers);



// SECTION - v1

// const newIndexedObj = (inputArray) => {
//     const newObject = {};
//     for (let i = 0; i <= inputArray.length - 1; i++) {
//         newObject[i] = inputArray[i];
//     }
//     return newObject;
// }

// const indexedUsersObj = newIndexedObj(usersArray);
// console.log(indexedUsersObj);


// const matchPreferences = (inputArray) => {
//     for (let i = 0; i <= inputArray.length - 1; i++) {
//         let userInQuestion = indexedUsersObj[inputArray[i].user_id];
//         userInQuestion.foodPref = inputArray[i].food
//         // console.log(inputArray[i]);
//         // console.log(userInQuestion);
//     }
// }

// matchPreferences(foodPreferences);
// console.log(indexedUsersObj)