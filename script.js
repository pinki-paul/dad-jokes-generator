const btnEL = document.getElementById("btn");
const jokeEL = document.getElementById("joke");

const apiKey = "hM89mAIYYCFqZFYfeFY9bQ==fKpu9WCUHYkq89WB";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    
    try{
         jokeEL.innerText = "Updating....";
    
    btnEL.disabled = true;
    btnEL.innerText = "Loading....";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEL.disabled = false;
    btnEL.innerText = "Tell me a joke";
  
   jokeEL.innerText = data[0].joke; 
    } catch(error){
        jokeEL.innerText = "An error happened, try again later";
         btnEL.disabled = false;
         btnEL.innerText = "Tell me a joke";
        console.log(error);
    }
    
   
}

btnEL.addEventListener("click", getJoke);