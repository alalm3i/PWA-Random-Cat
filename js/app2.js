
window.addEventListener('load', e =>{
    updateRandomMeow();
});

async function updateRandomMeow() {
    await fetch('https://aws.random.cat/meow')
    .then(async function(response) {
      return await response.json();
    })
    .then(function(myJson) {
      console.log(myJson.file);
      document.getElementById("meow").src=myJson.file;
    });
}

function createTimeTable(times){
    console.log(times) ;
}