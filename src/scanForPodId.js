class ScanForPodId {
    constructor(robot, metrics) {
        this.robot = robot
        this.element = document.createElement('div');
        this.metrics = metrics;
        let podButton = new Button("Scan Pod ID");
        this.element.appendChild(podButton.element);
        podButton.on('click', this.handleClick.bind(this));

    }

    async handleClick() {
        try{
            let result = await this.robot.scanForPodId();
            console.log(result);
            if(result == null)
            {
                console.log('Nothing in result for scan pod. Subscribe to v1/sites/none/agvs/321/theCorrelation')
                try{
                    await client.subscribe("v1/sites/none/agvs/321/theCorrelation");
                    console.log('succesful subscription');
                } catch(error){
                    console.log(error);      
                }
            }
            this.metrics.setPodId(result.podId);
        } catch (error){
            console.error(error)
        }

    }

}