const cleanestCities = [
    "tokyo",
    "singapore",
    "zurich",
    "helsinki",
    "copenhagen",
    "reykjavik",
    "oslo",
    "stockholm",
    "vienna",
    "calgary"
];

let userInput = prompt("Enter a city name");

let isFound = false


for(let i = 0; i <= cleanestCities.length; i++){
    if(userInput === cleanestCities[i]){
        isFound = true;
        break;
    } else{
        isFound = false
    }
}

if(isFound){
    console.log("Yes Your City is in the list")
}else{
    console.log("Your City is not in the List")
}
