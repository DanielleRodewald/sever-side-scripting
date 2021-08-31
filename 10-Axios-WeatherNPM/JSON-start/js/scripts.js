// fetch ("testdata.json")
// .then((mydata) => mydata.json())
// .then((mydata) => {
//     console.log(mydata); 
//     console.log(mydata.gender); 
//     console.log(mydata.name); 

//     document.getElementById("puppy").innerHTML= mydata.name;
    
//     let sample= document.createElement("h2"); 
//     sample.textContent= mydata.url; 
//     document.getElementById("puppy").appendChild(sample)

//     let sample2= document.createElement("h3"); 
//     sample2.textContent= mydata.phone; 
//     document.getElementById("puppy").appendChild(sample2)
    
// });

// add 2 backslashes to api
 
const apiURL = //"//api.openweathermap.org/data/2.5/weather?id=5401395&appid=6bb4a1786da54716a7c810b6da4e545e&units=imperial"//
"//api.openweathermap.org/data/2.5/weather?zip=80222&appid=6bb4a1786da54716a7c810b6da4e545e&units=imperial" //Zip search
fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo)=> {
   console.log(weatherInfo);
   console.log(weatherInfo.name);
 
document.getElementById("place").innerHTML=weatherInfo.name;
document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
document.getElementById("feels").innerHTML=weatherInfo.main.feels_like;
document.getElementById("windSped").innerHTML=weatherInfo.wind.speed;
 
const iconcode= weatherInfo.weather[0].icon;
   console.log(iconcode);
   const icon_path= "//openweathermap.org/img/w/" + iconcode + ".png";
   console.log(icon_path);
   document.getElementById("weatherIcon").src= icon_path;
}
);
