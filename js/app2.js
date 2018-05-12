const apiKey = "fc8ace5fdcde5f9f4f2ec023adba2077";
const _lat = "26.392666"; 
const _long = "49.977714";
const todayDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
const apiUrl = "http://api.islamhouse.com/v1/" + apiKey + "/services/praytime/get-times/" + todayDate + "/Makkah/" + _lat + "/" + _long + "/+3/json";

// Get main sectin to push the result
const main = document.querySelector("main");
window.addEventListener('load', e =>{
    updatePrayTimes();
});

async function updatePrayTimes() {
    //const res = await fetch("https://aws.random.cat/meow");
    //const json = await res.json();
    await fetch('https://aws.random.cat/meow')
    .then(function(response) {
      return await response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
    //main.innerHTML = json.file.join("\n");
}

function createTimeTable(times){
    console.log(times) ;
}