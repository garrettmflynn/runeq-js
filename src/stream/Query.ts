import { Config } from 'src';

export class Query {
    name: string
    config: Config;
    patientId: string;
    deviceId: string;
    startTime: number;
    endTime: number;

    constructor (name:string, config:Config, patientId:string = '', deviceId:string = '', startTime:number, endTime:number) {
        this.name = name
        this.config = config
        this.patientId = patientId
        this.deviceId = deviceId
        this.startTime = startTime
        this.endTime = endTime;
    }

    // Get Data Through API (JSON for now)
    fetch = (query:string) => {

        const headers = this.config.authHeaders()
        if (headers instanceof Error) return headers

        const params:{[x:string]:any} = {}
        if (this.patientId) params.patient_id = this.patientId
        if (this.deviceId) params.device_id = this.deviceId
        if (this.startTime) params.start_time = this.startTime
        if (this.endTime) params.end_time = this.endTime
    

       return fetch(`${this.config.streamURL}/v1/${this.name}.json?${new URLSearchParams(params)}`, {
           headers, 
        //    body: JSON.stringify({})
        })
        .then(res => res.json())
        .then(res => {
            if (res.success) return res.result
        })
        // .then(json => console.log(json));
        .catch(e => console.error('[RUNELABS]', e))
    }

    get = this.fetch

    csv = () => {

    }

    json = () => {

    }

    csvAvailability = () => {

    }

    csvText = () => {

    }

    jsonAvailability = () => {

    }

    jsonData = () => {

    }

    points = () => {

    }
}