require("dotenv").config();
const commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class DogCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: "dog",
      group: "fun",
      memberName: "dog",
      description: "Woof."
    });
  }

  async run(message, args) {
    const querystring = require("querystring");
    const query = querystring.stringify();

    const { text } = await fetch(`https://icanhazdadjoke.com/`).then(response =>
      response.json().then(res => {
        console.log(res);
      })
    );
  }
};