import { Query } from './Query'
import { State } from './State'
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

    ProbabilitySymptom = (patientId:string, deviceId:string, startTime:number, endTime:number, symptom:string) => {
        return new Query('probability_symptom', this.config, patientId, deviceId, startTime, endTime, {symptom})
    }

    Rotation = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('rotation', this.config, patientId, deviceId, startTime, endTime)
    }

    Span = (patientId:string, deviceId:string, startTime:number, endTime:number) => {
        return new Query('span',this.config, patientId, deviceId, startTime, endTime)
    }

    State = (patientId:string, deviceId:string, startTime:number, endTime:number, event:string, fields:string[]=[]) => {
        return new Query('state', this.config, patientId, deviceId, startTime, endTime, {event, fields})
    }
}