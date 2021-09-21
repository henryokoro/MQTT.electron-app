const ROBOT_EVENT_STATUS = "status"

class Robot extends EventEmitter{
    constructor(botId, asyncClient){
        super()
        self.botId = botId
        self.asyncClient = asyncClient
    }

    handleStatus(status){
        this.emit(ROBOT_EVENT_STATUS)
    }
}