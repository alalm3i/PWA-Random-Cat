
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
    // adding service worker
    if('serviceWorker' in navigator){
      try{
        navigator.serviceWorker.register('./sw.js'); // service worker must be in root folder.
        console.log("Service Worker registered")
      }catch(error){
        console.log("Registraion failed")
      }
     
    }
}
