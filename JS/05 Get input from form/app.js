const weatherCheck = (event) =>{
    event.preventDefault()

    // console.log(event)

    let userCity = document.getElementById("userCity").value;

    userCity = userCity.toLowerCase()
    console.log(userCity)
    if(userCity === "karachi"){
        console.log("Today weather is Cold! Keep Your Jacket on")
    } else if(userCity === "hydrabad"){
        console.log("Today weather is Cold! Take Y  our Jacket on and avoid night outing!")
    }
    else{
        console.log("No Data Found, Sorry We have no enough data for your city")
    }
}