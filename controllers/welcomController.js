const WelcomeService = require("../services/welcomeService")
const welcomeMessage = (req,res)=>{
    const welcomeInstance = new WelcomeService();
    let greetings = welcomeInstance.welcomeGreetings();
    res.send(greetings);
}
module.exports={  welcomeMessage }