// required to take input from user
const prompt = require('electron-prompt');
// required to establish an SSH session
const SSH = require('simple-ssh');
// parser to parse the data(separated by tabs and spaces)
const parser = require('node-csv-parse');
//HARDCODE username and password b/c none listed
const BOT_USER = '';
const BOT_PASSWORD = '';
const storedIPAddress = [];

function ValidateIPaddress(ipaddress) {  
	if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
	  return (true)  
	}  
	return (false)  
  }  

function ssh(host, user ,password){

	console.log('inside the system')
	var ssh_options = new SSH({
	    host: host,
	    user: user,
	    pass: password
	});
	// // execute the df -h command to find out disk utilization
	// ssh.exec('df -h', {
	//     out: function(stdout) {
	//         parse(stdout);
	//     }
	// }).start();
}

function getInput() {
	console.log('getInput called');
	prompt({
		title: 'Add Bot IP',
		label: 'IP Address:',
		value: '172.16.152.121',
		inputAttrs: {
			type: 'string'
		},
		type: 'input'
	})
	.then((result) => {
		if(result === null) {
			console.log('user cancelled');
		} else {
			let isHostValidated;
			try{
				isHostValidated = ValidateIPaddress(result);
			}
			catch(error){
				console.log(error);
			}
			console.log('result', result);
			ssh(result, BOT_USER ,BOT_PASSWORD);
			//store entered IP address 
			storedIPAddress.concat(result);
		}
	})
	.catch(console.error);
	
	console.log('rl function accessed');
	    
}

function addBotViaSSHHandler() {
    getInput();
}

document.addEventListener("DOMContentLoaded", function(event) { 
	addBotApplicationBtn.addEventListener('click',addBotViaSSHHandler);

});
