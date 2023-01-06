// console.log('app.js reporting for duty..');
// NOTE - Array.isArray(value):

const usersArray = [
    {id: 0, name: "Jonathan"},
    {id: 1, name: "Jeremy"},
    {id: 2, name: "Luna"},
    {id: 3, name: "Bruce"},
    {id: 4, name: "Michele"},
    {id: 5, name: "Ryan"},
    {id: 6, name: "Kristen"},
    {id: 7, name: "Cinnamon"}
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

const newIndexedObj = (inputArray) => {
    const newObject = {};
    for (let i = 0; i <= inputArray.length - 1; i++) {
        newObject[i] = inputArray[i];
    }
    return newObject;
}

const indexedUsersObj = newIndexedObj(usersArray);
console.log(indexedUsersObj);


const matchPreferences = (inputArray) => {
    for (let i = 0; i <= inputArray.length - 1; i++) {
        let userInQuestion = indexedUsersObj[inputArray[i].user_id];
        userInQuestion.foodPref = inputArray[i].food
        // console.log(inputArray[i]);
        // console.log(userInQuestion);
    }
}

matchPreferences(foodPreferences);
console.log(indexedUsersObj)