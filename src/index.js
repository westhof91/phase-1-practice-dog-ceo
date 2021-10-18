console.log('%c HI', 'color: firebrick')


let breeds  =[]

document.addEventListener('DOMContentLoaded', function(){
    loadImages()
    loadBreedOptions()
    
})

const fun = (play) => {
   return play.json()
}
function loadImages(){
fetch("https://dog.ceo/api/breeds/image/random/4")
.then( function play(response){
    return response.json()
    .then(results => {
        results.message.forEach(image => addimage(image))
    })
} )

}


