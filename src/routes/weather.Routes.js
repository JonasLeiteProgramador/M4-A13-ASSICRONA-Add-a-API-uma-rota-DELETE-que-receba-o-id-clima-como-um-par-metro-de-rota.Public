import { createWeather, AllWeathers, deleteWeather,searchWeatherById } from "../controller/weather.controler.js";
import  {Router}  from "express";

const weatherRoutes = Router()



weatherRoutes.post('/create-weather',(req,res) =>{
  const {temperature, localization,time , day, state} = req.body;
  const newWeather = createWeather(temperature, localization,time , day, state)
  res.json({newWeather})
})


weatherRoutes.get('/Weathers',(req,res)=>{
    let weathers = AllWeathers()
    res.json(weathers)
})


weatherRoutes.delete('/delete-weather/:id',(req,res)=>{
    const id = req.params.id
    const {temperature,localization,day} = req.body;
    let lessWeather = deleteWeather(temperature,localization,day,id);
    res.json({lessWeather})


})

weatherRoutes.get('/weather/:id',(req,res)=>{
  const id = req.params.id;
  const weather = searchWeatherById(id)
 res.status(201).json({weather})
})
 


export { weatherRoutes}

