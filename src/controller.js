class Controller{
    constructor(){
        self.asyncClient = await connectAsync(MVH_BROKER_ADDRESS);
        self.robots = {}
    }

    addRobot(botId){
        let robot = new Robot(botId)
        self.robots[botId] = robot
    }

    async sendCommand(topic, message){
        let result = await self.asyncClient.publish(topic, message)
    }

    moveTolocationHandler(){
        self.sendCommand(topic, message)
    }
}