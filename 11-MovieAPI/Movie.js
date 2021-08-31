const apiURL = "//www.omdbapi.com/?i=tt0062622&apikey=b9ee4723&units=imperial" //Zip search
fetch (apiURL)
.then((response) => response.json())
.then((movieInfo)=> {
   console.log(movieInfo);
 
document.getElementById("place").innerHTML=movieInfo.Title;
document.getElementById("director").innerHTML=movieInfo.Director;
document.getElementById("released").innerHTML=movieInfo.Released;
document.getElementById("plot").innerHTML=movieInfo.Plot;
document.getElementById("genre").innerHTML=movieInfo.Genre;
document.getElementById("mins").innerHTML=movieInfo.Runtime;
 
const iconcodeTwo=movieInfo.Poster;
document.getElementById("poster").src= iconcodeTwo;
}
);


//Extension: Live Server 
//Visual Studio Code: View -> Command Palette -> Type live Server