class Controller{
    constructor(){
        this.asyncClient = await connectAsync(MVH_BROKER_ADDRESS);
        this.robots = {}
    }

    //TODO: Map Bot ID's so we can track how many bots have been connected to.
    addRobot(botId){
        let robot = new Robot(botId)
        this.robots[botId] = robot
    }

    async sendCommand(topic, message){
        let result = await self.asyncClient.publish(topic, message)
    }

    moveTolocationHandler(){
        this.sendCommand(topic, message)
    }

    scanForPodIdHandler(){
        this.sendCommand(topic, message)
    }

    liftPodHandler(){
        this.sendCommand(topic, message)
    }
}