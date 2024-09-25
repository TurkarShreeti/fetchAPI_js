//fetch make http request
//it helps to interact and fetch data from API
//it is a promise based API


// fetch("https://pokeapi.co/api/v2/pokemon/shreeti")
//   .then(
//     (response)=>{
//         if(!response.ok){
//             throw new error("could not fetch resource")
//         }
//         return response.json();
//     }
//   )
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));



  
//fetch is a function that takes a url as an argument
// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})


//using it with async and await

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}