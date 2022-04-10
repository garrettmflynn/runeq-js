import { Accel } from './Accel'
import { Config } from '../config'

export class V1Client {
    config: Config
    constructor (config: Config) {
        this.config = config
    }


    Accel = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Accel(patientId, deviceId, startTime, endTime)
    }
}