const pagina = 18
const peticionCharacter = fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)

const singlePeticion = 3
const peticionLocation = fetch(`https://rickandmortyapi.com/api/location/${singlePeticion}`)

const episode = 28
const peticionEpisode = fetch(`https://rickandmortyapi.com/api/episode/${episode}`)

//Peticion para character
peticionCharacter.then(resp => resp.json())
.then( ( {results} ) =>{   
    let title = document.createElement("h1");
    let dates = document.createElement("p");
    const url = results[0].image
    const img = document.createElement('img')
    img.src = url
    title.innerHTML= `Ejemplo del servicio character ${pagina}`
    dates.innerHTML = `${results[0].name} - ${results[0].gender} `

    document.body.append(title,img, dates)    
       
})
.catch(console.warn)

//Peticion para location

peticionLocation.then(response => response.json())
.then(data =>{
let titleLocation = document.createElement("h1")
let datesLocation = document.createElement("p")
titleLocation.innerHTML=`Ejemplo del servicio location ${episode}`
datesLocation.innerHTML = `${data.name} - ${data.type} `
document.body.append(titleLocation, datesLocation)
})
.catch(console.warn)

//Peticion para episode 

peticionEpisode.then(response => response.json())
.then(data =>{
let titleEpisode = document.createElement("h1")
let datesEpisode = document.createElement("p")
titleEpisode.innerHTML=`Ejemplo del servicio Episode ${singlePeticion}`
datesEpisode.innerHTML = `${data.name} - ${data.air_date} `
document.body.append(titleEpisode, datesEpisode)
})
.catch(console.warn)