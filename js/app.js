const apiKey = "DTw3Z2l7DDzJjn7G";
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
    const res = await fetch(apiUrl);
    const json = await res.json();

    main.innerHTML = json.times.map(createTimeTable).join("\n");
}

function createTimeTable(times){
    return times;
}