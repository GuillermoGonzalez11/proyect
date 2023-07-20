const apiKey ="20d66fe92d055ea9c827e1c8dbe9f05d";
const ciudad ="Fram,py"
const lang = "es"
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${apiKey}&units=metric&lang=${lang}`
let dato;
const VIENTO = document.getElementById("viento")
const ESTADO = document.getElementById("estado")
const CLIMA = document.getElementById("clima")
const TEMPERATURA = document.getElementById("temperatura")
const MIN =document.getElementById("min")
const MAX =document.getElementById("max")

fetch(apiUrl)
.then(response=> response.json())
.then(response=>{
    console.log(response)
    dato = response
    //let temperatura = dato.main.temp //"Rain"
    let tempMin = dato.main.temp_min
    let tempMax = dato.main.temp_max
    //TEMPERATURA.innerHTML = dato.main.temp+"°"
    MIN.innerHTML= "Min: " + tempMin+"°"
    MAX.innerHTML="Max: " + tempMax+"°"
    console.log('temp min', tempMin)
    console.log('temp max', tempMax)
    let viento = dato.wind.speed
    VIENTO.innerHTML=viento+"km/h"
    console.log(viento)
    let clima = dato.weather[0].description
    let icon = dato.weather[0].icon
    ESTADO.innerHTML = clima

    CLIMA.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
    console.log(clima)

})
.catch(
    err => console.error(err)
)

console.log(dato)
