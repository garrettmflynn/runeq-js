export class Accel {
    patientId: string;
    deviceId: string;
    startTime: number;
    endTime: number;

    constructor (patientId:string, deviceId:string, startTime:number, endTime:number) {
        this.patientId = patientId
        this.deviceId = deviceId
        this.startTime = startTime
        this.endTime = endTime;
    }
}