//This code defines and exports the engineer class and is inherited from the Employee class

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }


getRole() {
    return "Engineer";
}

getGithub() {
    return this.github;
}

}

module.exports = Engineer;