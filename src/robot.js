const ROBOT_EVENT_STATUS = "status"

class Robot extends EventEmitter{
    constructor(botId, client){
        super()
        this.botId = botId
        this.client = client
        this.correlationId = generateUuidv4()

        this.maxAcc = 0.3
        this.maxDec = 0.3

        this.baseTopic = "v1/sites/none/agvs/"+this.botId

        this.client.on("message", this.handleMessage.bind(this))
        this.client.subscribe(this.baseTopic + "/status").then(console.log)
        this.client.subscribe(this.baseTopic + "/" + this.correlationId).then(console.log)


        // For scan pod
        this.scanPodResolve = undefined
        this.scanPodReject = undefined
    }

    

    //TODO: Generate random correlation ID's and stringify them
    moveToLocation(x, y, maxSpeed){
        let payload = {
            correlationId:this.correlationId,
            x: x,
            y, y,
            maxAcceleration: this.maxAcc,
            maxSpeed: maxSpeed,
            maxDeceleration: this.maxDec,
            envelope: "queue"
        }
        this.client.publish(this.baseTopic + "/cmd/movetolocation", JSON.stringify(payload))
    }

    scanForPodId(){
        let payload = {
            correlationId:this.correlationId
        }
        this.client.publish(this.baseTopic + "/cmd/scanpod", JSON.stringify(payload))
        return new Promise((resolve, reject) => {
            this.scanPodResolve = resolve
            this.scanPodReject = reject
        })
    }

    liftPod(pod){
        let payload = {
            correlationId:this.correlationId,
            podId: pod,
            botId: this.botId
        }
        this.client.publish(this.baseTopic + "/cmd/liftpod", JSON.stringify(payload))
    }

    handleMessage(topic, payload){
        console.log(topic)
        console.log(payload.toString())
        let data = JSON.parse(payload)
        if(topic.search("status") != -1){
            this.emit(ROBOT_EVENT_STATUS, data)
        } else if(topic.search(this.correlationId) != -1){
            if(data.podId != undefined) this.scanPodResolve(data.podId)
            else if(data.status != "complete" && data.status != "acknowledged" && data.status != "waiting" ){
                this.scanPodReject(data.reason)
                console.log(data.reason)
            }
        }
    }

    generateUuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
      

}