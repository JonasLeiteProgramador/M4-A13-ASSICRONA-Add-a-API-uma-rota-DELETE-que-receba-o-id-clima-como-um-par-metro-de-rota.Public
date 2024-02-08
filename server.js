import  express  from "express";
import { weatherRoutes } from "./src/routes/weather.Routes.js";



const app = express()
const port = 3040



app.use(express.json())
app.use(weatherRoutes)



app.listen(port,()=>{
    console.log(` O servidor esta on na porta ${port}`)
})
