const imge = document.querySelector('#image')
const button = document.querySelector('#button').addEventListener('click', () => {
    pegarImage()
})
const pegarImage = async () => {
    await fetch('https://api.thecatapi.com/v1/images/search')
    .then((req) => {
        return req.json()
    })
    .then((obj) => {
       return obj[0].url
    })
    .then((image)=>{
        mostrarImage(image)
    })
}
function mostrarImage(img){
    imge.setAttribute('src', img)
}