import { Query } from './Query'
import { Config } from '../config'

export class V1Client {
    config: Config
    constructor (config: Config) {
        this.config = config
    }

    Accel = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('accel', this.config, patientId, deviceId, startTime, endTime)
    }

    BandPower = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('band_power', this.config, patientId, deviceId, startTime, endTime)
    }

    Event = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('event', this.config, patientId, deviceId, startTime, endTime)
    }

    HeartRate = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('heartrate',this.config, patientId, deviceId, startTime, endTime)
    }

    LFP = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('lfp', this.config, patientId, deviceId, startTime, endTime)
    }

    ProbabilitySymptom = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('probability_symptom', this.config, patientId, deviceId, startTime, endTime)
    }

    Rotation = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('rotation', this.config, patientId, deviceId, startTime, endTime)
    }

    Span = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('span',this.config, patientId, deviceId, startTime, endTime)
    }

    State = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('state', this.config, patientId, deviceId, startTime, endTime)
    }
}