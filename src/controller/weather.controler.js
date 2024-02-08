import { Weather } from "../models/Weather.Model.js";

let Weathers = []

let createWeather = (temperature, localization,time , day, state) => {
    const newWeather =  new Weather(temperature, localization,time , day, state)
     Weathers.push(newWeather)
     return newWeather    
}



let AllWeathers = () =>{
    return Weathers
}


let deleteWeather = (temperature,localization,day,id) =>{
     let weather = Weathers.find(item => item.id === id )
     if(weather)  {
     let weatherIndex = Weathers.findIndex( weather => weather.temeperature === temperature && weather.localization === localization && weather.day === day );
     Weathers.splice(weatherIndex,1) 
     }else{
        return 'O clima não existe!'
     }
}

export {createWeather, AllWeathers, deleteWeather}