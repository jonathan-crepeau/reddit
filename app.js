// console.log('app.js reporting for duty..');
// NOTE - Array.isArray(value):

const userArray = [
    {id: 0, name: "Jonathan"},
    {id: 1, name: "Jeremy"},
    {id: 2, name: "Luna"}
];

const userMealPreferences = [
    {user_id: 0, food: "Pork Shoulder Stew"},
    {user_id: 1, food: "Pho"},
    {user_id: 2, food: "Bonito Flakes"}
];

const indexedObjOfObj = (inputArray) => {
    const indexedObject = {};
    for (let i = 0; i <= inputArray.length - 1; i++) {
        indexedObject[i] = inputArray[i];
    }
    return indexedObject;
}

const newUserObj = indexedObjOfObj(userArray);
console.log(newUserObj);
