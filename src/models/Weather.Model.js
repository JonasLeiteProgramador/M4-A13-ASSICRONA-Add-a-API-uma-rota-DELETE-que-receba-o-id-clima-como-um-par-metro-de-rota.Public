import { v4 as uuidv4 } from 'uuid';

class Weather {
    constructor(temperature, localization,time , day, state){
        this.id = uuidv4()
        this.temperature = temperature;
        this.localization = localization;
        this.time = time ; 
        this.day = day;
        this.state = state;
        this.create_At = new Date().toLocaleString("pt-BR")
    }
}

export {Weather}