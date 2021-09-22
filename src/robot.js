const ROBOT_EVENT_STATUS = "status"

class Robot extends EventEmitter{
    constructor(botId, client){
        super()
        this.botId = botId
        this.client = client

        this.maxAcc = 0.3
        this.maxDec = 0.3

        this.baseTopic = "v1/sites/none/agvs/"+this.botId

        this.client.on("message", this.handleStatus.bind(this))
        this.client.subscribe(this.baseTopic + "/status").then(console.log)
    }

    moveToLocation(x, y, maxSpeed){
        let payload = {
            correlationId:"theCorrelation",
            x: x,
            y, y,
            maxAcceleration: this.maxAcc,
            maxSpeed: maxSpeed,
            maxDeceleration: this.maxDec,
            envelope: "queue"
        }
        this.client.publish(this.baseTopic + "/cmd/movetolocation", JSON.stringify(payload))
    }

    handleStatus(topic, payload){
        console.log(topic)
        console.log(payload.toString())
        this.emit(ROBOT_EVENT_STATUS, JSON.parse(payload))
    }
}